import { useCookies } from "react-cookie";

export function useToken() {
    const [userCookies, setUserCookie] = useCookies(["user"]);
    const [accessCookies, setAccessCookies] = useCookies(["access"]);
    const [refreshCookies, setRefreshCookies] = useCookies(["refresh"]);

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

    return {
        setToken: saveToken,
        user: getUser(),
        access: getAccess(),
        refresh: getRefresh(),
    };
}