import {
  createContext,
  PropsWithChildren,
  useCallback,
  useEffect,
  useState,
} from "react";

import UserDto from "@j2w/common/dto/user/UserDto";
import UserApi from "../api/UserApi";

export type AuthType = {
  loaded: boolean;
  user?: UserDto;
};

export type AuthContextType = {
  user?: UserDto;
  updateAuth: () => Promise<void>;
};

export const AuthContext = createContext<AuthContextType>({
  updateAuth: async () => {
    return;
  },
});

interface AuthProviderProps {
  successCallback?: (user: UserDto) => void;
  failureCallback?: () => void;
}

export default function AuthProvider({
  successCallback,
  failureCallback,
  children,
}: PropsWithChildren<AuthProviderProps>) {
  const [auth, setAuth] = useState<AuthType>({
    loaded: false,
  });

  const getLoggedInUser = useCallback(async () => {
    try {
      const user = await UserApi.me();
      successCallback?.(user);
      setAuth({ loaded: true, user });
    } catch (err) {
      console.error((err as Error).message);
      failureCallback?.();
      setAuth({ loaded: true });
    }
  }, [failureCallback, successCallback]);

  // componentDidMount
  useEffect(() => {
    void getLoggedInUser();
  }, [getLoggedInUser]);

  return (
    <AuthContext.Provider
      value={{ user: auth.user, updateAuth: getLoggedInUser }}
    >
      {auth.loaded && children}
    </AuthContext.Provider>
  );
}
