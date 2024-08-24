import React, { useState } from 'react';
import { Tabs, Button, Modal, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import TimelapseCard from '../../../components/TimelapseCard';
import imageFile from '/src/assets/photo.jpg';

const { TabPane } = Tabs;

const HomeTab = () => {
  const [activeKey, setActiveKey] = useState('calming');
  const [panes, setPanes] = useState([
    {
      title: '진정',
      key: 'calming',
      groups: [
        {
          title: '토리든',
          key: 'toriden',
          cards: [
            {
              image: imageFile,
              date: '2024-08-01',
              details: '피부가 좀 더 촉촉해졌어요.',
            },
            {
              image: imageFile,
              date: '2024-08-02',
              details: '오늘은 피부가 많이 진정됐어요.',
            },
          ],
        },
        {
          title: '자작나무',
          key: 'birch',
          cards: [
            {
              image: imageFile,
              date: '2024-08-01',
              details: '사용 후 피부가 시원해졌어요.',
            },
            {
              image: imageFile,
              date: '2024-08-02',
              details: '피부톤이 밝아졌어요.',
            },
          ],
        },
      ],
    },
  ]);

  const [editingKey, setEditingKey] = useState('');
  const [openRegister, setOpenRegister] = useState(false);

  const onChange = (key) => {
    if (key !== 'add') {
      setActiveKey(key);
    }
  };

  const add = () => {
    const newKey = `newTab${panes.length + 1}`;
    const newPanes = [...panes, { title: newKey, key: newKey, groups: [] }];
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

  const addGroup = (paneKey) => {
    const newGroupKey = `newGroup${Date.now()}`;
    const newGroup = { title: '새로운 그룹', key: newGroupKey, cards: [] };

    setPanes((prevPanes) =>
      prevPanes.map((pane) =>
        pane.key === paneKey
          ? { ...pane, groups: [...pane.groups, newGroup] }
          : pane
      )
    );
  };

  const removeGroup = (paneKey, groupKey) => {
    setPanes((prevPanes) =>
      prevPanes.map((pane) =>
        pane.key === paneKey
          ? {
              ...pane,
              groups: pane.groups.filter((group) => group.key !== groupKey),
            }
          : pane
      )
    );
  };

  const addCardToGroup = (paneKey, groupKey, cardContent) => {
    setPanes((prevPanes) =>
      prevPanes.map((pane) =>
        pane.key === paneKey
          ? {
              ...pane,
              groups: pane.groups.map((group) =>
                group.key === groupKey
                  ? { ...group, cards: [...group.cards, cardContent] }
                  : group
              ),
            }
          : pane
      )
    );
  };

  const removeCardFromGroup = (paneKey, groupKey, cardIndex) => {
    setPanes((prevPanes) =>
      prevPanes.map((pane) =>
        pane.key === paneKey
          ? {
              ...pane,
              groups: pane.groups.map((group) =>
                group.key === groupKey
                  ? {
                      ...group,
                      cards: group.cards.filter((_, i) => i !== cardIndex),
                    }
                  : group
              ),
            }
          : pane
      )
    );
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
            padding: '20px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row', // 그룹을 가로로 배치
              flexWrap: 'wrap', // 그룹이 화면을 넘으면 다음 줄로
              gap: '20px', // 그룹 간 간격
            }}
          >
            {pane.groups.map((group) => (
              <div
                key={group.key}
                style={{
                  display: 'flex',
                  flexDirection: 'column', // 카드가 세로로 배치되도록
                  gap: '10px', // 카드 간 간격
                  minWidth: '300px', // 최소 너비 설정
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  <h3>{group.title}</h3>
                  <Button
                    icon={<PlusOutlined />}
                    onClick={() =>
                      addCardToGroup(pane.key, group.key, {
                        image: imageFile,
                        date: '2024-08-03',
                        details: '새 카드',
                      })
                    }
                    style={{
                      marginLeft: '10px',
                      fontSize: '12px',
                      height: 'auto',
                      lineHeight: '16px',
                    }}
                  />
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column', // 카드가 세로로 배치되도록
                    gap: '10px', // 카드 간 간격
                  }}
                >
                  {group.cards.map((card, index) => (
                    <TimelapseCard
                      key={index}
                      cardIndex={index}
                      image={card.image}
                      date={card.date}
                      details={card.details}
                      removeCardFromGroup={removeCardFromGroup} // 수정된 부분
                      paneKey={pane.key}
                      groupKey={group.key}
                    />
                  ))}
                </div>
              </div>
            ))}
            <Button
              onClick={() => addGroup(pane.key)}
              icon={<PlusOutlined />}
              style={{ marginTop: '10px' }}
            >
              Add Group
            </Button>
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
        disabled={false} // 추가 버튼 활성화
      />
    </Tabs>
  );
};

export default HomeTab;
