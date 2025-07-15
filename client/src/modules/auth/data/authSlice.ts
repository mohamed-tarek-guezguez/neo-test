/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { clearTokens, setTokens } from '../utils/token'
import { login } from './authThunk'

export interface AuthState {
  status: string
  isAuthenticated: boolean
  isInitialised: boolean
  user: {
    id: string
    username: string
    email: string
  } | null
  error: string | null
}

const initialState: AuthState = {
  status: 'idle',
  isAuthenticated: false,
  isInitialised: false,
  user: null,
  error: null,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    initialise: (state, action) => {
      const { isAuthenticated, user } = action.payload
      state.isAuthenticated = isAuthenticated
      state.isInitialised = true
      state.user = user
    },
    restore: (state) => {
      state.error = null
    },
    logoutUser: (state) => {
      state.error = null
      state.isAuthenticated = false
      state.user = null
      clearTokens()
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      state.error = null
      state.status = 'loading'
    })
    builder.addCase(login.fulfilled, (state, action: PayloadAction<any>) => {
      const { access, refresh } = action.payload
      setTokens(access, refresh)
      state.isAuthenticated = true
      state.user = {
        id: 'test',
        username: 'test',
        email: 'test',
      }
      state.status = 'succeeded'
    })
    builder.addCase(login.rejected, (state, action: PayloadAction<any>) => {
      state.error = action?.payload
      state.status = 'failed'
    })
  },
})

export const { initialise, restore, logoutUser } = authSlice.actions

export default authSlice.reducer
