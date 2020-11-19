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
        titles: {
            set: 'So often this combination is selected when you press the ARR',
            attribute: 'The combination described in this line',
            free: 'So often this combination is available',
            max:
                'You can select this ARR until this combination is no longer available',
        },
        arrSpecs: {
            fire: 'Firetrucks',
            wasser_amount: 'Gallons of water',
            elw: 'Battalion Chief unit',
            elw2: 'Mobile Command Vehicle',
            dlk: 'Platform trucks',
            rtw: 'ALS Ambulance',
            ktw: 'BLS Ambulance',
            rw: 'Heavy rescue vehicle',
            fly_car: 'Fly-Car',
            rescueboat: 'Large Rescue Boat',
            fireboat: 'Large Fireboat',
            gwa: 'Mobile Air Unit',
            gwl2wasser: 'Water Tanker',
            gwgefahrgut: 'HazMat',
            arff: 'ARFF',
            hems: 'HEMS',
            kdow_orgl: 'EMS Chief',
            grtw: 'Mass Casualty Unit',
            fustw: 'Patrol Car',
            police_motorcycle: 'Police Motorcycle',
            fustw_or_police_motorcycle: 'Patrol car or Police Motorcycle',
            polizeihubschrauber: 'Police helicopter',
            swat: 'SWAT',
            swat_armored_vehicle: 'SWAT Armoured Vehicle',
            swat_suv: 'SWAT SUV',
            k9: 'k-9 Unit',
            gkw: 'Utility Truck',
            boot: 'Boats (General)',
            brush_vehicle: 'Wildland fire vehicle',
            brush_truck: 'Wildland fire engine',
            brush_truck_1: 'Type 3 engine',
            brush_truck_2: 'Type 5 engine',
            brush_truck_3: 'Type 7 engine',
            brush_truck_4: 'Type 4 engine',
            brush_truck_5: 'Type 6 engine',
            dozer_trailer: 'Dozer Trailer',
            fire_aviation: 'Fire aviation',
            water_drop_helicopter: 'Water drop helicopter',
            air_tanker: 'Air tanker',
            heavy_aur_tanker: 'Heavy air tanker',
            crew_carrier: 'Crew Carrier',
            fbi_unit: 'FBI Unit',
            fbi_investigation_unit: 'FBI Investigation Unit',
            fbi_mobile_command: 'FBI Mobile Command',
            fbi_bomb_tech: 'FBI Bomb Tech',
            fbi_drone: 'FBI Surveillance Drone',
            sheriff_unit: 'Sheriff Unit',
        },
    },
    enhancedMissingVehicles: {
        vehicle: 'Vehicle type',
        missing: 'Missing on mission',
        driving: 'En-route',
        total: 'Still needed',
        selected: 'Selected',
        vehiclesByRequirement: {
            [/^firetruck(s)?$/]: [0, 1, 13, 18, 30, 33],
            [/^platform truck(s)?$/]: [2, 13],
            [/^Battalion chief unit(s)?$/]: [3, 12],
            [/^Heavy Rescue Vehicle(s)?$/]: [4, 8, 18, 21],
            [/^Mobile Air Unit$/]: [6],
            [/^Water Tanker(s)?$/]: [7, 33],
            [/^Mobile Command Vehicle(s)?$/]: [12],
            [/^HazMat$/]: [9],
            [/^Ambulance(s)?$/]: [5, 27],
            [/^Patrol car(s)?$/]: [10],
            [/^HEMS$/]: [11],
            [/^Police helicopter(s)?$/]: [23],
            [/^SWAT Personells$/]: [16, 26],
            [/^SWAT$/]: [16, 26],
            [/^ARFF/]: [17],
            [/^K-9 Unit(s)?$/]: [19],
            [/^Large Fireboat(s)?$/]: [24],
            [/^Large Rescue boat(s)?$/]: [25],
            [/^Light Boat(s)?$/]: [25],
            [/^Wildland fire engine(s)?$/]: [30, 31, 32, 38, 39, 40],
            [/^Fire Aviation(s)?$/]: [35, 36, 37],
            [/^FBI Unit(s)?$/]: [42],
            [/^FBI Investigation wagon(s)?$/]: [43],
            [/^FBI Mobile Command Center(s)?$/]: [44],
            [/^FBI Bomb Technician Vehicle(s)?$/]: [45],
            [/^FBI Surveillance Drone(s)?$/]: [46],
            [/^Sheriff(s)?$/]: [47],
        },
    },
    tailoredTabs: {
        allTab: 'All',
        occupiedTab: 'Follow-up',
    },
    hideVehicleList: {
        show: 'Show vehicle list',
        hide: 'Hide vehicle list',
    },
};
