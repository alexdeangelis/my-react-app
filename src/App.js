import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import RootLayout from './components/layout/RootLayout'
import ErrorPage from './pages/ErrorPage'
import ProductDetailPage from './pages/ProductDetail'
import Products from './pages/Products'
import PrivacyPolicy from './pages/PrivacyPolicy'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: 'about', element: <About /> },
      { path: 'products', element: <Products />},
      { path: 'products/:productID', element: <ProductDetailPage /> },
      { path: 'privacy-policy', element: <PrivacyPolicy />}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />
}

export default App
