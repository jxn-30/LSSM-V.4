module.exports = {
    arrCounter: {
        resetTexts: {
            counter: 'ARR-Counter',
            highlight: 'ARR outline',
            selection: 'Vehicle selection',
            counter_highlight: 'ARR counter / outline',
            counter_selection: 'ARR counter and vehicle selection',
            highlight_selection: 'ARR outline and vehicle selection',
            counter_highlight_selection:
                'ARR counter / border and vehicle selection',
        },
        reset: '{text} reset',
    },
    arrHover: {
        reset: 'The vehicle selection is reset before!',
        titles: {
            set: 'So often this combination is selected when you press the ARR',
            attribute: 'The combination described in this line',
            free: 'So often this combination is available',
            max:
                'You can select this ARR until this combination is no longer available',
        },
        arrSpecs: {
            fire: 'Pumper or Light Tanker or Tanker',
            hlf_only: 'Rescue Pumper',
            elw: 'Support Vehicle',
            elw2: 'Mobile Command Vehicle',
            dlk: 'Turntable Ladders',
            rtw: 'Ambulance',
            rw: 'Rescue',
            gwa: 'BASU',
            gwl2wasser: 'Bulk Water Tanker',
            gwgefahrgut: 'HAZMAT Unit',
            rth_only: 'Air Ambulance',
            fustw: 'Patrol Car',
            police_motorcycle: 'Police Motorcycle',
            fustw_or_police_motorcycle: 'Police car or Police Motorcycle',
            polizeihubschrauber: 'Police helicopter',
            swat: 'TOG',
            swat_armored: 'TOG Armoured Vehicle',
            swat_suv: 'TOG SUV',
            k9: 'K-9 Unit',
            police_horse: 'Mounted Police',
            gw_wasserrettung: 'SES Vehicle',
            mzb: 'Rescue Boat',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Vehicle type',
        missing: 'Missing on mission',
        driving: 'En-route',
        total: 'Still needed',
        selected: 'Selected',
        vehiclesByRequirement: {
            [/^Fire engine(s)?$/]: [0, 1, 16, 17],
            [/^Turntable Ladder trucks?$/]: [2, 17],
            [/^Support Vehicle(s)?$/]: [3, 15],
            [/^Rescue?$/]: [4, 16],
            [/^BASU$/]: [14],
            [/^Water Carrier(s)?$/]: [6],
            [/^Mobile Command Vehicle(s)?$/]: [15],
            [/^HAZMAT Truck(s)$/]: [7],
            [/^Ambulance(s)?$/]: [5],
            [/^Police car(s)?$/]: [8, 12],
            [/^HEMS$/]: [9],
            [/^Police Helicopter(s)?$/]: [11],
            [/^TOG Vehicles$/]: [13, 25],
            [/^K-9 Unit(s)$/]: [12],
            [/^Mounted Police?$/]: [20],
            [/^SES Vehicle(s)?$/]: [],
        },
    },
    tailoredTabs: {
        defaultTabs: [
            {
                name: 'Firetruck',
                vehicleTypes: [0, 1, 12, 13, 19],
            },
            {
                name: 'Other Fire Apparatus',
                vehicleTypes: [
                    2,
                    3,
                    4,
                    6,
                    7,
                    10,
                    11
                ],
            },
            {
                name: 'Ambulance',
                vehicleTypes: [5, 9],
            },
            {
                name: 'Police',
                vehicleTypes: [8, 15, 16, 17, 18, 22],
            },
            {
                name: 'Water',
                vehicleTypes: [20, 21],
            },
        ],
        allTab: 'All',
        occupiedTab: 'Follow-up',
    },
    hideVehicleList: {
        show: 'Show vehicle list',
        hide: 'Hide vehicle list',
    },
};
