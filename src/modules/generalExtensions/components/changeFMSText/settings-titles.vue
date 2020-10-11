<template>
    <div class="change-fms-title">
        
        <b>{{
            $t('modules.generalExtensions.settings.changeFMSText.status')
        }}</b>
        <b>{{
            $t('modules.generalExtensions.settings.changeFMSText.text')
        }}</b>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {
    DefaultData,
    DefaultMethods,
    DefaultComputed,
    DefaultProps,
} from 'vue/types/options';

export default Vue.extend<
    DefaultData<Vue>,
    DefaultMethods<Vue>,
    DefaultComputed,
    DefaultProps
>({
    name: 'change-fms-title',
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
        width: 100%
</style>
