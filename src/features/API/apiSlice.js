// Import the RTK Query methods from the React-specific entry point
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    tagTypes:['Get'],
    endpoints: builder => ({
        getAllPosts: builder.query({
            query: () => '/posts'
        }),
        getAllComments: builder.query({
            query: () => "/comments"
        })
    })
})

export const { useGetAllPostsQuery, useGetAllCommentsQuery } = apiSlice;
export default apiSlice.reducer