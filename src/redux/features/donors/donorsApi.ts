import { ResponseSuccessType, TResponseRedux, TUser } from "@/types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    donors: builder.query({
      query: ({ bloodGroup, date, city }) => ({
        url: `/donors?bloodGroup=${bloodGroup}&city=${city}&date=${date}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TUser[]>) => response.data,
    }),
    singleDonor: builder.query({
      query: (id) => ({
        url: `/donor/${id}`,
        method: "GET",
      }),
      transformResponse: (response: TResponseRedux<TUser>) => response.data,
    }),
  }),
});

export const { useDonorsQuery, useSingleDonorQuery } = authApi;
