import { authKey } from "@/contants/authkey";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { logout } from "../features/auth/authSlice";

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

const baseQueryWithRefreshToken = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.data?.message === "jwt expired") {
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

      result = await baseQuery(args, api, extraOptions);
    } else {
      api.dispatch(logout());
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
