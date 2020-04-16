const files = require.context(
    '../',
    true,
    /modules\/(?!template).*?\/i18n\/de_DE.root(\.js(on)?)?/
);
const modules = {
    appstore: {
        save: 'Speichern',
        reset: 'Reset',
        search: 'Suche',
        noMapkit:
            'Dieses Modul funktioniert mit dem Kartentyp "Mapkit" wegen Beschränkungen seitens Mapkit nicht!',
        dev:
            'Dieses Modul befindet sich aktuell noch in der Entwicklung. Ein Aktivieren kann zu unvollständigen und fehlerhaften Funktionen führen!',
        closeWarning: {
            title: 'Ungespeicherte Änderungen',
            text:
                'Du hast Änderungen im AppStore vorgenommen, die noch nicht gespeichert sind. Setze sie zurück oder speichere sie, um den AppStore zu schliessen.',
            close: 'Meldung schliessen',
        },
    },
    settings: {
        name: 'Einstellungen',
        save: 'Speichern',
        discard: 'Änderungen verwerfen',
        reset: 'Reset',
        resetWarning: {
            title: 'Zurücksetzen der Einstellungen',
            text:
                'Möchtest du wirklich Einstellungen auf ihre Standardwerte zurücksetzen?',
            close: 'Abbrechen',
            total: 'Alle Einstellungen',
            module: 'Nur von diesem Modul',
        },
        closeWarning: {
            title: 'Ungespeicherte Änderungen',
            text:
                'Du hast Änderungen in den Einstellungen vorgenommen, die noch nicht gespeichert sind. Setze sie zurück, verwerfe sie oder speichere sie, um die Einstellungen zu schliessen.',
            close: 'Meldung schliessen',
        },
    },
};
files.keys().forEach(key => (modules[key.split('/')[2]] = files(key)));

