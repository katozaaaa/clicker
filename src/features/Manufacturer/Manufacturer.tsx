import classNames from 'classnames';
import styles from './Manufacturer.module.scss'; 
import type { 
    ManufacturerData,
    ManufacturersData
 } from '../../data';

export interface ManufacturerProps {
    readonly id: keyof ManufacturersData,
    readonly manufacturerData: ManufacturerData,
    readonly count: number,
    readonly price: number,
    readonly handleClick: (id: keyof ManufacturersData, price: number) => void,
    readonly isAvailable: boolean
}

export const Manufacturer = (props: ManufacturerProps) => {
    const {
        id,
        manufacturerData,
        count,
        price,
        handleClick,
        isAvailable,
    } = props;

    const onClick = () => {
        if (isAvailable) {
            handleClick(id, price);
        }
    };

    return (
        <div 
            onClick={onClick}
            className={
                classNames(
                    styles.Manufacturer,
                    isAvailable && styles['Manufacturer--available'],
                )
            }
        >
            <div className={classNames(styles['Manufacturer__inner-wrapper'])}>
                <div className={classNames(styles['Manufacturer__head'])}>
                    <div className={classNames(styles['Manufacturer__label'])}>
                        {manufacturerData.label}
                    </div>
                    <div className={classNames(styles['Manufacturer__coins-per-second'])}>
                        Монет в секунду: {manufacturerData.coinsPerSecond}
                    </div>
                </div>
                <div className={classNames(styles['Manufacturer__price'])}>
                    Цена: {price}
                </div>
                <div className={classNames(styles['Manufacturer__count'])}>
                    Приобретено: {count}
                </div>
            </div>
        </div>
    );
}