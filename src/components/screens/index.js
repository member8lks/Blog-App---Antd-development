import React,{useEffect, useState} from "react";
import { Row, Col, List, Avatar, Card,Image,Typography } from "antd";
const { Title } = Typography;
import axios from 'axios';
import {
  UserOutlined,
  PlusOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import blogApi from '../Apis/blogApi';
import {  Link } from "react-router-dom";
const Home=()=> {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    console.log("inside useeffect");
    blogApi
      .get("/")
      .then((res) => {
        console.log(res.data);
        setBlogs(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div
      className="site-layout-background"
      style={{ textAlign: "center", background: "transparent" }}
    >
      <div className="contentHeader">
        <h1 style={{ color: "rgb(0, 21, 41)" }}>Welcome to Blogging App</h1>
      </div>
     
      <Row style={{ marginTop: "15px" }} className="homeRow">
   
        <Col md={16} sm={24} className="blogList">
          <h2 style={{borderBottom: "0",marginTop: "4px", padding: "10px 0", background: "rgb(0, 21, 41)",color:"white"}}>Some Featured Blogs</h2>
    
          <List
            
            style={{ padding: "15px" }}
            dataSource={blogs}
            pagination={{
              onChange: page => {
                console.log(page);
              },
              pageSize: 3,
            }}
            renderItem={(item) => (
              <List.Item 
              style={{marginBottom: "10px"}}
              >
                <List.Item.Meta
                  style={{ textAlign: "start",padding: "0 26px" }}
                  // avatar={<UserOutlined />}
                  title={
                    <div className="listRow">
                      <Link to={"/blog/"+item.id}><Title level={2}>{item.title}</Title></Link>
                      <p style={{ marginBottom: 0 }}>{item.date}</p>
                    </div>
                  }
                  description={
                    <div >
                      <Image
                        width="100%"
                        className="blogImage"
                        src={item.image}
                      />
                      <p>{item.description.substring(0,200)} <Link to={"/blog/"+item.id}>Read More</Link></p>
                    </div>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
        <Col md={8} sm={24}>
          <div
            style={{
              textAlign: "justify",
              padding: "8px",
            }}
          >
        
            {/* <Card title="Free Services" className="homeMainCard"> */}
            <div className="homeMainCard">

              <Card
                type="inner"
                title={<Link to="/createblog">Create Blog</Link>}
                extra={
                  <Link to="/createblog">
                    <PlusOutlined />
                  </Link>
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of
                the printing and typesetting industry.
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={<Link to="/bloglist">Blog Lists</Link>}
                extra={
                  <Link to="/bloglist">
                    <UnorderedListOutlined />
                  </Link>
                }
              >
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has Lorem Ipsum is simply dummy text of
                the printing and typesetting industry. 
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={<Link to="/createblog">Share your articles</Link>}
                extra={<Link to="/createblog">More</Link>}
              >
                Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has Lorem Ipsum is simply
              </Card>
              <Card
                style={{ marginTop: 16 }}
                type="inner"
                title={<Link to="/aboutus">About Us</Link>}
                extra={<Link to="/aboutus">More</Link>}
              >
                Lorem Ipsum is simply dummy text of the printing Lorem Ipsum is
                simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has Lorem Ipsum is simply
              </Card>
            </div>
            {/* </Card> */}
          </div>
        </Col>
      </Row>
      ,
    </div>
  );
}
export default Home;