module.exports = {
    modules,
    error: {
        title: 'LSS-Manager: Fehler',
        msg:
            'Sollte dieser Fehler öfters auftreten, so melde ihn bitte an das LSSM-Team!',
    },
    warnings: {
        version: {
            title: 'Falsche LSS-Manager Version',
            text:
                'Lieber Nutzer, leider mussten wir fetstellen, dass du nicht die neueste Version vom LSS-Manager hast. Die neuste Version ist {version}, du hast aber erst {curver}. Bitte lade das Spiel ohne Cache (mit Strg + F5, bei Apple-Geräten command + R) neu, das sollte den Fehler beheben. Sollte der Fehler weiterhin bestehen, bitte melde das an das Team! Bei der Nutzung einer falschen Version können wir nicht die volle Funktionalität des LSS-Managers gewährleisten.',
            close: 'Meldung schließen und Spiel neu laden (empfohlen)',
            abort: 'Meldung schließen ohne Spiel neu zu laden',
        },
    },
    vehicles: [
        'LF 20',
        'LF 10',
        'DLK 23',
        'ELW 1',
        'RW',
        'GW-A',
        'LF 8/6',
        'LF 20/16',
        'LF 10/6',
        'LF 16-TS',
        'GW-Öl',
        'GW-L2-Wasser',
        'GW-Messtechnik',
        'SW 1000',
        'SW 2000',
        'SW 2000-Tr',
        'SW Kats',
        'TLF 2000',
        'TLF 3000',
        'TLF 8/8',
        'TLF 8/18',
        'TLF 16/24-Tr',
        'TLF 16/25',
        'TLF 16/45',
        'TLF 20/40',
        'TLF 20/40-SL',
        'TLF 16',
        'GW-Gefahrgut',
        'RTW',
        'NEF',
        'HLF 20',
        'RTH',
        'FuStW',
        'GW-Höhenrettung',
        'ELW 2',
        'leBefKw',
        'MTW',
        'TSF-W',
        'KTW',
        'GKW',
        'MTW-TZ',
        'MzKW',
        'LKW K 9',
        'BRmG R',
        'Anh DLE',
        'MLW 5',
        'WLF',
        'AB-Rüst',
        'AB-Atemschutz',
        'AB-Öl',
        'GruKw',
        'FüKw',
        'GefKw',
        'Dekon-P',
        'AB-Dekon-P',
        'KdoW-LNA',
        'KdoW-OrgL',
        'FwK',
        'KTW Typ B',
        'ELW 1 (SEG)',
        'GW-San',
        'Polizeihubschrauber',
        'AB-Schlauch',
        'GW-Taucher',
        'GW-Wasserrettung',
        'LKW 7 Lkr 19 tm',
        'Anh MzB',
        'Anh SchlB',
        'Anh MzAB',
        'Tauchkraftwagen',
        'MZB',
        'AB-MZB',
        'WaWe 10',
        'GRTW',
        'NAW',
        'FLF',
        'Rettungstreppe',
        'AB-Gefahrgut',
        'AB-Einsatzleitung',
        'SEK - ZF',
        'SEK - MTF',
        'MEK - ZF',
        'MEK - MTF',
        'GW-Werkfeuerwehr',
        'ULF mit Löscharm',
        'TM 50',
        'Turbolöscher',
        'TLF 4000',
        'KLF',
        'MLF',
        'HLF 10',
    ],
    buildings: [
        'Feuerwache',
        'Feuerwehrschule',
        'Rettungswache',
        'Rettungsschule',
        'Krankenhaus',
        'Rettungshubschrauber-Station',
        'Polizeiwache',
        'Leitstelle',
        'Polizeischule',
        'THW-Ortsverein',
        'THW Bundesschule',
        'Bereitschatspolizei',
        'Schnelleinsatzgruppe (SEG)',
        'Polizeihubschrauberstation',
        'Bereitstellungsraum',
        'Wasserrettung',
        'Verbandszellen',
        'Polizei-Sondereinheiten',
        'Feuerwache (Kleinwache)',
        'Polizeiwache (Kleinwache)',
        'Rettungswache (Kleinwache)',
    ],
    small_buildings: {
        0: 18,
        2: 20,
        6: 19,
    },
    buildingCategories: {
        Feuerwehr: {
            buildings: [0, 1, 18],
            color: '#ff0000',
        },
        Rettungsdienst: {
            buildings: [2, 3, 5, 12, 15, 20],
            color: '#ffa500',
        },
        Polizei: {
            buildings: [6, 8, 11, 13, 17, 19],
            color: '#008800',
        },
        THW: {
            buildings: [9, 10],
            color: '#0000ff',
        },
        Sonstiges: {
            buildings: [4, 7],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Feuerwehr: {
            vehicles: {
                ['Löschfahrzeuge']: [90, 30, 1, 0, 37, 88, 89, 6, 7, 8, 9],
                ['Tanklöschfahrzeuge']: [
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    23,
                    24,
                    25,
                    26,
                    87,
                ],
                Schlauchwagen: [11, 13, 14, 15, 16],
                Sonderfahrzeuge: [2, 3, 4, 5, 10, 12, 27, 33, 34, 36, 53, 57],
                ['WLF & Abrollbehälter']: [46, 47, 48, 49, 54, 62, 71, 77, 78],
                Flughafenfeuerwehr: [75, 76],
                Werkfeuerwehr: [83, 84, 85, 86],
            },
            color: '#ff0000',
        },
        Rettungsdienst: {
            vehicles: {
                'Rettungsdienstfahrzeuge': [28, 29, 55, 56, 73, 74],
                'Rettungshubschrauber': [31],
                'KTW': [38],
                'SEG-Fahrzeuge': [58, 59, 60],
            },
            color: '#ffa500',
        },
        Polizei: {
            vehicles: {
                'Funkstreifenwagen': [32],
                'Bereitschaftspolizei-Fahrzeuge': [35, 50, 51, 52, 72],
                'Polizeihubschrauber': [61],
                'SEK': [79, 80],
                'MEK': [81, 82],
            },
            color: '#008800',
        },
        THW: {
            vehicles: {
                GKW: [39],
                Bergungsgruppe: [41],
                Zugtrupp: [40],
                ['Fachgruppe Räumen']: [42, 43, 44, 45],
            },
            color: '#0000ff',
        },
        Wasserrettung: {
            vehicles: {
                ['Rettungsdienst & Feuerwehr']: [63, 64, 70],
                THW: [65, 66, 67, 68, 69],
            },
            color: '#02a18c',
        },
    },
    amount: 'Anzahl',
};

//
// export default {
//     modules: {
//         dashboard: {
//             name: 'Dashboard',
//             description:
//                 'Fügt eine Übersicht über eigene Gebäude und Fahrzeuge dem Spiel hinzu',
//             ...dashboard,
//         },
//     },
// };
