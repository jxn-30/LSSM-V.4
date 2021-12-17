module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'ARR-Counter',
            highlight: 'ARR border',
            selection: 'Vehicle selection',
            counter_highlight: 'ARR counter / border',
            counter_selection: 'ARR counter and vehicle selection',
            highlight_selection: 'ARR border and vehicle selection',
            counter_highlight_selection:
                'ARR counter / border and vehicle selection',
        },
        reset: '{text} reset',
    },
    arrHover: {
        reset: 'The vehicle selection is reset before!',
        headers: {
            set: 'Set',
            attribute: 'Name',
            free: 'Free',
            max: 'Max',
        },
        titles: {
            set: 'So often this combination is selected when you press the ARR',
            attribute: 'The combination described in this line',
            free: 'So often this combination is available',
            max:
                'You can select this ARR until this combination is no longer available',
        },
        arrSpecs: {
            fire: 'Fire engines',
            lf_only: 'Water Ladder or L4P',
            hlf_only: 'Rescue Pump',
            elw: 'Fire Officer',
            elw2: 'ICCU',
            emergency_welfare_value: 'Any Crew Welfare Vehicle',
            foam: 'Foam Units',
            elw2_or_ab_elw: 'ICCU / ACU',
            elw1_or_elw2: 'Fire Officer or ICCU',
            dlk: 'Aerial Appliance Truck',
            rtw: 'Ambulance',
            rw: 'Rescue Support Unit or Rescue Pump',
            fly_car: 'Rapid Response Vehicle / General Practitioner',
            kdow_orgl_any: 'OTL / Ambulance Officer',
            coresponder: 'Co-Responder Vehicle',
            joint_response_unit: 'Joint Response Unit',
            gwa: 'Breathing Apparatus Support Unit',
            gwl2wasser: 'Water Carrier',
            gwgefahrgut: 'HazMat Unit or CBRN Vehicle',
            rth_only: 'HEMS',
            kdow_orgl: 'OTL',
            fustw: 'Police car',
            polizeihubschrauber: 'Police helicopter',
            swat_suv: 'Armed Response Vehicle (ARV)',
            k9: 'Dog Support Unit (DSU)',
            crew_carrier: 'Crew Carrier',
            any_traffic_car: 'Traffic Car',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Vehicle type',
        missing: 'Missing on mission',
        driving: 'En-route',
        total: 'Still needed',
        tip: {
            dragging: 'drag window',
            textMode: 'textmode on/off',
            minified: 'collapse',
            overlay: 'overlay',
            reload: 'reload',
            pushRight: 'show this box above vehicle list',
            pushLeft: 'show this box at original position',
        },
        selected: 'Selected',
        staff: {
            [/^Armed Response Personnel$/]: [13, 25],
            [/^more firefighters$/]: [
                0,
                1,
                2,
                3,
                4,
                6,
                7,
                14,
                15,
                16,
                17,
                18,
                23,
                26,
                35,
                36,
                37,
                38,
                39,
                40,
            ],
        },
        vehiclesByRequirement: {
            [/^Fire engine(s)?$/]: [0, 1, 16, 17, 26, 37, 38, 47],
            [/^Aerial Appliance Trucks?$/]: [2, 17],
            [/^Fire Officer(s)?$/]: [3, 15, 44],
            [/^Rescue Support Unit(s)? or Rescue Pump(s)?$/]: [4, 16, 43, 38],
            [/^BASU(s)?$/]: [14, 39, 46, 49],
            [/^Water Carrier(s)?$/]: [6, 26, 36, 41, 50],
            [/^ICCU or Ambulance Control Unit(s)?$/]: [15, 31, 44],
            [/^HazMat Unit(s)? or CBRN Vehicle(s)?$/]: [7, 32, 39, 48, 49],
            [/^Ambulance(s)?$/]: [5],
            [/^Police car(s)?$/]: [8, 12, 13, 19, 24, 25],
            [/^HEMS$/]: [9],
            [/^Policehelicopter(s)?$/]: [11],
            [/^Armed Response$/]: [13, 25],
            [/^Dog Support Units? \(DSUs?\)$/]: [12],
            [/^Operational Team Leader(s)?$/]: [20, 31],
            [/^Traffic Car(s)?$/]: [24, 25],
            [/^ATV Carrier(s)?$/]: [30],
            [/^Primary Response Vehicle(s)?$/]: [27],
            [/^Secondary Response Vehicle(s)?$/]: [28],
            [/^Welfare Vehicle(s)?$/]: [29, 39, 45, 49],
            [/^Ambulance Officer(s)?$/]: [34],
            [/^Foam Unit(s)?$/]: [35, 36, 37, 38, 42],
            [/^Mass Casualty Equipment?$/]: [33],
        },
    },
    tailoredTabs: {
        allTab: 'All',
        occupiedTab: 'Follow-up',
        vehicleMissing: {
            title:
                'One vehicle is not present in any tab | Several vehicles are not present in any tab',
            text:
                'The following vehicle types are only present in the "All" tab:',
            hide: 'Hide Note',
            close: 'Close Note till change',
        },
    },
    patientCollapse: {
        combis: 'Combinations',
        amount: 'Amount',
        summary: {
            total: 'patients',
            treated: 'being treated',
        },
    },
    hideVehicleList: {
        show: 'Show vehicle list',
        hide: 'Hide vehicle list',
    },
    vehiclePlayerCounter: {
        ' ': '',
        'driving': 'en Route',
        'atScene': 'at Scene',
        'total': 'Total',
        'vehicles': 'Vehicles',
        'players': 'Players',
    },
};
