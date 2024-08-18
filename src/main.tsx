import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './app/routes/routes'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from './@components/ui/sonner'
import './main.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster position="top-right" />
  </StrictMode>,
)
