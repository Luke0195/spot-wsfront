import { SignIn, SignUp, Dashboard, PageNotFound } from '../../pages'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>,
  ),
)
