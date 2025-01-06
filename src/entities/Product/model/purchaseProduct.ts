import type { ProductsState } from "./productsReducer";
import type { ProductsReduceAction } from "./productsReducer";

type PurchaseProduct = (
    id: string, 
    Products: ProductsState, 
    dispatchProduct: React.Dispatch<ProductsReduceAction>
) => void;

export const purchaseProduct: PurchaseProduct = (id, products, dispatchProduct) => {
    const isInProducts = products.some((product) => {
        return product.id === id;
    });

    dispatchProduct({
        type: isInProducts ? 'increased' : 'added',
        id: id
    });
}