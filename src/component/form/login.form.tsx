import React from "react";
import { Input } from "antd";

function LoginBlock({ username, password }: any) {
  return (
    <main>
      <Input placeholder="" value={username} />
      <Input placeholder="" value={password} />
    </main>
  );
}

export default LoginBlock;
