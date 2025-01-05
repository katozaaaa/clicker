import { useEffect } from "react";
import type { ManufacturersState, CoinsReduceAction  } from '../reducers';

type UseCoinsPerSecondEffect = (
    manufacturers: ManufacturersState,
    coinsPerSecond: number,
    dispatchCoins: React.Dispatch<CoinsReduceAction>
) => void;

export const useCoinsPerSecondEffect: UseCoinsPerSecondEffect = (
        manufacturers, 
        coinsPerSecond, 
        dispatchCoins
    ) => {
        useEffect(() => {
            if (manufacturers && manufacturers.length !== 0) {
                const intervalID = setInterval(() => {
                    dispatchCoins({
                        type: 'increased',
                        count: coinsPerSecond,
                    })
                }, 1000);

                return () => {
                    clearInterval(intervalID);
                };
            }
        }, [manufacturers]);
    }