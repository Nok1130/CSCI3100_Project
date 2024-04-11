import { React, useEffect, useState } from 'react'
import { Card, Flex, Avatar, Button } from 'antd';
import './Users.css';
import axios from 'axios';
import useStore from './UserContext.jsx';
import { Link } from 'react-router-dom';

const { Meta } = Card;





function Users({ data }) {
  const [UserInfo, setUserInfo] = useState([
    {
      "personalIcon": "1712414577831-cat.jpg",
      "username": "JOMUD",
    },
    {
      "personalIcon": "1712414577831-cat.jpg",
      "username": "CSDOG",
    },
    {
      "personalIcon": "1712414577831-cat.jpg",
      "username": "JOJO",
    }
  ])



  const [loading, setLoading] = useState(true);
  const { currentloginID, setcurrentloginID } = useStore();
  var search = data;

    const getUser = async () => {
      console.log('fetch');
      const response = await fetch('http://localhost:8080/api/admin/getAllUser');
      const data = await response.json();
      const user = data.users.filter((user) => user.userID !== currentloginID)
      setUserInfo(user);
    }
    
    useEffect(() => {
      var queryString = '';
      if (search != '' && search != undefined) {
        queryString = `username=${search}`
  
        console.log(queryString)
        console.log('run');
        setLoading(true);
  
        axios
          .post(`http://localhost:8080/api/user/searchUser?${queryString}`)
          .then((response) => {
            console.log(response.data.users)
            setUserInfo(response.data.users);
            setLoading(false);
          })
          .catch((error) => {
            console.log(error);
            setLoading(false);
          })
  
      } else {
        getUser();
      }


  }, [location, search]);

  useEffect(() => {

    console.log(UserInfo);
    setLoading(false);



  }, [UserInfo]);

  if (loading) {
    return (<div>Loading</div>)
  }

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
            avatar={<Avatar src={'/uploads/1712414577831-cat.jpg'} />}
            title={<Flex align='center'>{key.username}<Flex justify='flex-end' align='flex-start' style={{ width: '100%' }}>
              <Link to={`/home/otherprofile/${key.userID}`}><Button type="primary" >View profile</Button></Link></Flex></Flex>
            }

          />

        </Card>
      })}


    </Flex >
  )
}

export default Users