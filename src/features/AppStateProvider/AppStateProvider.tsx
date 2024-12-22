import { useState } from 'react';
import { Shop } from '../Shop/Shop';
import { Playground } from '../Playground/Playground';

import { 
    useCoinsPerSecond,
    useCoinsPerSecondEffect, 
    useDispatchCoins, 
    useManufacturersReducer
} from "../../hooks";

export const AppStateProvider = () => {
    const dispatchCoins = useDispatchCoins();
    const [coinsPerClick, setCoinsPerClick] = useState(1);
    const [manufacturers, dispatchManufacturers] = useManufacturersReducer()

    const coinsPerSecond = useCoinsPerSecond(manufacturers);
    useCoinsPerSecondEffect(manufacturers, coinsPerSecond, dispatchCoins);

    return (
        <main>
            <Shop
                manufacturers={manufacturers}
                dispatchManufacturers={dispatchManufacturers}
            />
            <Playground 
                coinsPerClick={coinsPerClick}
            />
        </main>
    );
}