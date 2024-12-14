import classNames from 'classnames';
import styles from '../Shop.module.scss';

import type { 
    ManufacturersProps, 
    ManufacturersData, 
    ManufacturerData 
} from './Manufacturers.d';

import Manufacturer from './Manufacturer';

export default function Manufacturers(props: ManufacturersProps) {
    const {
        manufacturers, 
        dispatchManufacturers,
        manufacturersData
    } = props;

    const handleClick = (id: keyof ManufacturersData) => {
        const isInManufacturers = manufacturers.some((manufacturer) => {
            return manufacturer.id === id;
        });

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