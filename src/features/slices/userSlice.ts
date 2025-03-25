import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../hooks/useAxios"
import { IAuth } from "../../types/Auth/SignupTypes"
import toast from "react-hot-toast"
import { AxiosError } from "axios"

const initialState = {
     user: {},
     error: null,
     status: "idle"
}
export const login = createAsyncThunk('/login', async (data: IAuth, { rejectWithValue }) => {
     try {
          const response = await axiosInstance.post('/api/v1/user/login', data)
          toast.success(response.data.message)
          return response.data
     } catch (error) {
          if (error instanceof AxiosError) {
               toast.error(error?.response?.data?.message)
               rejectWithValue(error)
          }
     }
})
export const signup = createAsyncThunk('/singup', async (data: IAuth, { rejectWithValue }) => {
     try {
          const response = await axiosInstance.post('/api/v1/user/signup', data)
          toast.success(response.data.message)
          return response.data
     } catch (error: unknown) {
          if (error instanceof AxiosError) {
               toast.error(error?.response?.data.message)
               rejectWithValue(error)
          }
     }
})
export const userSlice = createSlice({
     name: "user",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               // Login
               .addCase(login.pending, (state, _action) => {
                    state.status = "pending"
               })
               .addCase(login.fulfilled, (state, _action) => {
                    state.status = "fulfilled"
               })
               .addCase(login.rejected, (state, _action) => {
                    state.status = "rejected"
               })
               // Signup
               .addCase(signup.pending, (state, _action) => {
                    state.status = "pending"
               })
               .addCase(signup.fulfilled, (state, _action) => {
                    state.status = "fulfiled"
               })
               .addCase(signup.rejected, (state, _action) => {
                    state.status = "rejected"
               })
     }
})