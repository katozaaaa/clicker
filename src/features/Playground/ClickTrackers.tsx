import classNames from 'classnames';
import styles from './Playground.module.scss';

export default function ClickTrackers({clickTrackers}: any) {
    const clickTrackersList = clickTrackers.map((clickTracker: any) => {
        return (
            <div
                key={clickTracker.id}
                className={classNames(styles['Playground__click-tracker'])}
                style={{
                    top: clickTracker.position.y,
                    left: clickTracker.position.x,
                }}
            >
                {'+' + clickTracker.coins}
            </div>
        );
    })

    return (
        <div className={classNames(styles['Playground__click-trackers'])}>
            {clickTrackersList}
        </div>
    );
}