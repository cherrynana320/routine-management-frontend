import React, { useState } from 'react';
import { Tabs, Card, Button, Modal } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';

const { TabPane } = Tabs;

const items = {
  calming: ['Item 1', 'Item 2', 'Item 3'],
  anti: ['Item 4', 'Item 5', 'Item 6'],
  hydrate: ['Item 7', 'Item 8', 'Item 9'],
  massage: ['Item 10', 'Item 11', 'Item 12'],
  device: ['Item 13', 'Item 14', 'Item 15'],
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
              <Card
                key={index}
                title={item}
                style={{ width: 200, borderRadius: '8px' }}
              >
                {item}
              </Card>
            ))}
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
