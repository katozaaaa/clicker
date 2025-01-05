import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
    className?: string,
    disabled?: boolean,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    children: React.ReactElement | React.ReactElement[] | string,
}

export const Button = (props: ButtonProps) => {
    const {
        className,
        disabled = false,
        onClick,
        children,
    } = props;

    return (
        <button 
            className={classNames(
                styles.Button,
                className
            )}
            disabled={disabled} 
            onClick={onClick}
        >
            {children}
        </button>
    )
}