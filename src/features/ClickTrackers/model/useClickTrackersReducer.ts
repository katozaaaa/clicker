import { useReducer } from 'react';
import { clickTrackersReducer } from './clickTrackersReducer';
import type { ClickTrackerState } from './clickTrackersReducer';

export const useClickTrackersReducer = () => {
    return useReducer(
        clickTrackersReducer,
        new Array<ClickTrackerState>(),
    )
}