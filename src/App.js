import "./App.css";
import { ToastContainer } from "react-toastify";
import Home from "./component/Page/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import ListProduct from "./component/Page/ListProduct/ListProduct";
import Header from "./component/Global/Header/Header";
import Footer from "./component/Global/Footer/Footer";
import Cart from "./component/Page/Cart/Cart";
import Checkout from "./component/Page/Checkout/Checkout";
import ValidateForm from "./component/Page/ValidateForm/ValidateForm";
function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/listproduct" element={<ListProduct />}></Route>
        <Route path="/search" element={<ListProduct />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/validateform" element={<ValidateForm />}></Route>
      </Routes>
      
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
