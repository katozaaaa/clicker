import { useEffect } from "react";
import type { ProductsState } from "../../../entities";
import type { CoinsReduceAction } from "../../../shared";

type UseIncreaseCoinsPerSecond = (
    producers: ProductsState,
    improvements: ProductsState,
    coinsPerSecond: number,
    dispatchCoins: React.Dispatch<CoinsReduceAction>
) => void;

export const useIncreaseCoinsPerSecond: UseIncreaseCoinsPerSecond = (
        producers,
        improvements,
        coinsPerSecond, 
        dispatchCoins
    ) => {
        useEffect(() => {
            if (producers && producers.length !== 0) {
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
        }, [producers, improvements]);
    }