/* eslint-disable @typescript-eslint/no-explicit-any */
import MainLayout from '@src/modules/shared/layout/MainLayout/MainLayout'
import AuthGuard from '@src/modules/shared/guards/AuthGuard'
import { RouteProps } from 'react-router-dom'
import { Fragment, lazy } from 'react'
import GuestGuard from '@src/modules/shared/guards/GuestGuard'

type RouteConfig = {
  exact: boolean | null
  path: string
  component: React.ComponentType<any>
  guard?: React.ComponentType<any> | typeof Fragment | any
  layout?: React.ComponentType<any> | typeof Fragment
} & RouteProps

const routes: RouteConfig[] = [
  {
    exact: true,
    guard: AuthGuard,
    path: '/dashboard',
    component: lazy(() => import('../features/Test')),
    layout: MainLayout,
  },
  {
    exact: true,
    guard: GuestGuard,
    path: '/dashboard/collections-list',
    component: lazy(() => import('../features/Collections/Collections')),
    layout: MainLayout,
  },
]

export default routes
