export default {
    namespaced: true,
    state: {
        buildingCooldown: new Date().getTime(),
        buildings: [],
        vehiclesCooldown: new Date().getTime(),
        vehicles: [],
    },
    mutations: {
        setBuildings(state, buildings) {
            state.buildings = buildings;
        },
        setBuildingCooldown(state) {
            state.buildingCooldown = new Date().getTime() + 5 * 60 * 1000; // 5 mins
        },
        setVehicles(state, vehicles) {
            state.vehicles = vehicles;
        },
        setVehicleCooldown(state) {
            state.vehiclesCooldown = new Date().getTime() + 5 * 60 * 1000; // 5 mins
        },
        setVehicleState(state, { id, fms, fms_real }) {
            const vehicle = state.vehicles.find(x => x.id === id);
            if (!vehicle) return;
            vehicle.fms_show = fms;
            vehicle.fms_real = fms_real;
        },
    },
    getters: {
        buildingsByType(state) {
            let types = {};
            state.buildings.forEach(building => {
                if (!types.hasOwnProperty(building.building_type))
                    types[building.building_type] = [];
                types[building.building_type].push(building);
            });
            return types;
        },
        buildingById: state => buildingId =>
            state.buildings.find(x => x.id === buildingId),
        vehiclesByType(state) {
            let types = {};
            state.vehicles.forEach(vehicle => {
                if (!types.hasOwnProperty(vehicle.vehicle_type))
                    types[vehicle.vehicle_type] = [];
                types[vehicle.vehicle_type].push(vehicle);
            });
            return types;
        },
        vehiclesAtBuilding: state => buildingId =>
            state.vehicles.filter(v => v.building_id === buildingId),
        vehicleById: state => vehicleId =>
            state.vehicles.find(x => x.id === vehicleId),
    },
    actions: {
        buildings: async ({ state, commit, dispatch }) => {
            if (new Date().getTime() > state.buildingCooldown) {
                const buildings = await dispatch('request', {
                    url: '/api/buildings',
                }).then(res => res.json());
                commit('setBuildings', buildings);
                commit('setBuildingCooldown');
                return buildings;
            }
            return state.buildings;
        },
        vehicles: async ({ state, commit, dispatch }) => {
            if (new Date().getTime() > state.vehiclesCooldown) {
                const vehicles = await dispatch('request', {
                    url: '/api/vehicles',
                }).then(res => res.json());
                commit('setVehicles', vehicles);
                commit('setVehicleCooldown');
                return vehicles;
            }
            return state.vehicles;
        },
        request({ rootState, dispatch }, { input, url = '', init }) {
            input &&
                url &&
                dispatch(
                    'console/warn',
                    [
                        `Request was initialized with both, input and URL, input object will be used!`,
                        'input:',
                        input,
                        'URL:',
                        url,
                    ],
                    {
                        root: true,
                    }
                );
            init = init || {};
            init.headers = init.headers || {};
            init.headers.hasOwnProperty('X-LSS-Manager') &&
                dispatch(
                    'console/warn',
                    [
                        `Request Header "X-LSS-Manager" with value ${JSON.stringify(
                            init.headers['X-LSS-Manager']
                        )} will be overwritten by ${JSON.stringify(
                            rootState.version
                        )}!`,
                    ],
                    {
                        root: true,
                    }
                );
            init.headers['X-LSS-Manager'] = rootState.version;
            return fetch(input || url, init);
        },
    },
};
