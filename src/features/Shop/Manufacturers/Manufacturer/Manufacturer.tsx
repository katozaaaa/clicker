import classNames from 'classnames';
import styles from './Manufacturer.module.scss';

import type { ManufacturerProps } from './Manufacturer.d';

export default function Manufacturer(props: ManufacturerProps) {
    const {
        id,
        manufacturerData,
        count,
        handleClick,
        isAvailable,
    } = props;

    const onClick = () => {
        if (isAvailable) {
            handleClick(id);
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
                    Цена: {manufacturerData.price}
                </div>
                <div className={classNames(styles['Manufacturer__count'])}>
                    Приобретено: {count}
                </div>
            </div>
        </div>
    );
}