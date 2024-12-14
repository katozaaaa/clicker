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
        label: 'Бариста',
        coinsPerSecond: 1,
        price: 15
    },
    1: {
        label: 'Маленькая кофейня',
        coinsPerSecond: 5,
        price: 100
    },
    2: {
        label: 'Большая кофейня',
        coinsPerSecond: 10,
        price: 1000
    }
};