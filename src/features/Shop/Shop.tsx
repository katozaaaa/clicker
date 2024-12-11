import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Shop.module.scss';

import { manufacturersList } from './manufacturersList';

export default function Shop({manufacturers, setManufacturers}: any) {
    const addManufacturer = (addedManufacturer: any) => {
        let nextManufacturers;

        if (!manufacturers.includes(addedManufacturer)) {
            nextManufacturers = [
                ...manufacturers,
                addedManufacturer
            ]
        } else {
            nextManufacturers = manufacturers.map((manufacturer: any) => {
                return manufacturer.id === addedManufacturer.id ? 
                    {
                        ...manufacturer,
                        count: manufacturer.count + 1,
                    } : 
                    manufacturer;
            })
        }

        setManufacturers(nextManufacturers);
    }

    return (
        <div className={classNames(styles.Shop)}>

        </div>
    );
}