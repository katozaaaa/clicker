import classNames from 'classnames';
import styles from './Playground.module.scss';
import { useState, useRef } from 'react';
import { useCoins, useDispatchCoins } from '../../hooks';
import { ClickTrackers } from '../ClickTrackers/ClickTrackers';

export interface PlaygroundProps {
    readonly coinsPerClick: number,
}

export interface ClickTracker {
    readonly id: number,
    readonly position: {
        readonly x: number,
        readonly y: number,
    },
    readonly coins: number,
}

export const Playground = (props: PlaygroundProps) => {
    const coinsPerClick = props.coinsPerClick;
    const coins = useCoins();
    const dispatchCoins = useDispatchCoins();

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

        dispatchCoins({
            type: 'increased',
            count: coinsPerClick,
        })

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