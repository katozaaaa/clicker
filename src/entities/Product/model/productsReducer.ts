export interface ProductState {
    readonly id: string,
    readonly count: number,
}

export type ProductsState = ProductState[];

export interface ProductsReduceAction {
    readonly type: 'added' | 'increased',
    readonly id: string,
}

export type ProductsReducer = (
    Products: ProductsState, 
    action: ProductsReduceAction,
) => ProductsState

export const productsReducer: ProductsReducer = (products, action) => {
    switch(action.type) {
        case 'added': {
            return [
                ...products,
                {
                    id: action.id,
                    count: 1
                }
            ];
        }
            
        case 'increased': {
            return products.map((product) => {
                if (product.id === action.id) {
                    return {
                        ...product,
                        count: product.count + 1
                    };
                }

                return product;
            });
        }
        default: {
            throw new Error('Unknown action: ' + action.type);
        }
    }
};