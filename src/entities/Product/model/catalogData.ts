export interface ImprovementData {
    id: string,
    label: string,
    description: string,
    price: number,
    improvedProducer?: string,
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
    priceMultiplier: number,
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
        priceMultiplier: 1.25,
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
        priceMultiplier: 3.14,
        products: {
            0: {
                id: 'improvement-click_product',
                label: 'Click improvement',
                description: 'Increases efficiency by two times',
                price: 1500
            },
            1: {
                id: 'improvement-producer-1_product',
                label: 'Producer 1 improvement',
                description: 'Increases efficiency by two times',
                price: 15000,
                improvedProducer: 'producer-1_product',
            },
            2: {
                id: 'improvement-producer-2_product',
                label: 'Producer 2 improvement',
                description: 'Increases efficiency by two times',
                price: 100000,
                improvedProducer: 'producer-2_product',
            },
            3: {
                id: 'improvement-producer-3_product',
                label: 'Producer 3 improvement',
                description: 'Increases efficiency by two times',
                price: 1000000,
                improvedProducer: 'producer-3_product',
            },
            4: {
                id: 'improvement-producer-4_product',
                label: 'Producer 4 improvement',
                description: 'Increases efficiency by two times',
                price: 12000000,
                improvedProducer: 'producer-4_product',
            },
            5: {
                id: 'improvement-producer-5_product',
                label: 'Producer 5 improvement',
                description: 'Increases efficiency by two times',
                price: 20000000,
                improvedProducer: 'producer-5_product',
            },
            6: {
                id: 'improvement-producer-6_product',
                label: 'Producer 6 improvement',
                description: 'Increases efficiency by two times',
                price: 50000000,
                improvedProducer: 'producer-6_product',
            },
            7: {
                id: 'improvement-producer-7_product',
                label: 'Producer 7 improvement',
                description: 'Increases efficiency by two times',
                price: 90000000,
                improvedProducer: 'producer-7_product',
            },
            8: {
                id: 'improvement-producer-8_product',
                label: 'Producer 8 improvement',
                description: 'Increases efficiency by two times',
                price: 200000000,
                improvedProducer: 'producer-8_product',
            },
            9: {
                id: 'improvement-producer-9_product',
                label: 'Producer 9 improvement',
                description: 'Increases efficiency by two times',
                price: 1000000000,
                improvedProducer: 'producer-9_product',
            },
            10: {
                id: 'improvement-producer-10_product',
                label: 'Producer 10 improvement',
                description: 'Increases efficiency by two times',
                price: 5000000000,
                improvedProducer: 'producer-10_product',
            },
        }
    }
}

type CompareCategory = (categoryData: CategoryData) => boolean;

export const getCategoryData = (compareCategory: CompareCategory) => {
    return Object.values<CategoryData>(catalogData).find((categoryData) => {
        return compareCategory(categoryData);
    }) as CategoryData;
}

type CompareProduct = (ProductData: ProductData) => boolean;

type GetProductData = (
    compareCategory: CompareCategory, 
    compareProduct: CompareProduct
) => ProductData;

export const getProductData: GetProductData = (compareCategory, compareProduct) => {
    const categoryData = getCategoryData(compareCategory);
    const productsData = categoryData.products;

    return Object.values<ProductData>(productsData).find((productData) => {
        return compareProduct(productData);
    }) as ProductData;
}