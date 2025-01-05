import classNames from "classnames";
import styles from './Navigation.module.scss';
import { Button } from '../Button/Button';

interface NavigationProps {
    title: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
}

export const Navigation = (props: NavigationProps) => {
    const {
        title,
        onClick,
    } = props;

    return (
        <div className={classNames(styles.Navigation)}>
            <Button 
                className={classNames(styles['Navigation__button'])}
                onClick={onClick}
            >
                {'<'}
            </Button>
            <div className={classNames(styles['Navigation__title'])}>
                {title}
            </div>
        </div>  
    );
}