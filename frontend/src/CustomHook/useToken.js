import { useCookies } from "react-cookie";

export function useToken() {
  const [userCookies, setUserCookie, removeUser] = useCookies(["user"]);
  const [accessCookies, setAccessCookies, removeAccess] = useCookies([
    "access",
  ]);
  const [refreshCookies, setRefreshCookies, removeRefresh] = useCookies([
    "refresh",
  ]);

  const getUser = () => {
    return userCookies.user ? userCookies.user : "";
  };
  const getRefresh = () => {
    return refreshCookies.refresh ? refreshCookies.refresh : "";
  };
  const getAccess = () => {
    return accessCookies.access ? accessCookies.access : "";
  };

  const saveToken = (token) => {
    if (token["username"]) {
      setUserCookie("user", token["username"], {
        path: "/",
      });
    }
    if (token["access"]) {
      setAccessCookies("access", token["access"], {
        path: "/",
      });
    }
    if (token["refresh"]) {
      setRefreshCookies("refresh", token["refresh"], {
        path: "/",
      });
    }
  };

  const remove = () => {
    removeUser("user", {
      path: "/",
    });
    removeAccess("access", {
      path: "/",
    });
    removeRefresh("refresh", {
      path: "/",
    });
  };

  return {
    setToken: saveToken,
    removeToken: remove,
    user: getUser(),
    access: getAccess(),
    refresh: getRefresh(),
  };
}
