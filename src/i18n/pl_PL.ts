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
            special: 'Wymagane po zbudowaniu 3 remiz',
        },
       3: {
            caption: 'SLOp',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 6 remiz',
        },
       4: {
            caption: 'Samochód ratownictwa technicznego',
            color: '#990000',
            coins: 25,
            credits: 12_180,
            minPersonnel: 3,
            maxPersonnel: 3,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 4 remiz',
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
            special: 'Wymagane po zbudowaniu 7 remiz',
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
            special: 'Wymagane po zbudowaniu 11 remiz',
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
            special: 'Wymagane po zbudowaniu 5 remiz',
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
            special: 'Wymagane po zbudowaniu 13 remiz',
        },
       12: {
            caption: 'GBARt',
            color: '#990000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 3_000,
            special: 'Potrzebujesz przynajmniej stopnia: Kapitan',
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
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
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
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
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
            special: 'Wymagane po zbudowaniu 8 posterunków policji',
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
            special: 'Potrzebna laweta (S.WOPR, Samochód SLRw, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
       22: {
            caption: 'Ponton',
            color: '#F9D74A',
            coins: 12,
            credits: 9_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
        },
       23: {
            caption: 'Skuter',
            color: '#F9D74A',
            coins: 12,
            credits: 7_500,
            minPersonnel: 0,
            maxPersonnel: 0,
            wtank: 0,
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
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
            special: 'Potrzebna laweta (S.WOPR, Quad, Samochód ratownictwa technicznego, SLOp, Ciężki samochód gaśniczy, Średni samochód gaśniczy, GBARt)',
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
            special: 'Wymagane po zbudowaniu 12 remiz',
        },
       28: {
            caption: 'SLRr',
            color: '#990000',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            wtank: 0,
            special: 'Wymagane po zbudowaniu 6 remiz',
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
            caption: 'Jednostka Ratowniczo-Gaśnicza',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Rozbudowa dla pogotowia',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dni',
                },
                {
                    caption: 'Ratownictwo Wodne',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dni',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '4.000 włącznie z Remizami',
            maxLevel: 16,
            special:
                'Przy posiadaniu powyżej 24 budynków straży pożarnej koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących straży pożarnej â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
            startPersonnel: 10,
            startVehicles: ['Ciężki samochód gaśniczy', 'Średni samochód gaśniczy', 'GBARt', 'GLBA'],
            maxBuildingsFunction: (): number => 4_000,
        },
        1: {
            caption: 'Szkoła pożarnicza',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Dodatkowa sala',
                credits: 400_000,
                coins: 40,
                duration: '7 Dni',
            }),
            levelcost: [],
            maxBuildings: 'Bez limitu',
            maxLevel: 0,
            special:
                "Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: ' Stacja Pogotowia',
            color: '#ffffcc',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: 'Bez limitu',
            maxLevel: 16,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulans P'],
        },
        3: {
            caption: 'Akademia Służb Ratownictwa Medycznego',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Dodatkowa sala',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Dni',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Bez limitu',
            maxLevel: 0,
            special:
                "Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia",
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
                    duration: '7 Dni',
                },
                {
                    caption: 'Chirurg ogólny',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Dni',
                },
                {
                    caption: 'Ginekologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Urologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Traumatologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Neurologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Neurochirurgia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Kardiologia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
                {
                    caption: 'Kardiochirurgia',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dni',
                },
            ],
            levelcost: ['1.-20. 19.000 Kredytów / 11 Monet'],
            maxBuildings: 'Bez limitu',
            maxLevel: 20,
            special:
                'Administratorzy Finansów sojuszu mogą rozbudować szpital z finansów sojuszu.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Stacja helikopterów',
            color: '#FFFFCC',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'see specials',
            maxLevel: 0,
            special:
                'Do 125 budynku (wszystkich typów) łącznie można zbudować max 4 lądowiska. Następnie liczba wzrasta o 1 co 25 budynków (począwszy od 125.).',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Komenda Policji',
            color: '#93B7FF',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cela więzienna',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                },
                ...new Array(9).fill({
                    caption: 'Dodatkowa cela',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-16. 100.000'],
            maxBuildings: '1.500 włącznie z Posterunkami Policji',
            maxLevel: 16,
            special:
                'Przy posiadaniu powyżej 24 budynków policji koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących budynków policji â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
            startPersonnel: 2,
            startVehicles: ['Radiowóz OPI'],
            maxBuildingsFunction: (): number => 1_500,
        },
        7: {
            caption: 'Centrum Powiadamiania Ratunkowego',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Maksymalnie 1 na 25 pozostałych zbudowanych budynków',
            maxLevel: 0,
            special: 'The control center is the administrative center.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'Akademia Policyjna',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Dodatkowa sala',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 Dni',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Bez limitu',
            maxLevel: 0,
            special:
                'Administratorzy Finansów sojuszu mogą rozbudować szkołę z finansów sojuszu. Administratorzy Edukacji mogą rozpoczynać szkolenia',
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Stacja Helikopterów Policji',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 Kredytów / 50 Monet'],
            maxBuildings: 'see specials',
            maxLevel: 1,
            special:
                'Na stacji można zbudować do 2 lądowisk (w wyniku rozbudowy). Do 125 budynku (wszystkich typów) łącznie można zbudować max 4 lądowiska. Następnie liczba wzrasta o 1 co 25 budynków (począwszy od 125.).',
            startPersonnel: 3,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Miejsce koncentracji Sił i Środków',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 4,
            maxLevel: 0,
            special:
                'Możesz ustawić dowolną liczbę własnych pojazdów w strefie postojowej,także członkowie sojuszu mogą niego skorzystać. Budynek stoi przez 24 godziny, ale możesz przedłużyć czas o 24 godzin w dowolnym momencie.Z kontem premium możesz mieć 8 stref w tym samym czasie',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 4,
        },
		15: {
            caption: 'Stacja WOPR',
            color: '#F9D74A',
            coins: 35,
            credits: 150_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
            ],
            maxBuildings: 'Bez limitu',
            maxLevel: 5,
            special: 'Żeby stacja poprawnie funkcjonowała potrzebujemy do każdej łodzi pojazdu które posłuży jako laweta do holowania łodzi.',
            startPersonnel: 10,
            startVehicles: ['S.WOPR'],
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
                    duration: '7 Dni',
                },
                ...new Array(9).fill({
                    caption: 'Additional cell',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Bez limitu',
            maxLevel: 0,
            special:
                "This building can only be built and developed by admins and finance ministers with credits from the association's treasury.The built Prison Cells are available to all members of the association.",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Remiza',
            color: '#990000',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Ulepszenie do JRG wynosi różnicę w cenie budynków',
            ],
            maxBuildings: '4.000 włącznie z JRG',
            maxLevel: 5,
            special:
                'Przy posiadaniu powyżej 24 budynków straży pożarnej koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących straży pożarnej â’ 22)</code>, max 1 milion kredytów. Cena za Monety pozostaje bez zmian!',
            startPersonnel: 10,
            startVehicles: ['Ciężki samochód gaśniczy', 'Średni samochód gaśniczy', 'GBARt', 'GLBA'],
            maxBuildingsFunction: (): number => 4_000,
        },
        19: {
            caption: 'Posterunek Policji',
            color: '#93B7FF',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Cela więzienna',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                },
                ...new Array(1).fill({
                    caption: 'Dodatkowa cela',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dni',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Cena przebudowy na Komendę Policji wynosi różnicę w cenach budynków ',
            ],
            maxBuildings: '1.500 włącznie z Komendami Policji',
            maxLevel: 4,
            special:
                'Przy posiadaniu powyżej 24 budynków policji koszt budowy wzrasta według wzoru:<code>100.000+200.000*LOG<sub>2</sub>(Liczba istniejących budynków policji â’ 22)</code>. Cena za Monety pozostaje bez zmian!',
            startPersonnel: 2,
            startVehicles: ['Radiowóz OPI'],
            maxBuildingsFunction: (): number => 1_500,
        },
        20: {
            caption: 'Podstacja Pogotowia Ratunkowego',
            color: '#FFFFCC',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Cena przebudowy na Stację Pogotowania Ratunkowego wynosi różnicę w cenach budynków ',
            ],
            maxBuildings: 'Bez limitu',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulans P'],
        },
    },
    buildingCategories: {
        'Straż pożarna': {
            buildings: [0, 1, 18],
            color: '#990000',
        },
        'Pogotowie ratunkowe': {
            buildings: [2, 3, 5, 20],
            color: '#FFFFCC',
        },
        'Policja': {
            buildings: [6, 8, 13, 19],
            color: '#93B7FF',
        },
        'WOPR': {
            buildings: [3, 15],
            color: '#F9D74A',
        },
        'Inne': {
            buildings: [7, 4, 14],
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
    vehicleBuildings: [0, 2, 5, 6, 13, 14, 18, 19, 20],
    cellBuildings: [6, 16, 19],
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
	'16_0',
        '16_1',
        '16_2',
        '16_3',
        '16_4',
        '16_5',
        '16_6',
        '16_7',
        '16_8',
        '16_9',
        '19_1',
        '19_2',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Straż pożarna': [
            {
                caption: 'Ratownictwo chemiczne',
                duration: '3 Dni',
            },
            {
                caption: 'Szkolenie w dowodzeniu',
                duration: '5 Dni',
            },
            {
                caption: 'Szkolenie SP LSP',
                duration: '3 Dni',
            },
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
            },
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
            },
            {
                caption: 'Nawigacja oceaniczna',
                duration: '5 Dni',
            },
            {
                caption: 'Ratownictwo wysokościowe',
                duration: '5 Dni',
            },
        ],
        'Policja': [
            {
                caption: 'Lotnictwo policyjne',
                duration: '7 Dni',
            },
            {
                caption: 'SPKP',
                duration: '5 Dni',
            },
            {
                caption: 'K-9',
                duration: '5 Dni',
            },
            {
                caption: 'Funkcjonariusz na motocyklu',
                duration: '3 Dni',
            },
	        {
                caption: 'Szkolenie WRD',
                duration: '3 Dni',
            },

        ],
        'WOPR': [
            {
                caption: 'Szybkie ratownictwo wodne',
                duration: '4 Dni',
            },
                caption: 'Kurs Nurka MSWiA',
                duration: '5 Dni',
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
