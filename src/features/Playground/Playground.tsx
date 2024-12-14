import { useState, useRef } from 'react';

import classNames from 'classnames';
import styles from './Playground.module.scss';

import ClickTrackers from './ClickTrackers/ClickTrackers';

import type { PlaygroundProps, ClickTracker } from './Playground.d';

export default function Playground(props: PlaygroundProps) {
    const {
        coins, 
        setCoins, 
        coinsPerClick
    } = props;

    const [clickTrackers, setClickTrackers] = useState(new Array<ClickTracker>());
    const clickTrackersNextID = useRef(0);

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        const nextID = clickTrackersNextID.current;

        const nextClickTrackers = [
            ...clickTrackers,
            {
                id: nextID,
                position: {
                    x: e.clientX,
                    y: e.clientY
                },
                coins: coinsPerClick
            }
        ];

        const removeFirstClickTracker = (prevClickTrackers: Array<ClickTracker>) => {
            return prevClickTrackers.filter((clickTracker) => {
                return clickTracker.id !== nextID;
            });
        };

        setCoins((prevCoins) => prevCoins + 1);
        setClickTrackers(nextClickTrackers);
        setTimeout(setClickTrackers, 3000, removeFirstClickTracker);

        clickTrackersNextID.current++;
    };

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