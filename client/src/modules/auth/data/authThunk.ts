/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk } from '@reduxjs/toolkit'
import axiosInstance from '../utils/axios'
import { ILogin } from '../types/login'

export const login = createAsyncThunk('auth/login', async (query: ILogin, { rejectWithValue }) => {
  try {
    const response = await axiosInstance.post(`/api/auth/token/`, {
      username: query.email,
      password: query.password,
    })

    if (response.status === 200) {
      return response.data
    }

    throw new Error(response.statusText)
  } catch (err: any) {
    return rejectWithValue(err)
  }
})
