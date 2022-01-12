import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoint } from "../endpoint";
import { Dog } from "../types";

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpoint.dogs }),
  endpoints: (builder) => ({
    getAllDogs: builder.query<Dog[], string>({
      query: () => "list/all",
    }),
    getLineage: builder.query<Dog[], string>({
      query: (lineage) => `${lineage}/images`,
    }),
  }),
});

export const { useGetAllDogsQuery, useGetLineageQuery } = dogsApi;
