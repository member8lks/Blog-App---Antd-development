import React, { useState, useEffect } from "react";
import "./styles.css";
import {
  Layout,
  Typography,
  Breadcrumb,
  Button,
  Menu,
  Image,
  Dropdown,
  Row,
  Col,
} from "antd";
const { Content } = Layout;
import { MenuUnfoldOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import Head from "./components/static/Head";
import Sidebar from "./components/static/Sidebar";
import Home from "./components/screens/index";
import BlogList from "./components/screens/BlogList";
import CreateBlog from "./components/screens/CreateBlog";
import Blog from "./components/screens/Blog";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ScrollTop from './components/static/ScrollTop'
export default function App() {
  const [collapsed, setCollapsed] = useState(false);
  const [layoutResClass, setlayoutResClass] = useState("contentLayout");
  const [side_bar,setside_bar]=useState("")
  useEffect(() => {
    if (window.innerWidth < 766) {
      setCollapsed(true);
      setlayoutResClass("contentMobileLayout");
      setside_bar("side_bar")
    }
    if(window.innerWidth > 766){
      setside_bar("")
    }
  }, []);

  const toggle = () => {
    // console.log(collapsed);
    collapsed
      ? setlayoutResClass("contentLayout")
      : setlayoutResClass("contentMobileLayout");
    setCollapsed(!collapsed);
     collapsed ? setside_bar("") : setside_bar("side_bar")
     
  };

  return (
    <Router>
      <ScrollTop/>
      <div className="App">
        <Layout>
          <Sidebar collapsed={collapsed} side_bar={side_bar} setside_bar={setside_bar} />
          <Layout className={"site-layout " + layoutResClass}>
            <Head collapsed={collapsed} toggle={toggle} />
            <Content  style={{ margin: "24px 16px 0", overflow: "initial" }}>
              <Switch>
                <Route exact path="/createblog">
                  <CreateBlog />
                </Route>
                <Route exact path="/bloglist">
                  <BlogList />
                </Route>
                <Route exact path="/aboutus">
                  <h1>About Us</h1>
                </Route>
                <Route exact path="/blog/:id">
                  <Blog />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </div>
    </Router>
  );
}
