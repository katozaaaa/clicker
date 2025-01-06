export interface ImprovementData {
    id: string,
    label: string,
    description: string,
    price: number,
}

export interface ProducerData {
    id: string,
    label: string,
    coinsPerSecond: number,
    price: number,
}

export type ProductData = ProducerData | ImprovementData;

export interface CategoryData {
    id: string,
    label: string,
    products: {
        [index: number | string]: ProductData,
    }
}

interface CatalogData {
    [index: number | string]: CategoryData,
}

export const catalogData: CatalogData = {
    0: {
        id: 'producers_cat',
        label: 'Producers',
        products: {
            0: {
                id: 'producer-1_product',
                label: 'Producer 1',
                coinsPerSecond: 1,
                price: 15
            },
            1: {
                id: 'producer-2_product',
                label: 'Producer 2',
                coinsPerSecond: 5,
                price: 100
            },
            2: {
                id: 'producer-3_product',
                label: 'Producer 3',
                coinsPerSecond: 10,
                price: 1000
            },
            3: {
                id: 'producer-4_product',
                label: 'Producer 4',
                coinsPerSecond: 20,
                price: 12000
            },
            4: {
                id: 'producer-5_product',
                label: 'Producer 5',
                coinsPerSecond: 50,
                price: 20000
            },
            5: {
                id: 'producer-6_product',
                label: 'Producer 6',
                coinsPerSecond: 100,
                price: 50000
            },
            6: {
                id: 'producer-7_product',
                label: 'Producer 7',
                coinsPerSecond: 200,
                price: 90000
            },
            7: {
                id: 'producer-8_product',
                label: 'Producer 8',
                coinsPerSecond: 500,
                price: 200000
            },
            8: {
                id: 'producer-9_product',
                label: 'Producer 9',
                coinsPerSecond: 1000,
                price: 1000000
            },
            9: {
                id: 'producer-10_product',
                label: 'Producer 10',
                coinsPerSecond: 5000,
                price: 5000000
            },
        }
    },
    1: {
        id: 'improvements_cat',
        label: 'Improvements',
        products: {
            0: {
                id: 'improvement-click_product',
                label: 'Click Improvement',
                description: 'Increases click efficiency by two times',
                price: 15
            },
        }
    }
}