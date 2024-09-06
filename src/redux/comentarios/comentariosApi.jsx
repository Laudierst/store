import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import api from "../../api/api";

export const comentarioApi = createApi({
    reducerPath: "comentaiosApi",
    //baseQuery: fetchBaseQuery({ baseUrl: "https://api-store-1ce9da7c9ae6.herokuapp.com/" }),
    baseQuery: fetchBaseQuery(api.get("/")),
    endpoints: (builder) => ({
        getAllOroducts: builder.query({
            query: () => "comentario"
        })
    })
})

export const { useGetAllCategorysQuery } = comentarioApi;