"use client";
// import React, { useState } from "react";
import { Button, Form, Input, notification } from "antd";
import { massage } from "@/functions/info";
import type { FormProps } from "antd";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {
  const onFinish: FormProps<FieldType>["onFinish"] = (values) => {
    if (values.username === "admin") {
      if (values.password === "123456") {
        openNotification("Login Success", "Hi admin");
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

  return (
    <main>
      <div className="flex-contain">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="container">
          <Form
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
