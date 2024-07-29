import React, { useState } from 'react';
import { Table, Button, Row, Col, Calendar as AntdCalendar } from 'antd';
import moment from 'moment';

const itemList = ['운동하기'];

const events = [
  { title: '운동하기', start: '2023-07-29', end: '2023-07-30' },
  // Add more events here
];

const getEventSpan = (start, end) => {
  const startDate = moment(start);
  const endDate = moment(end);
  return endDate.diff(startDate, 'days') + 1; // 이벤트의 길이를 일 단위로 계산
};

const WeekView = () => {
  const [currentWeek, setCurrentWeek] = useState(moment().startOf('isoWeek'));

  const columns = [
    { title: '목록', dataIndex: 'item', key: 'item', width: 150 },
    ...[...Array(7)].map((_, i) => {
      const day = currentWeek.clone().add(i, 'days');
      return {
        title: `${day.format('dddd')} (${day.format('MM/DD')})`,
        dataIndex: day.format('dddd').toLowerCase(),
        key: day.format('dddd').toLowerCase(),
      };
    }),
  ];

  const generateRowData = () => {
    const rowData = itemList.map((item) => ({
      key: item,
      item: item,
      monday: '',
      tuesday: '',
      wednesday: '',
      thursday: '',
      friday: '',
      saturday: '',
      sunday: '',
    }));

    events.forEach((event) => {
      const startDate = moment(event.start);
      const endDate = moment(event.end);
      const startDay = startDate.isoWeekday(); // isoWeekday()는 월요일을 1로 반환
      const span = getEventSpan(event.start, event.end);
      const targetRow = rowData.find((row) => row.item === event.title);

      if (targetRow) {
        for (let i = 0; i < span; i++) {
          const day = startDay + i;
          if (day > 7) break; // 일요일을 넘어가면 중지
          const dayKey = moment().isoWeekday(day).format('dddd').toLowerCase();
          targetRow[dayKey] = (
            <div className={`event event-span-${span}`}>
              {event.title} ({startDate.format('MM/DD')} -{' '}
              {endDate.format('MM/DD')})
            </div>
          );
        }
      }
    });

    return rowData;
  };

  const handlePrevWeek = () => {
    setCurrentWeek(currentWeek.clone().subtract(1, 'weeks'));
  };

  const handleNextWeek = () => {
    setCurrentWeek(currentWeek.clone().add(1, 'weeks'));
  };

  const handleDateSelect = (date) => {
    setCurrentWeek(date.clone().startOf('isoWeek'));
  };

  return (
    <div>
      <Row justify="space-between" style={{ marginBottom: 16 }}>
        <Col span={6}>
          <AntdCalendar fullscreen={false} onSelect={handleDateSelect} />
        </Col>
        <Col span={18}>
          <Row justify="space-between" style={{ marginBottom: 16 }}>
            <Button onClick={handlePrevWeek}>Previous Week</Button>
            <Button onClick={handleNextWeek}>Next Week</Button>
          </Row>
          <Table
            columns={columns}
            dataSource={generateRowData()}
            pagination={false}
            bordered
          />
        </Col>
      </Row>
    </div>
  );
};

export default WeekView;
