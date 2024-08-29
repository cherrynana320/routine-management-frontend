import React, { useState } from 'react';
import { Button, Divider, Flex, Form, Input, Upload } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import AddProducts from '../Create/AddProducts';

const RoutineCreation = ({ onComplete }) => {
  const handleComplete = () => {
    onComplete(); // 완료 시 호출
  };

  const { TextArea } = Input;

  const [form] = Form.useForm();
  const values = form.getFieldsValue(true);
  const req = Object.assign({}, values);
  console.log('values :', values);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  const [openAddProducts, setOpenAddProducts] = useState(false);

  const handleOpenAddProducts = () => {
    setOpenAddProducts(true);
  };

  const handleCloseAddProducts = () => {
    setOpenAddProducts(false);
  };

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#F2F5F8',
        padding: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center', //수평 중앙 정렬
        alignItems: 'center', //  수직 중앙 정렬
      }}
    >
      <div
        style={{
          width: '95%', // 흰색 div와 같은 너비
          textAlign: 'left', // 왼쪽 정렬
        }}
      >
        <h1>Routine Creation</h1>
      </div>
      <div
        style={{
          width: '95%',
          height: '85%',
          backgroundColor: '#ffffff',
          padding: '30px',
          borderRadius: '8px',
        }}
      >
        <Flex wrap gap="small" justify="flex-end">
          <Button onClick={handleComplete}>Back</Button>
          <Button type="primary" onClick={handleComplete}>
            Save
          </Button>
        </Flex>
        <Divider />
        <Form layout="vertical">
          <Form.Item label="Group Name">
            <Input style={{ height: '40px', width: '400px' }} />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={3} style={{ width: '600px' }} />
          </Form.Item>
          <Form.Item label="Beauty Products">
            <Button
              onClick={handleOpenAddProducts}
              style={{
                width: '110px',
                height: '140px',
              }}
            >
              <PlusOutlined />
            </Button>
            {openAddProducts && (
              <AddProducts onCloseRegister={handleCloseAddProducts} />
            )}
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default RoutineCreation;
