import React, { useEffect, useState } from "react";
import { Row, Col, Card, Avatar, Input } from "antd";
import {
  SettingOutlined,
  EditOutlined,
  EllipsisOutlined,
  EyeOutlined,
  LikeOutlined,
  DislikeOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import SearchBlog from "./common/SearchBlog";
import axios from "axios";
import blogApi from '../Apis/blogApi';
const { Meta } = Card;

export const CardComponent = ({ blog }) => {
  return (
    <>
      <Card
        cover={
          <img
            alt="example"
            src={blog.image}
          />
        }
        actions={[
          <Link to={"/blog/" + blog.id}>
            <EyeOutlined key="view" />
          </Link>,
          <LikeOutlined />,
          <DislikeOutlined />,
        ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={blog.title}
          description={
            <div>
              <p style={{ marginBottom: "0" }}>posted by - {blog.name}</p>
              <p style={{ marginBottom: "0" }}>{blog.description.substring(0,180)}</p>
            </div>
          }
        />
      </Card>
    </>
  );
};

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [searchBlogs, setSearchBlogs] = useState([]);
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
  const InputChange = (e) => {
    setSearch(e.target.value);
    let data = blogs.filter(
      (blog) => blog.title.includes(e.target.value) && blog
    );
    setSearchBlogs(data);
  };
  console.log("this is blog ", blogs);
  console.log("this is search data++", search);
  return (
    <div className="blogLists">
      <Input.Search
        size="large"
        placeholder="Search"
        value={search}
        onChange={InputChange}
        enterButton
      />

      {search === "" ? (
        <Row style={{ justifyContent: "space-around",minHeight: "100vh" }}>
          {blogs.map((blog) => (
            <Col md={7} key={blog.id} className="mt-10 mb-10">
              <CardComponent blog={blog} />
            </Col>
          ))}
        </Row>
      ) : (
        <Row style={{ justifyContent: "space-around", minHeight: "100vh" }}>
          {searchBlogs.map((blog) => (
            <Col md={7} key={blog.id} className="mt-10 mb-10">
              <CardComponent blog={blog} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default BlogList;
