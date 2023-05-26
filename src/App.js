// import Layout from './components/layout/Layout'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './components/layout/RootLayout'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/about', element: <About /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
