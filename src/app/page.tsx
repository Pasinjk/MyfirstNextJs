"use client";
import Image from "next/image";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button, Flex, message } from "antd";
import { text } from "stream/consumers";
import { clearScreenDown } from "readline";
import buttonLogin from "@/component/button/main.login";
import { use } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {
  const loginButtonClick = () => {
    document.getElementById("Cilck")
      const user = document.getElementById("username")
      const password = document.getElementById("password")
    if (user){ 
      info()
    }
    
  }
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info('Hi user');
  };

  return (
    <main>
      <div className="div_username">
        <Input
          type="text"
          id="username"
          size="large"
          placeholder="username"
          prefix={<UserOutlined />}
        />
      </div>
      <div>
        <div className="div_username">
          <Input
            type="text"
            id="password"
            size="large"
            placeholder="password"
          />
          <a href="/register" className="pass_forget">
            Forget password??
          </a>
        </div>
      </div>
      <div className="button_login">
      {contextHolder}
      <Button id="Cilck" onClick={loginButtonClick}> login </Button>
      </div>
    </main>
  );
}
