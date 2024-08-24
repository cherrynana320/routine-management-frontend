import React from 'react';
import { Card, Button } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import './index.css'; // CSS 모듈 import

const TimelapseCard = ({
  cardIndex,
  image,
  date,
  removeCardFromGroup,
  paneKey,
  groupKey,
}) => (
  <Card key={cardIndex} hoverable className="timelapse-card">
    <div className="timelapse-card">
      <div className="timelapse-imageContainer">
        <img src={image} className="timelapse-image" alt="timelapse" />
      </div>

      <div className="timelapse-content">
        <div className="timelapse-date">{date}</div>
      </div>

      <Button
        type="link"
        onClick={() => removeCardFromGroup(paneKey, groupKey, cardIndex)}
        icon={<CloseOutlined />}
        className="timelapse-removeButton"
      />
    </div>
  </Card>
);

export default TimelapseCard;
