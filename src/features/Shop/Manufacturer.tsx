import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Shop.module.scss';

export default function Manufacturers(props: any) {
    const {
        id,
        manufacturerData,
        count,
        handleClick,
    } = props;

    const onClick = () => {
        handleClick(id);
    }

    return (
        <div 
            onClick={onClick}
        >
            <div>{manufacturerData.label}</div>
            <div>{manufacturerData.coinsPerSecond}</div>
            <div>{manufacturerData.price}</div>
            <div>{count}</div>
        </div>
    )
}