import { useEffect } from 'react'
import axiosInstance from '../utils/axios'
import { useSelector, useDispatch } from 'react-redux'
import { clearTokens, getTokens } from '../utils/token'
import useIsMountedRef from '../hook/useIsMountedRef'
import { initialise } from '../data/authSlice'
import { RootState } from '@src/modules/shared/store'
import LazyLoad from '@src/modules/shared/components/LazyLoad/LazyLoad'

interface AuthProviderProps {
  children: React.ReactNode
}

const AuthProvider = ({ children }: AuthProviderProps) => {
  const isMounted = useIsMountedRef()

  const { isInitialised } = useSelector((state: RootState) => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!isMounted.current) {
      return
    }

    async function fetchUser() {
      const { refresh_token } = getTokens()
      if (refresh_token) {
        const response = await axiosInstance.get('/api/auth/profile/')
        const user = response.data
        dispatch(initialise({ isAuthenticated: true, user }))
      } else {
        dispatch(initialise({ isAuthenticated: false, user: null }))
        clearTokens()
      }
    }

    fetchUser()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!isInitialised) {
    return <LazyLoad />
  }

  return <>{children}</>
}

export default AuthProvider
