import { useReducer } from "react";
import { improvementsReducer } from "./improvementsReducer";
import type { ImprovementState } from "./improvementsReducer";

export const useImpovementsReducer = () => {
    return useReducer(
        improvementsReducer, 
        new Array<ImprovementState>()
    );
}