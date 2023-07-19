import {
    createBrowserRouter,
  } from "react-router-dom";

import { Search } from "./component/Search";

export const router = createBrowserRouter([
    {
      path: "/search",
      element: <Search/>,
    },
  ]);