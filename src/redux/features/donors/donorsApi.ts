import { ResponseSuccessType, TResponseRedux, TUser } from "@/types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    donors: builder.query({
      query: ({ bloodGroup, date, reason }) => ({
        url: `/donors?bloodGroup=${bloodGroup}&reason=${reason}`, //&date=${date}
        method: "GET",
      }),
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
