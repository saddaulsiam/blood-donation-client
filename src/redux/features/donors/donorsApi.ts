import { TResponseRedux } from "@/types";
import { TUser } from "@/types/user";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getDonors: builder.query({
      query: ({ bloodGroup, date, city }) => {
        // Initialize an empty array to store query parameters
        const params = [];

        // Add query parameters conditionally if they exist
        if (bloodGroup) {
          params.push(`bloodGroup=${bloodGroup}`);
        }
        if (date) {
          params.push(`date=${date}`);
        }
        if (city) {
          params.push(`city=${city}`);
        }

        // Construct the URL with query parameters
        const queryString = params.length ? `?${params.join("&")}` : "";

        return {
          url: `/donors${queryString}`,
          method: "GET",
        };
      },
      providesTags: ["DONOR"],
    }),

    singleDonor: builder.query({
      query: (id) => ({
        url: `/donor/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TUser>) => response.data,
    }),

    changeDonorStatus: builder.mutation({
      query: (data) => ({
        url: "change-user-status",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["DONOR"],
    }),
  }),
});

export const {
  useGetDonorsQuery,
  useSingleDonorQuery,
  useChangeDonorStatusMutation,
} = authApi;
