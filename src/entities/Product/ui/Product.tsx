import classNames from 'classnames';
import styles from './Product.module.scss'; 

interface ProductProps {
    label: string,
    subtitle: string | number,
    count: string | number,
    price: string | number,
}

export const Product = (props: ProductProps) => {
    const {
        label,
        subtitle,
        count,
        price,
    } = props;

    return (
        <div className={classNames(styles.Product)}>
            <div className={classNames(styles['Product__head'])}>
                <div className={classNames(styles['Product__label'])}>
                    {label}
                </div>
                <div className={classNames(styles['Product__subtitle'])}>
                    {subtitle}
                </div>
            </div>
            <div className={classNames(styles['Product__bottom'])}> 
                <div className={classNames(styles['Product__price'])}>
                    Price: {price}
                </div>
                <div className={classNames(styles['Product__count'])}>
                    Purchased: {count}
                </div>
            </div>
        </div>
    );
}