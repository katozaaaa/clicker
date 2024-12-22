import classNames from 'classnames';
import styles from '../Playground/Playground.module.scss';

export interface ClickTracker {
    readonly id: number,
    readonly position: {
        readonly x: number,
        readonly y: number,
    },
    readonly coins: number,
}

export interface ClickTrackersProps {
    clickTrackers: Array<ClickTracker>,
}

export const ClickTrackers = ({clickTrackers}: ClickTrackersProps) => {
    const clickTrackersList = clickTrackers.map((clickTracker) => {
        return (
            <div
                key={clickTracker.id}
                className={classNames(styles['Playground__click-tracker'])}
                style={{
                    top: clickTracker.position.y,
                    left: clickTracker.position.x
                }}
            >
                {'+' + clickTracker.coins}
            </div>
        );
    });

    return (
        <div className={classNames(styles['Playground__click-trackers'])}>
            {clickTrackersList}
        </div>
    );
}