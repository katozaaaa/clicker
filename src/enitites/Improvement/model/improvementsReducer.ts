import type { ImprovementsData } from "./improvementsData";

export interface ImprovementState {
    readonly id: keyof ImprovementsData,
    readonly count: number,
}

export type ImprovementsState = ImprovementState[];

export interface ImprovementsReduceAction {
    readonly type: 'added' | 'increased',
    readonly id: keyof ImprovementsData,
}

export type ImprovementReducer = (
    improvements: Array<ImprovementState>, 
    action: ImprovementsReduceAction,
) => Array<ImprovementState>

export const improvementsReducer: ImprovementReducer = (improvements, action) => {
    switch(action.type) {
    case 'added': {
        return [
            ...improvements,
            {
                id: action.id,
                count: 1
            }
        ];
    }
        
    case 'increased': {
        return improvements.map((improvement: any) => {
            if (improvement.id === action.id) {
                return {
                    ...improvement,
                    count: improvement.count + 1
                };
            }

            return improvement;
        });
    }
    default: {
        throw new Error('Unknown action: ' + action.type);
    }
    }
};