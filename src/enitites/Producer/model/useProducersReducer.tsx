import { useReducer } from "react";
import { producersReducer } from './producersReducer';
import type { ProducerState } from './producersReducer';

export const useProducersReducer = () => {
    return useReducer(
        producersReducer, 
        new Array<ProducerState>()
    );
}