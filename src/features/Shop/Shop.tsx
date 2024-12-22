import classNames from 'classnames';
import styles from './Shop.module.scss';
import { Manufacturers } from '../Manufacturers/Manufacturers';
import type {
    ManufacturersState,
    ManufacturersReduceAction,
} from '../../reducers';

interface ShopProps {
    readonly manufacturers: ManufacturersState,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
}

export const Shop = (props: ShopProps) => {
    const {
        manufacturers, 
        dispatchManufacturers,
    } = props;

    return (
        <div className={classNames(styles.Shop)}>
            <Manufacturers
                manufacturers={manufacturers} 
                dispatchManufacturers={dispatchManufacturers}
            />
        </div>
    );
}