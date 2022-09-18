import { createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:logement",
    element: <Home />,
  },
  {
    path: "/about",
    element: <Home />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

export default router;
