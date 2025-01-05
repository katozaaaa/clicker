import classNames from 'classnames';
import styles from './Manufacturers.module.scss';
import { manufacturersData } from "../../data";
import { Manufacturer } from '../Manufacturer/Manufacturer';
import { useCoins, useDispatchCoins } from '../../shared/hooks';
import type { ManufacturersData } from "../../data";
import type { 
    ManufacturersState, 
    ManufacturersReduceAction 
} from "../../shared/reducers";

type ManufacturerData = typeof manufacturersData[0];

export interface ManufacturersProps {
    readonly manufacturers: ManufacturersState,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
}

export const Manufacturers = (props: ManufacturersProps) => {
    const {
        manufacturers, 
        dispatchManufacturers,
    } = props;

    const coins = useCoins();
    const dispatchCoins = useDispatchCoins();

    

    const manufacturerNodes = Object.entries<ManufacturerData>(manufacturersData).map(
        ([id, manufacturerData]) => {
            const count = manufacturers.find((manufacturer) => {
                    return manufacturer.id === id;
                })?.count ?? 0;

            const price = Math.floor(manufacturerData.price * Math.pow(1.15, count));
            const isAvailable = coins >= price;

            return (
                <Manufacturer 
                    key={id}
                    id={id}
                    manufacturerData={manufacturerData}
                    count={count}
                    price={price}
                    handleClick={handleClick}
                    isAvailable={isAvailable}
                />
            );
        }
    );

    return (
        <div className={classNames(styles.Manufacturers)}>
            {manufacturerNodes}
        </div>
    );
}