import overview from './overview.vue';

((LSSM: Vue) => {
    const $m = (key: string, args?: { [key: string]: unknown }) =>
        LSSM.$t(`modules.overview.${key}`, args);

    const openOverview = (): void =>
        LSSM.$modal.show(
            overview,
            {},
            {
                name: 'overview',
                height: '96%',
                width: '96%',
            }
        );

    LSSM.$store
        .dispatch('addMenuItem', $m('name').toString())
        .then(element => (element.onclick = openOverview));
})(window[PREFIX] as Vue);
