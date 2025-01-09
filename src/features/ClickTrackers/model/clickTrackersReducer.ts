export interface ClickTrackerState {
    id: number,
    position: {
        x: number,
        y: number,
    },
    coins: number,
}

export type ClickTrackersState = ClickTrackerState[];

export interface ClickTrackersReduceAction extends ClickTrackerState {
    type: 'added' | 'removed',
}

export type ClickTrackersReducer = (
    clickTracker: ClickTrackersState, 
    action: ClickTrackersReduceAction
) => ClickTrackersState

export const clickTrackersReducer: ClickTrackersReducer = (clickTrackers, action) => {
    switch(action.type) {
        case 'added': {
            return [
                ...clickTrackers,
                {
                    id: action.id,
                    position: {
                        x: action.position.x,
                        y: action.position.y,
                    },
                    coins: action.coins
                }
            ];
        }
        case 'removed': {
            return clickTrackers.filter((clickTracker) => {
                return clickTracker.id !== action.id;
            });
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}