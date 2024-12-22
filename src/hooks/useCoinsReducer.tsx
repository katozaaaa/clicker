import { useReducer } from 'react';
import { coinsReducer } from '../reducers';

export const useCoinsReducer = () => {
    return useReducer(coinsReducer, 0);
}