import StoreInstance from "../store/StoreInstance";
import { ToastOptions } from "react-toastify";

export type NotificationOptions = {
  autoClose: boolean;
};
export default class NotificationUtils {
  public static showApiError(err: any, defaultMessage: string) {
    console.log(err.message);
    if (err.message) {
      NotificationUtils.showError(err.message);
      return;
    }
    const response = err?.response;
    const data = response?.data;
    console.log(data ?? response ?? err);
    const message: string = data?.["message"] ?? defaultMessage;
    NotificationUtils.showError(message);
    return null;
  }

  public static showGenericError(error: any, options?: NotificationOptions) {
    if (error instanceof Error) {
      NotificationUtils.showError(error.message, options);
    }
  }

  public static showError(message: string, options?: NotificationOptions) {
    StoreInstance.toast().error(message, this.convertToToastOptions(options));
  }

  public static showSuccess(message: string, options?: NotificationOptions) {
    StoreInstance.toast().success(message, this.convertToToastOptions(options));
  }

  public static showInfo(message: string, options?: NotificationOptions) {
    StoreInstance.toast().success(message, this.convertToToastOptions(options));
  }

  private static convertToToastOptions(options?: NotificationOptions) {
    const toastOptions: ToastOptions = { theme: "colored" };
    if (options?.autoClose === false) {
      toastOptions.autoClose = false;
    }
    return toastOptions;
  }
}
