import { apiSlice } from '../api/apiSlice'
import { createSelector, createEntityAdapter } from '@reduxjs/toolkit'

const usersAdapter = createEntityAdapter()
const initialState = usersAdapter.getInitialState()

export const extendUserApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
        getUsers: builder.query({
            query: () => '/users',
            transformResponse: responseData => {
                return usersAdapter.setAll(initialState, responseData)
            },
            providerTags: (result, error, arg) => [
                {type: 'User', id: 'LIST'},
                ...result.ids.map(id => ({type: 'User', id}))
            ]
        })
    })
})

export const { useGetUserQuery } = extendUserApiSlice
export const selectUsersResult = extendUserApiSlice.endpoints.getUsers.select()

const selectUsersData = createSelector(
    selectUsersResult, usersResult => usersResult.data
)

export const {
    selectAll: selectAllUsers,
    selectById: selectUserById,
    selectedIds: selectUsersIds
} = usersAdapter.getSelectors(state => selectUsersData(state) ?? initialState)
