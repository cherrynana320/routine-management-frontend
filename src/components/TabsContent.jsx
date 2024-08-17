import React, { useState } from 'react';
import { Tabs, Card, Button, Modal } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import imageFile from '../assets/torriden.png';
import ItemCard from './ItemCard';
import ProductRegister from './ProductRegister';

const { TabPane } = Tabs;

const items = {
  calming: [
    {
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
    },
    // 추가 아이템들...
  ],
  // 다른 카테고리도 동일하게 설정...
};

const TabsContent = () => {
  const [activeKey, setActiveKey] = useState('calming');
  const [panes, setPanes] = useState([
    { title: 'calming', key: 'calming' },
    { title: 'anti', key: 'anti' },
    { title: 'hydrate', key: 'hydrate' },
    { title: 'massage', key: 'massage' },
    { title: 'device', key: 'device' },
  ]);

  const [openRegister, setOpenRegister] = useState(false);

  const onChange = (key) => {
    if (key !== 'add') {
      setActiveKey(key);
    }
  };

  const add = () => {
    const newKey = `newTab${panes.length + 1}`;
    const newPanes = [...panes, { title: newKey, key: newKey }];
    setPanes(newPanes);
    setActiveKey(newKey);
  };

  const remove = (targetKey) => {
    let newActiveKey = activeKey;
    let lastIndex;
    panes.forEach((pane, i) => {
      if (pane.key === targetKey) {
        lastIndex = i - 1;
      }
    });
    const newPanes = panes.filter((pane) => pane.key !== targetKey);
    if (newPanes.length && newActiveKey === targetKey) {
      if (lastIndex >= 0) {
        newActiveKey = newPanes[lastIndex].key;
      } else {
        newActiveKey = newPanes[0].key;
      }
    }
    setPanes(newPanes);
    setActiveKey(newActiveKey);
  };

  const showDeleteConfirm = (targetKey) => {
    Modal.confirm({
      title: '탭 삭제',
      content: '정말 이 탭을 삭제하시겠습니까?',
      okText: '예',
      cancelText: '아니오',
      onOk: () => remove(targetKey),
      centered: true,
    });
  };

  // 등록 팝업 열림 여부
  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  return (
    <Tabs
      type="line"
      activeKey={activeKey}
      onChange={onChange}
      tabBarStyle={{ backgroundColor: '#ffffff', paddingLeft: '10px' }}
      style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '0px 0px 8px 0px',
        backgroundColor: '#E9F3FF',
      }}
    >
      {panes.map((pane) => (
        <TabPane
          tab={
            <span style={{ display: 'flex', alignItems: 'center' }}>
              {pane.title}
              {pane.key !== 'calming' && (
                <CloseOutlined
                  onClick={(e) => {
                    e.stopPropagation();
                    showDeleteConfirm(pane.key);
                  }}
                  style={{ marginLeft: '8px' }}
                />
              )}
            </span>
          }
          key={pane.key}
          closable={false}
          style={{
            backgroundColor: activeKey === pane.key ? '#E9F3FF' : '#ffffff',
            flex: 1,
          }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              marginLeft: '20px',
            }}
          >
            {(items[pane.key] || []).map((item, index) => (
              <ItemCard
                key={index}
                image={item.image}
                brand={item.brand}
                name={item.name}
                onAddClick={() => console.log(`${item.name}`)}
              />
            ))}
            {/* 아이템 추가용 + 버튼 */}
            <Card
              style={{
                width: 200,
                borderRadius: '8px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff', // 버튼 카드 배경색
              }}
            >
              <Button
                type="dashed"
                icon={<PlusOutlined />}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: '100%',
                  width: '100%',
                  border: 'none',
                  background: 'transparent',
                  fontSize: '24px',
                }}
                onClick={handleOpenRegister}
              />
            </Card>
            {openRegister && (
              <ProductRegister onCloseRegister={handleCloseRegister} />
            )}
          </div>
        </TabPane>
      ))}

      <TabPane
        tab={
          <Button
            icon={<PlusOutlined />}
            onClick={add}
            style={{ border: 'none', background: 'transparent' }}
          />
        }
        key="add"
        closable={false}
        disabled
      />
    </Tabs>
  );
};

export default TabsContent;
