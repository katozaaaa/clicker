import { useMemo } from 'react';
import type { ProductsState } from '../../../entities';

export const useCoinsPerClick = (improvements: ProductsState) => {
    return useMemo(() => {
        const countOfClickImprovements = improvements.find((improvement) => {
            return improvement.id === 'improvement-click_product';
        })?.count ?? 0;

        return Math.pow(2, countOfClickImprovements);
    }, [improvements]);
};