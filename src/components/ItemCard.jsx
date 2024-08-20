import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

const ItemCard = ({ image, brand, name }) => (
  <Card
    hoverable
    style={{
      width: 175,
      borderRadius: '8px',
      overflow: 'hidden',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    }}
  >
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        marginBottom: '8px', // 이미지와 브랜드 사이의 간격
      }}
    >
      <img
        alt={name}
        src={image}
        style={{
          height: '120px',
          width: '120px',
          objectFit: 'cover',
        }}
      />
    </div>
    <div style={{ marginBottom: '2px' }}>
      <span style={{ color: '#a0a0a0', fontSize: '12px' }}>{brand}</span>
    </div>
    <div>
      <span style={{ color: '#000000', fontSize: '12px' }}>{name}</span>
    </div>
  </Card>
);

export default ItemCard;
