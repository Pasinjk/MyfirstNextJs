// "use client";
// import React from "react";
// import { useRouter } from "next/navigation";
// import { Button } from "antd";
// // import { Router } from "next/router";

// function Page() {
//   const router = useRouter();

//   return (
//     <Button
//       type="primary"
//       className="loginbutton"
//       id="Cilck"
//       onClick={() => router.push("/login?username=helloworld&password=67890")}
//     >
//       {" "}
//       login{" "}
//     </Button>
//   );
// }

// export default Page;

"use client";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { Button, notification, Popconfirm } from "antd";
import React, { useEffect, useState } from "react";
import { massage } from "@/functions/info";
import { useRouter, useSearchParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passmassage, setpassMassage] = useState<string>("");
  const loginButtonClick = () => {
    const InputUsername = (
      document.getElementById("username") as HTMLInputElement
    ).value;
    const InputPassword = (
      document.getElementById("password") as HTMLInputElement
    ).value;
    if (InputUsername === "" && InputPassword === "") {
      massage("please fill Username&Password", "warning");
    } else if (InputUsername === "") {
      massage("please fill username", "warning");
    } else if (InputPassword === "") {
      massage("please fill password", "warning");
    } else {
      if (InputUsername === "admin" && InputPassword === "Admin@123")
        openNotification("Login Success");
      else {
        openNotification("Login Fail");
      }
    }
  };
  useEffect(() => {
    if (!/[A-Z]/.test(password)) {
      setpassMassage("Password should have at least one uppercase letter");
    } else if (!/[a-z]/.test(password)) {
      setpassMassage("Password should have at least one lowercase letter");
    } else if (!/[0-9]/.test(password)) {
      setpassMassage("Password should have at least one number");
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setpassMassage("Password should have at least one special character");
    } else if (password.length < 8) {
      setpassMassage("Password must be at least 8 characters");
    } else{
      setpassMassage("");
    }
  }, [password]);

  const [api, contextHolder] = notification.useNotification();
  const openNotification = (massage: string) => {
    api.info({
      message: massage,
    });
  };
  const createQueryString = (username: string, password: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set(username, password);
    return params.toString();
  };

  const onButtonClick = () => {
    if (username === "admin" && password === "Admin@123") {
      router.push(
        `/login` +
          "?" +
          createQueryString("username", username) +
          "&" +
          createQueryString("password", password)
      );
    } else {
      loginButtonClick();
    }
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
      <div className="flex-contain">
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
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
          <div className="loginFill">
            <Input
              id="password"
              type="text"
              size="large"
              value={password}
              placeholder="password"
              onChange={handleChangePass}
            />
            {passmassage && <p>{passmassage}</p>}
            <a href="/register" className="pass_forget">
              Forget password??
            </a>
          </div>
          <div className="button_login">
            {contextHolder}
            <Popconfirm
              title="Clear All"
              description="Are you sure to clear all?"
              onConfirm={clearInput}
              okText="Yes"
              cancelText="No"
            >
              <Button danger className="clearbutton">
                clear
              </Button>
            </Popconfirm>
            <Button
              type="primary"
              className="loginbutton"
              id="Cilck"
              onClick={onButtonClick}
            >
              &nbsp;login&nbsp;
            </Button>
          </div>
        </div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
        <div className="box"></div>
      </div>
    </main>
  );
}
