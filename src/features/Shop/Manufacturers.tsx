import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Shop.module.scss';

import Manufacturer from './Manufacturer.tsx';

export default function Manufacturers(props: any) {
    const {
        manufacturers, 
        dispatchManufacturers,
        manufacturersData
    } = props;

    const handleClick = (id: number) => {
        const isInManufacturers = manufacturers.some((manufacturer: any) => {
            return manufacturer.id === id;
        });

        dispatchManufacturers({
            type: isInManufacturers ? 'increased' : 'added',
            id: id,
        });
    }

    const manufacturerNodes = Object.entries(manufacturersData).map(
        ([id, manufacturerData]) => {
            const count = manufacturers.find((manufacturer: any) => {
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