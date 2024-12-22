export interface ManufacturerData {
    readonly label: string,
    readonly coinsPerSecond: number,
    readonly price: number,
}

export interface ManufacturersData {
    readonly [id: number | string]: ManufacturerData,
}

export const manufacturersData: ManufacturersData = {
    0: {
        label: 'Производитель 1',
        coinsPerSecond: 1,
        price: 15
    },
    1: {
        label: 'Производитель 2',
        coinsPerSecond: 5,
        price: 100
    },
    2: {
        label: 'Производитель 3',
        coinsPerSecond: 10,
        price: 1000
    }
};