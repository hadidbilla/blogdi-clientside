import React from "react";
import { Form, Input, InputNumber, Button, Col, Row } from "antd";
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export default function Tab1() {
  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <div>
      <Form
        style={{ width: "70%" }}
        {...layout}
        name="nest-messages"
        onFinish={onFinish}
        validateMessages={validateMessages}
      >
        <Row gutter={[24, 16]}>
          <Col span={12}>
            <Form.Item
              name={["user", "firstName"]}
              label="First Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item
              name={["user", "lastName"]}
              label="Last Name"
              rules={[
                {
                  required: true,
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
              name={["user", "email"]}
              label="Email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          {/* <Col span={12}>
            <Form.Item
              name={["user", "lastName"]}
              label="Last Name"
              rules={[
                {
                  required: true,
                },
              ]}
            >
              <Input />
            </Form.Item>
          </Col> */}
        </Row>
        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
