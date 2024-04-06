import React from 'react';
import './CreatePost.css';
import { Avatar, Button, Checkbox, Form, Input, Select, Flex, Upload } from 'antd';
import { LiaFileVideo, LiaImage } from "react-icons/lia";

const {TextArea} = Input;
const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const props_video = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'video/mp4';
    if (!isPNG) {
      message.error(`${file.name} is not a video file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};
const props_image = {
  beforeUpload: (file) => {
    const isPNG = file.type === 'image/png' || file.type === 'image/jpeg';
    if (!isPNG) {
      message.error(`${file.name} is not a image file`);
    }
    return isPNG || Upload.LIST_IGNORE;
  },
  onChange: (info) => {
    console.log(info.fileList);
  },
};
const CreatePost = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 30,
    }}
    style={{
      width: '100%',
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
    <Flex gap="small">
      <Avatar width={30} src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
      <Form.Item
        name="identity"
        rules={[
          {
            required: true,
          },
        ]}
      >



        <Select
          className='identity'
          placeholder="Select identity"
          onChange={handleChange}
          options={[
            {
              value: 'username',
              label: 'CSDOG',
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
    </Flex>

    <Form.Item
            name="title"
            rules={[
              {
                required: true,
              },
            ]}>
    <Input className="title" placeholder="Title" maxLength={80} showCount variant="borderless"/>
    </Form.Item>

    <Form.Item
            className='content_form'
            name="content"
            style={{height: '40%'}}
            rules={[
              {
                required: true,
              },
            ]}
            >
    <TextArea size='large' className="content" placeholder="Content" style={{resize: 'none'}} variant="borderless"/>
    </Form.Item>

    <Form.Item
            name="topic"
    >
    <Input className="topic" placeholder="Topic"/>
    </Form.Item>

  <Flex justify='space-between'>
    <Flex>
    <Form.Item>
      <Upload {...props_video}>
        <Button className='upload' icon={<LiaFileVideo style={{height: 30, width: 30}}/>}></Button>
      </Upload>
    </Form.Item>
    <Form.Item>
      <Upload {...props_image}>
        <Button type="file"accept="image/png, image/jpeg" className='upload' icon={<LiaImage style={{height: 30, width: 30}}/>}></Button>
      </Upload>
    </Form.Item>
    </Flex>
    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Post
      </Button>
    </Form.Item>
  </Flex>

  </Form>
);
export default CreatePost;