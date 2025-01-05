import { useState } from 'react';
import { Button } from '../../../shared';
import { categoriesData } from '../model/categoriesData';
import type { CategoryData } from '../model/categoriesData';

export const Catalog = () => {
    const [activeCategory, setActiveCategory] = useState(null)

    const categoriesNodes = Object.entries<CategoryData>(categoriesData).map(
        ([id, categoryData]) => {
            const onClick = () => {
                setActiveCategory(id);
            }

            return (
                <Button onClick={onClick}>
                    {categoryData.name}
                </Button>
            );
        }
    )

    return (
        <div>
            {
                activeCategory === null &&
                <div>
                    {categoriesNodes}
                </div>
            }
            {
                activeCategory !== null &&
                <Products 
                    key={activeCategory}
                    id={activeCategory}
                    backToCategories={() => setActiveCategory(null)}
                />
            }
        </div>
    )
}