import type { 
    ManufacturerState, 
    ManufacturersReduceAction,
    ManufacturersData 
} from './Manufacturers/Manufacturers.d';

export interface ShopProps {
    readonly coins: number,
    readonly setCoins: React.Dispatch<React.SetStateAction<number>>
    readonly manufacturers: Array<ManufacturerState>,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
    readonly manufacturersData: ManufacturersData,
}