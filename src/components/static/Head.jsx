import React, { useState } from "react";
import {
  Layout,
  Typography,
  Menu,
  Dropdown
} from "antd";
const { Header } = Layout;
const { Title } = Typography;
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined
} from '@ant-design/icons';

const menu = (
    <Menu>
      <Menu.Item>
        <a target="_blank" >
          SignIn
        </a>
      </Menu.Item>
      <Menu.Item>
        <a target="_blank" >
          Register
        </a>
      </Menu.Item>
      
    </Menu>
  );


function Head({collapsed,toggle}) {
    return (
        <Header  className="site-layout-background" style={{ padding: "0px 20px",background: "white",display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
            {
                collapsed ? <span className="trigger ml-10 mr-10 toggle" onClick={toggle}>
                    <MenuUnfoldOutlined/>
                    </span> : <span className="trigger ml-10 mr-10 toggle" onClick={toggle}>
                    <MenuFoldOutlined/>
                    </span> 
            }
     
            <Dropdown overlay={menu}>
              <a
                className="ant-dropdown-link"
                onClick={(e) => e.preventDefault()}
              >
                Guest
                <UserOutlined className='NavIcon ' style={{marginLeft: "3px"}}/>
              </a>
            </Dropdown>
         
          </Header>
    )
}


export default Head;