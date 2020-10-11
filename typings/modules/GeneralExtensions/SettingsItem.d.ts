interface item {
    status: string;
    text: string;
    
}

interface Option {
    value: string;
    label: string;
}

export interface SettingsItem {
    statusOptions: Option[];
}

export interface SettingsItemProps {
    value: item;
}