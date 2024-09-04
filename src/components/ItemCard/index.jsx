import React from 'react';
import { Card } from 'antd';
import './index.css'; // CSS 모듈 import

const ItemCard = ({ image, brand, name, onClick }) => (
  <Card hoverable className="item-card" onClick={onClick}>
    <div className="item-imageContainer">
      <img alt={name} src={image} className="item-image" />
    </div>
    <div className="item-brand">{brand}</div>
    <div className="item-name">{name}</div>
  </Card>
);

export default ItemCard;
