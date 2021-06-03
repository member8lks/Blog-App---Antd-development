import React, { useState } from "react";
import {
  Layout,
  Typography,

  Menu,
} from "antd";
const {Sider } = Layout;
const { Title } = Typography;
import {
    HomeOutlined,
    UnorderedListOutlined,
    AppstoreAddOutlined
} from '@ant-design/icons';
import './index.css'
import {  Link } from "react-router-dom";
function  Sidebar({collapsed,side_bar,setSide_bar}) {
    return (
        <Sider trigger={null} collapsible collapsed={collapsed}
        style={{
            overflow: 'auto',
            height: '100vh',
            position: 'fixed',
            left: 0,
            background: "#001529"
          }}
          className={side_bar}
        >
        <h2 className="text-white blogTitle">Blogs</h2>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to='/'>Home</Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UnorderedListOutlined />}>
            <Link to='/bloglist'>Blog List</Link> 
          </Menu.Item>
          <Menu.Item key="3" icon={<AppstoreAddOutlined />}>
            <Link to='/createblog'>Create</Link>
          </Menu.Item>
        </Menu>
      </Sider>
    )
}

export default Sidebar;
