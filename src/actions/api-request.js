import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const characterApi = createApi({
    reducerPath: 'characterApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://www.breakingbadapi.com/api' }),
    endpoints: (build) => ({
        getCharacters: build.query({
            query: () => "/characters",
            transformResponse: (response) => response,
        }),
        getCharacter: build.query({
            query: (value) => `?name=${value}`,
            transformResponse: (response) => response,
        }),
    }),
})

export const {useGetCharactersQuery, useGetCharacterQuery} = characterApi