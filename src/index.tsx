import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Layout } from "@/Layout";
import { Home } from "@/pages/Home";
import { News } from "@/pages/News";

const domNode = document.getElementById("root");
const root = createRoot(domNode);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/news",
        element: <News />,
      },
    ],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

root.render(<RouterProvider router={router} />);
