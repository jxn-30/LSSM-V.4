// import { Building } from 'typings/Building';

const moduleRootFiles = require.context('../', true, MODULE_ROOT_I18N_FILES);
// Commented as dir ./en_US does not exist currently
// const furtherFiles = require.context('./en_US/', true, /.*(\/index)?\.js(on)?/);
const modules = {
    appstore: {
        save: 'Zapisz',
        reset: 'Reset',
        noMapkit:
            'Ten moduł nie działa z mapą typu „Mapkit” z powodu ograniczeń Mapkit!',
        dev:
            'Ten moduł jest obecnie nadal rozwijany. Aktywacja może prowadzić do niekompletnych i błędnych funkcji!',
        closeWarning: {
            title: 'Niezapisane zmiany',
            text:
                'Wprowadziłeś zmiany w App Store, które nie zostały jeszcze zapisane. Zresetuj je lub zapisz, aby zamknąć App Store.',
            close: 'Zamknij',
        },
    },
    settings: {
        name: 'Ustawienia',
        save: 'Zapisz',
        discard: 'Anuluj',
        reset: 'Reset',
        export: 'Export',
        import: 'Import',
        resetWarning: {
            title: 'Resetuj ustawienia',
            text:
                'Czy na pewno chcesz zresetować ustawienia do wartości domyślnych? Tego nie można cofnąć!',
            close: 'Anuluj',
            total: 'Wszystkie ustawienia',
            module: 'Tylko dla tego modułu',
        },
        resetWarningSetting: {
            title: 'Resetuj ustawienia',
            text:
                'Czy na pewno chcesz zresetować to ustawienie<b>{setting}</b>modułu<b>{module}</b>do jego wartości domyślnej?',
            close: 'Anuluj',
            reset: 'Reset',
        },
        closeWarning: {
            title: 'Niezapisane zmiany',
            text:
                'Dokonałeś zmian w ustawieniach, które nie zostały jeszcze zapisane. Zresetuj je, odrzuć lub zapisz, aby zamknąć ustawienia.',
            close: 'Zamknij',
        },
        changeList: {
            true: 'On',
            false: 'Off',
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
        title: 'LSS Manager: Błąd',
        msg:
            'Jeśli ten błąd występuje często, zgłoś go zespołowi LSSM!',
    },
    warnings: {
        version: {
            title: 'Zła wersja LSS Manager',
            text:
                'Drogi użytkowniku, niestety odkryliśmy, że nie masz najnowszej wersji LSS Manager. Najnowsza wersja to {version}, ale ty masz {curver}. Proszę przeładować grę  (Ctrl + F5, na urządzeniach Apple polecenie + R), to powinno naprawić błąd. Jeśli błąd będzie się powtarzał, zgłoś go zespołowi! W przypadku użycia złej wersji nie możemy zagwarantować pełnej funkcjonalności LSS-Manager.',
            close: 'Zamknij wiadomość i przeładuj grę (zalecane)',
            abort: 'Zmaknij wiadomość bez przeładowania',
        },
    },
    globalSettings: {
        name: 'Ustawienia główne',
        labelInMenu: {
            title: 'Etykieta zamiast ikony w menu',
            description:
                'Wyświetla prostą etykietę na pasku nawigacji zamiast logo LSSM',
        },
    },
    vehicles: {
       0: {
            caption: 'Ciężki samochód gaśniczy',
            color: '#990000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 5_000,
        },
       1: {
            caption: 'Średni samochód gaśniczy',
            color: '#990000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 2_500,
        },
       2: {
            caption: 'SD',
            color: '#990000',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 3 remiz,
        },
       3: {
            caption: 'SLOp',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 6 remiz,
        },
       4: {
            caption: 'Samochód ratownictwa technicznego',
            color: '#990000',
            coins: 25,
            credits: 12_180,
            minPersonnel: 3,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 4 remiz,
        },
       5: {
            caption: 'Ambulans P',
            color: '#FFFFCC',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 0,
        },
       6: {
            caption: 'Cysterna gaśnicza',
            color: '#990000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 14_000,
            special: 'Wymagane po zbudowaniu 7 remiz,
        },
       7: {
            caption: 'Samochód ratownictwa chemicznego',
            color: '#990000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Ratownictwo chemiczne)',
            special: 'Wymagane po zbudowaniu 11 remiz,
        },
       8: {
            caption: 'Radiowóz OPI',
            color: '#93B7FF',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
        },
       9: {
            caption: 'Śmigłowiec LPR',
            color: '#FFFFCC',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            wtank: 0,
        },
       10: {
            caption: 'SPGaz',
            color: '#990000',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 5 remiz,
        },
       11: {
            caption: 'Samochód Dowodzenia i Łączności',
            color: '#990000',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Szkolenie w dowodzeniu)',
            special: 'Wymagane po zbudowaniu 13 remiz,
        },
       12: {
            caption: 'GBARt',
            color: '#990000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 3_000,
            special: 'Potrzebujesz przynajmniej stopnia: Kapitan.,
        },
       13: {
            caption: 'SH',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
        },
       14: {
            caption: 'Helikopter Policyjny',
            color: '#93B7FF',
            coins: 30,
            credits: 300_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (Lotnictwo policyjne)',
        },
       15: {
            caption: 'Opancerzony Pojazd SPKP',
            color: '#93B7FF',
            coins: 25,
            credits: 10_000,
            minPersonnel: 6,
            maxPersonnel: 6,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (SPKP)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji,
        },
       16: {
            caption: 'Jednostka K-9',
            color: '#93B7FF',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (K-9)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji,
        },
       17: {
            caption: 'Motocykl Policyjny',
            color: '#93B7FF',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (Funkcjonariusz na motocyklu)',
        },
       18: {
            caption: 'SUV SPKP',
            color: '#93B7FF',
            coins: 23,
            credits: 7_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (SPKP)',
            special: 'Wymagane po zbudowaniu 8 posterunków policji,
        },
       19: {
            caption: 'S.WOPR',
            color: '#F9D74A',
            coins: 25,
            credits: 8_500,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Szybkie ratownictwo wodne)',
        },
       20: {
            caption: 'Quad',
            color: '#F9D74A',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Szybkie ratownictwo wodne)',
        },
       21: {
            caption: 'L.Ratownicza',
            color: '#F9D74A',
            coins: 12,
            credits: 12_600,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Samochód SLRw, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt),
        },
       22: {
            caption: 'Ponton',
            color: '#F9D74A',
            coins: 12,
            credits: 9_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt),
        },
       23: {
            caption: 'Skuter',
            color: '#F9D74A',
            coins: 12,
            credits: 7_500,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt),
        },
       24: {
            caption: 'Samochód SLRw',
            color: '#F9D74A',
            coins: 25,
            credits: 10_000,
            minPersonnel: 2,
            maxPersonnel: 2,
            wtank: 0,
            schooling: 'Akademia Służb Ratownictwa Medycznego, Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Kurs Nurka MSWiA)',
        },
       25: {
            caption: 'Dźwig SP',
            color: '#990000',
            coins: 25,
            credits: 14_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
        },
       26: {
            caption: 'Łódź SP',
            color: '#F9D74A',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt),
        },
       27: {
            caption: 'SRWys',
            color: '#990000',
            coins: 25,
            credits: 7_200,
            minPersonnel: 3,
            maxPersonnel: 3,
            wtank: 0,
            schooling: 'Szkoła Pożarnicza',
            shownSchooling: 'Wymaga specjalnej edukacji (Ratownictwo Wysokościowe)',
            special: 'Wymagane po zbudowaniu 12 remiz,
        },
       28: {
            caption: 'SLRr',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 6 remiz,
        },
       29: {
            caption: 'GLBA',
            color: '#990000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 1_000,
        },
       30: {
            caption: 'Radiowóz WRD',
            color: '#93B7FF',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            schooling: 'Akademia Policyjna',
            shownSchooling: 'Wymaga specjalnej edukacji (Szkolenie WRD)',
        },
    },
    buildings: {
        0: {
            caption: 'Jednostka Ratowniczo-Gaśnicza (JRG)',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Rozbudowa dla pogotowia',
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
                    caption: 'Ratownictwo Wodne',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Days',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '4.000 together with small fire stations',
            maxLevel: 16,
            special:
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations â’ 22)</code>. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
            maxBuildingsFunction: (): number => 4_000,
        },
        1: {
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
        2: {
            caption: ' Stacja Pogotowia',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'No limit',
            maxLevel: 16,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulans'],
        },
        3: {
            caption: 'Rescue (EMS) Academy',
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
                "Finance ministers and admins can (expand) association rescue schools with the help of credits from the association's treasury.Training course masters and admins can start training courses at association rescue schools.",
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Szpital',
            color: '#bbe944',
            coins: 25,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Interna',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Chirurg ogólny',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Days',
                },
                {
                    caption: 'Ginekologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Urologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Traumatologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Neurochirurgia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Kardiologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Days',
                },
                {
                    caption: 'Kardiochirurgia',
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
            caption: 'Medical Helicopter station',
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
            caption: 'Komenda Policji',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cela więzienna',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                },
                ...new Array(9).fill({
                    caption: 'Dodatkowa cela',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Days',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '1.500 together with small police stations',
            maxLevel: 16,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station increase according to the following formula: <code>100.000+200.000*LOG<sub>2</sub>(Number of existing police stations â’ 22)</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Police Car'],
            maxBuildingsFunction: (): number => 1_500,
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
            caption: 'Police training centre',
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
        16: {
            caption: 'Prison',
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
                'From the 24th fire station onwards, the cost of building a new fire station increases according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing fire stations â’ 22)) / 2</code>. max. 1 Million Credits. The Coins price remains constant!',
            startPersonnel: 10,
            startVehicles: ['Water Ladder', 'Light 4X4 Pump (L4P)'],
            maxBuildingsFunction: (): number => 4_000,
        },
        19: {
            caption: 'Police station (Small station)',
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
            maxBuildings: '1.500 together with police stations',
            maxLevel: 4,
            special:
                'From the 24th police station onwards, the costs for the new construction of a police station are calculated according to the following formula: <code>(100.000+200.000*LOG<sub>2</sub>(Number of existing police stations â’ 22)) / 2</code>. The Coins price remains constant!',
            startPersonnel: 2,
            startVehicles: ['Police Car'],
            maxBuildingsFunction: (): number => 1_500,
        },
        20: {
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
            startVehicles: ['Ambulance'],
        },
        21: {
            caption: 'Clinic',
            color: '#e2e53b',
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
        22: {
            caption: 'Home Response Location',
            color: '#eeb611',
            coins: 10,
            credits: 100_000,
            extensions: [],
            levelcost: ['not expandeble'],
            maxBuildings: 'No limit',
            maxLevel: 0,
            special:
                'It can only: Fire Officer, Rapid Response Vehicle, Operational Team Leader, General Practitioner, Community First Responder, Dog Support Unit (DSU) be stationed',
            startPersonnel: 1,
            startVehicles: [''],
        },
    },
    buildingCategories: {
        'Fire Department': {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        'Rescue Stations': {
            buildings: [2, 3, 5, 20, 21],
            color: '#ffa500',
        },
        'Police Stations': {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        'Other': {
            buildings: [7, 4, 14, 22],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        'Firefighters': {
            vehicles: {
                'Fire engines': [0, 1, 16],
                'Water Carrier': [6],
                'Aerial Trucks': [2, 17],
                'Special Vehicles': [3, 4, 7, 14, 15, 18, 23],
            },
            color: '#ff2d2d',
        },
        'Rescue Vehicles': {
            vehicles: {
                'Ambulances': [5],
                'HEMS': [9],
                'First Responder': [10, 19, 21, 22],
                'Other EMS Vehicle': [20],
            },
            color: '#ffa500',
        },
        'Police Vehicles': {
            vehicles: {
                'Police Car': [8],
                'ARP': [13],
                'Police helicopter': [11],
                'DSU': [12],
                'Traffic Cars': [24, 25],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 18, 19, 20, 21, 22],
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
    bedBuildings: [4, 21],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
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
                caption: 'Co-Responder Training',
                duration: '3 Days',
            },
        ],
        'Police': [
            {
                caption: 'Police Aviation',
                duration: '7 Days',
            },
            {
                caption: 'Firearms training',
                duration: '5 Days',
            },
            {
                caption: 'Dog handling',
                duration: '5 Days',
            },
            {
                caption: 'Roads Policing Officer Training',
                duration: '3 Days',
            },
        ],
        'Rescue': [
            {
                caption: 'Critical care',
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
 pois: [
        'Park',
        'Jezioro',
        'Szpital',
        'Las',
        'Przystanek autobusowy',
        'Przystanek tramwajowy',
        'Dworzec kolejowy (ruch podmiejski)',
        'Dworzec kolejowy (ruch podmiejski i dalekobieżny)',
        'Stacja towarowa',
        'Supermarket (mały)',
        'Supermarket (duży)',
        'Stacja paliw',
        'Szkoła',
        'Muzeum',
        'Centrum handlowe',
        'Warsztat samochodowy',
        'Zjazd z autostrady',
        'Jarmark Bożonarodzeniowy',
        'Dyskoteka',
        'Stadion',
        'Gospodarstwo rolne',
        'Biurowiec',
        'Basen',
        'Przejazd kolejowy',
        'Teatr',
        'Teren wystawowy',
        'Rzeka',
        'Mały port lotniczy (pas startowy)',
        'Duży port lotniczy (pas startowy)',
        'Terminal portu lotniczego',
        'Bank',
        'Magazyn',
        'Most',
        'Bar szybkiej obsługi',
        'Cargo-port',
        'Centrum segregacji odpadów',
        'Wieżowiec',
        'Dok dla wycieczkowców',
        'Marina',
        'Przejazd kolejowo-drogowy',
        'Tunel',
        'Chłodnia składowa',
        'Elektrownia',
        'Fabryka',
        'Składowisko złomu',
        'Stacja metra',
        'Mały zbiornik na substancje chemiczne',
        'Duży zbiornik na substancje chemiczne',
        'Hotel',
        'Bar',
        'Składowisko odpadów',
        'Parking',
        'Silos',
    ],
    only_alliance_missions: [57, 74, 89],
    transfer_missions: [77],
};
