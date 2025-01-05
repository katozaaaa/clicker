import { useContext } from "react";
import { CoinsContext } from "../contexts";

export const useCoins = () => {
    return useContext(CoinsContext);
}