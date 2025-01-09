import { Controls } from '../Controls/Controls';
import { Playground } from '../Playground/Playground';
import { useProductsReducer } from '../../../entities';
import { useDispatchCoins } from '../../../shared';
import { useCoinsPerSecond } from '../../model/hooks/useCoinsPerSecond';
import { useIncreaseCoinsPerSecond } from '../../model/hooks/useIncreaseCoinsPerSecond';
import { useCoinsPerClick } from '../../model/hooks/useCoinsPerClick';

export const AppStateProvider = () => {
    const dispatchCoins = useDispatchCoins();
    const [producers, dispatchProducers] = useProductsReducer();
    const [improvements, dispatchImprovements] = useProductsReducer();

    const coinsPerSecond = useCoinsPerSecond(producers, improvements);
    useIncreaseCoinsPerSecond(producers, improvements, coinsPerSecond, dispatchCoins);

    const coinsPerClick = useCoinsPerClick(improvements);

    const productStates = {
        'producers_cat': {
            products: producers,
            dispatchProducts: dispatchProducers,
        },
        'improvements_cat': {
            products: improvements,
            dispatchProducts: dispatchImprovements,
        }
    }

    return (
        <>
            <Controls
                productStates={productStates}
            />
            <Playground 
                coinsPerClick={coinsPerClick}
                coinsPerSecond={coinsPerSecond}
            />
        </>
    );
}