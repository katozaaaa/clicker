import classNames from 'classnames';
import styles from '../Playground.module.scss';

import{ ClickTrackersProps } from './ClickTrackers.d';

export default function ClickTrackers({clickTrackers}: ClickTrackersProps) {
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