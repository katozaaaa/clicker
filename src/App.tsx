import { useState, useEffect, useMemo } from 'react';

// import classNames from 'classnames';
// import styles from './App.module.scss';

import Playground from './features/Playground/Playground';
import Shop from './features/Shop/Shop';

function App() {
    const [coins, setCoins] = useState(0);
    const [coinsPerClick, setCoinsPerClick] = useState(1);
    const [manufacturers, setManufacturers] = useState(new Array({coinsPerSecond: 15}))

    const coinsPerSecond = useMemo(() => {
        return manufacturers.reduce((coinsPerSecond, manufacturer) => {
            return coinsPerSecond += manufacturer.coinsPerSecond;
        }, 0)
    }, [manufacturers]);

    useEffect(() => {
        const intervalID = setInterval(() => {
            setCoins((prevCoins: any) => prevCoins + coinsPerSecond);
        }, 1000);

        return () => {
            clearInterval(intervalID);
        }
    }, [manufacturers]);

    return (
        <main>
            <Shop 
                manufacturers={manufacturers}
                setManufacturers={setManufacturers} 
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
