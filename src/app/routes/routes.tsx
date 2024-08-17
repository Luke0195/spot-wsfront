import { SignIn, SignUp } from '../../pages'
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
])
