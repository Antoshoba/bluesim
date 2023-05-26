import UserDto from "@j2w/common/dto/user/UserDto";
import LocalStorageKeys from "@j2w/shared-frontend/enums/LocalStorageKeys";
import AuthProvider from "@j2w/shared-frontend/providers/AuthProvider";
import LocalStorageUtils from "@j2w/shared-frontend/utils/LocalStorageUtils";
import { PropsWithChildren, useCallback } from "react";
import { useAppDispatch } from "../store";
import { onLogin, onLogout } from "../store/common/CommonAction";

export default function HrbpAuthProvier({ children }: PropsWithChildren<{}>) {
  const dispatch = useAppDispatch();

  const onUser = useCallback(
    (user: UserDto) => {
      dispatch(onLogin());
      LocalStorageUtils.store(LocalStorageKeys.USER, user);
    },
    [dispatch]
  );

  const onFail = useCallback(() => {
    dispatch(onLogout());
    LocalStorageUtils.remove(LocalStorageKeys.USER);
  }, [dispatch]);

  return (
    <AuthProvider successCallback={onUser} failureCallback={onFail}>
      {children}
    </AuthProvider>
  );
}
