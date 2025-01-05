import { useState } from 'react';
import { Button } from '../../../shared';

export const Control = (props) => {
    const {
        buttonText,
        children,
    } = props;

    const [visibility, setVisibility] = useState(false);

    const onClick = () => {
        setVisibility(!visibility);
    }

    return (
        <div>
            <Button onClick={onClick}>
                {buttonText}
            </Button>
            {visibility && 
                <div>
                    {children}
                </div>
            }
        </div>
    )
}