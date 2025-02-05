import { authKey } from "@/contants/authkey";
import { deleteCookies } from "./deleteCookies";
import { removeFromLocalStorage } from "@/utils/local-storage";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

export const logoutUser = (router: AppRouterInstance) => {
  removeFromLocalStorage(authKey);
  deleteCookies([authKey, "refreshToken"]);
  router.push("/");
  router.refresh();
};
