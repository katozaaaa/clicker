import { useMemo } from 'react';
import { getProductData } from '../../../entities';
import type { 
    ProducerData,
    ImprovementData,
    ProductsState,
} from '../../../entities';

type UseCoinsPerSecond = (
    producers: ProductsState,
    improvements: ProductsState,
) => number;

export const useCoinsPerSecond: UseCoinsPerSecond = (producers, improvements) => {
    const coinsPerSecond = useMemo(() => {
        if (producers) {
            return producers.reduce((coinsPerSecond, producer) => {
                const producerData = getProductData(
                    (categoryData) => {
                        return categoryData.id === 'producers_cat';
                    },
                    (producerData) => {
                        return producerData.id === producer.id ;
                    }
                ) as ProducerData;
                
                const improvementData = getProductData(
                    (categoryData) => {
                        return categoryData.id === 'improvements_cat';
                    },
                    (improvementData) => {
                        if ('improvedProducer' in improvementData) {
                            return improvementData.improvedProducer === producer.id;
                        }
                        
                        return false;
                    }
                ) as ImprovementData;

                const improvementCount = improvements.find((improvement) => {
                    return improvement.id === improvementData.id;
                })?.count ?? 0;

                return coinsPerSecond += 
                    producerData.coinsPerSecond * 
                    producer.count * Math.pow(2, improvementCount);
            }, 0);
        }
    }, [producers, improvements]);

    return coinsPerSecond || 0;
}