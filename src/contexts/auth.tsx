import { AxiosError } from "axios";
import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { apiInstance } from "../services/api/api-instance";
import { signIn } from "../services/api/auth/sign-in";

type AuthContextProps = {
  handleSignIn: (credentials: API.Auth.SignInParams) => Promise<{success: boolean}>;
  user: Omit<Module.User.Type, "token">;
  isLogging: boolean;
};

type AuthContextProviderProps = {
  children: React.ReactNode;
};

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState({} as AuthContextProps["user"]);
  const [isLogging, setIsLogging] = useState(false);
  // const navigate = useNavigate()

  const setTokenToApiInstance = (token: string) => {
    apiInstance.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  const saveTokenToLocalStorage = (token: string) => {
    localStorage.setItem("@monitoring.token", token);
  };

  const handleSignIn: AuthContextProps["handleSignIn"] = async (
    credentials,
  ) => {
    try {
      setIsLogging(true);

      const { token, ...userData } = await signIn(credentials);

      setTokenToApiInstance(token);

      saveTokenToLocalStorage(token);

      setUser(userData);

      return { success: true }
    } catch (err) {
      const { response } = err as AxiosError<API.Auth.SignInErrorResponse>;

      toast(response?.data.message, {
        type: "error",
        position: "top-right",
      });

      return { success: false }
    } finally {
      setIsLogging(false);
    }
  };

  return (
    <AuthContext.Provider value={{ handleSignIn, user, isLogging }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  return context;
};
