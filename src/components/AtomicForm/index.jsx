//외부라이브러리
import React from 'react';
import { Col, Form, Input, Row, Tooltip } from 'antd';

import './index.css';

import {
  formItemLayoutDefault,
  formItemLayoutVerticalDefault,
} from '/src/constants/CommonConfigs';
import { AlertOutlined, InfoCircleOutlined } from '@ant-design/icons';

const AtomicForm = (props) => {
  const defaultConfig =
    props.layout === 'vertical'
      ? formItemLayoutVerticalDefault
      : formItemLayoutDefault;

  return (
    <Form {...props} {...defaultConfig}>
      {props.children}
    </Form>
  );
};

export default AtomicForm;
