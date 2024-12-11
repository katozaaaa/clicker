import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Playground.module.scss';

import ClickTrackers from './ClickTrackers';

export default function Playground({coins, setCoins, coinsPerClick}: any) {
    const [clickTrackers, setClickTrackers]: [any, any] = useState(new Array());
    let clickTrackersNextID = useRef(0);

    const onClick = (e: any) => {
        const nextID = clickTrackersNextID.current;

        const nextClickTrackers = [
            ...clickTrackers,
            {
                id: nextID,
                position: {
                    x: e.clientX,
                    y: e.clientY,
                },
                coins: coinsPerClick,
            }
        ]

        const removeFirstClickTracker = (prevClickTrackers: any) => {
            return prevClickTrackers.filter((clickTracker: any) => {
                return clickTracker.id !== nextID;
            });
        }

        setCoins((prevCoins: any) => prevCoins + 1);
        setClickTrackers(nextClickTrackers);
        setTimeout(setClickTrackers, 3000, removeFirstClickTracker);

        clickTrackersNextID.current++;
    }

    return (
        <div className={classNames(styles.Playground)} onClick={onClick}>
            <div className={classNames(styles['Playground__coins'])}>
                {coins}
            </div>
            {clickTrackers.length !== 0 && (
                <ClickTrackers clickTrackers={clickTrackers} />
            )}
        </div>
    );
}