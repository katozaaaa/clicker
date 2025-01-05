import { ProductList } from "./ProductList";
import { Button, Navigation } from "../../../shared";
import { categoriesData } from "../model/categoriesData";
import { Producer } from "../../../enitites/Producer";
import { producersData } from "../../../enitites/Producer";
import type { ProducerData } from "../../../enitites/Producer";

export const Products = (props) => {
    const {
        id,
        backToCategories,
        producers,
    } = props;

    const categoriesList = {
        0: 
            <div>
                {
                    Object.entries<ProducerData>(producersData).map(
                        ([id, producerData]) => {
                            const count = producers.find((producer) => {
                                    return producer.id === id;
                                })?.count ?? 0;
                
                            const price = Math.floor(producerData.price * Math.pow(1.15, count));
                            const isAvailable = coins >= price;
                
                            return (
                                <Button 
                                    disabled={!isAvailable}
                                    onClick={categoriesData[0].purchaseProductMethod}
                                >
                                    <Producer
                                        key={id}
                                        label={producerData.label}
                                        coinsPerSecond={producerData.coinsPerSecond}
                                        count={count}
                                        price={price}
                                    />
                                </Button>         
                            );
                        }
                    )
                }
            </div>
    }

    return (
        <div>
            <Navigation
                title={categoriesData[id].name}
                onClick={backToCategories}
            >
            {categoriesList[id]}
        </div>
    )
}