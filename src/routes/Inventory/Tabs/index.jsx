import React, { useState } from 'react';
import { Tabs, Card, Button, Modal, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import imageFile from '/src/assets/torriden.png';
import ItemCard from '../../../components/ItemCard';
import ProductRegister from '../Create/ProductRegister';
import SearchBox from '../../../components/SearchBox';

const { TabPane } = Tabs;

const items = {
  calming: [
    {
      id: 1, // id 필드를 추가합니다.
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
      expiration: '2024.09.04',
      description: '설명1',
    },
    {
      id: 2,
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
      expiration: '2024.09.04',
      description: '설명2',
    },
    {
      id: 3,
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
      expiration: '2024.09.04',
      description: '설명3',
    },
    {
      id: 4,
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
      expiration: '2024.09.04',
      description: '설명4',
    },
    // 추가 아이템들
  ],
  // 다른 카테고리
};

const InventoryTab = () => {
  const [activeKey, setActiveKey] = useState('calming');
  const [panes, setPanes] = useState([
    { title: '진정', key: 'calming' },
    { title: '안티에이징', key: 'anti' },
    { title: 'hydrate', key: 'hydrate' },
    { title: 'massage', key: 'massage' },
    { title: 'device', key: 'device' },
  ]);

  const [editingKey, setEditingKey] = useState('');
  const [openRegister, setOpenRegister] = useState(false);
  const [openDetail, setOpenDetail] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // 선택된 아이템을 저장할 상태

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

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
  };

  const handleOpenDetail = (item) => {
    setOpenDetail(true);
  };

  const handleCloseDetail = () => {
    setOpenDetail(false);
  };

  const handleDoubleClick = (key) => {
    setEditingKey(key);
  };

  const handleTitleChange = (e, key) => {
    const newTitle = e.target.value;
    setPanes((prevPanes) =>
      prevPanes.map((pane) =>
        pane.key === key ? { ...pane, title: newTitle } : pane
      )
    );
  };

  const handleBlur = () => {
    setEditingKey(''); // 편집 모드 종료
  };

  return (
    <Tabs
      type="line"
      activeKey={activeKey}
      onChange={onChange}
      tabBarStyle={{ backgroundColor: '#ffffff', paddingLeft: '15px' }}
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
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                fontSize: '14px',
              }}
              onDoubleClick={() => handleDoubleClick(pane.key)}
            >
              {editingKey === pane.key ? (
                <Input
                  value={pane.title}
                  onChange={(e) => handleTitleChange(e, pane.key)}
                  onBlur={handleBlur}
                  autoFocus
                  size="small"
                  style={{ marginRight: '12px', width: '100px' }}
                />
              ) : (
                pane.title
              )}
              <CloseOutlined
                onClick={(e) => {
                  e.stopPropagation();
                  showDeleteConfirm(pane.key);
                }}
                style={{
                  marginLeft: '12px',
                  fontSize: '12px',
                }}
              />
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
              justifyContent: 'flex-end',
              marginBottom: '20px',
              marginRight: '20px',
            }}
          >
            <SearchBox />
          </div>
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
                onClick={handleOpenDetail} // 아이템 클릭 시 상세 보기 모드로
              />
            ))}
            {openDetail && (
              <ProductRegister
                onCloseRegister={handleCloseDetail}
                currentMode="detail"
              />
            )}

            <Card
              style={{
                width: 180,
                height: 240,
                borderRadius: '8px',
                display: 'flex',
                boxShadow: ' 0 4px 8px rgba(0, 0, 0, 0.1)',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#ffffff', // 버튼 카드 배경색
              }}
            >
              <Button
                icon={<PlusOutlined />}
                style={{
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

export default InventoryTab;
