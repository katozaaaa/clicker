import { useContext } from "react";
import { DispatchCoinsContext } from "../contexts/CoinsContext";

export const useDispatchCoins = () => {
    const dispatchCoins = useContext(DispatchCoinsContext);

    if (!dispatchCoins) {
        throw new Error("useDispatchCoins must be used within a Provider");
    }
    
    return dispatchCoins;
}
