/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Button, Form, Input } from "antd";

// const onFinish = (values) => {
//   console.log("Success:", values);
// };
// const onFinishFailed = (errorInfo) => {
//   console.log("Failed:", errorInfo);
// };

const SignUpForm = function () {
  const [inputs, setInputs] = useState({
		username: "",
		email: "",
		password: "",
	});

  const HandleSignUp = async () => {
    console.log(inputs);
    // try {
    //   const res = await fetch("/api/signup", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(inputs),
    //   })
    // } catch (error) {
      
    // }
  };
  
  return (
    <Form
      name="basic"
      labelCol={{
        span: 10,
      }}
      wrapperCol={{
        span: 30,
      }}
      style={{
        maxWidth: 800,
      }}
      // onFinish={onFinish}
      // onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="University Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Please input your University Email!",
          },
        ]}
      >
        <Input onChange={(e) => setInputs({ ...inputs, email: e.target.value })} value={inputs.email}>
        </Input>
      </Form.Item>
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your username!",
          },
        ]}
      >
        <Input onChange={(e) => setInputs({ ...inputs, username: e.target.value })} value={inputs.username}/>
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input onChange={(e) => setInputs({ ...inputs, password: e.target.value })} value={inputs.password}/>
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit" onClick={HandleSignUp}>
          SignUp
        </Button>
      </Form.Item>
    </Form>
  );
};

const SignInForm = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    // onFinish={onFinish}
    // onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: "Please input your username!",
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: "Please input your password!",
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Login
      </Button>
    </Form.Item>
  </Form>
);

const Testing = () => {
  return (
    <div>
      <SignUpForm />
    </div>
  );
};

export default Testing;
