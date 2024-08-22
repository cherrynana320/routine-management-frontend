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
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
    },
    {
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
    },
    {
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
    },
    {
      brand: 'Torriden',
      name: '다이브인 저분자 히알루론산 세럼',
      image: imageFile,
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

  // 편집 중인 탭의 key를 저장하는 상태
  const [editingKey, setEditingKey] = useState('');
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

  const handleOpenRegister = () => {
    setOpenRegister(true);
  };

  const handleCloseRegister = () => {
    setOpenRegister(false);
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
              justifyContent: 'flex-end', // SearchBox를 오른쪽 끝으로 배치
              marginBottom: '20px', // SearchBox 아래에 여백 추가
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
                onAddClick={() => console.log(`${item.name}`)}
              />
            ))}

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
