import { SignIn, SignUp, Dashboard, PageNotFound } from '../../pages'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <SignIn />,
  },
  {
    path: 'signup',
    element: <SignUp />,
  },
  {
    path: 'dasbhoard',
    element: <Dashboard />,
  },
  {
    path: '*',
    element: <PageNotFound />,
  },
])
