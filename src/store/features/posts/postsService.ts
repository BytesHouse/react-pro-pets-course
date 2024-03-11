import {createAsyncThunk} from "@reduxjs/toolkit";
import {$api} from "../../../config/api";

export const getPosts = createAsyncThunk(
    'posts/get_posts',
    async (_, {rejectWithValue} ) => {
            try {
                const response = await $api.get('/posts');
                return response.data
            } catch (e: any) {
                return rejectWithValue(`${e.response.data.message}`)
            }
    }
)

export const getPostById = createAsyncThunk(
    'posts/get_post',
    async ( id , {rejectWithValue}) => {
        try {
            const response = await $api.get('/posts/' + id);
            return response.data
        } catch (e: any) {
            return rejectWithValue(`${e.response.data.message}`)
        }
    }
)