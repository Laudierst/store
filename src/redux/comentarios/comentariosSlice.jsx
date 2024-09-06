import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
//import axios from "axios";
import api from "../../api/api";

const initialState = {
    items: [],
    status: null,
}

//const url_heroku = "https://api-store-1ce9da7c9ae6.herokuapp.com/product"
//const url_local = "http://localhost:3003/product"

export const comentarioFatch = createAsyncThunk(
    "comentario/comentarioFatch",
    // eslint-disable-next-line no-unused-vars
    async () => {
        try {
            const res = await api.get("/comentario")
            return res?.data
        } catch (error) {
            return error
        }
    }
)

const comentarioSlice = createSlice({
    name: "comentario",
    initialState,
    reducers: [],
    extraReducers: {
        [comentarioFatch.pending]: (state) => {
            state.status = "pending";
        },
        [comentarioFatch.fulfilled]: (state, action) => {
            state.status = "success";
            state.items = action.payload;
        },
        [comentarioFatch.rejected]: (state) => {
            state.status = "rejected";
        }
    }
})

export default comentarioSlice.reducer;
