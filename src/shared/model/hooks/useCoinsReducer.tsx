import { useReducer } from 'react';
import { coinsReducer } from '../reducers/coinsReducer';

export const useCoinsReducer = () => {
    return useReducer(coinsReducer, 0);
}