import type { 
    ClickTrackersReduceAction,
} from "./clickTrackersReducer";

export const getOnAddClickTracker = (
        clickTrackersNextID: { current: number },
        dispatchClickTrackers: React.Dispatch<ClickTrackersReduceAction>,
        coinsPerClick: number,
    ) => {
    return (e: React.MouseEvent<HTMLDivElement>) => {
        const nextID = clickTrackersNextID.current;

        const addedClickTracker = {
            id: nextID,
            position: {
                x: e.clientX,
                y: e.clientY
            },
            coins: coinsPerClick
        }

        dispatchClickTrackers({
            type: 'added',
            ...addedClickTracker,
        });

        setTimeout(dispatchClickTrackers, 3000, { type: 'removed', id: nextID });

        clickTrackersNextID.current++;
    };
}