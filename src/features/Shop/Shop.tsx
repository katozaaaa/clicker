import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Shop.module.scss';

import Manufacturers from './Manufacturers';

export default function Shop(props: any) {
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