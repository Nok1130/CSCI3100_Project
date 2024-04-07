import React from 'react'
import { Card, Flex, Avatar, Button } from 'antd';
import './Users.css';

const { Meta } = Card;

const UserInfo = [
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    "username": "JOMUD",
  },
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=7",
    "username": "CSDOG",
  },
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=6",
    "username": "JOJO",
  }
]

function Users() {
  return (
    <Flex className='scroll' vertical gap="small" style={{ height: '90vh' }}>

      {UserInfo.map((key, val) => {
        return <Card
        className='usercard'
          bordered={false}
          style={{
            width: 300,
          }}
        >
          <Meta
            avatar={<Avatar src={key.avatar} />}
            title={<Flex align='center'>{key.username}<Flex justify='flex-end' align='flex-start' style={{ width: '100%' }}><Button type="primary">View profile</Button></Flex></Flex>}

          />

        </Card>
      })}


    </Flex>
  )
}

export default Users