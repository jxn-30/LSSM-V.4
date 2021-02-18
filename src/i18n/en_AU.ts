// import { Building } from 'typings/Building';

// Commented as dir ./en_US does not exist currently
// const furtherFiles = require.context('./en_US/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Save',
        reset: 'Reset',
        noMapkit:
            'This module does not work with the map type "Mapkit" due to limitations of Mapkit!',
        dev:
            'This module is currently still under development. Activating it can lead to incomplete and faulty functions!',
        closeWarning: {
            title: 'Unsaved changes',
            text:
                'You made changes in the AppStore that have not yet been saved. Reset them or save them to close the AppStore.',
            close: 'Close message',
        },
    },
    settings: {
        name: 'Settings',
        save: 'Save',
        discard: 'Discard changes',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        resetWarning: {
            title: 'Reset the settings',
            text:
                'Do you really want to reset settings to their default values? This cannot be undone!',
            close: 'Cancel',
            total: 'All settings',
            module: 'Only from this module',
        },
        resetWarningSetting: {
            title: 'Reset settings',
            text:
                'Do you really want to reset this one setting <b>{setting}</b> of the module <b>{module}</b> to its default value?',
            close: 'Cancel',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Unsaved changes',
            text:
                'You have made changes in the settings that are not yet saved. Reset them, discard them or save them to close the settings.',
            close: 'Close message',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

const t = {} as { [key: string]: unknown };

// Commented as dir ./en_US does not exist currently
// furtherFiles
//     .keys()
//     .forEach(
//         key => (t[key.split('/')[1].replace(/\..*$/, '')] = furtherFiles(key))
//     );

export default {
    modules,
    ...t,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'If this error occurs frequently, please report it to the LSSM team!',
    },
    warnings: {
        version: {
            title: 'Wrong LSS Manager version',
            text:
                'Dear user, unfortunately we had to discover that you do not have the latest version of LSS Manager. The latest version is {version}, but you have {curver} first. Please reload the game without cache (with Ctrl + F5, on Apple devices command + R), this should fix the bug. If the error persists, please report it to the team! If you use a wrong version we cannot guarantee the full functionality of the LSS-Manager.',
            close: 'Close message and reload game (recommended)',
            abort: 'Close message without reloading game',
        },
    },
    globalSettings: {
        name: 'General Settings',
        labelInMenu: {
            title: 'Label instead of icon in menu',
            description:
                'Displays a simple label in the navigation bar instead of the LSSM logo',
        },
        allowTelemetry: {
            description:
                'Controls whether LSS-Manager is allowed to send Data which helps us in developing this extension.',
            title: 'Allow Telemetry',
        },
        iconBg: {
            description: 'Change the background of LSSM-Icon!',
            title: 'LSSM-Icon Background',
        },
        iconBgAsNavBg: {
            description:
                'Color the whole navbar in the color of LSSM-Icon Background!',
            title: 'colorize navbar',
        },
        osmDarkTooltip: {
            description:
                'This settings darkens tooltips on map if you have enabled the dark mode',
            title: 'Dark tooltips on map',
        },
    },
    vehicles: {
        0: {
            caption: 'Pumper',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
        },
        1: {
            caption: 'Light Tanker',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        2: {
            caption: 'Turntable Ladder',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Required once you have built 3 firehouses',
        },
        3: {
            caption: 'Support Vehicle',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Required once you have built 6 firehouses',
        },
        4: {
            caption: 'Major Rescue Vehicle',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 4,
            special: 'Required once you have built 4 firehouses',
        },
        5: {
            caption: 'Ambulance',
            color: '#9c691c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        6: {
            caption: 'Bulk Water Tankers',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            special: 'Required once you have built 7 firehouses',
        },
        7: {
            caption: 'HAZMAT Truck',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 3,
            schooling: 'Fire Station - HAZMAT Course',
            shownSchooling: 'HazMat Unit',
            special: 'Required once you have built 11 firehouses',
        },
        8: {
            caption: 'Police car',
            color: '#0b6911',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        9: {
            caption: 'Air Ambulance',
            color: '#ba9d0b',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 4,
            schooling: 'Rescue - Intensive Care Education',
            shownSchooling: 'Intensive Care Paramedic',
        },
        10: {
            caption: 'BASU',
            color: '#ca1616',
            credits: 11_680,
            coins: 25,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Required from 5 fire stations',
        },
        11: {
            caption: 'MCV',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Fire Station - Mobile command',
            shownSchooling: 'Mobile command',
            special: 'Required once you have built 13 firehouses',
        },
        12: {
            caption: 'Rescue Pumper',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>Rescue Pump acts as a RSU and a Fire Truck.',
        },
        13: {
            caption: 'Arieal Pumper',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            special:
                'To purchase with credits it requires the rank: Captain, <br>Lower ranked members can purchase the vehicle for 25 Coins. <br>CARP acts as a Platform Truck and a Fire Truck.',
        },
        14: {
            caption: 'Police helicopter',
            color: '#0e661d',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Police - Police Air Wing',
            shownSchooling: 'Police Air Wing',
        },
        15: {
            caption: 'TOG Armoured Bearcat',
            color: '#257513',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: 'Police - TOG',
            shownSchooling: 'TOG',
            special: 'Required once you have built 8 policestations',
        },
        16: {
            caption: 'K-9 Unit',
            color: '#15791a',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Police - K-9',
            shownSchooling: 'K-9',
            special: 'Required once you have built 6 policestations',
        },
        17: {
            caption: 'Police Motorcycle',
            color: '#346622',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Police - Police Motorcycle',
            shownSchooling: 'Police Motorcycle',
        },
        18: {
            caption: 'TOG SUV',
            color: '#2c642e',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            schooling: 'Police - TOG',
            shownSchooling: 'TOG',
            special: 'Required once you have built 8 policestations',
        },
        19: {
            caption: 'Tanker',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 5,
        },
        20: {
            caption: 'SES Vehicle',
            color: '#22997d',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Fire Station - SES Water Rescue',
            shownSchooling: 'SES Water Rescue',
        },
        21: {
            caption: 'Rescue Boat',
            color: '#229b7a',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'SES Vehicle is the towing vehicle',
        },
        22: {
            caption: 'Mounted Police',
            color: '#105d36',
            coins: 10,
            credits: 15_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            schooling: 'Police - Mounted Police Training',
            shownSchooling: 'Mounted Police Training',
            special: 'Towing Vehicle is Police Car',
        },
        23: {
            caption: 'Paramedic Supervisor',
            color: '#ba9d0b',
            coins: 25,
            credits: 20_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            special: 'Required once you have built 6 Rescue stations',
        },
        24: {
            caption: 'ICP',
            color: '#ba9d0b',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: 'Rescue - Intensive Care Education',
            shownSchooling: 'Intensive Care Paramedic',
        },
        25: {
            caption: 'ICS',
            color: '#ba9d0b',
            coins: 15,
            credits: 12_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: 'Rescue - Intensive Care Education',
            shownSchooling: 'Intensive Care Paramedic',
        },
        26: {
            caption: 'Ambulance Rescue',
            color: '#ba9d0b',
            coins: 15,
            credits: 10_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            special: 'Can work as MRU',
        },
        27: {
            caption: 'Mass Casualty Unit',
            color: '#ba9d0b',
            coins: 25,
            credits: 25_000,
            minPersonnel: 4,
            maxPersonnel: 10,
            special:
                'You can buy 1 Mass Casualty Vehicle for every 20 ambulance stations (respectively 15 with premium account).',
        },
    },
    buildings: {
        0: {
            caption: 'Fire station',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulance extension',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '4.400 together with small fire stations',
            maxLevel: 16,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Pumper', 'Light Tanker', 'Tanker'],
            maxBuildingsFunction: (): number => 4_400,
        },
        1: {
            caption: 'Fire academy',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Additional classroom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Ambulance station',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 16,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
        },
        1: {
            caption: 'Paramedic Training Centre',
            color: '#ffa501',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Additional classroom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) Paramedic Training Centre with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Hospital',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'General Internal',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'General Surgeon',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Gynecology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Urology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Traumatology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurosurgery',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cardiology',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Cardiac Surgery',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special:
                'Finance ministers and admins can (expand) association hospitals with the help of credits from the association treasury.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Air Ambulance Station',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'see specials',
            maxLevel: 0,
            special:
                'Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Police Station',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(9).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '1.700 together with small police stations',
            maxLevel: 16,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Police Car'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Dispatch Center',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'All 25 buildings one control center',
            maxLevel: 0,
            special: 'The control center is the administrative center.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Police Academy',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Additional classroom',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) association police schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association police schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Police Air Wing',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 Credits / 50 Coins'],
            maxBuildings: 'see specials',
            maxLevel: 1,
            special:
                'Up to 2 landing sites can be built per station (expansion stages). Up to the 125th building (of all types) a total of max. 4 landing sites can be built. After that the number increases by 1 every 25 buildings (starting at the 125th).',
            startPersonnel: 3,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Staging area',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 4,
            maxLevel: 0,
            special:
                'You can station as many of your own vehicles as you like at a staging area, members of the association can use the room. A staging area remains for 24 hours, but you can reset it to 24 hours at any time.With Premium Account you can have 8 stating areas at the same time',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 4,
        },
        15: {
            caption: 'SES Unit',
            color: '#7fffd4',
            coins: 50,
            credits: 500_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: 'No Limit',
            maxLevel: 5,
            special: 'You will get 10 people and an SES vehicle for free.',
            startPersonnel: 10,
            startVehicles: ['SES Vehicle'],
        },
        16: {
            caption: 'Police Lockup',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(9).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Fire Station (Small) ',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '4.400 together with fire stations',
            maxLevel: 5,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Pumper', 'Light Tanker', 'Tanker'],
            maxBuildingsFunction: (): number => 4_400,
        },
        19: {
            caption: 'Police Station (Small station)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(1).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '1.700 mit Polizeiwachen zusammen',
            maxLevel: 4,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Police Car'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Ambulance Station (Small station)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: 'No limit',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
        },
    },
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'SES': {
            buildings: [15],
            color: '#0000ff',
        },
        'Other': {
            buildings: [7, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 19],
                'WaterTanker': [6],
                'Special vehicles': [2, 3, 4, 7, 10, 11, 12, 13],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'Air Ambulance': [9],
                'Other Rescue Vehicles': [23, 24, 25, 26, 27],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'TOG': [15, 18],
                'Police Motorcycle': [17],
                'Police helicopter': [14],
                'K-9 Unit': [16],
                'Mounted': [22],
            },
            color: '#00ac00',
        },
        'SES': {
            vehicles: {
                SES: [20, 21],
            },
            color: '#02a18c',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 15, 18, 19, 20],
    cellBuildings: [6, 19],
    cellExtensions: [
        '6_0',
        '6_1',
        '6_2',
        '6_3',
        '6_4',
        '6_5',
        '6_6',
        '6_7',
        '6_8',
        '6_9',
        '19_1',
        '19_2',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Fire Station': [
            {
                caption: 'HAZMAT Course',
                duration: '3 Days',
            },
            {
                caption: 'Mobile command',
                duration: '5 Days',
            },
            {
                caption: 'ARFF-Training',
                duration: '3 Days',
            },
            {
                caption: 'SES Water Rescue',
                duration: '4 Days',
            },
            {
                caption: 'Ocean Navigation',
                duration: '5 Days',
            },
        ],
        'Police': [
            {
                caption: 'Police Air Wing',
                duration: '7 Days',
            },
            {
                caption: 'TOG',
                duration: '5 Days',
            },
            {
                caption: 'K-9',
                duration: '5 Days',
            },
            {
                caption: 'Police Motorcycle',
                duration: '3 Days',
            },
            {
                caption: 'Mounted Police Training',
                duration: '3 Days',
            },
        ],
        'Rescue': [
            {
                caption: 'Intensive Care Education',
                duration: '5 Days',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
    mapSearch: 'Location search',
    alliance: 'Alliance',
    premiumNotice:
        'This feature extends a premium feature of the game and is therefore only available for players with a Missionchief game premium account!',
    credits: 'Credits',
    close: 'Close',
    fullscreen: {
        expand: 'Activate full screen mode',
        compress: 'Disable full screen mode',
    },
    hideTitle: 'Show heading | Hide heading',
    vehicle: 'Cars | Car | Cars',
    building: 'Buildings',
    station: 'Stations | Station | Stations',
    distance: 'Distance | Distances',
    vehicleType: 'Vehicle type',
    fmsReal2Show: {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
        6: 6,
        7: 7,
        9: 9,
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'clinic-medical',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'helicopter',
        'building',
        '',
        'ship',
        'ship',
        'fire',
        'stethoscope',
        'shield-alt',
        'clinic-medical',
        'plane',
        'shield-alt',
    ],
    pois: [
        'Park',
        'Lake',
        'Hospital',
        'Forest',
        'Bus stop',
        'Tram stop',
        'Train station (regional traffic)',
        'Train station (regional traffic and long-distance travel)',
        'Goods station',
        'Supermarket (small)',
        'Supermarket (big)',
        'Gas station',
        'School',
        'Museum',
        'Mall',
        'Car workshop',
        'Highway exit',
        'Christmas market',
        'Storehouse',
        'Discotheque',
        'Stadium',
        'Farm',
        'Office Building',
        'Swimming bath',
        'Railroad Crossing',
        'Theater',
        'Fairground',
        'River',
        'Small Airport (Runway)',
        'Large Airport (Runway)',
        'Airport Terminal',
        'Bank',
        'Warehouse',
        'Bridge',
        'Fast Food Restaurant',
        'Cargo port',
        'Recycling Centre',
        'High Rise',
        'Cruise ship dock',
        'Marina',
        'Rail Crossing',
        'Tunnel',
        'Cold Storage Warehouse',
        'Power Station',
        'Factory',
        'Scrap yard',
        'Subway station',
        'Small chemical storage tank',
        'Large chemical storage tank',
        'Hotel',
        'Bar',
        'Landfill site',
        'Parking Garage',
        'Intersection with lights',
        'Carpentry Workshop',
        'Restaurant',
        'City Centre',
        'Hill',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [],
};
