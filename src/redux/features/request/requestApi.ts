import { TMeta, TRequest, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";

const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bloodRequest: builder.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        body: data,
      }),
    }),
    getMyRequest: builder.query({
      query: () => ({
        url: "/get-my-requests",
      }),
      transformResponse: (
        response: TResponseRedux<{
          meta: TMeta;
          data: TRequest[];
        }>,
      ) => response.data,
    }),
    getRequestToDonate: builder.query({
      query: () => ({
        url: "/request-to-donate",
      }),
      transformResponse: (
        response: TResponseRedux<{
          meta: TMeta;
          data: TRequest[];
        }>,
      ) => response.data,
    }),
  }),
});

export const {
  useBloodRequestMutation,
  useGetMyRequestQuery,
  useGetRequestToDonateQuery,
} = requestApi;
