export interface ManufacturerState {
    readonly id: keyof ManufacturersData,
    readonly count: number,
}

export interface ManufacturersProps {
    readonly manufacturers: Array<ManufacturerState>,
    readonly dispatchManufacturers: React.Dispatch<ManufacturersReduceAction>,
    readonly manufacturersData: ManufacturersData,
}

export interface ManufacturerProps {
    readonly id: keyof ManufacturersData,
    readonly manufacturerData: ManufacturerData,
    readonly count: number,
    readonly handleClick: (id: keyof ManufacturersData) => void,
}

export interface ManufacturerData {
    readonly label: string,
    readonly coinsPerSecond: number,
    readonly price: number,
}

export interface ManufacturersData {
    readonly [id: number | string]: ManufacturerData,
}

export interface ManufacturersReduceAction {
    readonly type: 'added' | 'increased',
    readonly id: keyof ManufacturersData,
}

export type ManufacturerReducer = (
    manufacturers: Array<ManufacturerState>, 
    action: ManufacturersReduceAction,
) => Array<ManufacturerState>