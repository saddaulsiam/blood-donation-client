import { TMeta, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { TRequest } from "@/types/request";

const requestApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    bloodRequest: builder.mutation({
      query: (data) => ({
        url: "/donation-request",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["REQUEST"],
    }),
    getRequests: builder.query({
      query: ({ status }) => {
        // Initialize an empty array to store query parameters
        const params = [];
        // Add query parameters conditionally if they exist
        if (status) {
          params.push(`status=${status}`);
        }
        // Construct the URL with query parameters
        const queryString = params.length ? `?${params.join("&")}` : "";

        return {
          url: `/requests${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["REQUEST"],
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
      providesTags: ["REQUEST"],
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
      providesTags: ["REQUEST"],
    }),
    updateRequest: builder.mutation({
      query: (data) => ({
        url: `/update-request/${data.id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["REQUEST"],
    }),
    compleatRemainder: builder.mutation({
      query: (data) => ({
        url: `/request-complete-remainder/${data.id}`,
        method: "PUT",
      }),
      invalidatesTags: ["REQUEST"],
    }),
  }),
});

export const {
  useBloodRequestMutation,
  useGetRequestsQuery,
  useGetMyRequestQuery,
  useGetRequestToDonateQuery,
  useUpdateRequestMutation,
  useCompleatRemainderMutation,
} = requestApi;
