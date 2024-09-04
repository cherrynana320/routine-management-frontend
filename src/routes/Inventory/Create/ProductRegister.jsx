import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Upload, DatePicker, Divider, Space } from 'antd';
import AtomicPopup from '../../../components/AtomicPopup';
import { PlusOutlined } from '@ant-design/icons';
import moment from 'moment';

const ProductRegister = ({
  onCloseRegister,
  initialData = {},
  currentMode,
}) => {
  const [form] = Form.useForm();
  const [focus, setFocus] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [isModifyMode, setIsModifyMode] = useState([]);
  const [mode, setMode] = useState();

  // 폼 초기화
  useEffect(() => {
    setMode(currentMode);
    if (mode === 'detail' || mode === 'modify') {
      form.setFieldsValue({
        productName: initialData.productName,
        expirationDate: initialData.expirationDate
          ? moment(initialData.expirationDate)
          : null,
        description: initialData.description,
      });
      if (initialData.productImage) {
        setFileList([
          {
            uid: '-1',
            name: 'image.png',
            status: 'done',
            url: initialData.productImage,
          },
        ]);
      }
    }
  }, [form, initialData, mode]);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onFinishRegister = async () => {
    const values = form.getFieldsValue(true);
    const req = Object.assign({}, values);
    console.log('Form Values:', values);

    // 데이터 저장 로직을 여기서 구현
    console.log('Request Payload:', req);

    onCloseRegister();
  };

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  return (
    <>
      <AtomicPopup onCancel={onCloseRegister} footer={null}>
        <Form layout="vertical" form={form} onFinish={onFinishRegister}>
          <Divider />
          <Space
            direction="horizontal"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Form.Item style={{ margin: 0 }}>
              {mode === 'detail' ? (
                <span>{initialData.productName || 'N/A'}</span>
              ) : (
                <Form.Item name="productName" style={{ margin: 0 }}>
                  <Input
                    placeholder="Product Name"
                    style={{ height: '40px', width: '400px' }}
                    disabled={mode === 'detail' ? true : false}
                  />
                </Form.Item>
              )}
            </Form.Item>
            {mode === 'detail' ? (
              <Button
                type="primary"
                onClick={() => {
                  setIsModifyMode(true);
                }}
              >
                Modify
              </Button>
            ) : (
              <Button type="primary">Save</Button>
            )}
          </Space>
          <Divider />
          <Form.Item
            label="Product Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            style={{ width: '50%' }}
          >
            {mode === 'detail' ? (
              initialData.productImage ? (
                <img
                  src={initialData.productImage}
                  alt="Product"
                  style={{ width: '100%', maxHeight: '200px' }}
                />
              ) : (
                'No image available'
              )
            ) : (
              <Upload
                listType="picture-card"
                fileList={fileList}
                maxCount={1}
                onChange={handleChange}
                onRemove={handleRemove}
              >
                {fileList.length === 0 && (
                  <Button
                    style={{
                      border: 0,
                      background: 'none',
                    }}
                  >
                    <PlusOutlined />
                  </Button>
                )}
              </Upload>
            )}
          </Form.Item>
          <Form.Item
            label="Expiration Date"
            style={{ width: '50%' }}
            name="expirationDate"
          >
            {mode === 'detail' ? (
              <span>
                {initialData.expirationDate
                  ? moment(initialData.expirationDate).format('YYYY-MM-DD')
                  : 'N/A'}
              </span>
            ) : (
              <DatePicker style={{ width: '100%' }} />
            )}
          </Form.Item>
          <Form.Item label="Description" name="description">
            {mode === 'detail' ? (
              <span>{initialData.description || 'N/A'}</span>
            ) : (
              <Input.TextArea rows={4} />
            )}
          </Form.Item>
        </Form>
      </AtomicPopup>
    </>
  );
};

export default ProductRegister;
