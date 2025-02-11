import { authKey } from "@/contants/authkey";
import { getFromLocalStorage } from "@/utils/local-storage";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:5000/api", //https://blood-donation24.up.railway.app/api
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
