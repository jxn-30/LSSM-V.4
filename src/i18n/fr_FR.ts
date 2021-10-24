// import { Building } from 'typings/Building';

const modules = {
    appstore: {
        save: 'Sauvegarder',
        reset: 'Reset',
        noMapkit:
            'Ce module ne fonctionne pas avec "Mapkit" à cause des limitations de Mapkit !',
        dev:
            'Ce module est encore en développement. Son activation peut causer des erreurs !',
        closeWarning: {
            title: 'Changements non sauvegardés',
            text:
                "Des changements ont été faits dans l'AppStore qui n'ont pas été sauvegardés. Sauvegardez ou faites un Reset pour fermer l'Appstore.",
            abort: 'Annuler',
            saveAndExit: 'Sauvegarder et quitter',
            exit: 'Quitter sans sauvegarder',
        },
    },
    settings: {
        name: 'Paramètres',
        save: 'Sauvegarder',
        discard: 'Annuler changements',
        reset: 'Reset',
        export: 'Exporter',
        import: 'Importer',
        resetWarning: {
            title: 'Reset des paramètres',
            text:
                'Voulez-vous remettre les paramètres par défaut ? Cela ne peut pas être annulé !',
            close: 'Annuler',
            total: 'Tous les paramètres',
            module: 'Seulement pour ce module',
        },
        resetWarningSetting: {
            title: 'Réinitialisation des paramètres',
            text:
                'Voulez-vous vraiment remettre ce paramètre <b>{setting}</b> du module <b>{module}</b> à sa valeur par défaut ?',
            close: 'Annuler',
            reset: 'Réinitialiser',
        },
        closeWarning: {
            title: 'Changements non sauvegardés',
            text:
                "Des changements ont été faits dans les paramètres qui n'ont pas été sauvegardés. Faites un Reset, une annulation ou une sauvegarde pour fermer les paramètres.",
            abort: 'Annuler',
            saveAndExit: 'Sauvegarder et quitter',
            exit: 'Quitter sans sauvegarder',
        },
        changeList: {
            true: 'On',
            false: 'Off',
        },
    },
} as { [moduleId: string]: { [key: string]: unknown } };

