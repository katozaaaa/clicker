import classNames from 'classnames';
import styles from './Control.module.scss';
import { useState } from 'react';
import { Button } from '../../../shared';

interface ControlProps {
    className: string,
    buttonText: string,
    children: React.ReactElement | React.ReactElement[],
}

export const Control = (props: ControlProps) => {
    const {
        className,
        buttonText,
        children,
    } = props;

    const [visibility, setVisibility] = useState(false);

    const onClick = () => {
        setVisibility(!visibility);
    }

    return (
        <div className={
            classNames(
                styles.Control,
                className,
            )
        }>
            <Button 
                className={
                    classNames(styles['Control__button'])
                } 
                onClick={onClick}
            >
                {buttonText}
            </Button>
            { visibility && children }
        </div>
    )
}