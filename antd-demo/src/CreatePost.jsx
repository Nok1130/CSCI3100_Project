import React from 'react';
import './CreatePost.css';
import { Button, Checkbox, Form, Input, Select } from 'antd';
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const CreatePost = () => (
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
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      name="post_access"
      rules={[
        {
          required: true,
          
        },
      ]}
    >
      <Select
      className='post_access'
      placeholder="Select major/ faculty"
      style={{
        width: 175,
        color: 'black',
      }}
      onChange={handleChange}
      options={[
        {
          value: 'all',
          label: 'All',
        },
        {
          value: 'engineering',
          label: 'Engineering',
        },
        {
          value: 'computer_science',
          label: 'Computer Science',
        },
      ]}
    />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);
export default CreatePost;