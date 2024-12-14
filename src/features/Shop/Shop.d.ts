import type { 
    ManufacturerState, 
    ManufacturersReduceAction,
    ManufacturersData 
} from './Manufacturers/Manufacturers.d';

export interface ShopProps {
    readonly manufacturers: Array<ManufacturerState>,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
    readonly manufacturersData: ManufacturersData,
}