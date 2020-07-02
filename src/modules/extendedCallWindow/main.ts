import generationDate from './assets/generationDate';
import enhancedMissingVehicles from './assets/enhancedMissingVehicles';
import patientSummary from './assets/patientSummary';
import arrCounter from './assets/arrCounter';
import arrMatchHighlight from './assets/arrMatchHighlight';

(async (LSSM: Vue) => {
    await LSSM.$store.dispatch('settings/register', {
        moduleId: MODULE_ID,
        settings: {
            generationDate: {
                type: 'toggle',
                default: true,
            },
            enhancedMissingVehicles: {
                type: 'toggle',
                default: false,
            },
            patientSummary: {
                type: 'toggle',
                default: true,
            },
            arrCounter: {
                type: 'toggle',
                default: false,
            },
            arrClickHighlight: {
                type: 'toggle',
                default: false,
                dependsOn: '.arrCounter',
            },
            arrMatchHighlight: {
                type: 'toggle',
                default: false,
            },
        },
    });

    if (
        !window.location.pathname.match(/^\/missions\/\d+$/) ||
        document.querySelector('.missionNotFound')
    )
        return;

    const getSetting = (settingId: string): Promise<boolean> => {
        return LSSM.$store.dispatch('settings/getSetting', {
            moduleId: MODULE_ID,
            settingId,
        });
    };

    if (await getSetting('generationDate')) generationDate(LSSM);
    if (await getSetting('enhancedMissingVehicles'))
        enhancedMissingVehicles(LSSM);
    if (await getSetting('patientSummary')) patientSummary(LSSM);
    if (await getSetting('arrCounter')) await arrCounter(LSSM, getSetting);
    if (await getSetting('arrMatchHighlight')) arrMatchHighlight(LSSM);
})(window[PREFIX] as Vue);
