import { useState, useRef } from 'react';
import { flushSync } from 'react-dom';

import classNames from 'classnames';
import styles from './Playground.module.scss';

type PlaygroundProps = {
    score: number,
    increaseScore: () => void,
}

// type ClickTracker = {
//     number: number,
//     position: {
//         x: number,
//         y: number,
//     },
// }

export default function Playground({score, increaseScore}: PlaygroundProps) {
    const currentClickValue = 1;
    const [clickTrackers, setClickTrackers]: [any, any] = useState(new Array());
    let clickTrackersNextID = useRef(0);
    // let clickTrackersTimeoutID: any = useRef(null);

    const onClick = (e: any) => {
        const id = clickTrackersNextID.current;

        increaseScore();

        flushSync(() => {
            setClickTrackers((prevClickTrackers) => [
                ...prevClickTrackers,
                {
                    id: id,
                    position: {
                        x: e.clientX,
                        y: e.clientY,
                    },
                    value: currentClickValue,
                }
            ]);
        });

        console.log(clickTrackersNextID.current);

        // if (clickTrackersTimeoutID.current) {
        //     clearTimeout(clickTrackersTimeoutID.current);
        // }

        // clickTrackersTimeoutID.current = setTimeout(() => {
        //     setClickTrackers([]);
        // }, 3000);

        setTimeout(() => {
            setClickTrackers((prevClickTrackers) => {
                return prevClickTrackers.filter((clickTracker) => {
                    return clickTracker.id !== id;
                });
            });
        }, 3000);

        clickTrackersNextID.current++;
    }

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
                {'+' + clickTracker.value}
            </div>
        );
    })

    return (
        <div className={classNames(styles.Playground)} onClick={onClick}>
            <div className={classNames(styles['Playground__score'])}>
                {score}
            </div>
            {clickTrackers && (
                <div className={classNames(styles['Playground__click-trackers'])}>
                    {clickTrackersList}
                </div>
            )}
        </div>
    );
}