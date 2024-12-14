import type { ManufacturersData } from '..//Manufacturers.d';

export interface ManufacturerProps {
    readonly id: keyof ManufacturersData,
    readonly manufacturerData: ManufacturerData,
    readonly count: number,
    readonly handleClick: (id: keyof ManufacturersData) => void,
    readonly isAvailable: boolean
}