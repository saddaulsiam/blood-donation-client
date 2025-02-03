import { ResponseSuccessType, TResponseRedux, TUser } from "@/types";
import { baseApi } from "../../api/baseApi";

const bloodRequestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bloodRequest: builder.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useBloodRequestMutation } = bloodRequestApi;
