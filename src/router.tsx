import { createBrowserRouter } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import Flat from "./routes/Flat";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "flat/:id",
        element: <Flat />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
