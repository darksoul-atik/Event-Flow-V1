import { toast } from "react-toastify";
import { ToastContext } from "../Contexts/ToastContext";

export const ToastProvider = ({ children }) => {
  const showToast = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return <ToastContext value={{ showToast }}>{children}</ToastContext>;
};

