import { TResponseRedux } from "@/types";
import { TUser } from "@/types/user";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (userInfo) => ({
        url: "/register",
        method: "POST",
        body: userInfo,
      }),
    }),
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),
    getMe: builder.query({
      query: () => ({
        url: "/my-profile",
        method: "GET",
      }),
      providesTags: ["USER"],
      transformResponse: (response: TResponseRedux<TUser>) => response.data,
    }),
    ChangePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        body: data,
      }),
    }),
    updateProfile: builder.mutation({
      query: (data) => ({
        url: "/my-profile",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useLoginMutation,
  useGetMeQuery,
  useChangePasswordMutation,
  useUpdateProfileMutation,
} = authApi;
