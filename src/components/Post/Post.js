import React from "react";
import { Form, Input, Button, Checkbox, Col, Row } from "antd";
import TextEditor from "./TextEditor/TextEditor";
function Post() {
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
      >
        <Row>
          <Col>
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

        <Form.Item name="post" component={TextEditor}>
          <TextEditor />
        </Form.Item>
        <Form.Item
          wrapperCol={{
            span: 1,
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
