import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input, Space, Typography } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useAuth } from "../../contexts/auth";

export const SignInScreen = () => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const { handleSignIn, isLogging } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();

    const response = await handleSignIn({ login, password });
    if (response.success) {
      toast("Login success", {
        type: "success",
        position: "top-right",
      });

      navigate("/maps");
    }
  };

  const isLoginButtonDisabled = !login.trim() || !password.trim() || isLogging;

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
            placeholder="Enter your Password"
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
};
