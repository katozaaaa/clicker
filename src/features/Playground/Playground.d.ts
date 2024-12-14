export interface PlaygroundProps {
    readonly coins: number,
    readonly setCoins: React.Dispatch<React.SetStateAction<number>>,
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
