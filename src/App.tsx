import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    console.log(event.currentTarget.email.value);
    console.log(event.currentTarget.password.value);
  };

  const isLoginButtonDisabled = !email.trim() || !password.trim()

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Typography.Title>Login</Typography.Title>

      <form className="w-80" onSubmit={handleSubmit}>
        <Space direction="vertical" size="large">
          <Input
            name="email"
            value={email}
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full rounded-md"
          />

          <Input.Password
            name="password"
            placeholder="enter your Password"
            iconRender={(visible) =>
              visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
            }
            className="w-80 rounded-md"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Button datatype="submit" className="rounded-md" htmlType="submit" disabled={isLoginButtonDisabled}>
            Log in
          </Button>
        </Space>
      </form>
    </div>
  );
}

export default App;
