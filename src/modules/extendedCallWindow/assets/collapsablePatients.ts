import { $m } from 'typings/Module';

export default (
    LSSM: Vue,
    MODULE_ID: string,
    collapsablePatientsMinPatients: number,
    $m: $m
) => {
    const patients = document.querySelectorAll<HTMLDivElement>(
        '.mission_patient'
    );
    if (patients.length < collapsablePatientsMinPatients) return;
    const requirements: {
        red: Record<string, number>;
        detailed: Record<string, Record<string, number>>;
    } = {
        red: {},
        detailed: {},
    };

    const labelColors: Record<string, Record<string, string>> = {};
    const patientLabelCombis: Record<string, number> = {};

    patients.forEach(patient => {
        (
            patient
                .querySelector<HTMLDivElement>('.alert.alert-danger')
                ?.textContent?.replace(/^[^:]*:/, '')
                .trim() || ''
        )
            .split(',')
            .map(req => req.trim())
            .filter(req => req)
            .forEach(req => {
                if (!requirements.red.hasOwnProperty(req))
                    requirements.red[req] = 0;

                requirements.red[req]++;
            });
        const patientLabelCombi: Record<string, string> = {};
        patient
            .querySelectorAll<HTMLSpanElement>('small .label-left')
            .forEach(label => {
                const req = label.textContent?.trim();
                const infoLabel = label.nextElementSibling;
                const infoText = infoLabel?.textContent?.trim();
                if (!req || !infoLabel || !infoText) return;
                if (!labelColors.hasOwnProperty(req)) labelColors[req] = {};
                if (!labelColors[req].hasOwnProperty(infoText)) {
                    labelColors[req][infoText] =
                        infoLabel.classList
                            .toString()
                            .match(
                                /label-(default|success|warning|danger|info|primary)/
                            )?.[0] ?? 'label-default';
                }
                if (!requirements.detailed.hasOwnProperty(req))
                    requirements.detailed[req] = {};
                if (!requirements.detailed[req].hasOwnProperty(infoText))
                    requirements.detailed[req][infoText] = 0;
                requirements.detailed[req][infoText]++;
                patientLabelCombi[req] = infoText;
            });
        const patientLabelCombiStringified = JSON.stringify(patientLabelCombi);
        if (!patientLabelCombis.hasOwnProperty(patientLabelCombiStringified))
            patientLabelCombis[patientLabelCombiStringified] = 0;
        patientLabelCombis[patientLabelCombiStringified]++;
    });

    const hasRedTexts = Object.keys(requirements.red).length;
    const hasLabels = Object.keys(requirements.detailed).length;

    if (hasRedTexts || hasLabels) {
        const summaryBox = document.createElement('div');
        document
            .querySelector<HTMLDivElement>('.mission_patient')
            ?.before(summaryBox);
        import(
            /* webpackChunkName: "modules/extendedCallWindow/components/collapsablePatients" */
            '../components/collapsablePatients/collapsablePatients.vue'
        ).then(({ default: collapsablePatients }) =>
            new LSSM.$vue({
                store: LSSM.$store,
                i18n: LSSM.$i18n,
                render: h =>
                    h(collapsablePatients, {
                        props: {
                            featureId: `${MODULE_ID}_collapsable-patients`,
                            requirements,
                            labelColors,
                            patientLabelCombis,
                            $m,
                        },
                    }),
            }).$mount(summaryBox)
        );
    }
};