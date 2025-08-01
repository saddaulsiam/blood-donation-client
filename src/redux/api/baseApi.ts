import { authKey } from "@/contants/authkey";
import { deleteCookies } from "@/services/actions/deleteCookies";
import {
  getFromLocalStorage,
  removeFromLocalStorage,
  setToLocalStorage,
} from "@/utils/local-storage";
import {
  BaseQueryApi,
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice";

interface ExtraOptions {
  headers?: Record<string, string>;
}

interface ErrorData {
  message: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BACKEND_API_URL,
  credentials: "include",
  prepareHeaders: (headers) => {
    const token = getFromLocalStorage(authKey);

    if (token) {
      headers.set("authorization", `${token}`);
    }

    return headers;
  },
});

const baseQueryWithRefreshToken: BaseQueryFn<
  FetchArgs,
  BaseQueryApi,
  FetchBaseQueryError
> = async (args, api, extraOptions: ExtraOptions): Promise<any> => {
  let result = await baseQuery(args, api, extraOptions);

  if ((result?.error?.data as ErrorData)?.message === "jwt expired") {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_API_URL}/refresh-token`,
      {
        method: "POST",
        credentials: "include",
      },
    );

    const data = await res.json();

    if (data?.data?.accessToken) {
      setToLocalStorage({ key: authKey, token: data.data.accessToken });

      // Update the headers within extraOptions
      extraOptions.headers = {
        ...extraOptions.headers,
        authorization: `${data.data.accessToken}`,
      };

      // Re-running the base query with updated headers
      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
      removeFromLocalStorage(authKey);
      deleteCookies([authKey, "refreshToken"]);
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQueryWithRefreshToken,
  endpoints: () => ({}),
  tagTypes: ["REQUEST", "USER", "DONOR"],
});
