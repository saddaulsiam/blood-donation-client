import { ResponseSuccessType, TResponseRedux } from "@/types";
import { baseApi } from "../../api/baseApi";
import { TUser } from "@/types/user";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    donors: builder.query({
      query: ({ bloodGroup, date, city }) => ({
        url: `/donors?bloodGroup=${bloodGroup}&city=${city}&date=${date}`,
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
