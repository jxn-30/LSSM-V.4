export default (MODULE_ID: string): unknown => ({
    predefined_style: {
        type: 'select',
        values: ['brown', 'red', 'green', 'white', 'custom'],
        default: 'white',
    },
    custom_style: {
        type: 'text',
        default: 'invert(100%)',
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        disabled: (settings): boolean =>
            settings[MODULE_ID]['predefined_style'].value !== 'custom',
    },
});
