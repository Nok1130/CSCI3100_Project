import React, { useState } from 'react';
import './Home.css'
import unicon from './assets/Unicon.svg'
import { } from '@ant-design/icons';
import { Layout, Menu, theme, ConfigProvider, Input, Flex } from 'antd';
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";
import { FiEdit, FiMessageSquare } from "react-icons/fi";
import { useLocation, BrowserRouter, Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Recommend from './Recommend.jsx';
import MyGroupAccounts from './MyGroupAccounts.jsx';
import Notification from './Notification.jsx';
import Profile from './Profile.jsx';
import CreatePost from './CreatePost.jsx';
import Chat from './Chat.jsx';

const { Header, Content, Sider } = Layout;
const { Search } = Input;

function getItem(label, key, icon, children, type, link) {
    return {
        key,
        icon,
        children,
        label,
        type,
        link
    };
};

const header = [
    getItem(null, 'notification',
        <Flex style={{ height: '100%', width: '100%' }} align='center' justify='center'>
            <IoNotificationsOutline
                size={25}
                style={{
                    color: '#ffffff',
                }}
            /></Flex>),
    getItem(null, 'profile',
        <Flex style={{ height: '100%', width: '100%' }} align='center' justify='center'>
            <AiOutlineUser
                size={25}
                style={{
                    color: '#ffffff',
                }}
            />
        </Flex>),
    getItem(null, 'createpost',
        <Flex style={{ height: '100%', width: '100%' }} align='center' justify='center'>
            <FiEdit
                size={25}
                style={{
                    color: '#ffffff',
                }}
            />
        </Flex>),
    getItem(null, 'chat',
        <Flex style={{ height: '100%', width: '100%' }} align='center' justify='center'><FiMessageSquare
            size={25}
            style={{
                color: '#ffffff',
            }}
        />
        </Flex>)

];

const sidemenu = [

    getItem('Posts', 'g1', null, [getItem('All', 'recommend/post/all'), getItem('Engineering', 'recommend/post/engineering'), getItem('Computer Science', 'recommend/post/computerscience')], 'group'),
    getItem('Groups', 'g2', null, [getItem('Group Accounts', 'groupaccount')], 'group')];



const Home = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [selectedKeys, setSelectedKeys] = useState([location.pathname]);
    const [searchInput, setSearchInput] = useState([]);
    const onSearch = (value, _e, info) => {
        setSearchInput(value);
        console.log(searchInput);
    };
    const handleSelect = ({ key }) => {
        setSelectedKeys([key]);
    };

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (


        <ConfigProvider
            theme={{
                token: {
                    // Alias Token
                    colorBgContainer: '#3e3e3e',
                },
            }}
        >

            <Layout 
                    style = {{
                        background: colorBgContainer
                    }}>
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        background: '#5295FF',
                        padding: '0 min(50px, 5%)',

                    }}
                >
                    <img width={90} height={58} src={unicon} alt="Unicon Logo"></img>

                    <Search
                        placeholder="input search text"
                        allowClear
                        onSearch={onSearch}
                        style={{
                            width: '60%',
                            color: 'white'
                        }}

                    />
                    <Flex
                        style={{
                            width: '100%',
                            height: '100%',
                        }}
                        justify={'flex-end'}
                        align={'center'}>
                        <Menu
                            mode="horizontal"
                            theme="dark"
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
                            onSelect={handleSelect}
                            selectedKeys={selectedKeys}
                            items={header}
                        />
                    </Flex>
                </Header>
                <Layout>
                    <Sider
                        className='sidemenu'
                        style={{
                            background: colorBgContainer,

                        }}
                    >
                        <Menu
                            mode="inline"
                            onSelect={handleSelect}
                            selectedKeys={selectedKeys}
                            style={{
                                height: '100%',
                                borderRight: 0,
                            }}
                            onClick={({ key }) => {
                                navigate(key);
                            }}
                            items={sidemenu}
                        />
                    </Sider>
                    <Layout
                        style={{
                            background: '#3e3e3e',
                        }}
                    >
                        <Content

                            style={{
                                padding: 24,
                                margin: 0,
                                maxHeight: '90vh',
                                background: '#E2EDED',
                                borderRadius: borderRadiusLG,
                                display: 'flex'
                            }}
                        >
                            <Routes>
                                <Route path='recommend/*' element={<Recommend data={searchInput}/>} />
                                <Route path='groupaccount/*' element={<MyGroupAccounts />} />
                                <Route path='notification' element={<Notification />} />
                                <Route path='profile' element={<Profile />} />
                                <Route path='createpost' element={<CreatePost />} />
                                <Route path='chat' element={<Chat />} />

                            </Routes>

                        </Content>
                    </Layout>
                </Layout>

            </Layout>
        </ConfigProvider>
    );
    
};
export default Home;