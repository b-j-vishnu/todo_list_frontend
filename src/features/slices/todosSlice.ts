import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../../hooks/useAxios'
import { ITodoInitialState, ITodoResonse, ITodoSeachOptions } from '../../types/Auth/sliceTypes/todos.types'

const initialState: ITodoInitialState = {
     todos: [],
     totalCount: 0,
     count: 0,
     status: "idle",
     error: null
}


export const searchTodos = createAsyncThunk<ITodoResonse, ITodoSeachOptions>('todos/search', async (data: ITodoSeachOptions) => {
     try {
          const response = await axiosInstance.get(`/api/v1/todos/search?searchTerm=${data.searchTerm}&page=${data.page}&limit=${data.limit}`)
          return response.data
     } catch (error) {
          console.log(error)
     }
})
const todoSlice = createSlice({
     name: "todos",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
          builder
               .addCase(searchTodos.pending, (state, action) => {
                    state.status = "pending"

               })
               .addCase(searchTodos.fulfilled, (state, action) => {
                    state.status = "fulfilled",
                         state.todos = action.payload.data,
                         state.totalCount = action.payload.totalCounts,
                         state.count = action.payload.count

               })
               .addCase(searchTodos.rejected, (state, action) => {
                    state.status = "rejected"

               })
     }

})

export default todoSlice.reducer