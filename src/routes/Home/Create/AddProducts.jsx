import React, { useState } from 'react';
import { Button, Form, Divider, Space, Flex, Table } from 'antd';
import AtomicPopup from '../../../components/AtomicPopup';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Photo',
    dataIndex: 'photo',
    render: (text) => (
      <img
        src={text}
        alt="Product"
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
    ),
  },
  {
    title: 'Brand',
    dataIndex: 'brand',
  },
  {
    title: 'Description',
    dataIndex: 'description',
  },
];

const dataSource = Array.from({ length: 20 }).map((_, i) => ({
  key: i,
  name: `Edward King ${i}`,
  photo: 'https://via.placeholder.com/50', // Example image URL
  brand: `Brand ${i}`,
  description: `London, Park Lane no. ${i}`,
}));

const AddProducts = ({ onCloseRegister }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const start = () => {
    setLoading(true);
    setTimeout(() => {
      setSelectedRowKeys([]);
      setLoading(false);
    }, 1000);
  };

  const onSelectChange = (newSelectedRowKeys) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <AtomicPopup
        onCancel={() => {
          onCloseRegister();
        }}
        footer={null}
        size="large"
      >
        <Form layout="vertical">
          <Divider />
          <Space
            direction="horizontal"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ height: '40px', width: '400px' }}>
              {'My Beauty Products'}
            </span>
            <Button type="primary" style={{ height: '40px', width: '80px' }}>
              Save
            </Button>
          </Space>
          <Divider />
          <Flex gap="middle" vertical>
            <Flex align="center" gap="middle">
              <Button
                type="primary"
                onClick={start}
                disabled={!hasSelected}
                loading={loading}
              >
                Reload
              </Button>
              {hasSelected ? `Selected ${selectedRowKeys.length} items` : null}
            </Flex>
            <Table
              rowSelection={rowSelection}
              columns={columns}
              dataSource={dataSource}
              pagination={{ pageSize: 5 }}
            />
          </Flex>
        </Form>
      </AtomicPopup>
    </>
  );
};

export default AddProducts;
