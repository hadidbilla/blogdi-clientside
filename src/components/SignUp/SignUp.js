import React from "react";
import "antd/dist/antd.css";
import "./SignUp.css";

import { Form, Input, Select, Row, Col, Button, Card } from "antd";
const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
function SignUp() {
  const { form } = Form.useForm();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Card className="site-card-border-less-wrapper">
      <Card type="inner" title="Sign Up">
        <Row>
          <Col span={12}>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="title"
                label="Title"
                rules={[
                  {
                    required: true,
                    message: "Please input your Title",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="firstname"
                label="Firstname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Firstname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Please select gender!",
                  },
                ]}
              >
                <Select placeholder="select your gender">
                  <Option value="male">Male</Option>
                  <Option value="female">Female</Option>
                  <Option value="other">Other</Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="industry"
                label="Industry"
                rules={[
                  {
                    required: true,
                    message: "Please select Industry!",
                  },
                ]}
              >
                <Select placeholder="select your industry">
                  <Option value=""></Option>
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="interest"
                label="Custom Interest"
                rules={[
                  {
                    required: true,
                    message: "Please input your Custom Interest",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="stage"
                label="Stage"
                rules={[
                  {
                    required: true,
                    message: "Please select Stage!",
                  },
                ]}
              >
                <Select placeholder="select your stage">
                  <Option value=""></Option>
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="password"
                label="Password"
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
                hasFeedback
              >
                <Input.Password />
              </Form.Item>
            </Form>
          </Col>
          <Col span={12}>
            <Form
              {...formItemLayout}
              form={form}
              name="register"
              onFinish={onFinish}
              scrollToFirstError
            >
              <Form.Item
                name="site title"
                label="Site Title"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="lastname"
                label="Lastname"
                rules={[
                  {
                    required: true,
                    message: "Please input your Lastname!",
                    whitespace: true,
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="country"
                label="Country"
                rules={[
                  {
                    required: true,
                    message: "Please select Country!",
                  },
                ]}
              >
                <Select placeholder="select your Country">
                  <Option value=""></Option>
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="interesr"
                label="Interest"
                rules={[
                  {
                    required: true,
                    message: "Please select Interest",
                  },
                ]}
              >
                <Select placeholder="select your interest">
                  <Option value=""></Option>
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </Form.Item>
              <Form.Item
                name="goal"
                label="Goal"
                rules={[
                  {
                    required: true,
                    message: "Please select Goal",
                  },
                ]}
              >
                <Select placeholder="select your goal">
                  <Option value=""></Option>
                  <Option value=""></Option>
                  <Option value=""></Option>
                </Select>
              </Form.Item>

              <Form.Item
                name="email"
                label="E-mail"
                rules={[
                  {
                    type: "email",
                    message: "The input is not valid E-mail!",
                  },
                  {
                    required: true,
                    message: "Please input your E-mail!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                name="confirm"
                label="Confirm Password"
                dependencies={["password"]}
                hasFeedback
                rules={[
                  {
                    required: true,
                    message: "Please confirm your password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }

                      return Promise.reject(
                        new Error(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Register
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </Card>
    </Card>
  );
}

export default SignUp;
