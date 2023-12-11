import Aouth from "../pages/Aouth/Aouth";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";

const publicRouter = [
  {
    path: "/",
    element: <Aouth />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
];

export default publicRouter;
