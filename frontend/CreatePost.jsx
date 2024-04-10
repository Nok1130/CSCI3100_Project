import React from 'react';
import './CreatePost.css';
import { Avatar, Button, Checkbox, Form, Input, Select, Flex, Upload, message } from 'antd';
import { LiaFileVideo, LiaImage } from "react-icons/lia";
import axios from 'axios';
import useStore from './UserContext';

const { TextArea } = Input;

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const handleChange = (value) => {
  console.log(`selected ${value}`);
};


function CreatePost()  {
  const { currentloginID, setcurrentloginID } = useStore();
  const { currentuniversity, setcurrentuniversity } = useStore();
  const { currentmajor, setcurrentmajor } = useStore();
  const { currentusername, setcurrentusername } = useStore();
  const onFinish = async (values) => {
    console.log(values);
    const formData = new FormData();
    formData.append('userID', currentloginID);
    formData.append('postCategory', values.postCategory);
    formData.append('nickname', values.nickname);
    formData.append('postTitle', values.postTitle);
    formData.append('postText', values.postText);
    if (values.hashtag) {
      formData.append('hashtag', values.hashtag);
    }
    if (values.postContent) {
      formData.append('postContent', values.postContent.file.originFileObj);
      console.log(values.postContent.file.originFileObj)
    }
    console.log('Success:', formData);
    
    await fetch(`http://localhost:8080/api/post/createPost`, {
      method: 'POST',
      body: formData,
    })
    console.log('success');
    message.success('Post created successfully');
    window.location.pathname = '/home/recommend/post/All';
    };

    const props = {
      beforeUpload: file => {
        const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        const isMp4 = file.type === 'video/mp4';
        if (!isJpgOrPng && !isMp4) {
          message.error('You can only upload JPG/PNG/MP4 file!');
        }
        return isJpgOrPng || isMp4 ? true : Upload.LIST_IGNORE;
      },
      maxCount: 1,
    };

  return (

  <Form name="basic"
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
      name="postCategory"
      rules={[
        {
          required: true,

        },
      ]}
    >
      <Select
        className='postCategory'
        placeholder="Select major/ faculty"

        onChange={handleChange}
        options={[
          {
            value: 'All',
            label: 'All',
          },
          {
            value: currentuniversity,
            label: currentuniversity,
          },
          {
            value: currentmajor,
            label: currentmajor,
          },
        ]}
      />
    </Form.Item>
    <Flex gap="small">
      <Avatar width={30} src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
      <Form.Item
        name="nickname"
        rules={[
          {
            required: true,
          },
        ]}
      >



        <Select
          className='nickname'
          placeholder="Select identity"
          onChange={handleChange}
          options={[
            {
              value: currentusername,
              label: currentusername,
            },
            {
              value: currentuniversity,
              label: currentuniversity,
            },
            {
              value: currentmajor,
              label: currentmajor,
            },
          ]}
        />


      </Form.Item>
    </Flex>

    <Form.Item
      name="postTitle"
      rules={[
        {
          required: true,
        },
      ]}>
      <Input className="title" placeholder="Title" maxLength={80} showCount variant="borderless" />
    </Form.Item>

    <Form.Item
      className='content_form'
      name="postText"
      style={{ height: '40%' }}
      rules={[
        {
          required: true,
        },
      ]}
    >
      <TextArea size='large' className="content" placeholder="Content" style={{ resize: 'none' }} variant="borderless" />
    </Form.Item>

    <Form.Item
      name="hashtag"
    >
      <Input className="hashtag" placeholder="Topic"/>
    </Form.Item>

    <Flex justify='space-between'>
      <Flex>
        <Form.Item name="postContent">
          <Upload {...props} action='https://unicon.free.beeceptor.com'>
            <Button className='upload' icon={<LiaImage style={{ height: 30, width: 30 }} />}></Button>
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

  </Form>)
};
export default CreatePost;