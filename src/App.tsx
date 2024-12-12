import { useState, useEffect, useMemo, useReducer } from 'react';

// import classNames from 'classnames';
// import styles from './App.module.scss';

import Playground from './features/Playground/Playground';
import Shop from './features/Shop/Shop';

import { manufacturersData } from './features/Shop/manufacturersData';
import { manufacturersReducer } from './features/Shop/manufacturersReducer';

function App() {
    const [coins, setCoins] = useState(0);
    const [coinsPerClick, setCoinsPerClick] = useState(1);
    const [manufacturers, dispatchManufacturers] = useReducer(
        manufacturersReducer, 
        new Array()
    );

    const coinsPerSecond = useMemo(() => {
        if (manufacturers) {
            return manufacturers.reduce((coinsPerSecond, manufacturer) => {
                return coinsPerSecond += 
                    manufacturersData[manufacturer.id].coinsPerSecond * 
                    manufacturer.count;
            }, 0)
        }
    }, [manufacturers]);

    useEffect(() => {
        if (manufacturers) {
            const intervalID = setInterval(() => {
                setCoins((prevCoins: any) => prevCoins + coinsPerSecond);
            }, 1000);
    
            return () => {
                clearInterval(intervalID);
            }
        }
    }, [manufacturers]);

    return (
        <main>
            <Shop 
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

export default App;
