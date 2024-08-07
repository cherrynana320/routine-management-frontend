import React, { useState } from 'react';
import { Tabs, Card, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';

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
    setActiveKey(key);
  };

  const add = () => {
    const newKey = `newTab${panes.length + 1}`;
    setPanes([...panes, { title: newKey, key: newKey }]);
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

  const onEdit = (targetKey, action) => {
    if (action === 'add') {
      add();
    } else {
      remove(targetKey);
    }
  };

  return (
    <Tabs
      type="editable-card"
      activeKey={activeKey}
      onChange={onChange}
      onEdit={onEdit}
      tabBarExtraContent={<Button icon={<PlusOutlined />} onClick={add} />}
      style={{
        flex: 1,
        display: 'flex',
        borderRadius: '0px 0px 8px 0px',
        backgroundColor: '#E9F3FF',
        '.ant-tabs-nav': {
          backgroundColor: '#E9F3FF',
        },
        '.ant-tabs-tab-active': {
          backgroundColor: '#E9F3FF',
        },
      }}
    >
      {panes.map((pane) => (
        <TabPane
          tab={pane.title}
          key={pane.key}
          closable={pane.key !== 'calming'}
          style={{ backgroundColor: '#E9F3FF' }}
        >
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '20px',
              marginLeft: '20px',
              backgroundColor: '#E9F3FF',
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
    </Tabs>
  );
};

export default TabsContent;
