import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import App from "./routes/App";
import Home from "./routes/Home";
import FlatPage from "./routes/Flat";
import About from "./routes/About";
import NotFound from "./routes/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Home />} errorElement={<NotFound />} />
      <Route path=":id" element={<FlatPage />} errorElement={<NotFound />} />
      <Route path="about" element={<About />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

export default router;
