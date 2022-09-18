import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/:logement",
    element: <App />,
  },
  {
    path: "/about",
    element: <App />,
  },
  {
    path: "*",
    element: <App />,
  },
]);

export default router;
