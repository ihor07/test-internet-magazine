import { Component } from 'react'
import Admin from './pages/Admin'
import Basket from './pages/Basket'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE,
} from './utils/consts'

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    Component: Admin,
  },
  {
    path: BASKET_ROUTE,
    Component: Basket,
  },
]

export const publicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
  {
    path: REGISTRATION_ROUTE,
    Component: Basket,
  },
  {
    path: SHOP_ROUTE,
    Component: Basket,
  },
  {
    path: DEVICE_ROUTE + '/:id',
    Component: Basket,
  },
]
