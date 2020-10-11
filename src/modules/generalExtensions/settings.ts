import  settingsItem  from './components/changeFMSText/settings-item.vue';
import  settingTitles  from './components/changeFMSText/settings-titles.vue';
export default (): unknown => ({
    clickableLinks: {
        type: 'toggle',
        default: true,
    },
    showImg: {
        type: 'toggle',
        default: true,
        dependsOn: '.clickableLinks',
    },
    linkPreviews: {
        type: 'multiSelect',
        default: [],
        values: ['buildings', 'missions', 'vehicles', 'profile'],
    },
    mapUndo: {
        type: 'toggle',
        default: false,
        noMapkit: true,
    },
    browserTitle: {
        type: 'toggle',
        default: true,
    },
    emojiPicker: {
        type: 'toggle',
        default: false,
    },
    changeFMSText: {
        type: 'appendable-list',
        default: [],
        listItemComponent: settingsItem,
        titleComponent: settingTitles,
        defaultItem: {
            status: '',
            text: '',
        },
    }
});
