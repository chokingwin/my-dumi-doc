import React from 'react';
import { Button, ButtonProps } from 'antd';
import 'antd/dist/antd.css';

export interface MyButtonProps extends ButtonProps {
    isMy?: boolean;
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <>
            <Button {...restProps}>{children}</Button>
        </>
    );
}

export default MyButton;