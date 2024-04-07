import React from 'react'
import { Card, Flex, Avatar, Button } from 'antd';

const { Meta } = Card;

const GroupaccountInfo = [
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=8",
    "username": "Computer Science Society",
  },
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=7",
    "username": "Engineering Society",
  },
  {
    "avatar": "https://api.dicebear.com/7.x/miniavs/svg?seed=6",
    "username": "CUHK society",
  }
]

function GroupAccounts() {
  return (
    <Flex className='scroll' vertical gap="small" style={{ height: '90vh' }}>

      {GroupaccountInfo.map((key, val) => {
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

export default GroupAccounts