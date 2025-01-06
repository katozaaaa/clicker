import { Button, Navigation, useCoins, useDispatchCoins} from "../../../shared";
import { Product, catalogData, getOnPurchasedProduct } from "../../../entities";
import type { CategoryData, ProductData, ProductsState, ProductsReduceAction } from '../../../entities';

interface ProductProps {
    id: string;
    backToCategories: () => void;
    products: ProductsState,
    dispatchProducts: React.Dispatch<ProductsReduceAction>
}

export const Products = (props: ProductProps) => {
    const {
        id,
        backToCategories,
        products,
        dispatchProducts,
    } = props;

    const coins = useCoins();
    const dispatchCoins = useDispatchCoins();

    const categoryData = Object.values<CategoryData>(catalogData).find((categoryData) => {
        return categoryData.id === id;
    }) as CategoryData;
    const productsData = categoryData.products;
    const onPurchasedProduct = getOnPurchasedProduct(dispatchCoins, dispatchProducts);

    const productNodes = (
        Object.values<ProductData>(productsData).map(
            (productData) => {
                const count = products.find((product) => {
                        return product.id === productData.id;
                    })?.count ?? 0;
    
                const price = Math.floor(productData.price * Math.pow(1.15, count));
                const isAvailable = coins >= price;
                const onClick = () => {
                    onPurchasedProduct(productData.id, price, products);
                }
                const subtitle = ('coinsPerSecond') in productData ? 
                    'Coins per second: ' + productData.coinsPerSecond :
                    productData.description;
    
                return (
                    <Button
                        key={productData.id}
                        disabled={!isAvailable}
                        onClick={onClick}
                    >
                        <Product
                            label={productData.label}
                            subtitle={subtitle}
                            count={count}
                            price={price}
                        />
                    </Button>         
                );
            }
        )
    )

    return (
        <div>
            <Navigation
                title={categoryData.label}
                onClick={backToCategories}
            />
            <div>
                {productNodes}
            </div>
        </div>
    )
}