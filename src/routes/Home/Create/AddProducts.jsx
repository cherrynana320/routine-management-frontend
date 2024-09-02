import React, { useState } from 'react';
import { Button, Form, Divider, Space, Table } from 'antd';
import AtomicPopup from '../../../components/AtomicPopup';

const AddProducts = ({ onCloseRegister }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [loading, setLoading] = useState(false);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      align: 'center', // 중앙 정렬 추가
    },
    {
      title: 'Photo',
      dataIndex: 'photo',
      align: 'center', // 중앙 정렬 추가
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
      align: 'center', // 중앙 정렬 추가
    },
    {
      title: 'Description',
      dataIndex: 'description',
      align: 'center', // 중앙 정렬 추가
    },
  ];

  const dataSource = Array.from({ length: 20 }).map((_, i) => ({
    key: i,
    name: `Edward King ${i}`,
    photo: 'https://via.placeholder.com/50', // Example image URL
    brand: `Brand ${i}`,
    description: `London, Park Lane no. ${i}`,
  }));

  const start = () => {
    setLoading(true);
    // 선택된 아이템의 정보를 필터링해서 콘솔에 출력

    console.log('selectedRowKeys:', selectedRowKeys);
    console.log('dataSource:', dataSource);

    const selectedItems = dataSource.filter((item) =>
      selectedRowKeys.includes(item.key)
    );
    console.log('Selected Items:', selectedItems);

    onCloseRegister();
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
          <span style={{ height: '40px', width: '400px', fontSize: '16px' }}>
            {'My Beauty Products'}
          </span>
          <Divider />
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
              marginBottom: '16px',
            }}
          >
            <Space>
              {hasSelected ? (
                <span>{`Selected ${selectedRowKeys.length} items`}</span>
              ) : null}
              <Button
                type="primary"
                onClick={start}
                disabled={!hasSelected}
                loading={loading}
              >
                Save
              </Button>
            </Space>
          </div>
          <Table
            rowSelection={rowSelection}
            columns={columns}
            dataSource={dataSource}
            pagination={{ pageSize: 5 }}
          />
        </Form>
      </AtomicPopup>
    </>
  );
};

export default AddProducts;
