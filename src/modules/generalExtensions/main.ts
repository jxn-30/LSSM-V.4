import { ModuleMainFunction } from 'typings/Module';

export default (async (LSSM, MODULE_ID, $m) => {
    const getSetting = <returnType>(settingId: string): Promise<returnType> => {
        return LSSM.$store.dispatch('settings/getSetting', {
            moduleId: MODULE_ID,
            settingId,
        });
    };

    (
        await import(
            /* webpackChunkName: "modules/generalExtensions/inputMaxLen" */ './assets/inputMaxLen'
        )
    ).default(LSSM);

    if (await getSetting<boolean>('browserTitle')) {
        (
            await import(
                /* webpackChunkName: "modules/generalExtensions/browserTitle" */ './assets/browserTitle'
            )
        ).default(LSSM);
    }

    if (await getSetting<boolean>('emojiPicker')) {
        await (
            await import(
                /* webpackChunkName: "modules/generalExtensions/emojiPicker" */ './assets/emojiPicker'
            )
        ).default(LSSM);
    }

    if (
        !window.location.pathname.match(/^\/note\/?$/) &&
        (await getSetting<boolean>('clickableLinks'))
    ) {
        (
            await import(
                /* webpackChunkName: "modules/generalExtensions/clickableLinks" */ './assets/clickableLinks'
            )
        ).default(LSSM, await getSetting('showImg'));
    }
    const linkPreviewSetting = await getSetting<string[]>('linkPreviews');
    if (linkPreviewSetting.length) {
        await (
            await import(
                /* webpackChunkName: "modules/generalExtensions/linkPreviews" */ './assets/linkPreviews'
            )
        ).default(LSSM, linkPreviewSetting, MODULE_ID);
    }
    const mapUndo = await getSetting<boolean>('mapUndo');
    const ownMapMarkers = await getSetting<boolean>('ownMapMarkers');
    if (
        window.location.pathname === '/' &&
        !LSSM.$store.state.mapkit &&
        (mapUndo || ownMapMarkers)
    ) {
        await (
            await import(
                /* webpackChunkName: "modules/generalExtensions/mapMarkers" */ './assets/mapMarkers'
            )
        ).default(LSSM, mapUndo, ownMapMarkers, getSetting, MODULE_ID);
    }
    if (
        window.location.pathname === '/' &&
        (await getSetting<boolean>('extensionCloseCall'))
    ) {
        (
            await import(
                /* webpackChunkName: "modules/generalExtensions/extensionCloseCall" */ './assets/extensionCloseCall'
            )
        ).default();
    }
    const saveLastBuildingType = await getSetting<boolean>(
        'saveLastBuildingType'
    );
    const saveLastDispatchCenter = await getSetting<boolean>(
        'saveLastDispatchCenter'
    );
    if (window.location.pathname === '/') {
        await (
            await import(
                /* webpackChunkName: "modules/generalExtensions/newBuilding" */ './assets/newBuilding'
            )
        ).default(
            LSSM,
            saveLastBuildingType,
            saveLastDispatchCenter,
            getSetting,
            MODULE_ID
        );
    }

    const isProfile =
        !!window.location.pathname.match(/^\/profile\/\d+\/?$/) && !!window.map;
    const addToPanelHeading = !!window.location.pathname.match(
        /^\/(verband\/(bereitstellungsraume|gebauede|location)|buildings\/\d+\/move)\/?$/
    );
    const isDispatchCenter =
        !!window.location.pathname.match(/^\/buildings\/\d+\/?$/) &&
        !!document.getElementById('tab_projected_missions');

    const mapSearchOnMap = await getSetting<boolean>('mapSearchOnMap');

    if (isProfile || addToPanelHeading || isDispatchCenter || mapSearchOnMap) {
        LSSM.$store.commit('useFontAwesome');
        (
            await import(
                /* webpackChunkName: "modules/generalExtensions/mapSearches" */ './assets/mapSearches'
            )
        ).default(
            LSSM.$t('mapSearch').toString(),
            addToPanelHeading,
            mapSearchOnMap,
            await getSetting<
                'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
            >('mapSearchOnMapPosition'),
            LSSM
        );
    }

    if (isDispatchCenter) {
        await (
            await import(
                /* webpackChunkName: "modules/generalExtensions/protocolDeletionConfirmation" */ './assets/protocolDeletionConfirmation'
            )
        ).default(
            LSSM,
            t => $m(`protocolDeletionConfirmation.${t}`),
            !!(await getSetting('deleteSingleProtocolEntry')),
            MODULE_ID
        );
    }
}) as ModuleMainFunction;
