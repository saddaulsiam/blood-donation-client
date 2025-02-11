import { authKey } from "@/contants/authkey";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

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

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  endpoints: () => ({}),
  tagTypes: ["REQUEST", "USER"],
});
