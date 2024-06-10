import { Button, Input } from "antd";
import React from "react";

const ButtonLogin = () => {
  const loginButtonClick = () => {
    const username = document.getElementById("username");
    const password = document.getElementById("password");
    console.log(username);
    console.log(password);
  };
  return <Button onClick={() => loginButtonClick()}> login </Button>;
};
export default ButtonLogin;
