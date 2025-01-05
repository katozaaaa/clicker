import type { ProducersData } from "./producersData";

export interface ProducerState {
    readonly id: keyof ProducersData,
    readonly count: number,
}

export type ProducersState = ProducerState[];

export interface ProducersReduceAction {
    readonly type: 'added' | 'increased',
    readonly id: keyof ProducersData,
}

export type ProducerReducer = (
    Producers: Array<ProducerState>, 
    action: ProducersReduceAction,
) => Array<ProducerState>

export const producersReducer: ProducerReducer = (producers, action) => {
    switch(action.type) {
    case 'added': {
        return [
            ...producers,
            {
                id: action.id,
                count: 1
            }
        ];
    }
        
    case 'increased': {
        return producers.map((producer: any) => {
            if (producer.id === action.id) {
                return {
                    ...producer,
                    count: producer.count + 1
                };
            }

            return producer;
        });
    }
    default: {
        throw new Error('Unknown action: ' + action.type);
    }
    }
};