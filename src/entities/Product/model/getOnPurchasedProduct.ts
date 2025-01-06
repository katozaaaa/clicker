import { purchaseProduct } from "./purchaseProduct";
import type { ProductsState } from "./productsReducer";
import type { ProductsReduceAction } from "./productsReducer";
import type { CoinsReduceAction } from "../../../shared/";

type GetOnPurchasedProduct = (
    dispathCoins: React.Dispatch<CoinsReduceAction>,
    dispatchProduct: React.Dispatch<ProductsReduceAction>
) => (id: string, price: number, products: ProductsState) => void;

export const getOnPurchasedProduct: GetOnPurchasedProduct = (dispatchCoins, dispatchProduct) => {
    return (id, price, products) => {
        purchaseProduct(id, products, dispatchProduct);

        dispatchCoins({
            type: 'decreased',
            count: price,
        })
    };
}