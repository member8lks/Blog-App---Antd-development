import React,{useEffect, useState} from "react";
import { Divider, Row, Col, Input, Typography, Button, Card,List,Avatar } from "antd";
import {useParams} from 'react-router-dom'
import axios from 'axios';
const { Title, Paragraph, Text, Link } = Typography;
import blogApi from '../Apis/blogApi';
import { SendOutlined } from "@ant-design/icons";
const data = [
  {
    title: 'Ant Design Title 1',
  },
  {
    title: 'Ant Design Title 2',
  },
  {
    title: 'Ant Design Title 3',
  },
  {
    title: 'Ant Design Title 4',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 5',
  },
  {
    title: 'Ant Design Title 5',
  },
];
function Blog() {
  const {id}=useParams()
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    console.log("inside useeffect");
    blogApi
      .get(`/${id}`)
      .then((res) => {
        console.log(res.data);
        setBlog(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("this is +", id)
  let date=new Date(blog.createdAt);
  console.log(date.toString())
  return (
    <div>
      <div
        className="blog_details_header"
        style={{
          backgroundImage:
            `url(${blog.image})`,
        }}
      >
        
      
      </div>
      <Row className="blog_details_row">
        <Col md={24} sm={24} style={{margin:"auto"}}>
          <Card>
            <Typography>
              <Divider orientation="left">
                <Title level={3}>{blog.title}</Title>
              </Divider>
              <Paragraph style={{ textAlign: "justify", padding: "10px" }}>
               {blog.description}
              </Paragraph>
              <div
                className="blogFooter"
                style={{ textAlign: "end", margin: "10px" }}
              >
                <Title level={5}>Created-by: {blog.name}</Title>
                <Paragraph>{`${date.getDate()}|${date.getDay()}|${date.getFullYear()}`}</Paragraph>
              </div>
            </Typography>
          </Card>
        </Col>
        <Col md={24} sm={24} style={{ width: "100%" }}>
          <div className="blog_sidebar" style={{ margin: "10px" }}>
            <div className="comment_box" >
              <div className="comments" >
                <List
                  itemLayout="horizontal"
                  dataSource={data}
                  renderItem={(item) => (
                    <List.Item>
                      <List.Item.Meta
                        avatar={
                          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                        }
                       
                        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                      />
                    </List.Item>
                  )}
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "0",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "row",
                }}
              >
                <Input
                  style={{ width: "90%", marginRight: "3px" }}
                  placeholder="comment"
                />
                <Button>
                  <SendOutlined />
                </Button>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default Blog;
