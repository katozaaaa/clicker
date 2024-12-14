import { useState, useEffect, useMemo, useReducer } from 'react';

import Playground from './features/Playground/Playground';
import Shop from './features/Shop/Shop';

import type { ManufacturerState } from './features/Shop/Manufacturers/Manufacturers.d';

import { manufacturersData } from './features/Shop/Manufacturers/manufacturersData';
import { manufacturersReducer } from './features/Shop/Manufacturers/manufacturersReducer';

export default function App() {
    const [coins, setCoins] = useState(0);
    const [coinsPerClick, setCoinsPerClick] = useState(1);
    const [manufacturers, dispatchManufacturers] = useReducer(
        manufacturersReducer, 
        new Array<ManufacturerState>()
    );

    const coinsPerSecond = useMemo(() => {
        if (manufacturers) {
            return manufacturers.reduce((coinsPerSecond, manufacturer) => {
                return coinsPerSecond += 
                    manufacturersData[manufacturer.id].coinsPerSecond * 
                    manufacturer.count;
            }, 0);
        }
    }, [manufacturers]);

    useEffect(() => {
        if (manufacturers) {
            const intervalID = setInterval(() => {
                setCoins((prevCoins: any) => prevCoins + coinsPerSecond);
            }, 1000);
    
            return () => {
                clearInterval(intervalID);
            };
        }
    }, [manufacturers]);

    return (
        <main>
            <Shop
                coins={coins}
                setCoins={setCoins}
                manufacturers={manufacturers}
                dispatchManufacturers={dispatchManufacturers}
                manufacturersData={manufacturersData}
            />
            <Playground 
                coins={coins} 
                setCoins={setCoins} 
                coinsPerClick={coinsPerClick}
            />
        </main>
    );
}