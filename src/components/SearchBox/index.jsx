import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { SearchOutlined, CloseOutlined } from '@ant-design/icons';
import Xbutton from '/src/assets/Xbutton.png';
import './index.css'; // CSS 파일을 임포트합니다

const SearchBox = ({ onSearch, onClear }) => {
  const [value, setValue] = useState('');

  const handleSearch = () => {
    if (onSearch) onSearch(value);
  };

  const handleClear = () => {
    setValue('');
    if (onClear) onClear();
  };

  return (
    <div className="search-container">
      <Input
        placeholder=""
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
        suffix={
          <Button
            className="clear-button"
            onClick={handleClear}
            style={{ visibility: value ? 'visible' : 'hidden' }} // 값이 있을 때만 X 버튼 표시
          >
            <img
              src={Xbutton}
              alt="Clear"
              style={{ width: '20px', height: '20px' }}
            />
          </Button>
        }
        prefix={
          <SearchOutlined style={{ fontSize: '22px', marginLeft: '10px' }} />
        } // 돋보기 아이콘
        onPressEnter={handleSearch} // Enter 키를 눌러 검색 실행
      />
    </div>
  );
};

export default SearchBox;
