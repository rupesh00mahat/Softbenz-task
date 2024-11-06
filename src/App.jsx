import './App.css'
import Home from './pages/home'
import "./App.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Cart from './components/cart.jsx';
import ProductItems from './components/product-items';
import EcommerceProvider from "./store/store.jsx";
import ProductDetail from './components/[product-detail].jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    children: [
      {
        path: "/",
        element: <ProductItems/>
      },
      {
        path: "/cart",
        element: <Cart/>
      },
      {
        path: "/products/:productId",
        element: <ProductDetail/>
      }
    ],
  },
]);

function App() {

  return (
    <>
 <EcommerceProvider>
 <RouterProvider router={router} />
 </EcommerceProvider>

    </>
  )
}

export default App
