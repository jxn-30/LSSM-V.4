module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'Compteur de régulations',
            highlight: 'Surbrillance régulations',
            selection: 'Séléction de véhicules',
            counter_highlight: 'Compteur de régulations / surbrillance',
            counter_selection:
                'Compteur de régulations et séléction de véhicules',
            highlight_selection:
                'Surbrillance des régulations et séléction des véhicules',
            counter_highlight_selection:
                'Compteur de régulations / bordure et séléction de véhicules',
        },
        reset: '{text} remis à zéro',
    },
    arrHover: {
        reset: 'La séléction de véhicule est mise à zéro avant !',
        headers: {
            set: 'Sélectionner',
            attribute: 'Nom',
            free: 'Libre',
            max: 'Max',
        },
        titles: {
            set:
                "C'est le nombre de fois que cette régulations est sélectionnée lorsque vous appuiez sur ce bouton.",
            attribute: 'La régulations est décrite dans cette ligne',
            free: "C'est le nombre de fois où la régulation est disponible",
            max:
                "Vouc pouvez sélectionner cette régulation autant de fois que nécessaire, jusqu'à ce que la régulation ne soit plus disponible.",
        },
        arrSpecs: {
            boot: 'Bateaux (généraux)',
            brush_truck: 'CCF',
            brush_truck_1: 'CCFS',
            brush_truck_2: 'CCFM',
            brush_truck_3: 'CCFL',
            dlk: 'Moyen Elévateur Aérien',
            elw: 'Chef de groupe',
            elw2: 'Véhicule poste de commandement',
            elw3: 'VLHR',
            fire: 'Fourgons d’incendie',
            fly_car_any: 'VL SSSM / VLM',
            foam: 'FMOGP',
            fustw: 'Voiture de patrouille',
            fustw_or_police_motorcycle:
                'Véhicule de patrouille ou Unité motocycliste',
            gwa: "Véhicule d'Assistance Respiratoire",
            gkw: 'Véhicule Tout Usage',
            gwgefahrgut: 'Véhicules risques chimiques',
            gw_wasserrettung: 'VPL',
            gwl2wasser: 'Camion-citerne',
            gwhoehenrettung: 'VGRIMP',
            hlf_only: 'Véhicule de secours',
            hose: 'Camion dévidoir',
            hose_trucks: 'Camion dévidoir',
            k9: 'Brigade canine',
            ktw: 'Ambulance Type A',
            mzb: 'BLS',
            police_motorcycle: 'Unité motocycliste',
            polizeihubschrauber: 'Hélicoptère de police',
            pump: 'Motopompe',
            rth_only: 'Hélicoptère',
            rtw: 'ASSU',
            rw: 'Véhicule de secours routier',
            wasser_amount: "litres d'eau",
        },
    },
    generationDate: {
        inputFormat: 'DD MMMM, HH:mm',
    },
    enhancedMissingVehicles: {
        vehicle: 'Type de véhicule',
        missing: 'Manque sur la mission',
        driving: 'En approche',
        total: 'Manquant',
        tip: {
            dragging: 'glisser la fenêtre',
            textMode: 'mode texte on/off',
            minified: 'effondrement',
            overlay: 'superposition',
            reload: 'recharger',
            pushRight:
                'afficher cette case au-dessus de la liste des véhicules',
            pushLeft: 'montrer cette boîte à la position originale',
        },
        selected: 'Séléctionné',
        water: 'l d’eau',
        staffPrefix: ['Nous avons besoin de'],
        staff: {
            [/^pompier(s)? en plus$/]: [0, 1, 12, 13, 15, 32, 33, 34],
        },
        vehiclesByRequirement: {
            [/^fourgon(s)? d’incendie$/]: [0, 1, 12, 13, 15, 32, 33, 34],
            [/^Moyen(s)? Élévateur(s)? Aérien(s)?$/]: [2, 15],
            [/^Chef(s)? de [gG]roupe(s)?$/]: [3, 11, 24],
            [/^Véhicule(s)? de secours routier$/]: [4, 12, 13, 34],
            [/^ambulance(s)?$/]: [5, 25, 28],
            [/^camion(s)?-citerne(s)?$/]: [6, 21, 35],
            [/^véhicule(s)? risque(s)? technologique(s)?$/]: [7],
            [/^voiture(s)? de patrouille$/]: [8, 19, 20],
            [/^Hélicoptère(s)? de secours$/]: [9],
            [/^véhicule(s)? poste de commandement$/]: [11],
            [/^Véhicule(s) Tout Usage$/]: [13],
            [/^VGRIMP$/]: [14],
            [/^VPL$/]: [16],
            [/^BLS$/]: [17],
            [/^VLHR$/]: [24],
            [/^soutien(s)? aérien(s)? FAG$/]: [18],
            [/^CCF$/]: [21, 22, 23, 32, 33, 34, 35],
            [/^unité(s)? cynophile(s)?$/]: [19],
            [/^Unité(s)? motocycliste(s)?$/]: [20],
            [/^camion(s)? dévidoir(s)?$/]: [36, 37],
            [/^motopompe(s)?$/]: [37, 38],
            [/^FMOGP$/]: [35],
            [/^VAR$/]: [10],
            [/^VTP$/]: [31],
            [/^Directeur(s)? des Secours Médicaux$/]: [29],
        },
    },
    tailoredTabs: {
        allTab: 'Tout',
        occupiedTab: 'Poursuivre',
        vehicleMissing: {
            title:
                "Un véhicule n'est présent dans aucun onglet | Plusieurs véhicules ne sont présents dans aucun onglet",
            text:
                'Les types de véhicules suivants ne sont présents que dans l\'onglet "Tout" :',
            hide: 'Cacher la note',
            close: "Fermer Note jusqu'au changement",
        },
    },
    patientSummary: {
        oncePerMission: ['ASSU'],
    },
    patientCollapse: {
        combis: 'Combinaisons',
        amount: 'Nombre',
        summary: {
            total: 'patients',
            treated: 'en cours de traitement',
        },
    },
    hideVehicleList: {
        show: 'Afficher la liste des véhicules',
        hide: 'Cacher la liste des véhicules',
    },
    vehiclePlayerCounter: {
        ' ': '',
        'driving': 'En intervention',
        'atScene': 'Sur les lieux',
        'total': 'Total',
        'vehicles': 'Véhicules',
        'players': 'Joueurs',
    },
};
