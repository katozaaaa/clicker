import type { ManufacturerReducer } from './Manufacturers.d';

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