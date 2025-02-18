import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
const { Content, Sider } = Layout;

const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map((icon, index) => {
  const key = String(index + 1);
  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
  };
});

export default function SettingsPage() {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <div>
      <Layout
        style={{
          padding: '24px 0',
          background: colorBgContainer,
          borderRadius: borderRadiusLG,
          height: '80vh',
        }}
      >
        <Sider
          style={{
            background: colorBgContainer,
            height: '100%',
          }}
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
            }}
            items={items2}
          />
        </Sider>
        <Content
          style={{
            padding: '0 24px',
            minHeight: 280,
          }}
        >
          <h1 className='text-2xl text-gray-700'>
            Settings Page Content
          </h1>
        </Content>
      </Layout>
    </div>
  );
}
