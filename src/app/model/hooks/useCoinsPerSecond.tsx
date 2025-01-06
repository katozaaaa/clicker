import { useMemo } from 'react';
import { catalogData } from '../../../entities';
import type { ProductsState, CategoryData, ProducerData } from '../../../entities';

export const useCoinsPerSecond = (producers: ProductsState) => {
    const categoryData = Object.values<CategoryData>(catalogData).find((categoryData) => {
        return categoryData.id === 'producers_cat';
    }) as CategoryData;
    const producersData = categoryData.products as { [index: string | number]: ProducerData };   

    const coinsPerSecond = useMemo(() => {
        if (producers) {
            return producers.reduce((coinsPerSecond, producer) => {
                const producerData = Object.values<ProducerData>(producersData).find((producerData) => {
                    return producer.id === producerData.id;
                }) as ProducerData;

                return coinsPerSecond += 
                    producerData.coinsPerSecond * 
                    producer.count;
            }, 0);
        }
    }, [producers]);

    return coinsPerSecond || 0;
}