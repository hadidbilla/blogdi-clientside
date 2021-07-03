import React, { useEffect, useState } from "react";
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
  const [stage, setStage] = useState();
  const [goals, setGoals] = useState();
  const [industries, setIndustries] = useState();
  const [interests, setInterests] = useState();
  useEffect(() => {
    fetch("https://blogdi.pythonanywhere.com/api/blog/stages/")
      .then((response) => response.json())
      .then((data) => setStage(data));
    fetch("https://blogdi.pythonanywhere.com/api/blog/goals/")
      .then((response) => response.json())
      .then((data) => setGoals(data));
    fetch("https://blogdi.pythonanywhere.com/api/blog/industries")
      .then((response) => response.json())
      .then((data) => {
        setIndustries(data);
      });
    fetch("https://blogdi.pythonanywhere.com/api/blog/interests")
      .then((response) => response.json())
      .then((data) => {
        setInterests(data);
      });
  }, []);

  const onFinish = (values) => {
    const signUpData = { ...values };
    console.log(signUpData);
    fetch("https://blogdi.pythonanywhere.com/api/blog/signup/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <Card className="site-card-border-less-wrapper">
      <Card type="inner" title="Sign Up">
        <Form
          initialValues={{
            remember: true,
          }}
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={onFinish}
        >
          <Row gutter={[16, 16]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
                  {industries
                    ?.filter(
                      (industry) =>
                        industry.title !== "Interest with create date"
                    )
                    .map((industry) => {
                      return (
                        <Option key={industry.title} value={industry.title}>
                          {industry.title}
                        </Option>
                      );
                    })}
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
                  {stage?.map((data) => {
                    return (
                      <Option key={data.title} value={data.title}>
                        {data.title}
                      </Option>
                    );
                  })}
                </Select>
              </Form.Item>
              <Form.Item
                label="New Password"
                name="newPassword"
                rules={[
                  {
                    required: true,
                    message: "Password cannot be empty",
                  },
                  {
                    min: 6,
                    message: "Password cannot be less than 4 characters",
                  },
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
                  <Option value="Bangladesh">Bangladesh</Option>
                  <Option value="United Kingdom">United Kingdom</Option>
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
                  {interests
                    ?.filter((interest) => interest.title !== "Test")
                    .map((interest) => {
                      return (
                        <Option key={interest.title} value={interest.title}>
                          {interest.title}
                        </Option>
                      );
                    })}
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
                  {goals?.map((data) => {
                    return (
                      <Option key={data.title} value={data.title}>
                        {data.title}
                      </Option>
                    );
                  })}
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
                label="Confirm Password"
                name="confirmPassword"
                dependencies={["password"]}
                rules={[
                  {
                    required: true,
                    message: "Please input your password again!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        "The two passwords that you entered do not match!"
                      );
                    },
                  }),
                ]}
              >
                <Input.Password />
              </Form.Item>
            </Col>
          </Row>

          <Form.Item
            wrapperCol={{
              offset: 12,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Register
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </Card>
  );
}

export default SignUp;
