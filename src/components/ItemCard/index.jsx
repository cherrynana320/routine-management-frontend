import React from 'react';
import { Card } from 'antd';
import './index.css'; // CSS 모듈 import

const ItemCard = ({ image, brand, name }) => (
  <Card hoverable className="card">
    <div className="imageContainer">
      <img alt={name} src={image} className="image" />
    </div>
    <div className="brand">{brand}</div>
    <div className="name">{name}</div>
  </Card>
);

export default ItemCard;
