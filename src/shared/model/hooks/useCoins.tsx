import { useContext } from "react";
import { CoinsContext } from "../contexts/CoinsContext";

export const useCoins = () => {
    return useContext(CoinsContext);
}