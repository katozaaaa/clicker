import classNames from 'classnames';
import styles from './Producer.module.scss'; 

interface ProducerProps {
    label: string,
    coinsPerSecond: string | number,
    count: string | number,
    price: string | number,
}

export const Producer = (props: ProducerProps) => {
    const {
        label,
        coinsPerSecond,
        count,
        price,
    } = props;

    return (
        <div className={classNames(styles.Producer)}>
            <div className={classNames(styles['Producer__head'])}>
                <div className={classNames(styles['Producer__label'])}>
                    {label}
                </div>
                <div className={classNames(styles['Producer__coins-per-second'])}>
                    Coins per second: {coinsPerSecond}
                </div>
            </div>
            <div className={classNames(styles['Producer__bottom'])}> 
                <div className={classNames(styles['Producer__price'])}>
                    Price: {price}
                </div>
                <div className={classNames(styles['Producer__count'])}>
                    Purchased: {count}
                </div>
            </div>
        </div>
    );
}