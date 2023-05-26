import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './components/layout/RootLayout'
import ErrorPage from './pages/ErrorPage'
import ProductDetailPage from './pages/ProductDetail'
import Products from './pages/Products'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '', element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products />},
      { path: 'products/:productID', element: <ProductDetailPage /> }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
