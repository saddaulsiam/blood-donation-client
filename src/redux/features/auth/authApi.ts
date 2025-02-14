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
    verifyEmail: builder.mutation({
      query: (data) => ({
        url: "/verify-email",
        method: "POST",
        body: data,
      }),
    }),
    resendCode: builder.mutation({
      query: (data) => ({
        url: "/resend-verification-code",
        method: "POST",
        body: data,
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
    changePassword: builder.mutation({
      query: (data) => ({
        url: "/change-password",
        method: "PUT",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: "/forgot-password",
        method: "POST",
        body: data,
      }),
    }),
    resetPassword: builder.mutation({
      query: ({ id, token, password }) => ({
        url: "/reset-password",
        method: "POST",
        headers: {
          authorization: token,
        },
        body: { id, password },
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
    makeAdmin: builder.mutation({
      query: (data) => ({
        url: "/make-admin",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["USER"],
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useVerifyEmailMutation,
  useResendCodeMutation,
  useLoginMutation,
  useGetMeQuery,
  useChangePasswordMutation,
  useForgotPasswordMutation,
  useResetPasswordMutation,
  useUpdateProfileMutation,
  useMakeAdminMutation,
} = authApi;
