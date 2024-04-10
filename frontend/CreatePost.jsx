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
// const props_video = {
//   beforeUpload: (file) => {
//     const isPNG = file.type === 'video/mp4';
//     if (!isPNG) {
//       message.error(`${file.name} is not a video file`);
//     }
//     return isPNG || Upload.LIST_IGNORE;
//   },
//   onChange: (info) => {
//     console.log(info.fileList);
//   },
//   action: '//jsonplaceholder.typicode.com/posts/',
//   listType: 'picture',
//   previewFile(file) {
//     console.log('Your upload file:', file);
//     // Your process logic. Here we just mock to the same file
//     return fetch('https://next.json-generator.com/api/json/get/4ytyBoLK8', {
//       method: 'POST',
//       body: file,
//     })
//       .then((res) => res.json())
//       .then(({ thumbnail }) => thumbnail);
//   },
// };
// const props_image = {
//   beforeUpload: (file) => {
//     const isPNG = file.type === 'image/png' || file.type === 'image/jpeg';
//     if (!isPNG) {
//       message.error(`${file.name} is not a image file`);
//     }
//     return isPNG || Upload.LIST_IGNORE;
//   },
//   onChange: (info) => {
//     console.log(info.fileList);
//   },
// };



function CreatePost()  {
  const { currentloginID, setcurrentloginID } = useStore();
  const { currentuniversity, setcurrentuniversity } = useStore();
  const { currentmajor, setcurrentmajor } = useStore();
  const { currentusername, setcurrentusername } = useStore();
  const [messageApi, contextHolder] = message.useMessage();
  const success = () => {
    messageApi.open({
      type: 'success',
      content: 'Post successfully',
    });
  };
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
    success;
    window.location.pathname = '/home/recommend/post/All';
    };

  return (
    <>{contextHolder}
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
        {/* <Form.Item name="postContent">
          <Upload>
            <Button className='upload' icon={<LiaFileVideo style={{ height: 30, width: 30 }} />}></Button>
          </Upload>
        </Form.Item> */}
        <Form.Item name="postContent">
          <Upload>
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

  </Form></>)
};
export default CreatePost;