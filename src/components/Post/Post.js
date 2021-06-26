import React, { useState } from "react";
import { Form, Input, Button, Col, Row, Select } from "antd";
const { TextArea } = Input;
function Post() {
  const [postData, setPostData] = useState({});
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        style={{ width: "100%" }}
      >
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item
              label="Title"
              name="title"
              rules={[
                {
                  required: true,
                  message: "Please chose post title!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item label="Select">
              <Select>
                <Select.Option value="demo">Demo</Select.Option>
              </Select>
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item
              label="Image URL"
              name="imageUrl"
              rules={[
                {
                  required: true,
                  message: "Please upload your image URL!",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item
              label="Post"
              name="post"
              rules={[
                {
                  required: true,
                  message: "Please post",
                },
              ]}
            >
              <TextArea />
            </Form.Item>
          </Col>
        </Row>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}

export default Post;
