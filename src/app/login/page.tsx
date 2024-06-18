"use client";
import { Button, Form, Input, notification, Popconfirm } from "antd";
import { massage } from "@/functions/info";
import type { FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import { useSearchParams } from "next/navigation";
import LoginBlock from "@/component/form/login.form";
// import { useRouter } from "next/navigation";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {
  const [form] = useForm();
  const searchParams = useSearchParams();
  const searchUser = searchParams.get("username");
  const searchPass = searchParams.get("password");

  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.username === "admin") {
      if (values.password === "Admin@123") {
        openNotification("Login Success", "Hi admin!!");
      } else {
        openNotification(
          "Login Fail !!",
          "Wrong password please fill the right password"
        );
      }
    } else {
      openNotification(
        "Not Found Username",
        "Wrong username please fill the right username"
      );
    }
  };
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    if (errorInfo.values.username === "" && errorInfo.values.password === "") {
      massage("Please fill username & password", "warning");
    } else if (errorInfo.values.username === "") {
      massage("Please fill username", "warning");
    } else {
      massage("Please fill password", "warning");
    }
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (massage: string, desriptmassage: string) => {
    api.info({
      message: massage,
      description: desriptmassage,
    });
  };
  const clearInput = () => {
    form.resetFields();
  };
  form.setFieldsValue({
    username: searchUser,
    password: searchPass,
  });
  const logUser = Form.useWatch("username", form);
  const logPass = Form.useWatch("password", form);

  return (
    <main>
      <div className="flex-contain">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="container">
          <Form
            form={form}
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            className="loginFill"
            onValuesChange={useForm}
          >
            <Form.Item
              label="Username"
              name="username"
              rules={[
                {
                  required: true,
                  message: "Please input your username!",
                },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                offset: 8,
                span: 16,
              }}
            >
              <Button type="primary" htmlType="submit">
                {contextHolder}
                Submit
              </Button>
              <Popconfirm
                title="Clear All"
                description="Are you sure to clear all?"
                onConfirm={() => clearInput()}
                okText="Yes"
                cancelText="No"
              >
                <Button danger className="clearbutton">
                  clear
                </Button>
              </Popconfirm>
              <LoginBlock username={logUser} password={logPass} />
            </Form.Item>
          </Form>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}
