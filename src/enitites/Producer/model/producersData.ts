export interface ProducerData {
    readonly label: string,
    readonly coinsPerSecond: number,
    readonly price: number,
}

export interface ProducersData {
    readonly [id: number | string]: ProducerData,
}

export const producersData: ProducersData = {
    0: {
        label: 'Producer 1',
        coinsPerSecond: 1,
        price: 15
    },
    1: {
        label: 'Producer 2',
        coinsPerSecond: 5,
        price: 100
    },
    2: {
        label: 'Producer 3',
        coinsPerSecond: 10,
        price: 1000
    },
    3: {
        label: 'Producer 4',
        coinsPerSecond: 20,
        price: 12000
    },
    4: {
        label: 'Producer 5',
        coinsPerSecond: 50,
        price: 20000
    },
    5: {
        label: 'Producer 6',
        coinsPerSecond: 100,
        price: 50000
    },
    6: {
        label: 'Producer 7',
        coinsPerSecond: 200,
        price: 90000
    },
    7: {
        label: 'Producer 8',
        coinsPerSecond: 500,
        price: 200000
    },
    8: {
        label: 'Producer 9',
        coinsPerSecond: 1000,
        price: 1000000
    },
    9: {
        label: 'Producer 10',
        coinsPerSecond: 5000,
        price: 5000000
    },
};