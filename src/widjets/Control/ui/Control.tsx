import { useState } from 'react';
import { Button } from '../../../shared';

interface ControlProps {
    buttonText: string,
    children: React.ReactElement | React.ReactElement[],
}

export const Control = (props: ControlProps) => {
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