export type Options = Partial<{
    toolbar: string;
    toolbarExclude: string;
    fonts: string;
    colors: string;
    locale: string;
    charset: string;
    emoticonsCompat: boolean;
    emoticonsEnabled: boolean;
    emoticonsRoot: string;
    emoticons: {
        dropdown: {
            ':)': string;
            ':angel:': string;
            ':angry:': string;
            '8-)': string;
            ":'(": string;
            ':ermm:': string;
            ':D': string;
            '<3': string;
            ':(': string;
            ':O': string;
            ':P': string;
            ';)': string;
        };
        more: {
            ':alien:': string;
            ':blink:': string;
            ':blush:': string;
            ':cheerful:': string;
            ':devil:': string;
            ':dizzy:': string;
            ':getlost:': string;
            ':happy:': string;
            ':kissing:': string;
            ':ninja:': string;
            ':pinch:': string;
            ':pouty:': string;
            ':sick:': string;
            ':sideways:': string;
            ':silly:': string;
            ':sleeping:': string;
            ':unsure:': string;
            ':woot:': string;
            ':wassat:': string;
        };
        hidden: {
            ':whistling:': string;
            ':love:': string;
        };
    };
    width: number | null;
    height: number | null;
    resizeEnabled: boolean;
    resizeMinWidth: number | null;
    resizeMinHeight: number | null;
    resizeMaxHeight: number | null;
    resizeMaxWidth: number | null;
    resizeHeight: boolean;
    resizeWidth: boolean;
    dateFormat: string;
    toolbarContainer: HTMLElement;
    enablePasteFiltering: boolean;
    disablePasting: boolean;
    readOnly: boolean;
    rtl: boolean;
    autofocus: boolean;
    autofocusEnd: boolean;
    autoExpand: boolean;
    autoUpdate: boolean;
    spellcheck: boolean;
    runWithoutWysiwygSupport: boolean;
    startInSourceMode: boolean;
    plugins: string;
    zIndex: number | null;
    bbcodeTrim: boolean;
    disableBlockRemove: boolean;
    allowedIframeUrls: (RegExp | string)[];
    parserOptions: unknown;
    dropDownCss: Record<string, number | string>;
}> & {
    format: 'bbcode' | 'xhtml';
    style: string;
};
