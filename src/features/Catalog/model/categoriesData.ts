import { purchaseProducer } from "../../../enitites/Producer";

export interface CategoryData {
    readonly name: string,
}

export interface CategoriesData {
    readonly [id: number | string]: CategoryData,
}

export const categoriesData = {
    0: {
        name: 'Producers',
        purchaseProductMethod: purchaseProducer,
    },
}