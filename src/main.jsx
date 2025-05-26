import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {RouterProvider} from "react-router-dom"; // Import Router only
import "./index.css";
import router from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>
);
