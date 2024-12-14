import classNames from 'classnames';
import styles from './Shop.module.scss';

import type { ShopProps } from './Shop.d';

import Manufacturers from './Manufacturers/Manufacturers';

export default function Shop(props: ShopProps) {
    const {
        coins,
        setCoins,
        manufacturers, 
        dispatchManufacturers,
        manufacturersData
    } = props;

    return (
        <div className={classNames(styles.Shop)}>
            <Manufacturers
                coins={coins} 
                setCoins={setCoins}
                manufacturers={manufacturers} 
                dispatchManufacturers={dispatchManufacturers}
                manufacturersData={manufacturersData}
            />
        </div>
    );
}