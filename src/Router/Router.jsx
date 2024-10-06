import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Signup from "../pages/AuthPage/Signup";
import Layout from "./Layout";
import Login from "../pages/AuthPage/Login";
import StoreNote from "../pages/NoteStorePage/StoreNote";
import QuizLab from "../pages/QuizLabPage/QuizLab";

const Router = () => (
  <RouterProvider
    router={createBrowserRouter([
      {
        element: <Layout />,
        children: [
          { path: "/", element: <Signup /> },
          { path: "/signup", element: <Signup /> },
          { path: "/login", element: <Login /> },
          { path: "/storenote", element: <StoreNote /> },
          { path: "/quizlab", element: <QuizLab /> },
        ],
      },
    ])}
  />
);

export default Router;
