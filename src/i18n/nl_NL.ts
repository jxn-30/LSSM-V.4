import { Building } from '../../typings/Building';

const modules = {
    appstore: {
        save: 'Opslaan',
        reset: 'Reset',
        noMapkit:
            'Deze module werkt niet met de Mapkit kaart door de beperkingen van Mapkit!',
        dev:
            'Deze module is nog in ontwikkeling. Activeren kan leiden tot incomplete en niet werkende functies!',
        closeWarning: {
            title: 'Niet opgeslagen wijzigingen',
            text:
                'Je hebt aanpassingen gedaan in de AppStore die je nog niet hebt opgeslagen. Reset of sla de aanpassingen op om de AppStore te sluiten.',
            abort: 'Annuleren',
            saveAndExit: 'Opslaan en sluiten',
            exit: 'Sluiten zonder op te slaan',
        },
    },
    settings: {
        name: 'Instellingen',
        save: 'Opslaan',
        discard: 'Negeer wijzigingen',
        reset: 'Reset',
        export: 'Exporteer',
        import: 'Importeer',
        appendableList: {
            unique: {
                title: 'Dubbele waarde',
                text:
                    'Er mag geen dubbele waarde zijn in de **{title}** kolom. De waarde **{value}** bestaat al!',
                confirm: 'OK',
            },
        },
        resetWarning: {
            title: 'Reset de instellingen',
            text:
                'Weet je zeker dat je de instellingen wilt reseten naar de standaard waarden? Dit kan niet ongedaan gemaakt worden!',
            close: 'Annuleren',
            total: 'Alle instellingen',
            module: 'Alleen van de module <b>{module}</b>',
        },
        resetWarningSetting: {
            title: 'Reset instelling',
            text:
                'Wil je echt de instelling <b>{setting}</b> van de module <b>{module}</b> terugzetten naar de standaard instellingen?',
            close: 'Annuleren',
            reset: 'Resetten',
        },
        closeWarning: {
            title: 'Niet opgeslagen wijzigingen',
            text:
                'Je hebt aanpassingen gedaan die je nog niet hebt opgeslagen. Reset of sla de aanpassingen op om de instellingen te sluiten',
            abort: 'Annuleren',
            saveAndExit: 'Opslaan en sluiten',
            exit: 'Sluiten zonder op te slaan',
        },
        changeList: {
            true: 'Aan',
            false: 'Uit',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

export default {
    modules,
    error: {
        title: 'LSS Manager: Error',
        msg:
            'Als deze foutmelding regelmatig optreedt, neem dan contact op met het LSSM team!',
    },
    warnings: {
        version: {
            title: 'Verkeerde LSS Manager versie',
            text:
                'Beste gebruiker, helaas moeten we vaststellen dat je niet de laatste versie van LSS Manager gebruikt. De nieuwste versie is {version}, maar je gebruikt {curver}. Herlaad het spel zonder cache (met Ctrl + F5, op Apple apparaten command + R), dit zou de fout moeten oplossen. Als de fout blijft bestaand, meld het dan aan het LSS Manager team! Als je de verkeerde versie gebruikt, kunnen we niet de volledige functionaliteit garanderen van de LSS-Manager.',
            close: 'Sluit melding en herlaad het spel (aanbevolen)',
            abort: 'Sluit melding zonder te herladen',
        },
    },
    globalSettings: {
        name: 'Algemene instellingen',
        labelInMenu: {
            title: 'Label in plaats van afbeelding in menu',
            description:
                'Laat een simpel label zien in het menu in plaats van het LSSM logo',
        },
        allowTelemetry: {
            description:
                'Bepaalt of LSS-Manager gegevens mag verzenden die ons helpen bij het ontwikkelen van deze extensie.',
            title: 'Telemetrie toestaan',
        },
        iconBg: {
            description: 'Verander de achtergrond van het LSSM-logo!',
            title: 'LSSM-logo achtergrond',
        },
        iconBgAsNavBg: {
            description:
                'Kleur de hele menubalk in de kleur van de achtergrond van het LSSM-logo!',
            title: 'Kleur menubalk',
        },
        osmDarkTooltip: {
            description:
                'Deze instelling maakt tooltips op de kaart donker als je de donkere spelmodus gebruikt',
            title: 'Donkere tooltips op de kaart',
        },
    },
    vehicles: {
        0: {
            caption: 'SI-2',
            color: '#cc0000',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
            wtank: 500,
            icon: 'shuttle-van',
            possibleBuildings: [0],
        },
        1: {
            caption: 'TS 8/9',
            color: '#990000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
            wtank: 2000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        2: {
            caption: 'Autoladder',
            color: '#791515',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 10_000,
            coins: 30,
            special: 'Benodigd vanaf 3 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        3: {
            caption: 'DA - Officier van Dienst',
            color: '#a51212',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 10_000,
            coins: 25,
            special: 'Benodigd vanaf 6 brandweerposten.',
            icon: 'car-side',
            possibleBuildings: [0],
        },
        4: {
            caption: 'Hulpverleningsvoertuig',
            color: '#aa2222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 12_180,
            coins: 25,
            special: 'Benodigd vanaf 4 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        5: {
            caption: 'Adembeschermingsvoertuig',
            color: '#8b1818',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 11_680,
            coins: 25,
            special: 'Benodigd vanaf 5 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        6: {
            caption: 'TST 8/9',
            color: '#880000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
            wtank: 3000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        7: {
            caption: 'TST 6/7',
            color: '#9c1c1c',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
            wtank: 3000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        8: {
            caption: 'TST 4/5',
            color: '#d92626',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
            wtank: 2000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        9: {
            caption: 'TS 4/5',
            color: '#bb0000',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
            wtank: 1500,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        10: {
            caption: 'Slangenwagen',
            color: '#882222',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 17_300,
            coins: 25,
            special:
                'Benodigd vanaf 7 brandweerposten. De slangenwagen zorgt dat de aanwezige waterhoeveelheid wordt verhoogd met 15%',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        11: {
            caption: 'Verkenningseenheid Brandweer',
            color: '#662222',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 18_300,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Verkenningseenheid Brandweer': {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf 10 brandweerposten.',
            icon: 'shuttle-van',
            possibleBuildings: [0],
        },
        12: {
            caption: 'TST-NB 8/9',
            color: '#770000',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 5_000,
            coins: 25,
            wtank: 4000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        14: {
            caption: 'TST-NB 6/7',
            color: '#aa0000',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
            wtank: 4000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        15: {
            caption: 'TST-NB 4/5',
            color: '#d02525',
            minPersonnel: 1,
            maxPersonnel: 5,
            credits: 5_000,
            coins: 25,
            wtank: 4000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        16: {
            caption: 'Ambulance',
            color: '#f59f00',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
            icon: 'ambulance',
            possibleBuildings: [3, 13],
        },
        17: {
            caption: 'TS 6/7',
            color: '#ad1f1f',
            minPersonnel: 1,
            maxPersonnel: 7,
            credits: 5_000,
            coins: 25,
            wtank: 2000,
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        18: {
            caption: 'Hoogwerker',
            color: '#992222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 10_000,
            coins: 30,
            special: 'Benodigd vanaf 3 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        19: {
            caption: 'DA - Hoofdofficier van Dienst',
            color: '#b81414',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_500,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Hoofd Officier van Dienst - Brandweer': {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf 13 brandweerposten.',
            icon: 'car-side',
            possibleBuildings: [0],
        },
        20: {
            caption: 'DA',
            color: '#ca1616',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 2_000,
            coins: 10,
            icon: 'car-side',
            possibleBuildings: [0],
        },
        21: {
            caption: 'DB Klein',
            color: '#cc2222',
            minPersonnel: 1,
            maxPersonnel: 9,
            credits: 2_500,
            coins: 12,
            icon: 'shuttle-van',
            possibleBuildings: [0],
        },
        22: {
            caption: 'DA Noodhulp',
            color: '#001bcc',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
            icon: 'car-side',
            possibleBuildings: [5],
        },
        23: {
            caption: 'Lifeliner',
            color: '#e09200',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 500_000,
            coins: 30,
            schooling: {
                Ambulance: {
                    'MMT-Bemanningslid': {
                        all: true,
                    }
                }
            },
            special:
                'Per 25 gebouwen (alle gebouwen) kan één Lifeliner gekocht worden',
            icon: 'helicopter',
            possibleBuildings: [6],
        },
        24: {
            caption: 'DA - Adviseur Gevaarlijke stoffen',
            color: '#e61919',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 19_200,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Adviseur Gevaarlijke Stoffen': {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf 11 brandweerposten.',
            icon: 'car-side',
            possibleBuildings: [0],
        },
        25: {
            caption: 'DB Noodhulp',
            color: '#142ab8',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 6_000,
            coins: 25,
            icon: 'shuttle-van',
            possibleBuildings: [5],
        },
        26: {
            caption: 'Haakarmvoertuig',
            color: '#bb2222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 5_000,
            coins: 12,
            schooling: {
                Brandweer: {
                    'Brandweerchauffeur-zwaar': {
                        all: true,
                    }
                }
            },
            icon: 'truck-pickup',
            possibleBuildings: [0],
        },
        27: {
            caption: 'Adembeschermingshaakarmbak',
            color: '#552222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
            icon: 'square',
            possibleBuildings: [0],
        },
        28: {
            caption: 'Politiehelikopter',
            color: '#3131e8',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 300_000,
            coins: 30,
            schooling: {
                Politie: {
                    Politiehelikopter: {
                        all: true,
                    }
                }
            },
            icon: 'helicopter',
            possibleBuildings: [9],
        },
        29: {
            caption: 'Watertankhaakarmbak',
            color: '#332222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            wtank: 10000,
            special: 'Haakarmvoertuig benodigd',
            icon: 'square',
            possibleBuildings: [0],
        },
        30: {
            caption: 'Zorgambulance',
            color: '#ffb61a',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 5_000,
            coins: 25,
            icon: 'ambulance',
            possibleBuildings: [3, 13],
        },
        31: {
            caption: 'Commandovoertuig',
            color: '#dc1818',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 27_500,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Brandweerchauffeur-zwaar': {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf 14 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        32: {
            caption: 'Commandohaakarmbak',
            color: '#442222',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
            icon: 'square',
            possibleBuildings: [0],
        },
        33: {
            caption: 'Waterongevallenvoertuig',
            color: '#bf2222',
            minPersonnel: 4,
            maxPersonnel: 6,
            credits: 10_000,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Duiker/Duikploegleider': {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [0],
        },
        34: {
            caption: 'Watertankwagen',
            color: '#772222',
            minPersonnel: 1,
            maxPersonnel: 3,
            credits: 17_000,
            coins: 25,
            wtank: 15000,
            special: 'Benodigd vanaf 7 brandweerposten.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        35: {
            caption: 'Officier van Dienst - Politie',
            color: '#0006b9',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Officier van Dienst - Politie': {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [11],
        },
        36: {
            caption: 'Waterongevallenaanhanger',
            color: '#288f28',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 9_000,
            coins: 12,
            special:
                'TS, TST, TST-NB, WO, HV, DB-K, SL, VEB, PM-OR of TS-OR benodigd',
            icon: 'trailer',
            possibleBuildings: [0],
        },
        37: {
            caption: 'MMT-Auto',
            color: '#c47f00',
            minPersonnel: 1,
            maxPersonnel: 4,
            credits: 30_000,
            coins: 12,
            schooling: {
                Ambulance: {
                    'MMT-Bemanningslid': {
                        all: true,
                    }
                }
            },
            special:
                'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één MMT-Auto gekocht worden',
            icon: 'car-side',
            possibleBuildings: [6],
        },
        38: {
            caption: 'Officier van Dienst - Geneeskunde',
            color: '#b07914',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_000,
            coins: 25,
            schooling: {
                Ambulance: {
                    'Officier van Dienst Geneeskunde': {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf de 8 gebouwen en/of uitbreiding',
            icon: 'car-side',
            possibleBuildings: [3, 6, 13],
        },
        39: {
            caption: 'ME Commandovoertuig',
            color: '#000080',
            minPersonnel: 2,
            maxPersonnel: 4,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Mobiele Eenheid': {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        40: {
            caption: 'ME Flexbus',
            color: '#000073',
            minPersonnel: 4,
            maxPersonnel: 8,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Mobiele Eenheid': {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        41: {
            caption: 'Crashtender (8x8)',
            color: '#ad0e0e',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 60_000,
            coins: 25,
            wtank: 13300,
            ftank: 1600,
            schooling: {
                Brandweer: {
                    Vliegtuigbrandbestrijding: {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        42: {
            caption: 'Crashtender (6x6)',
            color: '#9c0b0b',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 40_000,
            coins: 25,
            wtank: 10000,
            ftank: 1300,
            schooling: {
                Brandweer: {
                    Vliegtuigbrandbestrijding: {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        43: {
            caption: 'Crashtender (4x4)',
            color: '#f04242',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 15_000,
            coins: 25,
            wtank: 6000,
            ftank: 500,
            schooling: {
                Brandweer: {
                    Vliegtuigbrandbestrijding: {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        44: {
            caption: 'Airport Fire Officer / On Scene Commander',
            color: '#8b0707',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 12_000,
            coins: 25,
            schooling: {
                Brandweer: {
                    'Airport Fire Officer / On Scene Commander': {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [0],
        },
        45: {
            caption: 'Dompelpomphaakarmbak',
            color: '#681212',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special:
                'Haakarmvoertuig benodigd. Deze haakarmbak zorgt dat de aanwezige waterhoeveelheid wordt verhoogd met 25%',
            icon: 'square',
            possibleBuildings: [0],
        },
        46: {
            caption: 'DM Noodhulp',
            color: '#0008e7',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 2_500,
            coins: 18,
            icon: 'motorcycle',
            possibleBuildings: [5],
        },
        47: {
            caption: 'DA Hondengeleider',
            color: '#0d0d73',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 8_000,
            coins: 25,
            schooling: {
                Politie: {
                    Hondengeleider: {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [11],
        },
        48: {
            caption: 'DB Hondengeleider',
            color: '#000090',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    Hondengeleider: {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        49: {
            caption: 'PM-OR | Materieelvoertuig - Oppervlakteredding',
            color: '#450c0c',
            minPersonnel: 4,
            maxPersonnel: 9,
            credits: 10_000,
            coins: 25,
            schooling: {
                Brandweer: {
                    Oppervlakteredder: {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        50: {
            caption: 'TS-OR | Tankautospuit - Oppervlakteredding',
            color: '#220000',
            minPersonnel: 4,
            maxPersonnel: 9,
            credits: 10_000,
            coins: 25,
            wtank: 2000,
            schooling: {
                Brandweer: {
                    Oppervlakteredder: {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        51: {
            caption: 'HulpverleningsHaakarmbak',
            color: '#440000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special: 'Haakarmvoertuig benodigd',
            icon: 'square',
            possibleBuildings: [0],
        },
        52: {
            caption: 'Rapid Responder',
            color: '#b16b00',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 2_500,
            coins: 18,
            icon: 'car-side',
            possibleBuildings: [3, 13],
        },
        53: {
            caption: 'AT-Commandant',
            color: '#0000e1',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Operator AT': {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [11],
        },
        54: {
            caption: 'AT-Operator',
            color: '#0000b4',
            minPersonnel: 2,
            maxPersonnel: 4,
            credits: 10_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Operator AT': {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [11],
        },
        55: {
            caption: 'AT-Materiaalwagen',
            color: '#1a1aff',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 15_000,
            coins: 25,
            schooling: {
                Politie: {
                    'Operator AT': {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        56: {
            caption: 'DA Voorlichter',
            color: '#570f0f',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 15_000,
            coins: 25,
            schooling: {
                Brandweer: {
                    Voorlichter: {
                        all: true,
                    }
                }
            },
            special: 'Benodigd vanaf 14 brandweerposten.',
            icon: 'car-side',
            possibleBuildings: [0],
        },
        57: {
            caption: 'DA Officier van Dienst - Geneeskundig / Rapid Responder',
            color: '#dd8600',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 25_000,
            coins: 25,
            schooling: {
                Ambulance: {
                    'Officier van Dienst Geneeskunde': {
                        all: true,
                    }
                }
            },
            special:
                'Per 10 Ambulanceposten (Standplaatsen, VWS-posten en uitbreidingen) kan één OVDG-RR gekocht worden',
            icon: 'car-side',
            possibleBuildings: [3, 6, 13],
        },
        58: {
            caption: 'DB Arrestantenvervoer',
            color: '#0B21F7',
            minPersonnel: 2,
            maxPersonnel: 2,
            credits: 20_000,
            coins: 25,
            special:
                'Dit voertuig kan 5 arrestanten tegelijk vervoeren vanaf een melding',
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        59: {
            caption: 'Noodhulp - Onopvallend',
            color: '#0A20F7',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 6_000,
            coins: 25,
            icon: 'car-side',
            possibleBuildings: [5],
        },
        60: {
            caption: 'DB Biketeam',
            color: '#091FF7',
            minPersonnel: 1,
            maxPersonnel: 2,
            credits: 8_000,
            coins: 25,
            schooling: {
                Politie: {
                    Biketeam: {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [5],
        },
        61: {
            caption: 'Slangenhaakarmbak',
            color: '#550000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 6_000,
            coins: 12,
            special:
                'Haakarmvoertuig benodigd. Deze haakarmbak zorgt dat de aanwezige waterhoeveelheid wordt verhoogd met 15%',
            icon: 'square',
            possibleBuildings: [0],
        },
        62: {
            caption: 'TS-HV | Tankautospuit-Hulpverlening',
            color: '#881b1b',
            minPersonnel: 3,
            maxPersonnel: 7,
            credits: 20_000,
            coins: 25,
            wtank: 2000,
            special: 'Per 10 brandweerposten kan één TS-HV gekocht worden.',
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        63: {
            caption: 'DM - Rapid Responder',
            color: '#9f6000',
            minPersonnel: 1,
            maxPersonnel: 1,
            credits: 2_500,
            coins: 18,
            icon: 'motorcycle',
            possibleBuildings: [3, 13],
        },
        64: {
            caption: 'ME Aanhoudingseenheid',
            color: '#00005c',
            minPersonnel: 6,
            maxPersonnel: 8,
            credits: 20_000,
            coins: 25,
            schooling: {
                Politie: {
                    'ME - Aanhoudingseenheid': {
                        all: true,
                    }
                }
            },
            icon: 'shuttle-van',
            possibleBuildings: [11],
        },
        65: {
            caption: 'DA Terreinwaardig - Reddingsbrigade',
            color: '#F49A13',
            minPersonnel: 2,
            maxPersonnel: 4,
            credits: 7_500,
            coins: 15,
            schooling: {
                Brandweer: {
                    Waterredding: {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [16],
        },
        66: {
            caption: 'Kusthulpverleningsvoertuig',
            color: '#F5A42A',
            minPersonnel: 2,
            maxPersonnel: 6,
            credits: 8_000,
            coins: 15,
            schooling: {
                Brandweer: {
                    Waterredding: {
                        all: true,
                    }
                }
            },
            icon: 'car-side',
            possibleBuildings: [16],
        },
        67: {
            caption: 'Bootaanhanger Reddingsbrigade',
            color: '#F5A42A',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 5_000,
            coins: 15,
            special: 'DAT-RB of KHV benodigd',
            icon: 'trailer',
            possibleBuildings: [16],
        },
        68: {
            caption: 'SB',
            color: '#770000',
            minPersonnel: 2,
            maxPersonnel: 3,
            credits: 35_000,
            coins: 10,
            wtank: 10000,
            ftank: 1000,
            schooling: {
                Brandweer: {
                    'Brandweerchauffeur-zwaar': {
                        all: true,
                    }
                }
            },
            icon: 'truck-moving',
            possibleBuildings: [0],
        },
        69: {
            caption: 'SBH',
            color: '#950000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 10_000,
            coins: 12,
            wtank: 8000,
            ftank: 1000,
            icon: 'square',
            possibleBuildings: [0],
        },
        70: {
            caption: 'SBA',
            color: '#ba0000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 15_000,
            coins: 10,
            ftank: 500,
            special:
                'Het gaat hier om een aanhanger dat een trekkend voertuig nodig heeft. (TS 8/9, TS-HV, TS 4/5, TS 6/7, HV, AB, SL)',
            icon: 'trailer',
            possibleBuildings: [0],
        },
        71: {
            caption: 'MSA',
            color: '#800000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 10_000,
            coins: 10,
            special:
                'Het gaat hier om een aanhanger dat een trekkend voertuig nodig heeft. (TS 8/9, TS-HV, TS 4/5, TS 6/7, HV, AB, SL, DA, DB-K). Deze aanhanger zorgt dat de aanwezige waterhoeveelheid wordt verhoogd met 5%',
            icon: 'trailer',
            possibleBuildings: [0],
        },
        72: {
            caption: 'DPA',
            color: '#a80000',
            minPersonnel: 0,
            maxPersonnel: 0,
            credits: 15_000,
            coins: 10,
            special:
                'Het gaat hier om een aanhanger dat een trekkend voertuig nodig heeft. (TS 8/9, TS-HV, TS 4/5, TS 6/7, HV, AB, SL, DA, DB-K). Deze aanhanger zorgt dat de aanwezige waterhoeveelheid wordt verhoogd met 10%',
            icon: 'trailer',
            possibleBuildings: [0],
        },
    },
    buildings: {
        0: {
            caption: 'Brandweer kazerne',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Ambulance standplaats',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Waterongevallenbestrijding',
                    credits: 400_000,
                    coins: 25,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Vliegtuigbrandbestrijding',
                    credits: 400_000,
                    coins: 25,
                    duration: '7 Dagen',
                    maxExtensionsFunction: (buildingsByType: {
                        [type: number]: Building[];
                    }): number =>
                        Math.floor((buildingsByType[0]?.length ?? 0) / 10),
                },
                ...new Array(10).fill({
                    caption: 'Haakarmbak parkeerplaats',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                }),
                {
                    caption: 'Schuimblussing',
                    credits: 150_000,
                    coins: 15,
                    duration: '5 Dagen',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
            maxBuildings: '5.000',
            maxLevel: 24,
            special:
                'Vanaf de 25e brandweerkazerne stijgen de kosten voor de bouw van een nieuwe brandweerkazerne volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal brandweerposten − 22)</code>. De Coins prijs blijft gelijk!',
            startPersonnel: 10,
            startVehicles: [
                'SI-2',
                'TS 8/9',
                'TST 8/9',
                'TST 6/7',
                'TST 4/5',
                'TS 4/5',
                'TST-NB 8/9',
                'TST-NB 6/7',
                'TST-NB 4/5',
                'TS 6/7',
            ],
            schoolingType: 'Brandweer',
            maxBuildingsFunction: (): number => 5_000,
        },
        1: {
            caption: 'Meldkamer',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Elke 25 gebouwen mag je 1 meldkamer bouwen',
            maxLevel: 0,
            special:
                'De meldkamer is het administratief centrum. Hier kan je diverse instellingen bewerken.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        2: {
            caption: 'Ziekenhuis',
            color: '#bbe944',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Interne Geneeskunde',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Algemene Heelkunde',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Gynaecologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Urologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Traumatologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Neurologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Neurochirurgie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Cardiologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Cardiochirurgie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 Dagen',
                },
            ],
            levelcost: ['1.-20. 19.000 Credits / 11 Coins'],
            maxBuildings: 'Geen limiet',
            maxLevel: 20,
            special:
                'Penningmeesters en Admins kunnen de Team ziekenhuizen met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        3: {
            caption: 'Ambulancestandplaats',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-19. 100.000'],
            maxBuildings: 'Geen limiet',
            maxLevel: 19,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
            schoolingType: 'Ambulance',
        },
        4: {
            caption: 'Brandweer academie',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Brandweeracademie met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: 'Politie opkomstbureau',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Gevangeniscel',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dagen',
                },
                ...new Array(9).fill({
                    caption: 'Extra cel',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dagen',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-39. 100.000'],
            maxBuildings: '1.700',
            maxLevel: 19,
            special:
                'Vanaf het 25e opkomstbureau stijgen de kosten voor de bouw van een nieuw opkomstbureau volgens de volgende formule: <code>100.000+200.000*LOG<sub>2</sub>(Aantal opkomstbureaus − 22)</code>. De Coins prijs blijft gelijk!',
            startPersonnel: 2,
            startVehicles: ['DA Noodhulp'],
            schoolingType: 'Politie',
            maxBuildingsFunction: (): number => 1_700,
        },
        6: {
            caption: 'MMT Standplaats',
            color: '#ffd500',
            coins: 50,
            credits: 800_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3. 100.000'],
            maxBuildings: 'Maximaal 1 gebouw per 10 ambulance gebouwen',
            maxLevel: 3,
            special: '',
            startPersonnel: 3,
            startVehicles: [],
            schoolingType: 'Ambulance',
        },
        7: {
            caption: 'Universiteit Geneeskunde',
            color: '#ffc400',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Universiteiten geneeskunde met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        8: {
            caption: 'Politie academie',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Extra klaslokaal',
                credits: 400_000,
                coins: 40,
                duration: '7 Dagen',
            }),
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team Politieacademie met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        9: {
            caption: 'Politiehelikopter standplaats',
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Zie bijzonderheden',
            maxLevel: 0,
            special:
                'Tot het 125ste gebouw (van alle soorten) kunnen maximaal 4 landingsplaatsen worden gebouwd. Dan groeit het aantal met 1 per 25 gebouwen (vanaf 125).',
            startPersonnel: 0,
            startVehicles: [],
            schoolingType: 'Politie',
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        10: {
            caption: 'Uitgangsstelling (UGS)',
            color: '#404040',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                'Je kan zo veel voertuigen als je wilt sturen naar een UGS, teamleden kunnen de UGS ook gebruiken om voertuigen. Een UGS blijft 24 uur bestaan, maar je kan het elk moment weer reseten naar 24 uur.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        11: {
            caption: 'Politie Hoofdbureau',
            color: '#663300',
            coins: 50,
            credits: 400_000,
            extensions: [
                {
                    caption: '2e OvD-P',
                    credits: 40_000,
                    coins: 5,
                    duration: '3 Dagen',
                },
                {
                    caption: 'Arrestantenvervoer',
                    credits: 100_000,
                    coins: 10,
                    duration: '5 Dagen',
                },
                {
                    caption: 'Mobiele Eenheid, Sectie',
                    credits: 100_000,
                    coins: 20,
                    duration: '5 Dagen',
                },
                {
                    caption: 'Mobiele Eenheid, 2e Sectie',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Mobiele Eenheid, Aanhoudingseenheid',
                    credits: 100_000,
                    coins: 20,
                    duration: '5 Dagen',
                },
                {
                    caption: 'Hondenbrigade',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 Dagen',
                },
                {
                    caption: 'Arrestatieteam',
                    credits: 200_000,
                    coins: 20,
                    duration: '5 Dagen',
                },
            ],
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special: '',
            startPersonnel: 10,
            startVehicles: ['Officier van Dienst - Politie'],
            schoolingType: 'Politie',
        },
        12: {
            caption: 'Cellencomplex',
            color: '#800000',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Gevangeniscel',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dagen',
                },
                ...new Array(9).fill({
                    caption: 'Extra cel',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 Dagen',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Geen limiet',
            maxLevel: 0,
            special:
                'Penningmeesters en Admins kunnen de Team cellencomplex met behulp van de credits van de Teamkas uitbreiden.',
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Ambulance VWS-post',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: ['1. 10.000', 'Upgraden naar normale post: 100.000'],
            maxBuildings: 'Geen limiet',
            maxLevel: 1,
            special: '',
            startPersonnel: 3,
            startVehicles: ['Ambulance'],
            schoolingType: 'Ambulance',
        },
        14: {
            caption: 'Groot gebouwencomplex',
            color: '#ffffff',
            coins: 'Te duur',
            credits: 'Te duur',
            extensions: [],
            levelcost: ['Te duur'],
            maxBuildings: 'Geen limiet',
            maxLevel: 5,
            special:
                'We weten niet wat het nut is behalve dat je een hoop credits of coins kwijt bent.',
            startPersonnel: 0,
            startVehicles: [],
        },
        15: {
            caption: 'Klein gebouwencomplex',
            color: '#ffffff',
            coins: 'Te duur',
            credits: 'Te duur',
            extensions: [],
            levelcost: ['Te duur'],
            maxBuildings: 'Geen limiet',
            maxLevel: 5,
            special:
                'We weten niet wat het nut is behalve dat je een hoop credits of coins kwijt bent.',
            startPersonnel: 0,
            startVehicles: [],
        },
        16: {
            caption: 'Waterreddingspost',
            color: '#f5a42a',
            coins: 50,
            credits: 500_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 25.000',
                '3. 50.000',
                '4. 75.000',
                '5-9. 100.000',
                '10-14. 150.000',
                '15-20. 200.000',
            ],
            maxBuildings: 'Geen limiet',
            maxLevel: 20,
            special: '',
            startPersonnel: 4,
            startVehicles: [],
            schoolingType: 'Brandweer',
        },
    },
    buildingCategories: {
        Brandweer: {
            buildings: [0, 4],
            color: '#ff2d2d',
        },
        Ambulance: {
            buildings: [2, 3, 6, 7, 13],
            color: '#ffa500',
        },
        Politie: {
            buildings: [5, 8, 9, 11],
            color: '#00ac00',
        },
        Waterredding: {
            buildings: [16],
            color: '#f5a42a',
        },
        Algemeen: {
            buildings: [1, 10, 14, 15],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Brandweer: {
            vehicles: {
                'Tankautospuiten': [0, 1, 6, 7, 8, 9, 12, 14, 15, 17],
                'Overige voertuigen': [
                    2,
                    3,
                    4,
                    5,
                    10,
                    11,
                    18,
                    19,
                    20,
                    21,
                    24,
                    31,
                    34,
                    56,
                    62,
                    68,
                    70,
                    71,
                    72,
                ],
                'Waterongevallen': [33, 36, 49, 50, 65, 66, 67],
                'Vliegtuigbrandbestrijding': [41, 42, 43, 44],
                'Haakarmbakken': [26, 27, 29, 32, 45, 51, 61, 69],
            },
            color: '#ff2d2d',
        },
        Ambulance: {
            vehicles: {
                'Ambulances': [16, 30, 38, 52, 57, 63],
                'MMT voertuigen': [23, 37],
            },
            color: '#ffa500',
        },
        Politie: {
            vehicles: {
                'Noodhulp': [22, 25, 46, 59],
                'Mobiele Eenheid': [39, 40, 64],
                'Hondengeleider': [47, 48],
                'Politiehelikopter': [28],
                'Officier van Dienst - Politie': [35],
                'Arrestatieteam': [53, 54, 55],
                'Arrestantenvervoer': [58],
                'Biketeam': [60],
            },
            color: '#00ac00',
        },
    },
    small_buildings: {
        3: 13,
    },
    vehicleBuildings: [0, 3, 5, 6, 9, 11, 13, 14, 15, 16],
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
    bedBuildings: [2],
    schoolBuildings: [4, 7, 8],
    dispatchCenterBuildings: [1],
    schoolings: {
        Brandweer: [
            {
                caption: 'Verkenningseenheid Brandweer',
                duration: '3 Dagen',
                staffList: 'VEB',
            },
            {
                caption: 'Hoofd Officier van Dienst - Brandweer',
                duration: '7 Dagen',
                staffList: 'HOvD-B',
            },
            {
                caption: 'Adviseur Gevaarlijke Stoffen',
                duration: '6 Dagen',
                staffList: 'AGS',
            },
            {
                caption: 'Brandweerchauffeur-zwaar',
                duration: '2 Dagen',
                staffList: 'Brandweerchauffeur-zwaar',
            },
            {
                caption: 'Duiker/Duikploegleider',
                duration: '7 Dagen',
                staffList: 'Duiker/Duikploegleider',
            },
            {
                caption: 'Vliegtuigbrandbestrijding',
                duration: '7 Dagen',
                staffList: 'Vliegtuigbrandbestrijding',
            },
            {
                caption: 'Airport Fire Officer / On Scene Commander',
                duration: '7 Dagen',
                staffList: 'Airport Fire Officer / On Scene Commander',
            },
            {
                caption: 'Oppervlakteredder',
                duration: '7 Dagen',
                staffList: 'Oppervlakteredder',
            },
            {
                caption: 'Voorlichter',
                duration: '5 Dagen',
                staffList: 'Voorlichter',
            },
            {
                caption: 'Waterredding',
                duration: '3 Dagen',
                staffList: 'Waterredder',
            },
        ],
        Politie: [
            {
                caption: 'Politiehelikopter',
                duration: '7 Dagen',
                staffList: 'Politiehelikopter',
            },
            {
                caption: 'Officier van Dienst - Politie',
                duration: '7 Dagen',
                staffList: 'Officier van Dienst - Politie',
            },
            {
                caption: 'Mobiele Eenheid',
                duration: '4 Dagen',
                staffList: 'Mobiele Eenheid',
            },
            {
                caption: 'Hondengeleider',
                duration: '7 Dagen',
                staffList: 'Hondengeleider',
            },
            {
                caption: 'Operator AT',
                duration: '10 Dagen',
                staffList: 'Operator AT',
            },
            {
                caption: 'Biketeam',
                duration: '3 Dagen',
                staffList: 'Biketeam',
            },
            {
                caption: 'ME - Aanhoudingseenheid',
                duration: '5 Dagen',
                staffList: 'AE-er',
            },
        ],
        Ambulance: [
            {
                caption: 'MMT-Bemanningslid',
                duration: '7 Dagen',
                staffList: 'MMT-Bemanningslid',
            },
            {
                caption: 'Officier van Dienst Geneeskunde',
                duration: '10 Dagen',
                staffList: 'Officier van Dienst Geneeskunde',
            },
        ],
    },
    amount: 'Aantal',
    search: 'Zoeken',
    mapSearch: 'Locatie zoeken',
    alliance: 'Team',
    premiumNotice:
        'Deze functie breidt een premium functie van het spel uit en is daarom alleen beschikbaar voor spelers met een premium spelaccount!',
    credits: 'Credits',
    close: 'Sluiten',
    fullscreen: {
        expand: 'Gebruik full-screen modus',
        compress: 'Schakel full-screen modus uit',
    },
    hideTitle: 'Titel weergeven | Titel verbergen',
    vehicle: 'Voertuigen | Voertuig | Voertuigen',
    building: 'Gebouwen',
    station: 'Posten | Post | Posten',
    distance: 'Afstand | Afstanden',
    vehicleType: 'Voertuig type',
    noOptions: 'Geen opties beschikbaar.',
    fmsReal2Show: {
        1: 4,
        2: 5,
        3: 1,
        4: 2,
        5: 7,
        6: 6,
        7: 3,
        9: 9,
    },
    fmsTexts: {
        1: 'Uitgerukt',
        2: 'Ter plaatse',
        3: 'Transport patiënt/arrestant',
        4: 'Beschikbaar',
        5: 'Op post',
        6: 'Buiten dienst',
        7: 'Aanvraag spraakcontact',
        9: 'Wachten op ophalen',
    },
    buildingIcons: [
        'fire',
        'rss',
        'hospital',
        'ambulance',
        'graduation-cap',
        'shield-alt',
        'helicopter',
        'graduation-cap',
        'graduation-cap',
        'helicopter',
        'warehouse',
        'shield-alt',
        'boarder-all',
        'ambulance',
        'warehouse',
        'warehouse',
        'water',
    ],
    pois: [
        'Park',
        'Meer',
        'Ziekenhuis',
        'Bos',
        'Bushalte',
        'Tramhalte',
        'Station',
        'Centraal Station',
        'Rangeeremplacement',
        'Buurtsuper',
        'Supermarkt',
        'Tankstation',
        'School',
        'Museum',
        'Winkelcentrum',
        'Garagebedrijf',
        'Snelweg oprit / afrit',
        'Kerstmarkt',
        'Magazijn',
        'Café/Club',
        'Stadion',
        'Boerderij',
        'Kantoorgebouw',
        'Zwembad',
        'Spoorwegovergang',
        'Theater',
        'Marktplein',
        'Rivier',
        'Sloot',
        'Vliegveld (klein): Start-/Landingsbaan',
        'Vliegveld (klein): Hangaar',
        'Vliegveld (klein): Vliegtuig parkeerplaats',
        'Vliegveld (groot): Start-/Landingsbaan',
        'Vliegveld (groot): Terminal',
        'Vliegveld (groot): Platform / Gate',
        'Vliegveld (groot): Parkeergarage',
        'Parkeergarage',
        'Verzorgingshuis',
        'Manege',
        'Hotel',
        'Restaurant',
        'Bankkantoor',
        'Sporthal',
        'Camping',
        'Gevangenis',
        'Asielzoekerscentrum',
        'Afvalverwerker',
        'Kerkgebouw',
        'Bouwmarkt',
        'Transformatorhuisje',
        'Industrieterrein',
        'Bedrijventerrein',
        'Haventerrein',
        'Bouwterrein',
        'Silo',
        'Huisartsenpraktijk',
        'Sportveld',
        'Jachthaven',
        'Frietkraam',
        'Verzorgingsplaats (Snelweg)',
        'Zendmast',
        'Stadscentrum',
        'Strand',
        'Strandopgang',
        'Duinen',
        'Tunnel',
    ],
    only_alliance_missions: [41, 43, 59, 145, 234, 346, 347],
    transfer_missions: [137],
    ranks: {
        missionchief: {
            0: 'Aspirant',
            200: 'Brandwacht (Manschap A)',
            10_000: 'Hoofdbrandwacht (Manschap B)',
            100_000: 'Brandmeester',
            1_000_000: 'Hoofdbrandmeester',
            5_000_000: 'Commandeur',
            50_000_000: 'Adjunct-Hoofdcommandeur',
            500_000_000: 'Hoofdcommandeur',
            5_000_000_000: 'Erelid',
        },
        policechief: {
            0: 'Aspirant',
            200: 'Surveillant',
            10_000: 'Agent',
            100_000: 'Hoofdagent',
            1_000_000: 'Brigadier',
            5_000_000: 'Inspecteur',
            50_000_000: 'Hoofdinspecteur',
            500_000_000: 'Commissaris',
            5_000_000_000: 'Hoofdcommissaris',
        },
    },
};
