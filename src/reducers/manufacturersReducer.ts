import type { ManufacturersData } from "../data";

export interface ManufacturerState {
    readonly id: keyof ManufacturersData,
    readonly count: number,
}

export type ManufacturersState = ManufacturerState[];

export interface ManufacturersReduceAction {
    readonly type: 'added' | 'increased',
    readonly id: keyof ManufacturersData,
}

export type ManufacturerReducer = (
    manufacturers: Array<ManufacturerState>, 
    action: ManufacturersReduceAction,
) => Array<ManufacturerState>

export const manufacturersReducer: ManufacturerReducer = (manufacturers, action) => {
    switch(action.type) {
    case 'added': {
        return [
            ...manufacturers,
            {
                id: action.id,
                count: 1
            }
        ];
    }
        
    case 'increased': {
        return manufacturers.map((manufacturer: any) => {
            if (manufacturer.id === action.id) {
                return {
                    ...manufacturer,
                    count: manufacturer.count + 1
                };
            }

            return manufacturer;
        });
    }
    default: {
        throw new Error('Unknown action: ' + action.type);
    }
    }
};