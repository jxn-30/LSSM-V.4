const UAParser = require('ua-parser-js');

const storageKey = 'telemetry_note_fired';

window.lssmv4.$store.dispatch('storage/get', storageKey).then(
    key =>
        !key &&
        window.lssmv4.$modal.show('dialog', {
            title: window.lssmv4.$t('modules.telemetry.info.title'),
            text: window.lssmv4.$t('modules.telemetry.info.text', {
                wiki: window.lssmv4.$store.getters.wiki,
            }),
            options: {},
            buttons: [
                {
                    title: window.lssmv4.$t('modules.telemetry.info.close'),
                    handler: () => {
                        window.lssmv4.$store.dispatch('storage/set', {
                            key: storageKey,
                            val: true,
                        });
                        window.lssmv4.$modal.hide('dialog');
                    },
                },
            ],
        })
);

fetch(`/profile/external_secret_key/${window.user_id}`)
    .then(res => res.json())
    .then(async data => {
        const ua = UAParser(window.navigator.userAgent);
        fetch(`${window.lssmv4.$store.state.server}stat.php`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: data.code,
                uid: window.user_id,
                game: window.lssmv4.$i18n.locale,
                name: window.user_name,
                data: {
                    browser: `${ua.browser.name} ${ua.browser.major}`,
                    premium: window.user_premium,
                    buildings: window.lssmv4.$store.state.api.buildings.length,
                    version: window.lssmv4.$store.state.version,
                    modules: await window.lssmv4.$store.dispatch(
                        'storage/get',
                        'active'
                    ),
                },
            }),
        })
            .then(res => res.json())
            .then(console.log);
    });
