import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from '../Shop.module.scss';

import type { ManufacturerProps } from './Manufacturers.d';

export default function Manufacturer(props: ManufacturerProps) {
    const {
        id,
        manufacturerData,
        count,
        handleClick
    } = props;

    const onClick = () => {
        handleClick(id);
    };

    return (
        <div 
            onClick={onClick}
        >
            <div>{manufacturerData.label}</div>
            <div>{manufacturerData.coinsPerSecond}</div>
            <div>{manufacturerData.price}</div>
            <div>{count}</div>
        </div>
    );
}