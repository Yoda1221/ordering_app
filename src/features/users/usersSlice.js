import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    { id: '0', name: 'Yoda' },
    { id: '1', name: 'Neil Young' },
    { id: '2', name: 'Dave Gray' },
    { id: '3', name: 'Dude Lebowski' }
]

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer
