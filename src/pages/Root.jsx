import { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Dropdown, Avatar, Space } from "antd";

const { Header, Content, Footer } = Layout;

import { UserOutlined, LogoutOutlined, SettingOutlined } from "@ant-design/icons";

import logo from "../assets/logo.svg";

import { Link, Outlet } from 'react-router-dom';

const items = [
  { key: "home", label: <Link>Home</Link> },
];



const RootLayout = () => {
  const [currentTab, setCurrentTab] = useState("home");

  const clickHandler = (e) => {
    console.log('click ', e);
    setCurrentTab(e.key);
  };

  // User profile dropdown menu
  const userMenu = (
    <Menu
      onClick={clickHandler}
      items={[
        {
          key: "profile",
          label: <Link to={'/profile'}>Profile</Link>,
          icon: <UserOutlined />,
        },
        {
          key: "settings",
          label: <Link to={'settings'}>Settings</Link>,
          icon: <SettingOutlined />,
        },
        {
          key: "logout",
          label: "Logout",
          icon: <LogoutOutlined />,
          danger: true,
          onClick: () => console.log("Logging out..."),
        },
      ]}
    />
  );

  return (
    <Layout style={{ width: "100vw", }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: "0 50px 0 10px",
        }}
      >
        {/* Left SVG Logo */}
        <div style={{ display: "flex", alignItems: "start" }}>
          <img src={logo} alt="Logo" width={40} height={40} />
        </div>

        {/* Center Navigation */}
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[currentTab]}
          items={items}
          onClick={clickHandler}
          style={{
            flex: 1,
            minWidth: 0,
            margin: "0 10px",
          }}
        />

        {/* Right User Dropdown */}
        <Dropdown overlay={userMenu} trigger={["click"]}>
          <Space style={{ cursor: "pointer" }}>
            <Avatar size="large" icon={<UserOutlined />} />
          </Space>
        </Dropdown>
      </Header>

      <Content
        style={{
          padding: '0 8px',
        }}
      >
        <div
          style={{
            padding: 20,
          }}
        >
          <Outlet />
        </div>
      </Content>

      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Talent Acquisition Platform ©{new Date().getFullYear()} Created by James Jiao
      </Footer>
    </Layout>
  );
};
export default RootLayout;
