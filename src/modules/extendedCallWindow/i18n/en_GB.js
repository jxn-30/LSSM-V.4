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
            hlf_only: 'Rescue Pump',
            elw: 'Fire Officer',
            elw2: 'Incident Command and Control Unit',
            dlk: 'Aerial Appliance Truck',
            rtw: 'Ambulance',
            rw: 'Rescue Support Unit or Rescue Pump',
            fly_car: 'Rapid Response Vehicle',
            coresponder: 'Co-Responder Vehicle',
            joint_response_unit: 'Joint Response Unit',
            gwa: 'Breathing Apparatus Support Unit',
            gwl2wasser: 'Water Carrier',
            gwgefahrgut: 'HazMat Unit',
            rth_only: 'HEMS',
            kdow_orgl: 'Operational Team Leader',
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
        selected: 'Selected',
        vehiclesByRequirement: {
            [/^Fire engine(s)?$/]: [0, 1, 16, 17],
            [/^Aerial Appliance Trucks?$/]: [2, 17],
            [/^Fire Officer(s)?$/]: [3, 15],
            [/^Rescue Support Unit or Rescue Pump?$/]: [4, 16],
            [/^Breathing Apparatus Support Unit$/]: [14],
            [/^Water Carrier(s)?$/]: [6],
            [/^Incident Command and Control Unit(s)?$/]: [15],
            [/^HazMat Unit(s)$/]: [7],
            [/^Ambulance(s)?$/]: [5],
            [/^Police car(s)?$/]: [8, 12],
            [/^HEMS$/]: [9],
            [/^Policehelicopter(s)?$/]: [11],
            [/^Armed Response$/]: [13, 25],
            [/^Dog Support Units? \(DSUs?\)$/]: [12],
            [/^Operational Team Leader(s)?$/]: [20],
            [/^Traffic Car(s)?$/]: [24, 25],
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
