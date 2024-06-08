"use client";
import Image from "next/image";
import Link from "next/link";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button, Flex, message } from "antd";
import { clearScreenDown } from "readline";
import { MouseEventHandler, use } from "react";

type FieldType = {
  username?: string;
  password?: string;
};

export default function Page() {

  const loginButtonClick = (values:string,event: any) => {
    console.log(values,event)
    let InputUsername = (document.getElementById("username") as HTMLInputElement).value
    let InputPassword = (document.getElementById("password") as HTMLInputElement).value
    console.log(InputUsername)
    console.log(InputPassword)
  };
  
  const [messageApi, contextHolder] = message.useMessage();
  const info = () => {
    messageApi.info("Hi user");
  };

  return (
    <main>
      <div className="div_username">
        <Input
          id="username"
          type="text"
          size="large"
          placeholder="username"
          prefix={<UserOutlined />}
        />
      </div>
      <div>
        <div className="div_username">
          <Input id="password" type="text" size="large" placeholder="password" />
          <a href="/register" className="pass_forget">
            Forget password??
          </a>
        </div>
      </div>
      <div className="button_login">
        {contextHolder}
        <Button id="Cilck" onClick={(e) => loginButtonClick('test',e)}>
          {" "}
          login{" "}
        </Button>
      </div>
    </main>
  );
}
