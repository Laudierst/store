import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api/api";
//import axios from "axios";

const initialState = {
    items: [],
    status: null,
}

//const url_heroku = "https://api-store-1ce9da7c9ae6.herokuapp.com/product"
//const url_local = "http://localhost:3003/product"

export const categoryFatch = createAsyncThunk(
    "category/categoryFatch",
    // eslint-disable-next-line no-unused-vars
    async () => {
        try {
            const res = await api.get("/category")
            return res?.data
        } catch (error) {
            return error
        }
    }
)

const categorySlice = createSlice({
    name: "category",
    initialState,
    reducers: [],
    extraReducers: {
        [categoryFatch.pending]: (state) => {
            state.status = "pending";
        },
        [categoryFatch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [categoryFatch.rejected]: (state) => {
            state.status = "rejected";
        }
    }
})

export default categorySlice.reducer;
