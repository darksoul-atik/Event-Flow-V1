import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import router from "./Routes/router.jsx";
import EventProvider from "./Providers/EventProvider.jsx";
import AuthProvider from "./Providers/AuthProvider.jsx";
import {ToastProvider} from "./Providers/ToastProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <AuthProvider>
        <EventProvider>
          <RouterProvider router={router} />
        </EventProvider>
      </AuthProvider>
    </ToastProvider>
  </StrictMode>
);
