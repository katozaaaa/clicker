import { createContext } from "react";
import { useCoinsReducer } from "../hooks";
import type { CoinsReduceAction } from "../reducers";

export const CoinsContext = createContext(0);
export const DispatchCoinsContext = createContext<React.Dispatch<CoinsReduceAction> | null>(null);

interface CoinsProviderProps {
    children: React.ReactElement | React.ReactElement[],
}

export const CoinsProvider = ({children}: CoinsProviderProps) => {
    const [coins, dispatchCoins] = useCoinsReducer();

    return (
        <CoinsContext.Provider value={coins}>
            <DispatchCoinsContext.Provider value={dispatchCoins}>
                {children}
            </DispatchCoinsContext.Provider>
        </CoinsContext.Provider>
    )
}