import { useState } from 'react';
import { Controls } from '../Controls/Controls';
import { Playground } from '../Playground/Playground';
import { useProductsReducer } from '../../../entities';
import { useDispatchCoins, useCoinsPerSecond, useCoinsPerSecondEffect } from '../../../shared';

export const AppStateProvider = () => {
    const dispatchCoins = useDispatchCoins();
    const [coinsPerClick] = useState(1); // TODO: add the ability to increase the number of coins per click
    const [producers, dispatchProducers] = useProductsReducer();
    const [improvements, dispatchImporvements] = useProductsReducer();
    const coinsPerSecond = useCoinsPerSecond(producers);
    useCoinsPerSecondEffect(producers, coinsPerSecond, dispatchCoins);

    const productStates = {
        'producers_cat': {
            products: producers,
            dispatchProducts: dispatchProducers,
        },
        'improvements_cat': {
            products: improvements,
            dispatchProducts: dispatchImporvements,
        }
    }

    return (
        <>
            <Controls
                productStates={productStates}
            />
            <Playground 
                coinsPerClick={coinsPerClick}
            />
        </>
    );
}