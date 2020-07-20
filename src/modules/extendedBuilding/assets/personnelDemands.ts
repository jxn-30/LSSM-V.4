import { InternalVehicle } from 'typings/Vehicle';

export default (LSSM: Vue): void => {
    const vehicles = Array.from(
        document.querySelectorAll('#vehicle_table tbody tr') as NodeListOf<
            HTMLTableRowElement
        >
    );

    const dataList = document.querySelector('.dl-horizontal');

    if (!dataList) return;

    const vehicleTypes = Object.values(
        LSSM.$t('vehicles')
    ) as InternalVehicle[];

    let sumMinPersonnel = 0;
    let sumMaxPersonnel = 0;

    let sumMinPersonnelS6 = 0;
    let sumMaxPersonnelS6 = 0;

    vehicles.forEach(vehicle => {
        const max = parseInt(vehicle.lastElementChild?.textContent || '0');
        const min =
            vehicleTypes[
                parseInt(
                    vehicle
                        .querySelector('[vehicle_type_id]')
                        ?.getAttribute('vehicle_type_id') || '-1'
                )
            ]?.minPersonnel || 0;
        sumMinPersonnel += min;
        sumMaxPersonnel += max;

        if (!vehicle.querySelector('.building_list_fms_6')) {
            sumMinPersonnelS6 += min;
            sumMaxPersonnelS6 += max;
        }
    });

    const personnelTitle = document.createElement('dt');
    const titleWrapper = document.createElement('strong');
    titleWrapper.textContent = LSSM.$t(
        `modules.${MODULE_ID}.personnelDemands.demand`
    ).toString();
    personnelTitle.append(titleWrapper);
    const personnelData = document.createElement('dd');
    personnelData.textContent = `min: ${sumMinPersonnel} (${sumMinPersonnelS6}) / max: ${sumMaxPersonnel} (${sumMaxPersonnelS6})`;
    const personnelAdditional = document.createElement('small');
    personnelAdditional.textContent = LSSM.$t(
        `modules.${MODULE_ID}.personnelDemands.additional`
    ).toString();
    personnelAdditional.style.marginLeft = '1ch';
    personnelData.append(personnelAdditional);
    dataList.append(personnelTitle, personnelData);

    console.log(
        sumMinPersonnel,
        sumMaxPersonnel,
        sumMinPersonnelS6,
        sumMaxPersonnelS6
    );
};