export default {
    modules,
    error: {
        title: 'LSS Manager: Erreur',
        msg:
            "Si cette erreur arrive fréquemment, merci de le signaler à l'équipe LSSM !",
    },
    warnings: {
        version: {
            title: 'Mauvaise version de LSS Manager',
            text:
                "Cher utilisateur, malheureusement vous n'avez pas la dernière version de LSS Manager. La dernière version est {version} et vous avez la {current}. Merci de recharger le jeu en vidant le cache (Ctrl + F5 ou command + R sur Apple), cela devrait régler le problème. Si le problème persiste, merci de le signaler à l'équipe ! Si vous vous utilisez une mauvaise version nous ne pouvons garantir le plein fonctionnement de LSS-Manager.",
            close: 'Fermer ce message et recharger le jeu (recommandé)',
            abort: 'Fermer ce message sans recharger le jeu',
        },
    },
    globalSettings: {
        name: 'Paramètres généraux',
        labelInMenu: {
            title: "Titre au lieu d'une icone dans le menu",
            description:
                'Un simple titre dans la barre de navigation au lieu du logo LSSM',
        },
        allowTelemetry: {
            description:
                'Contrôle si LSS-Manager est autorisé à envoyer des données, ce qui nous aide à développer cette extension.',
            title: 'Autoriser la télémétrie',
        },
        iconBg: {
            description: "Changez la couleur de fond de l'icône LSSM !",
            title: "Couleur de fond de l'icône LSSM",
        },
        iconBgAsNavBg: {
            description:
                "Colorez toute la barre de navigation avec la couleur de fond de l'icône du LSSM!",
            title: 'colorier la barre de navigation',
        },
        osmDarkTooltip: {
            description:
                'Ce paramètre assombrit les infobulles sur la carte si vous avez activé le mode sombre.',
            title: 'Infobulles foncées sur la carte',
        },
    },
    vehicles: {
        0: {
            caption: 'FPT',
            color: '#cc0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 4,
            maxPersonnel: 6,
            wtank: 3000,
        },
        1: {
            caption: 'FPTL',
            color: '#bb0000',
            coins: 25,
            credits: 5_000,
            minPersonnel: 4,
            maxPersonnel: 6,
            wtank: 2000,
        },
        2: {
            caption: 'EPA',
            color: '#d92626',
            coins: 30,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            special:
                'Nécessaire dès lors que vous avez construit 3 bases de pompiers',
        },
        3: {
            caption: 'VLCG',
            color: '#d02525',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            special:
                'Nécessaire dès lors que vous avez construit 6 bases de pompiers',
        },
        4: {
            caption: 'VSR',
            color: '#ad1f1f',
            coins: 25,
            credits: 12_180,
            minPersonnel: 2,
            maxPersonnel: 3,
            special:
                'Nécessaire dès lors que vous avez construit 4 bases de pompiers',
        },
        5: {
            caption: 'ASSU',
            color: '#9c691c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 3,
            maxPersonnel: 3,
        },
        6: {
            caption: 'CCGC',
            color: '#aa0000',
            coins: 25,
            credits: 17_300,
            minPersonnel: 1,
            maxPersonnel: 2,
            wtank: 11000,
            special:
                'Nécessaire dès lors que vous avez construit 7 bases de pompiers',
        },
        7: {
            caption: 'VIRT',
            color: '#770000',
            coins: 25,
            credits: 19_200,
            minPersonnel: 1,
            maxPersonnel: 4,
            schooling: {
                'Centre de secours': {
                    ['Véhicules risques chimiques']: {
                        all: true,
                    },
                },
            },
            special:
                'Nécessaire dès lors que vous avez construit 7 bases de pompiers',
        },
        8: {
            caption: 'Véhicule de patrouille',
            color: '#3a8b18',
            coins: 25,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 4,
        },
        9: {
            caption: 'Dragon',
            color: '#e68a19',
            coins: 30,
            credits: 300_000,
            minPersonnel: 3,
            maxPersonnel: 5,
            schooling: {
                Secours: {
                    ['Médecin']: {
                        all: true,
                    },
                },
            },
        },
        10: {
            caption: 'VAR',
            color: '#d90e0e',
            coins: 25,
            credits: 11_680,
            minPersonnel: 1,
            maxPersonnel: 3,
        },
        11: {
            caption: 'VPC',
            color: '#791515',
            coins: 25,
            credits: 25_500,
            minPersonnel: 1,
            maxPersonnel: 6,
            schooling: {
                'Centre de secours': {
                    'Commandement mobile': {
                        all: true,
                    },
                },
            },
            special:
                'Nécessaire dès lors que vous avez construit 13 bases de pompiers',
        },
        12: {
            caption: 'FPTSR',
            color: '#b80000',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 3000,
        },
        13: {
            caption: 'VTU',
            color: '#d71919',
            coins: 25,
            credits: 12_180,
            minPersonnel: 1,
            maxPersonnel: 3,
            special:
                'Nécessaire dès lors que vous avez construit 13 bases de pompiers',
        },
        14: {
            caption: 'VGRIMP',
            color: '#ca3516',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 5,
            schooling: {
                'Centre de secours': {
                    ['IMP (Intervention en Milieu Périlleux)']: {
                        all: true,
                    },
                },
            },
        },
        15: {
            caption: 'BEA',
            color: '#dc1818',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 3,
        },
        16: {
            caption: 'VPL',
            color: '#2285bb',
            coins: 25,
            credits: 10_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling: {
                'Centre de secours': {
                    'PLG (Plongeur)': {
                        all: true,
                    },
                },
            },
            special: 'Nécessite une formation spéciale (PLG (Plongeur))',
        },
        17: {
            caption: 'BLS',
            color: '#225f77',
            coins: 12,
            credits: 6_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            special: 'Remorqueuse nécessaire (VPL, VTU)',
        },
        18: {
            caption: 'Choucas',
            color: '#36a21e',
            coins: 30,
            credits: 300_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            schooling: {
                'Poste de police': {
                    'Licence de Pilote': {
                        all: true,
                    },
                },
            },
        },
        19: {
            caption: 'Equipe cynophile',
            color: '#27aa22',
            coins: 25,
            credits: 7_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                'Poste de police': {
                    ['Maître chien']: {
                        all: true,
                    },
                },
            },
            special:
                'Nécessaire dès lors que vous avez construit 6 postes de police.<br>Nécessite une formation spéciale (Maître chien)',
        },
        20: {
            caption: 'Unité motocycliste',
            color: '#22aa30',
            coins: 18,
            credits: 2_500,
            minPersonnel: 1,
            maxPersonnel: 1,
            schooling: {
                'Poste de police': {
                    'Formation Motocycliste': {
                        all: true,
                    },
                },
            },
        },
        21: {
            caption: 'CCFS',
            color: '#d71919',
            coins: 25,
            credits: 19_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 14500,
            special:
                'Nécessaire dès lors que vous avez construit 6 bases de pompiers',
        },
        22: {
            caption: 'CCFM',
            color: '#d71919',
            coins: 8,
            credits: 8_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 4000,
            special:
                'Nécessaire dès lors que vous avez construit 6 bases de pompiers',
        },
        23: {
            caption: 'CCFL',
            color: '#d71919',
            coins: 5,
            credits: 5_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 2000,
            special:
                'Nécessaire dès lors que vous avez construit 6 bases de pompiers',
        },
        24: {
            caption: 'VLHR',
            color: '#d71919',
            coins: 25,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 1,
            special:
                'Nécessaire dès lors que vous avez construit 6 bases de pompiers',
        },
        25: {
            caption: 'VSAV',
            color: '#9c691c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 3,
            maxPersonnel: 3,
        },
        26: {
            caption: 'VL SSSM',
            color: '#9c691c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 1,
            maxPersonnel: 2,
            schooling: {
                'Centre de secours': {
                    ['Médecin']: {
                        all: true,
                    },
                },
            },
        },
        27: {
            caption: 'VLM',
            color: '#9c691c',
            coins: 20,
            credits: 4_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling: {
                Secours: {
                    ['Médecin']: {
                        all: true,
                    },
                },
            },
        },
        28: {
            caption: 'AR',
            color: '#9c691c',
            coins: 30,
            credits: 10_000,
            minPersonnel: 3,
            maxPersonnel: 3,
            schooling: {
                Secours: {
                    ['Médecin']: {
                        all: true,
                    },
                },
            },
        },
        29: {
            caption: 'PC DSM',
            color: '#9c691c',
            coins: 25,
            credits: 20_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            schooling: {
                Secours: {
                    DSM: {
                        all: true,
                    },
                },
            },
            special:
                'Nécessaire dès lors que vous avez construit 6 postes de secours',
        },
        30: {
            caption: 'Ambulance Type A',
            color: '#9c691c',
            coins: 25,
            credits: 5_000,
            minPersonnel: 1,
            maxPersonnel: 2,
        },
        31: {
            caption: 'VTP',
            color: '#d71919',
            coins: 10,
            credits: 10_000,
            minPersonnel: 1,
            maxPersonnel: 9,
        },
        32: {
            caption: 'CCRL',
            color: '#d71919',
            coins: 10,
            credits: 15_000,
            minPersonnel: 2,
            maxPersonnel: 4,
            wtank: 1400,
        },
        33: {
            caption: 'CCRM',
            color: '#d71919',
            coins: 10,
            credits: 18_000,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 2500,
        },
        34: {
            caption: 'CCRSR',
            color: '#d71919',
            coins: 15,
            credits: 30_000,
            minPersonnel: 2,
            maxPersonnel: 6,
            wtank: 2000,
        },
        35: {
            caption: 'FMOGP',
            color: '#d71919',
            coins: 15,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 3,
            wtank: 12000,
        },
        36: {
            caption: 'CDHR',
            color: '#d71919',
            coins: 10,
            credits: 15_000,
            minPersonnel: 2,
            maxPersonnel: 3,
        },
        37: {
            caption: 'FDGP',
            color: '#d71919',
            coins: 15,
            credits: 35_000,
            minPersonnel: 2,
            maxPersonnel: 4,
        },
        38: {
            caption: 'MPR',
            color: '#d71919',
            coins: 10,
            credits: 10_000,
            minPersonnel: 0,
            maxPersonnel: 0,
            special:
                'Remorqueuse nécessaire (FPT, FPTL, CCFS, CCFM, CCFL, CCRL, CCRM, CCGC, FMOGP, VLHR, CDHR, FDGP)',
        },
    },
    buildings: {
        0: {
            caption: 'Centre de secours',
            color: '#bb0000',
            coins: 30,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Service de Santé et de Secours Médical',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 jours',
                },
                {
                    caption: 'Extension de soutien à incendie',
                    credits: 75_000,
                    coins: 15,
                    duration: '3 jours',
                },
                {
                    caption: 'Unité nautique',
                    credits: 100_000,
                    coins: 20,
                    duration: '7 jours',
                },
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-24. 100.000'],
            maxBuildings: '5.000',
            maxLevel: 24,
            special:
                'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>100.000+(200.000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
            startPersonnel: 10,
            startVehicles: ['FPT', 'FPTL'],
            schoolingTypes: ['Centre de secours'],
            maxBuildingsFunction: (): number => 5_000,
        },
        1: {
            caption: 'Centre de Formation Départemental',
            color: '#992222',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
            }),
            levelcost: [],
            maxBuildings: 'Aucune limite',
            maxLevel: 0,
            special:
                "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
            startPersonnel: 0,
            startVehicles: [],
        },
        2: {
            caption: 'Poste Ambulancier',
            color: '#ffa500',
            coins: 35,
            credits: 200_000,
            extensions: [],
            levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
            maxBuildings: 'Aucune limite',
            maxLevel: 14,
            special: '',
            startPersonnel: 3,
            startVehicles: ['UMH'],
            schoolingTypes: ['Secours'],
        },
        3: {
            caption: 'École de médecine',
            color: '#ffa500',
            coins: 50,
            credits: 500_000,
            extensions: new Array(3).fill({
                caption: 'Plus de salles de cours',
                credits: 400_000,
                coins: 40,
                duration: '7 jours',
            }),
            levelcost: [],
            maxBuildings: 'Aucune limite',
            maxLevel: 0,
            special:
                "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
            startPersonnel: 0,
            startVehicles: [],
        },
        4: {
            caption: 'Centre Hospitalier',
            color: '#bbe944',
            coins: 35,
            credits: 200_000,
            extensions: [
                {
                    caption: 'Interne général',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 jours',
                },
                {
                    caption: 'Chirurgien général',
                    credits: 10_000,
                    coins: 10,
                    duration: '7 jours',
                },
                {
                    caption: 'Gynécologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Urologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Traumatologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Neurologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Neurochirurgie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Cardiologie',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
                {
                    caption: 'Chirurgie cardiaque',
                    credits: 70_000,
                    coins: 15,
                    duration: '7 jours',
                },
            ],
            levelcost: ['1.-20. 19.000 crédits / 11 pièces'],
            maxBuildings: 'Aucune limite',
            maxLevel: 20,
            special:
                "Le chef des finances et les administrateurs peuvent construire et agrandir les hôpitaux grance à la banque de l'alliance",
            startPersonnel: 0,
            startVehicles: [],
        },
        5: {
            caption: "Station d'hélicoptère",
            color: '#e7ad2f',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: [],
            maxBuildings: 'see specials',
            maxLevel: 0,
            special:
                'Nombre de stations max : nombre de bâtiments divisé par 25.',
            startPersonnel: 0,
            startVehicles: [],
            schoolingTypes: ['Secours'],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        6: {
            caption: 'Poste de police',
            color: '#007700',
            coins: 35,
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cellule de prison',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                },
                ...new Array(9).fill({
                    caption: 'Plus de cellules',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                }),
            ],
            levelcost: ['1. 10.000', '2. 50.000', '3.-14. 100.000'],
            maxBuildings: '1700 postes de police/gendarmerie',
            maxLevel: 14,
            startPersonnel: 2,
            startVehicles: ['Véhicule de patrouille'],
            schoolingTypes: ['Poste de police'],
            maxBuildingsFunction: (): number => 1_700,
        },
        7: {
            caption: 'Centre de Traitement des Appels',
            color: '#24c3ae',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 'Un CTA tous les 25 batiments',
            maxLevel: 0,
            special: 'Le CTA est le centre administratif.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                Math.floor(buildingsAmountTotal / 25) + 1,
        },
        8: {
            caption: 'École de Gendarmerie',
            color: '#225522',
            coins: 50,
            credits: 500_000,
            extensions: [
                ...new Array(3).fill({
                    caption: 'Plus de salles de cours',
                    credits: 400_000,
                    coins: 40,
                    duration: '7 jours',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Aucune limite',
            maxLevel: 0,
            special:
                "Le chef des finances et les administrateurs peuvent améliorer le bâtiment grâce à la banque d'alliance.Les chefs de formation et les administrateurs peuvent lancer des formations.",
            startPersonnel: 0,
            startVehicles: [],
        },
        13: {
            caption: 'Forces aériennes de la Gendarmerie nationale',
            color: '#148423',
            coins: 50,
            credits: 1_000_000,
            extensions: [],
            levelcost: ['1. 1.000.000 crédits / 50 pièces'],
            maxBuildings: 'see specials',
            maxLevel: 1,
            special:
                "Attention : Vous ne pouvez construire un maximum de 25 héliports de Gendarmerie. Il n'y a pas de différence si vous construisez un nouveau bâtiment ou une nouvelle extension. (Plus vous construisez de bâtiments et plus vous pourrez construire d'héliports).",
            startPersonnel: 3,
            startVehicles: [],
            schoolingTypes: ['Poste de police'],
            maxBuildingsFunction: (buildingsAmountTotal: number): number =>
                buildingsAmountTotal < 125
                    ? 4
                    : Math.floor(buildingsAmountTotal / 25),
        },
        14: {
            caption: 'Centre de Regroupement des Moyens',
            coins: 0,
            credits: 0,
            extensions: [],
            levelcost: [],
            maxBuildings: 1,
            maxLevel: 0,
            special:
                'Vous pouvez construire la zone intermédiaire gratuitement. Celle-ci agit comme une plateforme et vous permet de stationner et déployer temporairement vos unités. Elle disparaît après 24 heures. Veuillez sélectionner la ou les unités que vous souhaitez déployer ici.',
            startPersonnel: 0,
            startVehicles: [],
            maxBuildingsFunction: (): number => 1,
        },
        16: {
            caption: 'Prison',
            coins: 'x',
            credits: 100_000,
            extensions: [
                {
                    caption: 'Cellule de prison',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                },
                ...new Array(9).fill({
                    caption: 'Plus de cellules',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                }),
            ],
            levelcost: [],
            maxBuildings: 'Aucune limite',
            maxLevel: 0,
            special:
                "Ce bâtiment ne peut être construit que par le chef des finances ou des administateurs avec les crédits de la banque d'alliance. Les cellules sont disponibles pour tous les membres de l'alliance.",
            startPersonnel: 0,
            startVehicles: [],
        },
        18: {
            caption: 'Centre de Première Intervention',
            color: '#aa1111',
            coins: 25,
            credits: 50_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                "Ceci est une petite caserne. Si vous souhaitez construire des extensions ou augmenter le nombre d'emplacements de véhicules, vous devez l'améliorer pour en faire une caserne ordinaire. Ce processus prend 24 heures.",
            ],
            maxBuildings: '5.000 casernes de pompiers',
            maxLevel: 5,
            special:
                'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>100.000+(200.000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
            startPersonnel: 10,
            startVehicles: ['FPT', 'FPTL'],
            schoolingTypes: ['Centre de secours'],
            maxBuildingsFunction: (): number => 5_000,
        },
        19: {
            caption: 'Poste de police (petit)',
            color: '#116611',
            coins: 25,
            credits: 50_000,
            extensions: [
                {
                    caption: 'Cellule de prison',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                },
                ...new Array(1).fill({
                    caption: 'Plus de cellules',
                    credits: 25_000,
                    coins: 5,
                    duration: '7 jours',
                }),
            ],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-4. 100.000',
                'Ceci est un petit poste de police. Si vous souhaitez l’agrandir ou bâtir davantage d’extensions, vous devez le reconstruire pour en faire un poste de police ordinaire. Ce processus prend 24 heures.',
            ],
            maxBuildings: '1700 postes de police/gendarmerie',
            maxLevel: 4,
            special:
                'Le prix de vos postes augmente lorsque vous en possédez 25. Ainsi, le rythme de progression est constant une fois que vous possédez un grand flux de revenus à ces niveaux de jeu. La formule actuelle pour calculer le prix des postes est la suivante : <code>100.000+(200.000*LOG<sub>2</sub>(Number of existing fire stations − 22))</code>.',
            startPersonnel: 2,
            startVehicles: ['Véhicule de patrouille'],
            schoolingTypes: ['Poste de police'],
            maxBuildingsFunction: (): number => 1_700,
        },
        20: {
            caption: 'Poste Ambulancier (petit)',
            color: '#eeb611',
            coins: 25,
            credits: 100_000,
            extensions: [],
            levelcost: [
                '1. 10.000',
                '2. 50.000',
                '3.-5. 100.000',
                'Ceci est un petit Poste Ambulancier. Si vous souhaitez l’agrandir ou bâtir davantage d’extensions, vous devez le reconstruire pour en faire un Poste Ambulancier ordinaire. Ce processus prend 24 heures.',
            ],
            maxBuildings: 'Aucune limite',
            maxLevel: 5,
            special: '',
            startPersonnel: 3,
            startVehicles: ['UMH'],
            schoolingTypes: ['Secours'],
        },
    },
    buildingCategories: {
        Pompiers: {
            buildings: [0, 1, 18],
            color: '#ff2d2d',
        },
        Ambulances: {
            buildings: [2, 3, 4, 5, 20],
            color: '#ffa500',
        },
        Police: {
            buildings: [6, 8, 13, 19],
            color: '#00ac00',
        },
        Autre: {
            buildings: [7, 14],
            color: '#02a18c',
        },
    },
    vehicleCategories: {
        Incendie: {
            vehicles: {
                ['Fourgon dìncendie']: [0, 1, 12, 13],
                ['Échelles']: [2, 15],
                ['Véhicules spéciaux']: [4, 6, 7, 10, 14, 31, 36, 37, 38],
                'Chefs de groupe': [3, 11],
                'Ambulance': [25, 26],
                'Nautique': [16, 17],
                ['Feux de Forêt']: [21, 22, 23, 24, 32, 33, 34, 35],
            },
            color: '#ff2d2d',
        },
        Ambulances: {
            vehicles: {
                Ambulances: [5, 27, 28, 29, 30],
                Dragon: [9],
            },
            color: '#ffa500',
        },
        Police: {
            vehicles: {
                ['Véhicule de patrouille']: [8],
                ['Unité motocycliste']: [20],
                Choucas: [18],
                ['Équipe cynophile']: [19],
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
        '19_0',
        '19_1',
    ],
    bedBuildings: [4],
    schoolBuildings: [1, 3, 8],
    dispatchCenterBuildings: [7],
    schoolings: {
        'Centre de secours': [
            {
                caption: 'Véhicules risques chimiques',
                duration: '3 jours',
                staffList: 'Véhicules risques chimiques',
            },
            {
                caption: 'Commandement mobile',
                duration: '5 jours',
                staffList: 'VPC',
            },
            {
                caption: 'Formation SSLIA',
                duration: '3 jours',
            },
            {
                caption: 'SAV (Sauvetage Aquatique)',
                duration: '3 jours',
            },
            {
                caption: 'Navigation maritime',
                duration: '5 jours',
            },
            {
                caption: 'IMP (Intervention en Milieu Périlleux)',
                duration: '4 jours',
                staffList: 'Spécialiste IMP',
            },
            {
                caption: 'PLG (Plongeur)',
                duration: '5 jours',
                staffList: 'PLG (Plongeur)',
            },
            {
                caption: 'Médecin',
                duration: '5 jours',
                staffList: 'Médecin urgentiste',
            },
        ],
        'Secours': [
            {
                caption: 'DSM',
                duration: '7 jours',
                staffList: 'Chef du pôle urgences',
            },
            {
                caption: 'Médecin',
                duration: '5 jours',
                staffList: 'Médecin urgentiste',
            },
        ],
        'Poste de police': [
            {
                caption: 'Licence de Pilote',
                duration: '7 jours',
                staffList: 'Aviation policière',
            },
            {
                caption: 'Maître chien',
                duration: '5 jours',
                staffList: 'Brigade canine',
            },
            {
                caption: 'Formation Motocycliste',
                duration: '3 jours',
                staffList: 'Policier motocycliste',
            },
        ],
    },
    amount: 'Quantité',
    search: 'Rechercher',
    alliance: 'Alliance',
    premiumNotice: 'Compte premium de Opérateur112 nécessaire.',
    credits: 'Crédits',
    close: 'Fermer',
    fullscreen: {
        expand: 'Active le mode plein écran',
        compress: 'désactive le mode plein écran',
    },
    hideTitle: 'Montrer titre | Cacher titre',
    vehicle: 'Véhicules | Véhicule | Véhicules',
    building: 'Bâtiments',
    station: 'Casernes | Caserne | Casernes',
    distance: 'Distance | Distances',
    vehicleType: 'Type de véhicule',
    noOptions: 'Sorry, no matching options.',
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
        'graduation-cap',
        'ambulance',
        '',
        'hospital',
        'helicopter',
        'shield-alt',
        'rss',
        'graduation-cap',
        '',
        '',
        '',
        '',
        'helicopter',
        'rss',
        '',
        'shield-alt',
        '',
        'fire',
        'shield-alt',
        'ambulance',
    ],
    pois: [
        'Parc',
        'Lac',
        'Hôpital',
        'Forêt',
        'Arrêt de bus',
        'Arrêt de tram',
        'Gare ferroviaire (trajets régionaux)',
        'Gare ferroviaire (trajets régionaux et grandes lignes)',
        'Gare de marchandises',
        'Supermarché (petit)',
        'Supermarché (grand)',
        'Station-service',
        'École',
        'Musée',
        'Centre commercial',
        'Garage automobile',
        'Sortie d’autoroute',
        'Marché de Noël',
        'Hangar',
        'Discothèque',
        'Stade',
        'Ferme',
        'Bureaux',
        'Piscine',
        'Passage à niveau',
        'Théâtre',
        'Fête foraine',
        'Rivière',
        'Petit aéroport (piste)',
        'Grand aéroport (piste)',
        'Terminal d’aéroport',
        'Banque',
        'Entrepôt',
        'Pont',
        'Restauration rapide',
        'Port de fret',
        'Centre de recyclage',
        'Tour',
        'Quai de navire de croisière',
        'Marina',
        'Passage à niveau',
        'Tunnel',
        'Entrepôt frigorifique',
        'Centrale électrique',
        'Usine',
        'Casse',
        'Station de métro',
        'Petite citerne de produits chimiques',
        'Grande citerne de produits chimiques',
        'Hôtel',
        'Bar',
        'Décharge',
        'Parking couvert',
        'Silo',
        'Eolienne',
        'Voie navigable',
        'Camping',
        'Atelier de menuiserie',
        'Centre-ville',
        'Colline',
        'Quai',
        'Terrain de jeux',
        'Circuit de cross',
        'Résidence Protégée',
        'Falaise',
        'Raffinerie de pétrole',
    ],
    only_alliance_missions: [57, 74],
    transfer_missions: [325, 326],
};
