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