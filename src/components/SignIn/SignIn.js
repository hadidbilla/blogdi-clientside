import React from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./SignIn.css";
import { Link } from "react-router-dom";
function SignIn() {
  const [signInUser, setSignInUser] = {};
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
    const signInData = { ...values };
    fetch("https://blogdi.pythonanywhere.com/doc/api/blog/login", {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((signinData) => {
        console.log(signinData);
        setSignInUser(signinData);

        // if (signinData.detail === undefined) {
        //   cookies.set("currentUser", signinData, { path: "/" });
        //   return (window.location.href = "/admin");
        // } else {
        //   // console.log("success", signupData);
        //   message.error(signinData.detail);
        // }
      })
      .catch(function (error) {
        // console.log("error", error);
      });
  };
  return (
    <div className="signin-from">
      <div className="from-content">
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox style={{ color: "white" }}>Remember me</Checkbox>
            </Form.Item>
            <Link className="login-form-forgot" to="/reset-password">
              Forgot password
            </Link>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
              style={{ marginRight: "5px" }}
            >
              Log in
            </Button>
            <span style={{ color: "white" }}>Or </span>
            <Link style={{ marginRight: "5px" }} to="/signup">
              register now!
            </Link>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default SignIn;
