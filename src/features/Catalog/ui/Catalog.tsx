import classNames from 'classnames';
import styles from './Catalog.module.scss';
import { useState } from 'react';
import { Button } from '../../../shared';
import { catalogData } from '../../../entities';
import { Products } from './Products';
import type { CategoryData, ProductsState, ProductsReduceAction } from '../../../entities';

interface CatalogProps {
    productStates: {
        [index: string]: {
            products: ProductsState,
            dispatchProducts: React.Dispatch<ProductsReduceAction>,
        }
    }
}

export const Catalog = ({ productStates }: CatalogProps) => {
    const [activeCategory, setActiveCategory] = useState<null | string>(null)

    const categoriesNodes = Object.values<CategoryData>(catalogData).map(
        (categoryData) => {
            const onClick = () => {
                setActiveCategory(categoryData.id);
            }

            return (
                <Button
                    className={classNames(styles['Catalog__category'])}
                    key={categoryData.id}
                    onClick={onClick}
                >
                    {categoryData.label}
                </Button>
            );
        }
    )

    return (
        <div className={classNames(styles.Catalog)}>
            {
                activeCategory === null &&
                <div className={classNames(styles['Catalog__categories'])}>
                    {categoriesNodes}
                </div>
            }
            {
                activeCategory !== null &&
                <Products
                    key={activeCategory}
                    id={activeCategory}
                    backToCategories={() => setActiveCategory(null)}
                    products={productStates[activeCategory].products}
                    dispatchProducts={productStates[activeCategory].dispatchProducts}
                />
            }
        </div>
    )
}