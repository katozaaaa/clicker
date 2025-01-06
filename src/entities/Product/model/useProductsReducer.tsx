import { useReducer } from "react";
import { productsReducer } from './productsReducer';
import type { ProductState } from './productsReducer';

export const useProductsReducer = () => {
    return useReducer(
        productsReducer, 
        new Array<ProductState>()
    );
}