import React from 'react';
import { Modal, ModalProps } from 'antd';
import 'antd/dist/antd.css';

export interface MyModalProps extends ModalProps {
    /**
     * @description       测试标志
     * @default           false
     */
    isMy?: boolean;
}

const MyModal: React.FC<MyModalProps> = (props) => {
    const { children, ...restProps } = props;

    return (
        <Modal {...restProps}>{children}</Modal>
    );
}

export default MyModal;