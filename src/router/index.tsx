import { Login } from "../page/login";
import { Index } from "../page/index";
import { createBrowserRouter } from "react-router-dom";
import { Props } from "../page/props";
// import Square from "../page/square";
import Game from "../page/tac";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/props",
    element: <Props />,
  },
  // {
  //   path: "/board",
  //   element: <Board />,
  // },
  {
    path: "/game",
    element: <Game />,
  },
]);
