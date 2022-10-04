import {
  createBrowserRouter
} from "react-router-dom";
import { MapScreen } from "../pages/map/map";
import { SignInScreen } from "../pages/sign-in/sign-in";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInScreen />,
  },
  {
    path: "/maps",
    element: <MapScreen />
  }
]);