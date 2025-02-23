import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Drawer } from 'antd';
import { Dropdown, Avatar, Space } from "antd";

const { Header, Content, Footer } = Layout;

import { UserOutlined, LogoutOutlined, SettingOutlined, MenuOutlined } from "@ant-design/icons";

import logo from "../assets/logo.svg";

import { Link, Outlet, useLocation } from 'react-router-dom';

const items = [
  { key: "/", label: <Link to="/">Home</Link> },
  { key: "/employers", label: <Link to="employers">{"Employer's Home"}</Link> }
];


const RootLayout = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);


  const location = useLocation();

  // Extract the first path segment
  const firstSegment = location.pathname.split("/")[1] || "";
  const [currentTab, setCurrentTab] = useState(`/${firstSegment}`);

  useEffect(() => {
    setCurrentTab(`/${firstSegment}`);
  }, [location.pathname, firstSegment]);

  const clickHandler = (e) => {
    console.log('click ', e.key);
    setCurrentTab(e.key);
  };

  const drawerClickHandler = (e) => {
    console.log('drawer click ', e.key);
    setCurrentTab(e.key);
    setDrawerOpen(false);
  }

  // User profile dropdown menu
  const userMenuItems = [
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
  ];

  return (
    <Layout style={{ width: "100vw", }}>
      <Header
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: "0 40px 0 10px",
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

        {/* Desktop Dropdown (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Dropdown menu={{ items: userMenuItems }} trigger={["click"]}>
            <Space className="cursor-pointer">
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </div>

        {/* Mobile Drawer Button (Hidden on Desktop) */}
        <div className="block md:hidden text-xl">
          <Button
            size='large'
            type="text"
            icon={<MenuOutlined style={{ color: "#cccccc", fontSize: '20px' }} />}
            onClick={() => setDrawerOpen(true)}
          />
        </div>
      </Header>

      {/* Mobile Drawer for User Menu */}
      <Drawer
        title="User Menu"
        placement="right"
        closable={true}
        onClose={() => setDrawerOpen(false)}
        open={drawerOpen}
        width="100vw"
      >
        <Menu
          rootClassName='!space-y-4 !text-xl'
          onClick={drawerClickHandler}
          items={userMenuItems.map(item => ({
            ...item, // ✅ Keep original properties
            icon: React.cloneElement(item.icon, { style: { fontSize: "24px" } }), // ✅ Increase icon size
          }))}
        />
      </Drawer>

      <Content className='p-1' >
        <div className='p-5'>
          <Outlet />
        </div>
      </Content>

      <Footer className='text-center'>
        Talent Acquisition Platform ©{new Date().getFullYear()} Created by James Jiao
      </Footer>
    </Layout>
  );
};
export default RootLayout;
