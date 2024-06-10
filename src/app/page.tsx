"use client";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button, notification, Popconfirm } from "antd";

import React, { useState } from "react";
import { massage } from "@/functions/info";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginButtonClick = () => {
    let InputUsername = (
      document.getElementById("username") as HTMLInputElement
    ).value;
    let InputPassword = (
      document.getElementById("password") as HTMLInputElement
    ).value;
    if (InputUsername === "" && InputPassword === "") {
      massage("please fill Username&Password", "warning");
    } else if (InputUsername === "") {
      massage("please fill username", "warning");
    } else if (InputPassword === "") {
      massage("please fill password", "warning");
    } else {
      if (InputUsername === "admin" && InputPassword === "123456")
        openNotification("Success");
      else {
        openNotification("Fail");
      }
    }
  };

  const Context = React.createContext({ name });
  const [api, contextHolder] = notification.useNotification();
  const openNotification = (massage: string) => {
    api.info({
      message: "Login",
      description: massage,
    });
  };

  const onButtonClick = () => {
    loginButtonClick();
  };
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  const clearInput = () => {
    setUsername("");
    setPassword("");
  };

  return (
    <main>
      <div className="container">
        <div className="loginFill">
          <Input
            id="username"
            type="text"
            size="large"
            value={username}
            placeholder="username"
            prefix={<UserOutlined />}
            onChange={handleChangeUser}
          />
        </div>
        <div>
          <div className="loginFill">
            <Input
              id="password"
              type="text"
              size="large"
              value={password}
              placeholder="password"
              onChange={handleChangePass}
            />
            <a href="/register" className="pass_forget">
              Forget password??
            </a>
          </div>
        </div>
        <div className="button_login">
          {contextHolder}
          <Popconfirm
            title="Delete the task"
            description="Are you sure to clear all?"
            onConfirm={clearInput}
            okText="Yes"
            cancelText="No"
          >
            <Button danger>clear</Button>
          </Popconfirm>
          <Button id="Cilck" onClick={onButtonClick}>
            &nbsp;login&nbsp;
          </Button>
        </div>
      </div>
    </main>
  );
}
