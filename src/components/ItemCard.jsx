import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ItemCard = ({ image, brand, name, onAddClick }) => (
  <Card
    hoverable
    style={{
      width: 200,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
    cover={
      <img
        alt={name}
        src={image}
        style={{ height: '200px', objectFit: 'cover', border: '1px' }}
      />
    }
  >
    <Meta
      title={<span style={{ color: '#a0a0a0' }}>{brand}</span>} // 연한 회색
      description={<span style={{ color: '#000000' }}>{name}</span>} // 검정색
    />
  </Card>
);

export default ItemCard;
