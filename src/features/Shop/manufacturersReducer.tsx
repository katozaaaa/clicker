export const manufacturersReducer = (manufacturers: any, action: any) => {
    switch(action.type) {
        case 'added': {
            return [
                ...manufacturers,
                {
                    id: action.id,
                    count: 1,
                }
            ];
        }
        
        case 'increased': {
            return manufacturers.map((manufacturer: any) => {
                if (manufacturer.id === action.id) {
                    return {
                        ...manufacturer,
                        count: manufacturer.count + 1,
                    };
                }

                return manufacturer;
            });
        }
    }
}