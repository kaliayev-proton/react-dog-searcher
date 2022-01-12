import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { endpoint } from "../endpoint";
import {
  BreedResponse,
  BreedsListAllResponse,
  BreedsListAllResponseMessage,
} from "../types";

export const dogsApi = createApi({
  reducerPath: "dogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: endpoint.dogs }),
  endpoints: (builder) => ({
    getAllDogs: builder.query<BreedsListAllResponseMessage, void>({
      query: () => "breeds/list/all",
      transformResponse: (res: BreedsListAllResponse, meta) => {
        return res.message;
      },
    }),
    getLineage: builder.query<string[], string>({
      query: (lineage) => `breed/${lineage}/images`,
      transformResponse: (res: BreedResponse, meta) => {
        return res.message;
      },
    }),
  }),
});

export const { useGetAllDogsQuery, useGetLineageQuery } = dogsApi;
