import { authKey } from "@/contants/authkey";
import { decodedToken } from "@/utils/jwt";

import {
  getFromLocalStorage,
  removeFromLocalStorage,
} from "@/utils/local-storage";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { deleteCookies } from "./deleteCookies";

export const getUserInfo = () => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    const decodedData: any = decodedToken(authToken);
    return {
      ...decodedData,
      role: decodedData?.role?.toLowerCase(),
    };
  } else {
    return "";
  }
};

export const isLoggedIn = (): boolean => {
  const authToken = getFromLocalStorage(authKey);

  if (authToken) {
    return true;
  }

  return false;
};

export const logoutUser = (router: AppRouterInstance) => {
  removeFromLocalStorage(authKey);
  deleteCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};

// export const getNewAccessToken = async () => {
//   return await axiosInstance({
//     url: "http://localhost:5000/api/v1/auth/refresh-token",
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     withCredentials: true,
//   });
// };
