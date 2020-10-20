module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'AAO-Zähler',
            highlight: 'AAO-Umrandung',
            selection: 'Fahrzeugauswahl',
            counter_highlight: 'AAO-Zähler / -Umrandung',
            counter_selection: 'AAO-Zähler und Fahrzeugauswahl',
            highlight_selection: 'AAO-Umrandung und Fahrzeugauswahl',
            counter_highlight_selection:
                'AAO-Zähler / -Umrandung und Fahrzeugauswahl',
        },
        reset: '{text} zurücksetzen',
    },
    arrHover: {
        reset: 'Die Fahrzeugauswahl wird vorher zurückgesetzt!',
        titles: {
            set:
                'So oft wird diese Kombination ausgewählt, wenn du auf die AAO drückst',
            attribute: 'Die Kombination, die in dieser Zeile beschrieben wird',
            free: 'So oft ist diese Kombination verfügbar',
            max:
                'So oft kannt du diese AAO auswählen, bis diese Kombination nichtmehr verfügbar ist',
        },
        arrSpecs: {
            fire: 'Löschfahrzeuge oder Tanklöschfahrzeuge',
            lf_only: 'Löschfahrzeuge',
            tlf_only: 'Tanklöschfahrzeuge',
            wasser_amount: 'Liter Wasser',
            wasser_amount_tlf: 'Liter Wasser - Nur TLF',
            elw: 'Einsatzleitfahrzeuge 1',
            elw2: 'Einsatzleitfahrzeuge 2',
            elw1_or_elw2: 'ELW 1, ELW 2 oder AB-Einsatzleitung',
            ab_einsatzleitung_only: 'AB-Einsatzleitung',
            elw2_or_ab_elw: 'ELW 2 oder AB-Einsatzleitung',
            dlk: 'Drehleitern',
            dlk_or_tm50: 'DLK oder TM 50',
            hlf_only: 'HLF',
            hlf_or_rw_and_lf: 'HLF oder RW und LF',
            rw: 'Rüstwagen oder HLF',
            rw_only: 'Rüstwagen',
            ab_ruest: 'AB Rüst',
            ab_ruest_rw: 'AB Rüst oder Rüstwagen oder HLF',
            gwa: 'GW-A oder AB-Atemschutz',
            ab_atemschutz_only: 'AB-Atemschutz',
            gw_atemschutz_only: 'GW-A',
            gwoel: 'GW-Öl oder AB-Öl',
            ab_oel_only: 'AB-Öl',
            gw_oel_only: 'GW-Öl',
            gwl2wasser: 'Schlauchwagen oder AB-Schlauch',
            gwl2wasser_only: 'Schlauchwagen',
            abl2wasser_only: 'AB-Schlauch',
            gwmesstechnik: 'GW-Messtechnik',
            gwgefahrgut: 'GW-Gefahrgut oder AB-Gefahrgut',
            gw_gefahrgut_only: 'GW-Gefahrgut',
            ab_gefahrgut_only: 'AB-Gefahrgut',
            gwhoehenrettung: 'GW-Höhenrettung',
            dekon_p: 'Dekon-P oder AB-Dekon-P',
            only_dekon_p: 'Dekon-P',
            only_ab_dekon_p: 'AB-Dekon-P',
            mtw: 'MTW',
            fwk: 'Feuerwehrkran',
            arff: 'Flugfeldlöschfahrzeug',
            rettungstreppe: 'Rettungstreppe',
            turboloescher: 'Turbolöscher',
            tm50: 'TM 50',
            ulf: 'ULF mit Löscharm',
            gw_werkfeuerwehr: 'GW-Werkfeuerwehr',
            rtw: 'Rettungswagen',
            ktw: 'Krankentransportwagen',
            ktw_or_rtw: 'KTW oder RTW',
            nef: 'Notarzteinsatzfahrzeug oder Rettungshubschrauber',
            rth_only: 'Rettungshubschrauber',
            nef_only: 'Notarzteinsatzfahrzeug',
            naw: 'NAW',
            naw_or_rtw_and_nef: 'NAW oder NEF+RTW',
            naw_or_rtw_and_nef_or_rth: 'NAW oder NEF/RTH+RTW',
            kdow_lna: 'KdoW-LNA',
            kdow_orgl: 'KdoW-OrgL',
            grtw: 'GRTW',
            grtw0: 'GRTW (7 Patienten - ohne Notarzt)',
            grtw1: 'GRTW (3 Patienten - inkl. Notarzt)',
            fustw: 'Funkstreifenwagen',
            police_motorcycle: 'Polizeimotorrad',
            fustw_or_police_motorcycle:
                'Funkstreifenwagen oder Polizeimotorrad',
            lebefkw: 'Leichter Befehlskraftwagen (leBefKw)',
            fukw: 'FüKw (Führungskraftwagen)',
            grukw: 'GruKw (Gruppenkraftwagen)',
            gefkw: 'GefKw (Gefangenenkraftwagen)',
            polizeihubschrauber: 'Polizeihubschrauber',
            wasserwerfer: 'Wasserwerfer',
            sek_zf: 'SEK - ZF',
            sek_mtf: 'SEK - MTF',
            mek_zf: 'MEK - ZF',
            mek_mtf: 'MEK - MTF',
            gkw: 'Gerätekraftwagen (GKW)',
            thw_mtw: 'Mannschaftstransportwagen Technischer Zug (MTW-TZ - THW)',
            thw_mzkw: 'Mehrzweckkraftwagen (MzKW)',
            thw_lkw: 'Lastkraftwagen-Kipper 9 t (LKW K 9)',
            thw_brmg_r: 'Radlader groß (BRmG R)',
            thw_dle: 'Anhänger Drucklufterzeugung (Anh DLE)',
            thw_mlw5: 'Mannschaftslastwagen Typ V (MLW 5)',
            thw_tauchkraftwagen: 'Tauchkraftwagen',
            thw_tauchkraftwagen_or_gw_taucher:
                'Tauchkraftwagen oder GW-Taucher',
            thw_anh_mzab: 'Anh MzAB',
            thw_anh_schlb: 'Anh SchlB',
            thw_anh_mzb: 'Anh MzB',
            thw_lkw_7_lkr_19_tm: 'LKW 7 Lkr 19 tm',
            rescue_dogs_thw: 'Anhänger Hundetransport',
            ktw_b: 'KTW Typ B',
            seg_elw: 'ELW 1 (SEG)',
            gw_san: 'GW-San',
            rescue_dogs_seg: 'Rettungshundefahrzeug',
            gw_taucher: 'GW-Taucher',
            gw_wasserrettung: 'GW-Wasserrettung',
            boot: 'Boote (Allgemein)',
            mzb: 'Mehrzweckboot',
            rescue_dogs: 'Anhänger Hundetransport oder Rettungshundefahrzeug',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Fahrzeugtyp',
        missing: 'Am Einsatzort fehlend',
        driving: 'Auf Anfahrt',
        total: 'Noch benötigt',
        selected: 'Ausgewählt',
        vehiclesByRequirement: {
            [/^Anhänger Drucklufterzeugung$/]: [44],
            [/^Boote?$/]: [66, 67, 68, 70, 71],
            [/^Dekon-P$/]: [53, 54],
            [/^Drehleitern? \(DLK 23\)$/]: [2, 85],
            [/^ELW 1$/]: [3, 34, 78],
            [/^ELW 2$/]: [34, 78],
            [/^Flugfeldlöschfahrzeuge$/]: [75],
            [/^FuStW$/]: [32, 95],
            [/^FwK$/]: [57],
            [/^FüKw$/]: [51],
            [/^GefKw$/]: [52],
            [/^GW-A oder AB-Atemschutz$/]: [5, 48],
            [/^GW-Gefahrgut$/]: [27, 77],
            [/^GW-Höhenrettung$/]: [33],
            [/^GW-Messtechnik$/]: [12],
            [/^GW-Taucher$/]: [63, 69],
            [/^GW-Werkfeuerwehr$/]: [83],
            [/^GW-Öl$/]: [10, 49],
            [/^Gerätekraftwagen \(GKW\)$/]: [39],
            [/^GruKw$/]: [50],
            [/^LKW Kipper \(LKW K 9\)$/]: [42],
            [/^Löschfahrzeuge? \(LF\)$/]: [
                0,
                1,
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
                30,
                37,
                6,
                7,
                8,
                87,
                88,
                89,
                9,
                90,
            ],
            [/^MEK-Fahrzeuge?$/]: [81, 82],
            [/^Polizeihubschrauber$/]: [61],
            [/^Radlader \(BRmG R\)$/]: [43],
            [/^Rettungshundestaffel\/n$/]: [91],
            [/^Rettungstreppen?$/]: [76],
            [/^RTW$/]: [28],
            [/^RTW oder KTW oder KTW-B$/]: [28, 38, 58],
            [/^Rüstwagen oder HLF$/]: [4, 30, 90],
            [/^SEK-Fahrzeuge$/]: [79, 80],
            [/^Schlauchwagen \(GW-L2 Wasser, SW 1000, SW 2000 oder Ähnliches\)$/]: [
                11,
                13,
                14,
                15,
                16,
                62,
            ],
            [/^THW-Einsatzleitung \(MTW TZ\)$/]: [40],
            [/^THW-Mehrzweckkraftwagen \(MzKW\)$/]: [41],
            [/^Teleskopmast(en)?$/]: [85],
            [/^Turbolöscher$/]: [86],
            [/^ULF mit Löscharm$/]: [84],
            [/^Wasserwerfer$/]: [72],
            [/^leBefKw$/]: [35],
        },
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: 'LF',
                vehicleTypes: [
                    0,
                    1,
                    6,
                    7,
                    8,
                    9,
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
                    30,
                    37,
                    87,
                    88,
                    89,
                    90,
                ],
            },
            {
                name: 'FW andere',
                vehicleTypes: [
                    2,
                    3,
                    4,
                    5,
                    10,
                    11,
                    12,
                    13,
                    14,
                    15,
                    16,
                    27,
                    33,
                    34,
                    36,
                    46,
                    47,
                    48,
                    49,
                    53,
                    54,
                    57,
                    62,
                    71,
                    75,
                    76,
                    77,
                    78,
                    83,
                    84,
                    85,
                    86,
                ],
            },
            {
                name: 'Rettung',
                vehicleTypes: [28, 29, 31, 38, 55, 56, 58, 59, 60, 73, 74, 91],
            },
            {
                name: 'Polizei',
                vehicleTypes: [32, 61, 95],
            },
            {
                name: 'Bereitschaftspolizei',
                vehicleTypes: [35, 50, 51, 52, 72, 79, 80, 81, 82],
            },
            {
                name: 'THW',
                vehicleTypes: [
                    39,
                    40,
                    41,
                    42,
                    43,
                    44,
                    45,
                    65,
                    66,
                    67,
                    68,
                    69,
                    92,
                    93,
                ],
            },
            {
                name: 'Wasser',
                vehicleTypes: [63, 64, 70],
            },
        ],
        allTab: 'Alle',
        occupiedTab: 'Weiteralarmieren',
    },
    hideVehicleList: {
        show: 'Fahrzeugliste zeigen',
        hide: 'Fahrzeugliste verstecken',
    },
};
