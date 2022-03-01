---
nav:
  title: Components
  path: /components

group:
  title: MyModal
---

## MyModal

```tsx
import React,{ useState } from 'react';
import {  MyButton, MyModal } from 'my-dumi-doc';

const MyModalDemo = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <MyButton type="primary" onClick={showModal}>
        Open Modal
      </MyButton>
      <MyModal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </MyModal>
    </>
  );
};

export default () => <MyModalDemo />;
```

| Name | Description | Type    | Default |
|------|-------------|---------|---------|
| isMy | 自定义属性  | boolean | -       |
| ...  | ...         | ...     | ...     |

<API></API>