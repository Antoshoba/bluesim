import { toast, ToastContainer } from "react-toastify";
import StoreInstance from "../store/StoreInstance";

export const setReactToast = () => StoreInstance.setToast(() => toast);

export default function ReactToastComponent() {
  return (
    <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar
      draggable={false}
      closeOnClick={false}
    />
  );
}
