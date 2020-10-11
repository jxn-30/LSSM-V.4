<template>
    <div class="change-fms-setting">
        <v-select
            :placeholder="$t('modules.generalExtensions.settings.changeFMSText.status')"
            v-model="updateMissions"
            :options="status"
            :clearable="false"
        ></v-select>
         <label>
            <input type="text" v-model="updateName" :placeholder="$t('modules.generalExtensions.settings.changeFMSText.text')" />
        </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { DefaultMethods } from 'vue/types/options';
import {
    SettingsItem,
    SettingsItemProps,
} from 'typings/modules/GeneralExtensions/SettingsItem';
import { Settings } from 'typings/Setting';

export default Vue.extend<
    SettingsItem,
    DefaultMethods<Vue>,
    SettingsItemProps
>({
    name: 'change-fms-settings-item',
    components: {
        VSelect: () =>
            import(
                /* webpackChunkName: "components/vue-select" */ 'vue-select'
            ),
    },
    data() {
        const statusArray = (this.$t('modules.generalExtensions.status') as unknown) as {[status:string]:string}
        return {statusOptions:
            Object.keys(statusArray).map(status => ([
                value: status,
                label: statusArray[status]
            ]))}
    },
    props: {
        value: {
            type: Object,
            required: true,
        },
    },
    /* computed: {
        updateName: {
            get(): SettingsItemComputed['updateName'] {
                return this.value.keyword;
            },
            set(keyword) {
                this.$emit('input', { ...this.value, keyword });
            },
        },
        updateColor: {
            get(): SettingsItemComputed['updateColor'] {
                return this.value.color;
            },
            set(color) {
                this.$emit('input', { ...this.value, color });
            },
        },
        updatePrefix: {
            get(): SettingsItemComputed['updatePrefix'] {
                return this.value.prefix;
            },
            set(prefix) {
                this.$emit('input', { ...this.value, prefix });
            },
        },
        updateMissions: {
            get(): SettingsItemComputed['updateMissions'] {
                return (this.value.missions
                    .map(v =>
                        this.missions.find(
                            o => o.value.toString() === v.toString()
                        )
                    )
                    .filter(
                        v => !!v
                    ) as SettingsItemComputed['updateMissions']).sort((a, b) =>
                    a.value > b.value ? 1 : a.value < b.value ? -1 : 0
                );
            },
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            set(missions: ({ label: string; value: number } | number)[]) {
                this.$emit('input', {
                    ...this.value,
                    missions: missions.map(v =>
                        typeof v === 'number' ? v : v.value
                    ),
                });
            },
        },
        selectableMissions() {
            return this.missions.filter(
                t => !this.updateMissions.find(v => v.value === t.value)
            );
        },
    }, */
});
</script>

<style scoped lang="sass">
.mission-keywords-setting
    display: flex
    justify-content: space-between

    > *
        margin-bottom: 0
        margin-left: 0.5rem
        margin-right: 0.5rem

        &:not(label):not(span)
            width: 100%

    .preview span
        background: inherit
        // noinspection CssInvalidPropertyValue
        background-clip: text
        color: transparent
        filter: invert(1) grayscale(1) contrast(9)
</style>
