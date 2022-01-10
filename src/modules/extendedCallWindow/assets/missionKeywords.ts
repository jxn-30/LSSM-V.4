import { Mission } from 'typings/Mission';

export default async (
    LSSM: Vue,
    settings: {
        keyword: string;
        color: string;
        autotextcolor: boolean;
        textcolor: string;
        prefix: boolean;
        missions: (string | number)[];
    }[]
): Promise<void> => {
    const missionHelpBtn = document.getElementById('mission_help');
    const missionTitle = document.getElementById('missionH1');
    if (!missionHelpBtn || !missionTitle) return;
    let missionType =
        missionHelpBtn
            ?.getAttribute('href')
            ?.match(/(?!^\/einsaetze\/)\d+/)?.[0] || '-1';

    const overlayIndex =
        document
            .getElementById('mission_general_info')
            ?.getAttribute('data-overlay-index') ?? 'null';
    if (overlayIndex && overlayIndex !== 'null')
        missionType += `-${overlayIndex}`;
    const additionalOverlay =
        document
            .getElementById('mission_general_info')
            ?.getAttribute('data-additive-overlays') ?? 'null';
    if (additionalOverlay && additionalOverlay !== 'null')
        missionType += `/${additionalOverlay}`;

    if (missionType === '-1') return;

    const mission = (
        LSSM.$store.getters['api/missionsById'] as Record<string, Mission>
    )[missionType];

    const addLabel = (
        text: string,
        color: string,
        autotextcolor: boolean,
        textcolor: string,
        prefix: boolean
    ) => {
        const label = document.createElement('span');
        label.classList.add('label');
        label.style.backgroundColor = color;
        const textNode = document.createElement('span');
        textNode.textContent = text
            .replace(/{{type}}/g, missionType.toString())
            .replace(
                /{{credits}}/g,
                (mission?.average_credits ?? 0).toLocaleString()
            );
        textNode.style.background = autotextcolor ? 'inherit' : 'transparent';
        textNode.style.backgroundClip = 'text';
        textNode.style.webkitBackgroundClip = 'text';
        textNode.style.color = autotextcolor ? 'transparent' : textcolor;
        textNode.style.filter = autotextcolor
            ? 'invert(1) grayscale(1) contrast(9)'
            : '';
        label.appendChild(textNode);
        if (!prefix) missionTitle.appendChild(label);
        else missionTitle.insertBefore(label, missionTitle.firstChild);
    };

    settings.forEach(s => {
        if (
            !s.missions.includes(-1) &&
            !s.missions.map(m => m.toString()).includes(missionType.toString())
        )
            return;
        addLabel(s.keyword, s.color, s.autotextcolor, s.textcolor, s.prefix);
    });
};
