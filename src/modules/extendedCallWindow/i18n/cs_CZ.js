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
            kdow_orgl: 'inspektor provozu',
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
        vehicle: 'Typ vozidla',
        missing: 'Chybí na zásahu',
        driving: 'Na cestě',
        total: 'Potřeba doposlat',
        selected: 'Vybrané',
        vehiclesByRequirement: {
            [/^CAS$/]: [0, 1],
            [/^AP nebo AZ$/]: [2, 10],
            [/^VEA$/]: [3, 17],
            [/^[Tt]echnický(ch)? automobil(ů)?$/]: [4],
            [/^Protiplynový automobil$/]: [16],
            [/^Mobilní operační středisk[oa]$/]: [17],
            [/^Vozidel pro práci s nebezpečnými látkami$/]: [7],
            [/^KHA$/]: [6],
            [/^Sanitka$/]: [5],
            [/^Vrtulník LZS$/]: [9],
            [/^[Hh]lídkový vůz$/]: [8, 14],
            [/^Policejní(ch)? vrtulník(ů)?$/]: [11],
            [/^URNA$/]: [12, 15],
            [/^Kynolog(ové)? Policie$/]: [13],
            [/^Vozidl[oa] vyšetřovatelů DN$/]: [18],
            [/^Vozid(lo|el) pyrotechik[aů] PČR$/]: [19],
            [/^Přívěs(y)? se člunem$/]: [20, 21], 
            [/^Potápěčsk(ý(ch)?|é) automobil[yů]?$/]: [22],
            [/^SUV VZS ČČK nebo Dodávka VZS ČČK$/]: [23, 24], 
            [/^Inspekto(r|ři|rů) provozu$/]: [26], 
            
        },
    },
    tailoredTabs: {
        allTab: 'Vše',
        occupiedTab: 'Další mise',
    },
    hideVehicleList: {
        show: 'Zobrazit seznam vozidel',
        hide: 'Skrýt seznam vozidel',
    },
};
