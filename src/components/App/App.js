import {
  RouterProvider,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import Layout from "../Layout/Layout";
import { Login, Register, Posts, Header } from "../";
import { authContexte } from "../../Contexte/authContexte";
import { useContext } from "react";

const App = (props) => {
  const ctx = useContext(authContexte);
  console.log(ctx.user);
  const routes = ctx.user ? [
	{
	  path: "/",
	  element: <Layout />,
	  children: [
		{
		  index: true,
		  element: <Navigate to="/posts" replace />,
		},
		{
		  path: "posts",
		  element: <Posts />,
		}
	  ]
	},
	{
	  path: "*",
	  element: <Navigate to="/posts" replace />,
	},
  ] : [
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Navigate to="/login" replace />,
            },
            {
              path: "login",
              element: <Login />,
            },
            {
              path: "register",
              element: <Register />,
            },
          ],
        },
        {
          path: "*",
          element: <Navigate to="/login" replace />,
        }];


  return (
    <RouterProvider router={createBrowserRouter(routes)}/>
  );
};

export default App;
