import React from 'react';
import { Button, Divider, Flex, Form, Input } from 'antd';

const RoutineCreation = ({ onComplete }) => {
  const handleComplete = () => {
    onComplete(); // 완료 시 호출
  };

  const [form] = Form.useForm();
  const values = form.getFieldsValue(true);
  const req = Object.assign({}, values);
  console.log('values :', values);

  return (
    <div
      style={{
        height: '100%',
        width: '100%',
        backgroundColor: '#F2F5F8',
        padding: '30px',
      }}
    >
      <h1>Routine Creation</h1>
      <div
        style={{
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
        </Form>
      </div>
    </div>
  );
};

export default RoutineCreation;
