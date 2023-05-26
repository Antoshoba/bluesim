import { useContext, useEffect } from "react";

import { useNavigate } from "react-router-dom";
import UserApi from "../api/UserApi";
import { AuthContext } from "../providers/AuthProvider";
import NotificationUtils from "../utils/NotificationUtils";

export default function useLogout(logInRoute: string) {
  const { updateAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    UserApi.logoutUser()
      .then(() => {
        navigate(logInRoute);
        void updateAuth();
      })
      .catch(() => {
        NotificationUtils.showError("Failed to logout");
        navigate(-1);
      });
  }, [updateAuth, navigate, logInRoute]);
}
