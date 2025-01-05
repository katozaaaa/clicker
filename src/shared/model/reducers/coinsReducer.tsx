export interface CoinsReduceAction {
    type: 'increased' | 'decreased',
    count: number,
}

export type CoinsReducer = (coins: number, action: CoinsReduceAction) => number;

export const coinsReducer: CoinsReducer = (coins, action) => {
    switch(action.type) {
        case 'increased': {
            return coins + action.count;
        }
            
        case 'decreased': {
            return coins - action.count;
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
}