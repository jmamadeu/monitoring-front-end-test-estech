import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import { useState } from "react";
import { useAuth } from "./contexts/auth";

function App() {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const { handleSignIn, isLogging } = useAuth();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    
    handleSignIn({ login, password });
  };

  const isLoginButtonDisabled = !login.trim() || !password.trim() || isLogging

  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <Typography.Title>Login</Typography.Title>

      <form className="w-80" onSubmit={handleSubmit}>
        <Space direction="vertical" size="large">
          <Input
            name="login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
            placeholder="Enter your login"
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
          <Button
            datatype="submit"
            className="rounded-md"
            htmlType="submit"
            disabled={isLoginButtonDisabled}
          >
            Log in
          </Button>
        </Space>
      </form>
    </div>
  );
}

export default App;
