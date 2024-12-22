import { useReducer } from "react";
import { manufacturersReducer } from "../reducers";
import type { ManufacturerState } from "../reducers";

export const useManufacturersReducer = () => {
    return useReducer(
        manufacturersReducer, 
        new Array<ManufacturerState>()
    );
}