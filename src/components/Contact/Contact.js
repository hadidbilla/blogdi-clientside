import React from "react";
import { Layout, Form, Input, Button } from "antd";

const Contact = () => {
  const { Content } = Layout;
  const submitContactForm = function (values) {
    console.log("Submit contact form ", values);
  };
  const layout = {
    labelCol: { span: 4 },
    wrapperCol: { span: 20 },
  };
  return (
    <div>
      <Layout className="site-layout-background">
        <Content style={{ margin: "48px 48px" }}>
          <div className="contact-form">
            <div
              style={{ textAlign: "center", width: "100%", margin: "96px 0" }}
            >
              <div style={{ display: "inline-block" }}>
                <Form
                  name="contact-form"
                  {...layout}
                  onFinish={submitContactForm}
                  validateMessages="Email format not matched"
                >
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[{ required: true, type: "email" }]}
                  >
                    <Input style={{ width: "372px" }} />
                  </Form.Item>
                  <Form.Item
                    name="subject"
                    label="Subject"
                    rules={[{ required: true, type: "string" }]}
                  >
                    <Input style={{ width: "372px" }} />
                  </Form.Item>
                  <Form.Item
                    name="content"
                    label="Message"
                    rules={[{ required: true, type: "string" }]}
                  >
                    <Input.TextArea style={{ width: "372px" }} rows={6} />
                  </Form.Item>
                  <Form.Item style={{ textAlign: "right" }}>
                    <Button type="primary" htmlType="submit">
                      Sent Message
                    </Button>
                  </Form.Item>
                </Form>
              </div>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};

export default Contact;
