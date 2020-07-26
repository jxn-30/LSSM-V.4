import settingsItem from './components/settings-item.vue';
import settingTitles from './components/settings-titles.vue';
import { NotificationSetting } from 'typings/modules/NotificationAlert';
import { AllianceChatMessage } from 'typings/Ingame';

(async (LSSM: Vue) => {
    await LSSM.$store.dispatch('settings/register', {
        moduleId: MODULE_ID,
        settings: {
            alerts: {
                type: 'appendable-list',
                default: [],
                listItemComponent: settingsItem,
                titleComponent: settingTitles,
                defaultItem: {
                    events: [],
                    alertStyle: 'success',
                    duration: 8000,
                    ingame: true,
                    desktop: true,
                    position: 'bottom right',
                },
            },
        },
    });

    const alerts = (await LSSM.$store.dispatch('settings/getSetting', {
        moduleId: MODULE_ID,
        settingId: 'alerts',
    })) as NotificationSetting[];

    const events = {} as {
        [event: string]: {
            alertStyle: NotificationSetting['alertStyle'];
            duration: NotificationSetting['duration'];
            ingame: NotificationSetting['ingame'];
            desktop: NotificationSetting['desktop'];
            position: NotificationSetting['position'];
        }[];
    };
    alerts.forEach(alert =>
        alert.events.forEach(event => {
            if (!events.hasOwnProperty(event)) events[event] = [];
            events[event].push({
                alertStyle: alert.alertStyle,
                duration: alert.duration,
                ingame: alert.ingame,
                desktop: alert.desktop,
                position: alert.position,
            });
        })
    );

    // Chat messages
    const chatEvents = [
        'allianceChat',
        'allianceChatMention',
        'allianceChatWhisper',
    ].filter(ce => events.hasOwnProperty(ce));
    if (chatEvents.length) {
        await LSSM.$store.dispatch('hook', {
            event: 'allianceChat',
            callback({
                message,
                whisper,
                user_id,
                username,
                mission_id,
            }: AllianceChatMessage) {
                if (user_id === window.user_id) return;
                const ucmsg = message.toUpperCase();
                const ucun = window.username.toUpperCase();
                const isWhispered = whisper === window.user_id;
                const isMentioned = !!(
                    !whisper &&
                    (ucmsg.match(
                        new RegExp(
                            `@(${LSSM.$utils.escapeRegex(ucun)}|all[ :])`
                        )
                    ) ||
                        (ucmsg.match(/@admin/) &&
                            (window.alliance_admin || window.alliance_coadmin)))
                );
                if (isWhispered)
                    events['allianceChatWhisper'].forEach(alert =>
                        LSSM.$store.dispatch('notifications/sendNotification', {
                            group: alert.position,
                            type: alert.alertStyle,
                            title: `🔇 <a href="/profile/${user_id}" class="lightbox-open">${username}</a>`,
                            text: message,
                            icon: '', // TODO: Chat Icon
                            duration: alert.duration,
                            ingame: alert.ingame,
                            desktop: alert.desktop,
                            clickHandler() {
                                if (mission_id)
                                    window.lightboxOpen(
                                        `/missions/${mission_id}`
                                    );
                            },
                        })
                    );
                if (isMentioned)
                    events['allianceChatMention'].forEach(alert =>
                        LSSM.$store.dispatch('notifications/sendNotification', {
                            group: alert.position,
                            type: alert.alertStyle,
                            title: `ℹ️ <a href="/profile/${user_id}" class="lightbox-open">${username}</a>`,
                            text: message,
                            icon: '', // TODO: Chat Icon
                            duration: alert.duration,
                            ingame: alert.ingame,
                            desktop: alert.desktop,
                            clickHandler() {
                                if (mission_id)
                                    window.lightboxOpen(
                                        `/missions/${mission_id}`
                                    );
                            },
                        })
                    );
                events['allianceChat'].forEach(alert =>
                    LSSM.$store.dispatch('notifications/sendNotification', {
                        group: alert.position,
                        type: alert.alertStyle,
                        title: `<a href="/profile/${user_id}" class="lightbox-open">${username}</a>`,
                        text: message,
                        icon: '', // TODO: Chat Icon
                        duration: alert.duration,
                        ingame: alert.ingame,
                        desktop: alert.desktop,
                        clickHandler() {
                            if (mission_id)
                                window.lightboxOpen(`/missions/${mission_id}`);
                        },
                    })
                );
            },
        });
    }
})(window[PREFIX] as Vue);
