import { RedesignParser } from 'typings/modules/Redesign';
import { VerbandWindow } from 'typings/modules/Redesign/Verband';

export interface VerbandHomeWindow extends VerbandWindow {
    image: string;
    edit_text: boolean;
    edit_name: boolean;
    edit_logo: boolean;
    text: string[];
}

export default <RedesignParser<VerbandHomeWindow>>((source, _, getIdFromEl) => {
    const doc = new DOMParser().parseFromString(source, 'text/html');
    const id = getIdFromEl(
        doc.querySelector<HTMLAnchorElement>(
            'nav ul.navbar-right li:first-child a[href^="/alliances/"]'
        )
    );
    return {
        meta: {
            name:
                doc
                    .querySelector<HTMLAnchorElement>('nav .navbar-brand')
                    ?.innerText?.trim() ?? '',
            id,
            self: !!doc.querySelector('a[href="/alliance_threads"]'),
        },
        image:
            doc.querySelector<HTMLImageElement>('img.profile_avatar')?.src ??
            '',
        edit_text: !!doc.querySelector('a[href="/veband/text/edit"]'),
        edit_name: !!doc.querySelector(`a[href="/alliances/${id}/edit"]`),
        edit_logo: !!doc.querySelector('a[href="/verband/avatar"]'),
        text: Array.from(
            doc.querySelectorAll<HTMLParagraphElement>('h3 ~ p')
        ).map(p => (p.matches('.clearfix ~ p') ? '' : p.innerHTML.trim())),
    };
});
