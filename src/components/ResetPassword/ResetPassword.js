import React from "react";
import { Button, Layout, Row, Col, Form, Input, Tooltip } from "antd";
import { InfoCircleOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./ResetPassword.css";
const { Content } = Layout;
const ResetPassword = () => {
  const resetRequestSubmit = (values) => {
    console.log(values);
  };
  return (
    <div className="pass-reset">
      <Layout className="site-layout-background">
        <Content style={{ margin: "48px 48px" }}>
          <Form
            name="Password reset request form"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 14 }}
            onFinish={resetRequestSubmit}
            style={{ margin: "48px 24px 48px 24px" }}
          >
            <Row gutter={24}>
              <Col span={24}>
                <Form.Item
                  name={["user", "email"]}
                  label="Email"
                  rules={[
                    {
                      type: "email",
                      required: true,
                    },
                  ]}
                >
                  <Input
                    placeholder="Email address"
                    suffix={
                      <Tooltip title="Type valid email format includes @ and .">
                        <InfoCircleOutlined
                          style={{ color: "rgba(0,0,0,.45)" }}
                        />
                      </Tooltip>
                    }
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row>
              <Col span={24} style={{ textAlign: "center", marginTop: 24 }}>
                <Button type="primary" htmlType="submit">
                  Send Reset Link
                </Button>
              </Col>
            </Row>
          </Form>
          <p style={{ margin: "32px 0 0 0", textAlign: "center" }}>
            Go to login page? <Link to="/login">Login</Link>, Create new
            account? <Link to="/signup">Register</Link>
          </p>
        </Content>
      </Layout>
    </div>
  );
};

export default ResetPassword;
