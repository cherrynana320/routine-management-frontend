import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Upload, DatePicker, Divider, Space } from 'antd';
import AtomicPopup from './AtomicPopup';

import { PlusOutlined } from '@ant-design/icons';

const ProductRegister = (props) => {
  const [form] = Form.useForm();
  const [focus, setFocus] = useState(false);

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const { TextArea } = Input; //Input.TextArea

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    validationMessage(errorInfo, () => {});
  };

  useEffect(() => {}, [focus]);

  const onFinishRegister = async () => {
    const values = form.getFieldsValue(true);
    const req = Object.assign({}, values);
    console.log('values :', values);

    const orgFileList = fileList.filter((file) => file.id); // 기존에 존재하던 파일
    const newFileList = fileList.filter((file) => !file.id); // 새로 추가된 파일

    try {
      const retVals = await uploadFiles(newFileList); //uploadFiles로 새로운 파일들 업로드 한 뒤 retVals에 저장
      req.attached_files = [
        ...orgFileList.map((retVal) => ({ id: retVal.id })),
        ...retVals.map((retVal) => ({ id: retVal.id })),
      ]; // 기존파일 + 새 파일

      console.log('req :', req);

      repositoryApis
        .createRepository(req)
        .then((resp) => {
          console.log(resp);
          infoMessage('등록이 완료되었습니다.', () => {
            onCloseRegister();
            Router.reload();
          });
        })
        .catch((e) => console.log(e));
    } catch (e) {
      console.log('e : ', e);
    }
  };

  useEffect(() => {
    setFocus(true);
    return () => {
      setFocus(false);
    };
  }, []);

  const confirmPopup = () => {
    confirmMessage2('등록하시겠습니까?', () => {
      onFinishRegister();
    });
  };

  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList }) => {
    setFileList(fileList);
  };

  const handleRemove = (file) => {
    setFileList(fileList.filter((item) => item.uid !== file.uid));
  };

  return (
    <>
      <AtomicPopup
        onCancel={() => {
          props.onCloseRegister(); // 팝업 취소 시 닫기;
        }}
        footer={null}
      >
        <Form layout="vertical">
          <Divider />
          <Space
            direction="horizontal"
            style={{
              width: '100%',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Form.Item style={{ margin: 0 }}>
              <Input
                placeholder="Product Name"
                style={{ height: '40px', width: '400px' }}
              />
            </Form.Item>
            <Button type="primary" style={{ height: '40px', width: '80px' }}>
              Save
            </Button>
          </Space>
          <Divider />
          <Form.Item
            label="Product Image"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            style={{ width: '50%' }}
          >
            <Upload
              action="/upload.do"
              listType="picture-card"
              fileList={fileList}
              maxCount={1}
              onChange={handleChange}
              onRemove={handleRemove}
            >
              {fileList.length === 0 && (
                <Button
                  style={{
                    border: 0,
                    background: 'none',
                  }}
                >
                  <PlusOutlined />
                </Button>
              )}
            </Upload>
          </Form.Item>
          <Form.Item label="Expiration Date" style={{ width: '50%' }}>
            <DatePicker />
          </Form.Item>
          <Form.Item label="Description">
            <TextArea rows={4} />
          </Form.Item>
        </Form>
      </AtomicPopup>
    </>
  );
};

export default ProductRegister;
