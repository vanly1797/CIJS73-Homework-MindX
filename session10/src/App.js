import { Routes, Route } from "react-router-dom";
import Auth, { Login, Register } from './components/Auth';
import Home from "./components/Home";
import Products from "./components/Products"
import Invoices from "./components/Invoices"
import Cart from "./components/Cart"
import Profile from "./components/Profile"
import About from "./components/About"
import ProductDetail from "./components/ProductDetail"
import InvoiceDetail from "./components/InvoiceDetail"

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/auth' element={<Auth />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='products' element={<Products />} >
            <Route path=":productId" element={<ProductDetail />} />
          </Route>
          <Route path='invoices' element={<Invoices />} >
            <Route path=":invoiceId" element={<InvoiceDetail />} />
          </Route>
          <Route path='cart' element={<Cart />} />
          <Route path='profile' element={<Profile />} />
          <Route path='about' element={<About />} />
        </Route>
        <Route path="*" element={<h1>404 Pagenot found</h1>} />
      </Routes>
    </div>
  );
}

export default App;
