import { Building } from 'typings/Building';

const moduleRootFiles = require.context('../', true, MODULE_ROOT_I18N_FILES);
// Commented as dir ./en_US does not exist currently
// const furtherFiles = require.context('./en_US/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Uložit',
        reset: 'Resetovat',
        noMapkit:
            'Tento modul nefunguje s typem map "Mapkit" z důvodu omezení Mapkitu!',
        dev:
            'Tento modul je v současné době ve vývoji. Aktivací může vést k neúplným funkcím.',
        closeWarning: {
            title: 'Neulozené změny',
            text:
                'Ve sbírce aplikací jste provedli změny, které nejsou uloženy. Resetujte je nebo uložte a ukončete sbírku aplikací.',
            close: 'Zavřít zprávu',
        },
    },
    settings: {
        name: 'Nastavení',
        save: 'Uložit',
        discard: 'Zahodit změny',
        reset: 'Resetovat',
        export: 'Export',
        import: 'Import',
        resetWarning: {
            title: 'Resetovat nastavení',
            text:
                'Opravdu chcete resetovat nastavení do počátečních hodnot? Tento krok nelze vrátit!',
            close: 'Zavřít',
            total: 'Všechna nastavení',
            module: 'Pouze pro tento modul',
        },
        closeWarning: {
            title: 'Neuložené změny',
            text:
                'V nastavení jste provedli změny, které nejsou uloženy. Resetujte je nebo uložte a zavřete nastavení.',
            close: 'Zavřít zprávu',
        },
        changeList: {
            true: 'Aktivovat',
            false: 'Deaktivovat',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };
moduleRootFiles
    .keys()
    .forEach(key => (modules[key.split('/')[2]] = moduleRootFiles(key)));

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
            'Pokud k této chybě dochází často, prosím kontaktujte tým LSSM!',
    },
    warnings: {
        version: {
            title: 'Špatná verze LSS Managera',
            text:
                'Vážený uživateli, bohužel jsme zjistili, že nemáte nejnovější verzi doplňku LSS Manager. Nejnovější verze je {version}, ale vy aktuálně máte {curver}. Prosíme o znovunačtení hry bez mezipaměti (pomocí Ctrl + F5, na zařízeních Apple příkaz + R), tímto může být chyba odstraněna. Pokud chyba přetrvává, prosím nahlašte to týmu LSSM! Pokud používáte špatnou verzi, nemůžeme garantovat plnou funkcionalitu doplňku LSS-Manager.',
            close: 'Uzavřít zprávu a znovunačíst hru(doporučeno)',
            abort: 'Zavřít zprávu bez znovunačtení hry',
        },
    },
    globalSettings: {
        name: 'Základní nastavení',
        labelInMenu: {
            title: 'Popisek namísto ikony v menu',
            description:
                'Zobrazí jednotuchý popisek v navigační liště namísto loga LSSM',
        },
    },
       
    vehicles: [
        {
            caption: 'CAS 20',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 4,
            maxPersonnel: 6,
            wtank: 0,
        },
        {
            caption: 'CAS 30',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
        },
        {
            caption: 'AZ',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            special: 'Požadováno po vybudování 3 požárních stanic',
        },
        {
            caption: 'VEA',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Požadováno po vybudování 6 požárních stanic',
        },
        {
            caption: 'TA',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 2,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Požadováno po vybudování 4 požárních stanic',
        },
        {
            caption: 'Sanitka',
            color: '#9c1c1c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            wtank: 0,
        },
        {
            caption: 'KHA',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            special: 'Požadováno po vybudování 7 požárních stanic',
        },
        {
            caption: 'TACH',
            color: '#990000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 3_000,
            schooling: 'Požární stanice - Nebezpečné látky',
            shownSchooling: 'Nebezpečné látky',
            special: 'Požadováno po vybudování 11 požárních stanic',
        },
        {
            caption: 'Policejní automobil',
            color: '#8b1818',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 0,
        },
        {
            caption: 'Vrtulník LZS',
            color: '#e61919',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            wtank: 0,
        },
        {
            caption: 'AP',
            color: '#e61919',
            coins: 25,
            credits: 14_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
        },
        {
            caption: 'Policejní vrtulník',
            color: '#ca1616',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            schooling: 'Policie - Kurz Letecké služby PČR',
            shownSchooling: 'Členové Letecké služby PČR',
        },
        {
            caption: 'Obrněné vozidlo URNA',
            color: '#ca1616',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Policie - URNA',
            shownSchooling: 'URNA',
            special: 'Požadováno po vybudování 8 Obvodních oddělení Policie',

        },
        {
            caption: 'Vozidlo Kynologů PČR',
            color: '#ca1616',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Policie - Kynologové Policie',
            shownSchooling: 'Kynologové Policie',
            special: 'Požadováno po vybudování 6 Obvodních oddělení Policie',
        },
        {
            caption: 'Policejní motocykl',
            color: '#ca1616',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Policie - Policejní motocykl',
            shownSchooling: 'Strážník na motocyklu',
        },
        {
            caption: 'URNA SUV',
            color: '#ca1616',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 0,
            schooling: 'Policie - URNA',
            shownSchooling: 'URNA',
            special: 'Požadováno po vybudování 8 Obvodních oddělení Policie',
        },
        {
            caption: 'Protiplynový automobil',
            color: '#770000',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Požadováno po vybudování 5 požárních stanic',
        },
        {
            caption: 'MOS',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Požární stanice - MOS (mobilní operační středisko)',
            shownSchooling: 'MOS',
            special: 'Požadováno po vybudování 13 požárních stanic',
        },
        {
            caption: 'Vyzidlo vyšetřovatelů DN',
            color: '#8b1818',
            coins: 10,
            credits: 15_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            wtank: 0,
            schooling: 'Policie - vyšetřovatel DN',
            shownSchooling: 'Vyšetřovatel DN',
        },
        {
            caption: 'Vozidlo pyrotechnika PČR',
            color: '#8b1818',
            coins: 35,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            wtank: 0,
            schooling: 'Policie - Policejní pyrotechnik',
            shownSchooling: 'Policejní pyrotechnik',
        },
    ],
            //here ends

    buildings: [
        {
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
                {
                    caption: 'Airport extension',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
                {
                    caption: 'Forestry Expansion',
                    credits: 50_000,
                    coins: 13,
                    duration: '7 Days',
                },
                {
                    caption: 'Water rescue expansion',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '4.000 together with small fire stations',
            maxLevel: 39,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
            maxBuildingsFunction: (): number => 4_000,
        },
        {
            caption: 'Fire academy',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) fire department schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association fire- brigade schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Ambulance station',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 39,
            special: '',
            startPersonnel: 3,
            startVehicles: ['ALS Ambulance'],
        },
        {
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
        {
            caption: 'Helicopter station',
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
        {
            caption: 'Police station',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                ...new Array(10).fill({
                    caption: 'Prison cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '1.500 together with small police stations',
            maxLevel: 39,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Patrol car'],
            maxBuildingsFunction: (): number => 1_500,
        },
        {
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
        {
            caption: 'Police academy',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Additional classroom',
                credits: 400_000,
                coins: 40,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "Finance ministers and admins can (expand) association police schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association police schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Police Aviation',
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
        {
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
        {
            caption: 'Prison Cells',
            coins: 'x',
            credits: 100_000,
            extensions: new Array(10).fill({
                caption: 'Prison Cell',
                credits: 25_000,
                coins: 5,
                duration: '7 Days',
            }),
            levelcost: [],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
        {
            caption: 'Fire station (Small station) ',
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
            maxBuildings: '4.000 together with fire stations',
            maxLevel: 5,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations − 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Type 1 fire engine', 'Type 2 fire engine'],
            maxBuildingsFunction: (): number => 4_000,
        },
        {
            caption: 'Police station (Small station)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Conversion to normal guard: difference price to normal guard',
            ],
            maxBuildings: '1.500 mit Polizeiwachen zusammen',
            maxLevel: 4,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations − 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Patrol Car'],
            maxBuildingsFunction: (): number => 1_500,
        },
        {
            caption: 'Ambulance station (Small station)',
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
            startVehicles: ['ALS Ambulance'],
        },
        {
            caption: 'Clinic',
            color: '#663300',
            coins: 25,
            credits: 100_000,
            extensions: [
                {
                    caption: 'General Internal',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-5. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 5,
            special: '',
            startPersonnel: 0,
            startVehicles: ['Non. You can buy max. 2 Vehicles'],
        },
        {
            caption: 'Federal Police Station',
            color: '#663300',
            coins: 50,
            credits: 5_000_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-20. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 20,
            special: '',
            startPersonnel: 10,
            startVehicles: ['FBI Unit'],
        },
        {
            caption: 'Rescue Boat Dock',
            color: '#663300',
            coins: 35,
            credits: 500_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 16,
            special: '',
            startPersonnel: 2,
            startVehicles: [''],
        },
        {
            caption: 'Fire Boat Dock',
            color: '#663300',
            coins: 35,
            credits: 500_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 16,
            special: '',
            startPersonnel: 2,
            startVehicles: [''],
        },
        {
            caption: 'Firefighting plane station',
            color: '#663300',
            coins: 65,
            credits: 1_500_000,
            extensions: [],
            levelcost: ['1. 1.500.000'],
            maxBuildings: 'No limit',
            maxLevel: 2,
            special: '',
            startPersonnel: 2,
            startVehicles: ['Water drop helicopter'],
        },
    ],
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 4, 11, 13, 17],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [3, 6, 12, 16],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [5, 7, 8, 15, 18],
            color: '#00ac00',
        },
        'Other': {
            buildings: [2, 9, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire trucks': [0, 1, 13, 18],
                'WaterTanker': [7],
                'Special vehicles': [2, 3, 4, 6, 8, 9, 12],
                'Wildland vehicles': [30, 31, 32, 33, 34, 38, 39, 40, 41],
                'Airport Vehicles': [17],
                'Boats': [21, 22, 24],
                'Fire Aviation': [35, 36, 37],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5, 27],
                'HEMS': [11],
                'First Responder': [15],
                'Rescue Boat': [25],
                'Other EMS Vehicle': [20, 28, 29],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Patrol Car': [10],
                'SWAT': [16, 26],
                'Police Motorcycle': [23],
                'Police helicopter': [14],
                'K-9 Unit': [19],
                'FBI': [42, 43, 44, 45, 46],
                'Sheriff': [47],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 13,
        3: 16,
        5: 15,
    },
    vehicleBuildings: [0, 3, 5, 6, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18],
    cellBuildings: [5],
    cellExtensions: [
        '5_0',
        '5_1',
        '5_2',
        '5_3',
        '5_4',
        '5_5',
        '5_6',
        '5_7',
        '5_8',
        '5_9',
    ],
    bedBuildings: [2, 14],
    schoolBuildings: [4, 7],
    dispatchCenterBuildings: [1],
    schoolings: {
        'Fire Station': [
            {
                caption: 'Hazmat',
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
                caption: 'Swift water rescue',
                duration: '4 Days',
            },
            {
                caption: 'Ocean Navigation',
                duration: '5 Days',
            },
            {
                caption: 'Airborne firefighting',
                duration: '5 Days',
            },
            {
                caption: 'Heavy Machinery Operating',
                duration: '3 Days',
            },
            {
                caption: "Truck Driver's License",
                duration: '2 Days',
            },
        ],
        'Police': [
            {
                caption: 'Police Aviation',
                duration: '7 Days',
            },
            {
                caption: 'SWAT',
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
                caption: 'FBI Mobile Center Commander ',
                duration: '7 Days',
            },
            {
                caption: 'FBI Bomb Technician',
                duration: '5 Days',
            },
            {
                caption: 'FBI Drone Operator',
                duration: '5 Days',
            },
            {
                caption: 'Sheriff',
                duration: '5 Days',
            },
        ],
    },
    amount: 'Quantity',
    search: 'Search',
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
    only_alliance_missions: [41, 43, 59, 75, 99, 207, 221, 222, 256, 350],
    transfer_missions: [246],
};

