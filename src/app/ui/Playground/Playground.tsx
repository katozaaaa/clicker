import classNames from 'classnames';
import styles from './Playground.module.scss';
import { useRef } from 'react';
import { useClickTrackersReducer } from '../../../features';
import { useCoins, useDispatchCoins } from '../../../shared';
import { ClickTrackers } from '../../../features';
import { getOnAddClickTracker } from '../../../features';

export interface PlaygroundProps {
    coinsPerClick: number,
    coinsPerSecond: number,
}

export const Playground = (props: PlaygroundProps) => {
    const {
        coinsPerClick,
        coinsPerSecond,
    } = props;
    
    const coins = useCoins();
    const dispatchCoins = useDispatchCoins();
    const [clickTrackers, dispatchClickTrackers] = useClickTrackersReducer();
    const clickTrackersNextID = useRef(0);

    const onAddClickTracker = getOnAddClickTracker(
        clickTrackersNextID,
        dispatchClickTrackers,
        coinsPerClick,
    );

    const onClick = (e: React.MouseEvent<HTMLDivElement>) => {
        onAddClickTracker(e);

        dispatchCoins({
            type: 'increased',
            count: coinsPerClick,
        })
    };

    return (
        <div className={classNames(styles.Playground)} onClick={onClick}>
            <div className={classNames(styles['Playground__wallet'])}>
                <div className={classNames(styles['Playground__coins'])}>
                    {coins}
                </div>
                <div className={classNames(styles['Playground__coins-per-second'])}>
                    Coins per second: {coinsPerSecond}
                </div>
            </div>
            {clickTrackers.length !== 0 && (
                <ClickTrackers clickTrackers={clickTrackers} />
            )}
        </div>
    );
}