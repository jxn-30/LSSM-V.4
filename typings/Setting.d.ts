import { ExtendedVue } from 'vue/types/vue';

interface SettingTemplate {
    type: string;
    dependsOn?: string;
    noMapkit?: boolean;
    disabled?: ((settings: ModuleSettings) => boolean) | (() => boolean);

    // Will be generated in Settings
    isDisabled: boolean;
}

interface Toggle extends SettingTemplate {
    type: 'toggle';
    default: boolean;
    value: boolean;
}

interface Text extends SettingTemplate {
    type: 'text';
    default: string;
    value: string;
}

interface Textarea extends SettingTemplate {
    type: 'textarea';
    default: string;
    value: string;
}

interface Color extends SettingTemplate {
    type: 'color';
    default: string;
    value: string;
}

interface NumberInput extends SettingTemplate {
    type: 'number';
    default: number;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    float?: boolean;
}

interface Select extends SettingTemplate {
    type: 'select';
    default: string;
    value: string;
    values: string[];
    labels?: string[];
    noLabelTranslation?: boolean;
}
interface MultiSelect extends SettingTemplate {
    type: 'multiSelect';
    default: string[];
    value: string[];
    values: string[];
    labels?: string[];
    noLabelTranslation?: boolean;
}

interface HotKey extends SettingTemplate {
    type: 'hotkey';
    default: string;
    value: string;
}

interface Location extends SettingTemplate {
    type: 'location';
    default: [number, number, number];
    value: [number, number, number];
    zoom?: boolean;
}

interface Hidden<Type = boolean> extends SettingTemplate {
    type: 'hidden';
    default: Type;
    value: Type;
}

interface AppendableListItem {
    [key: string]: unknown;
}

interface AppendableListSetting<type extends SettingType = SettingType> {
    setting: Omit<type, 'value' | 'isDisabled'>;
    size: number;
    name: string;
    title: string;
    unique?: boolean;
}

export interface PreviewElement
    extends Omit<AppendableListSetting, 'setting' | 'name'> {
    type: 'preview';
    component: ExtendedVue<Vue, unknown, unknown, unknown, unknown>;
}

export interface AppendableList extends SettingTemplate {
    type: 'appendable-list';
    default: AppendableListItem[];
    value: {
        value: AppendableListItem[];
        enabled: boolean;
    };
    listItem: (AppendableListSetting | PreviewElement)[];
    defaultItem: AppendableListItem;
    disableable: boolean;
    orderable?: boolean;
}

type SettingType =
    | Toggle
    | Text
    | Textarea
    | AppendableList
    | Select
    | MultiSelect
    | Color
    | NumberInput
    | HotKey
    | Location
    | Hidden;

export type Setting<type extends SettingType = SettingType> = type;

export interface Settings {
    [key: string]: Setting;
}

export interface RegisterSettings {
    [key: string]: Omit<Setting, 'value' | 'isDisabled'>;
}

export interface ModuleSettings {
    [moduleId: string]: Settings;
}
