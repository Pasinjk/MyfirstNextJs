"use client";
import { Button, Form, Input, notification, Popconfirm } from "antd";
import { massage } from "@/functions/info";
import type { FormProps } from "antd";
import { useForm } from "antd/es/form/Form";
import instance from "@/lib/axios";
import { useRouter } from "next/navigation";
// import { useSearchParams } from "next/navigation";
// import LoginBlock from "@/component/form/login.form";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {
  const [form] = useForm();
  const router = useRouter();
  // const searchParams = useSearchParams();
  // const searchUser = searchParams.get("username");
  // const searchPass = searchParams.get("password");
  const onFinish = async (values: FieldType) => {
    try {
      const response = await instance.post("http://127.0.0.1:8000/login/", {
        username: values.username,
        password: values.password,
      });

      if (response.data === true) {
        massage("Login Success", "success");
        router.push('http://localhost:3000/detail')
      } else {
        massage("Username or password isn't correct", "error");
      }
    } catch (error) {
      console.error("Error during login:", error);
      massage("Failed to login. Please try again later.", "error");
    }
  };
  
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo
  ) => {
    if (!errorInfo.values.username && !errorInfo.values.password) {
      massage("Please fill username & password", "warning");
    } else if (!errorInfo.values.username) {
      massage("Please fill username", "warning");
    } else {
      massage("Please fill password", "warning");
    }
  };
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (message: string, description: string) => {
    api.info({
      message,
      description,
    });
  };
  const clearInput = () => {
    form.resetFields();
  };
  // form.setFieldsValue({
  // username: searchUser,
  // password: searchPass,
  // });
  // const logUser = Form.useWatch("username", form);
  // const logPass = Form.useWatch("password", form);

  return (
    <main>
      {contextHolder}
      <div className="grid-container">
        <div className="grid-items">
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
              className="username-item"
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
                  Clear
                </Button>
              </Popconfirm>
            </Form.Item>
          </Form>
        </div>
      </div>
    </main>
  );
}

// if (values.username ===) {
//   if (values.password ===) {
//     openNotification("Login Success", "Hi admin!!");
//   } else {
//     openNotification(
//       "Login Fail !!",
//       "Wrong password, please fill the right password"
//     );
//   }
// } else {
//   openNotification(
//     "Not Found Username",
//     "Wrong username, please fill the right username"
//   );
// }
