import classNames from "classnames";
import styles from './Controls.module.scss';
import { Control } from "../../../widjets";
import { Catalog } from "../../../features";
import type { ProductsState, ProductsReduceAction } from "../../../entities";

interface ControlsProps {
    productStates: {
        [index: string]: {
            products: ProductsState,
            dispatchProducts: React.Dispatch<ProductsReduceAction>,
        }
    }
}

export const Controls = ({ productStates }: ControlsProps) => {
    return (
        <div className={classNames(styles.Controls)}>
            <Control buttonText={'Shop'}>
                <Catalog productStates={productStates} />
            </Control>
        </div>
    )
}