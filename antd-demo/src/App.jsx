import React from 'react';
import unicon from './assets/Unicon.svg'
import { } from '@ant-design/icons';
import { Layout, Menu, theme, ConfigProvider, Input } from 'antd';
import { Group } from 'antd/es/avatar';

const { Header, Content, Sider } = Layout;
const { Search } = Input;
const onSearch = (value, _e, info) => console.log(info?.source, value);
const items1 = ['1', '2', '3'].map((key) => ({
  key,
  label: `nav ${key}`,
}));
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items2 = [

  getItem('Posts', 'g1', null, [getItem('All', '1'), getItem('Engineering', '2'), getItem('Computer Science', '3')], 'group'),
  getItem('Groups', 'g1', null, [getItem('Group Accounts', '4')], 'group')];
const App = () => {

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
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#5295FF',
            padding: '10px',
          }}
        >
          <img width={61} height={40} src={unicon} alt="Unicon Logo"></img>
          
          <Search
            placeholder="input search text"
            allowClear
            onSearch={onSearch}
            style={{
              width: '40%',
              color: 'white'
            }}
            
          />
        </Header>
        <Layout>
          <Sider
            className='sidemenu'
            width={150}
            style={{
              background: colorBgContainer,
            }}
          >
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              style={{
                height: '100%',
                borderRight: 0,
              }}
              items={items2}
            />
          </Sider>
          <Layout
            style={{
              padding: '24px 50px 0 0',
              background: '#3e3e3e',
            }}
          >
            <Content
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
                background: '#E2EDED',
                borderRadius: borderRadiusLG,
              }}
            >
              Content
            </Content>
          </Layout>
        </Layout>

      </Layout>
    </ConfigProvider>
  );
};
export default App;