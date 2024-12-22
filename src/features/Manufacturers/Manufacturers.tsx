import classNames from 'classnames';
import styles from './Manufacturers.module.scss';
import { manufacturersData } from "../../data";
import { Manufacturer } from '../Manufacturer/Manufacturer';
import { useCoins, useDispatchCoins } from '../../hooks';
import type { ManufacturersData } from "../../data";
import type { 
    ManufacturersState, 
    ManufacturersReduceAction 
} from "../../reducers";

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

    const handleClick = (id: keyof ManufacturersData) => {
        const isInManufacturers = manufacturers.some((manufacturer) => {
            return manufacturer.id === id;
        });

        dispatchCoins({
            type: 'decreased',
            count: manufacturersData[id].price,
        })

        dispatchManufacturers({
            type: isInManufacturers ? 'increased' : 'added',
            id: id
        });
    };

    const manufacturerNodes = Object.entries<ManufacturerData>(manufacturersData).map(
        ([id, manufacturerData]) => {
            const count = manufacturers.find((manufacturer) => {
                return manufacturer.id === id;
            })?.count ?? 0;

            return (
                <Manufacturer 
                    key={id}
                    id={id}
                    manufacturerData={manufacturerData}
                    count={count}
                    handleClick={handleClick}
                    isAvailable={coins >= manufacturerData.price}
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