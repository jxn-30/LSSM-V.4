import { AllianceChatMessage } from 'typings/Ingame';

export default (LSSM: Vue, showImg: boolean): void => {
    const { urlRegex } = LSSM.$utils;

    const clickableLinks = (node: Node) => {
        LSSM.$utils
            .getTextNodes(node, n => !!n?.textContent?.match(urlRegex))
            .forEach(n => {
                if (!n) return;
                const links = (n.textContent || '').match(urlRegex) || [];
                const texts = (n.textContent || '').split(urlRegex);
                texts.forEach(text => {
                    if (text) {
                        n.parentNode?.insertBefore(
                            document.createTextNode(text),
                            n
                        );
                    }
                    const link = links.shift();
                    if (!link) return;
                    const linkNode = document.createElement('a');
                    linkNode.href = link.toString();
                    linkNode.setAttribute('target', '_blank');
                    if (showImg) {
                        const imgNode = document.createElement('img');
                        imgNode.src = link.toString();
                        imgNode.alt = link.toString();
                        imgNode.style.maxWidth = '10%';
                        imgNode.addEventListener('error', () => {
                            imgNode.remove();
                            linkNode.textContent = link.toString();
                        });
                        linkNode.appendChild(imgNode);
                    } else {
                        linkNode.textContent = link.toString();
                    }
                    n.parentNode?.insertBefore(linkNode, n);
                });
                n.parentNode?.removeChild(n);
            });
    };

    if (window.location.pathname === '/') {
        clickableLinks(
            document.querySelector('#mission_chat_messages') ?? document
        );
    } else {
        clickableLinks(document);
    }

    LSSM.$store
        .dispatch('premodifyParams', {
            event: 'allianceChat',
            callback(e: AllianceChatMessage) {
                const links = e.message.match(urlRegex) || [];
                const texts = e.message.split(urlRegex);
                e.message = '';
                texts.forEach(text => {
                    if (text) e.message += text;
                    const link = links.shift();
                    if (link) {
                        e.message += `<a href="${link}" target="_blank">${
                            showImg
                                ? `<img src="${link}" alt="${link}" style="max-width: 10%;"/>`
                                : link
                        }</a>`;
                    }
                });
            },
        })
        .then();
};
