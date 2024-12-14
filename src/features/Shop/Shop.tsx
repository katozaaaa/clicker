import classNames from 'classnames';
import styles from './Shop.module.scss';

import type { 
    ManufacturerState, 
    ManufacturersReduceAction,
    ManufacturersData 
} from './Manufacturers/Manufacturers.d';

import Manufacturers from './Manufacturers/Manufacturers';

interface ShopProps {
    readonly manufacturers: Array<ManufacturerState>,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
    readonly manufacturersData: ManufacturersData,
}

export default function Shop(props: ShopProps) {
    const {
        manufacturers, 
        dispatchManufacturers,
        manufacturersData
    } = props;

    return (
        <div className={classNames(styles.Shop)}>
            <Manufacturers 
                manufacturers={manufacturers} 
                dispatchManufacturers={dispatchManufacturers}
                manufacturersData={manufacturersData}
            />
        </div>
    );
}