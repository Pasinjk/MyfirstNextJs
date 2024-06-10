"use client";

import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button, Flex, message, Divider, notification, Space ,Popconfirm} from "antd";

import React, { useMemo, useState } from "react";
import { noti } from "@/functions/info";

import type { NotificationArgsProps } from "antd";

type FieldType = {
  username?: string;
  password?: string;
};
type NotificationPlacement = NotificationArgsProps["placement"];
const Context = React.createContext({ name: "Default" });

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
      noti("please fill Username&Password", "warning");
      console.log(InputUsername);
    } else if (InputUsername === "") {
      noti("please fill username", "warning");
    } else if (InputPassword === "") {
      noti("please fill password", "warning");
      console.log(InputPassword);
    } else {
      if (InputUsername === "admin" && InputPassword === "123456")
        console.log("hello admin");
      else {
        console.log("Wrong Username & password");
      }
    }
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (placement: NotificationPlacement) => {
    console.log("working");
    api.info({
      message: `Notification ${placement}`,
      description: (
        <Context.Consumer>{({ name }) => `Hello, ${name}!`}</Context.Consumer>
      ),
      placement,
    });
  };

  const onButtonClick = () => {
    loginButtonClick();
    openNotification("bottomRight");
  };
  const handleChangeUser = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setUsername(e.target.value);
  };
  const handleChangePass = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };
  const clearInput = () => {
    setUsername('');
    setPassword('');
  }

  return (
    <main>
      <div className="div_username">
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
        <div className="div_username">
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
        <Button id="Cilck" onClick={onButtonClick}>
          &nbsp; login&nbsp;
        </Button>
      </div>
      <Popconfirm
        title="Are you sure you want to clear the password?"
        onConfirm={clearInput}
        okText="Yes"
        cancelText="No"
      >
        <Button type="primary" style={{ marginLeft: "10px" }}>
          Clear Password
        </Button>
      </Popconfirm>
    </main>
  );
}
