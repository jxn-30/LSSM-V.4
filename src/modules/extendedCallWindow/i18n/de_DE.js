module.exports = {
    arrCounter: {
        reset: 'AAO-Zähler zurücksetzen',
    },
    generationDate: {
        inputFormat: 'DD. MMMM, HH:mm Uhr',
    },
    settings: {
        generationDate: {
            title: 'Generierungszeitpunkt',
            description:
                'Zeigt neben der Adresse an, wann der Einsatz generiert wurde.',
        },
        enhancedMissingVehicles: {
            title: 'Benötigte Fahrzeuge verschönern',
            description:
                'Wandelt die Anzeige der zusätzlich benötigten Fahrzeuge in eine übersichtlichere Tabelle um.',
        },
        patientSummary: {
            title: 'Patientenzusammenfassung',
            description:
                'Zeigt neben der Zahl der Patienten an, welche Rettungsmittel diese zusammengefasst benötigen.',
        },
        arrCounter: {
            title: 'AAO-Zähler',
            description:
                'Zählt, wie oft bereits auf eine AAO oder einen Zug geklickt wurde. Alle Zähler können mittels des Knopfes unten rechts oder einer AAO mit Reset-Funktion zurückgesetzt werden.',
        },
        arrClickHighlight: {
            title: 'Angeklickte AAOs hervorheben',
            description: 'Zeichnet einen Rahmen um bereits angeklickte AAOs.',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Fahrzeugtyp',
        missing: 'Am Einsatzort fehlend',
        driving: 'Auf Anfahrt',
        total: 'Noch benötigt',
        vehiclesByRequirement: {
            [/^Anhänger Drucklufterzeugung$/]: [44],
            [/^Boote?$/]: [66, 67, 68, 70, 71],
            [/^Dekon-P$/]: [53, 54],
            [/^Drehleitern? \(DLK 23\)$/]: [2, 85],
            [/^ELW 1$/]: [3, 34, 78],
            [/^ELW 2$/]: [34, 78],
            [/^Flugfeldlöschfahrzeuge$/]: [75],
            [/^FuStW$/]: [32],
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
};
