import React,{useState} from "react";
import {
  Row,
  Col,
  Form,
  Input,
  Button,
  Checkbox,
  Upload,
  Typography,
  Card,
  message
} from "antd";
import { UploadOutlined, InboxOutlined } from "@ant-design/icons";
import axios from 'axios';
import blogApi from '../Apis/blogApi';
import {Link} from "react-router-dom"
const { Title } = Typography;
const layout = {
  labelCol: { span: 5 },
  wrapperCol: { span: 19 },
};
const tailLayout = {
  wrapperCol: { span: 16 },
};
const normFile = (e) => {
  console.log("Upload event:", e);
  if (Array.isArray(e)) {
    return e;
  }
  return e && e.fileList;
};
function CreateBlog() {
  const [showblog,setShowBlog]=useState(false)
  const onFinish = (values) => {
    console.log("Success:", values);
    blogApi.post("/",values ).then((res)=>{
     console.log("response++",res)
    //  alert("Your blog has been created")
     message.success(`Your blog has been created on /${res.data.id}`, 10);
     setShowBlog(res.data.id)
    }).catch((err)=>{
      console.log("some error occured+++",err)
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div>
      {/* <h1 className="text-center" style={{marginBottom: "0"}}>Add Your Blog</h1> */}
      <Row
        style={{
          display: "flex",
          minHeight: "90vh",
          alignItems: "self-start",
          justifyContent: "center",
        }}
      >
        <Card title="Add Your Blog" style={{ width: "100%" }}>
          <Col md={18} lg={18} sm={24}>
            <Form
              {...layout}
              name="basic"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label="Your Good Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Title of your blog"
                name="title"
                rules={[
                  { required: true, message: "Please input blog title!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Elaborate Your blog"
                name="description"
                rules={[
                  { required: true, message: "Please input blog description!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              {/* <Form.Item label="Add Image">
                <Form.Item
                  valuePropName="fileList"
                  getValueFromEvent={normFile}
                  noStyle
                >
                  <Upload.Dragger name="files" action="#">
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">
                      Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">Only Image Supported.</p>
                  </Upload.Dragger>
                </Form.Item>
              </Form.Item> */}
              <Form.Item
                label="Image Link"
                name="image"
                rules={[
                  { required: true, message: "Please input blog title!" },
                ]}
              >
                <Input.TextArea />
              </Form.Item>

              <Form.Item style={{ textAlign: "center" }} {...tailLayout}>
                <Button type="primary "  htmlType="submit">
                  Post
                </Button>
                {
                  showblog && <Link to={"/blog/" + showblog}> 
                  <Button style={{marginLeft: "15px"}} type="sucess ">
                  View
                </Button>
                  </Link>
                }
              </Form.Item>
            </Form>
          </Col>
        </Card>
      </Row>
    </div>
  );
}

export default CreateBlog;
