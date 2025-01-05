export interface ImprovementData {
    readonly label: string,
    readonly description: number,
    readonly price: number,
}

export interface ImprovementsData {
    readonly [id: number | string]: ImprovementData,
}

export const improvementsData: ImprovementsData = {
    0: {
        label: 'Click Improvement',
        description: 1,
        price: 15
    },
};