import { useMemo } from 'react';
import { manufacturersData } from '../data';
import type { ManufacturersState } from '../reducers';

export const useCoinsPerSecond = (manufacturers: ManufacturersState) => {
    const coinsPerSecond = useMemo(() => {
        if (manufacturers) {
            return manufacturers.reduce((coinsPerSecond, manufacturer) => {
                return coinsPerSecond += 
                    manufacturersData[manufacturer.id].coinsPerSecond * 
                    manufacturer.count;
            }, 0);
        }
    }, [manufacturers]);

    return coinsPerSecond || 0;
}