export const getOnPurchasedProduct = (purchaseProduct) => {
    return (id, price: number) => {
        purchaseProduct(id);

        dispatchCoins({
            type: 'decreased',
            count: price,
        })
    };
}