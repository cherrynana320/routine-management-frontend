import React from 'react';
import { Modal } from 'antd';

const AtomicPopup = (props) => {
  const { size, ...otherProps } = props;

  let modalSize = {};
  if (typeof size === 'number') {
    modalSize = {
      width: size,
    };
  } else {
    switch (size) {
      case 'large':
        modalSize = {
          width: 1000, // Set your desired width for large size
        };
        break;
      case 'small':
        modalSize = {
          width: 400, // Set your desired width for small size
        };
        break;
      // You can add more cases if needed
      default:
        // Set your default size here
        modalSize = {
          width: 600,
        };
    }
  }

  return (
    <Modal
      open={true}
      centered={true}
      maskClosable={false}
      closeIcon={<img src="/public/popup-close-btn-nor.svg" />}
      {...modalSize}
      {...otherProps}
    >
      {props.children}
    </Modal>
  );
};

export default AtomicPopup;
