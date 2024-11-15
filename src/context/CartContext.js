import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(
    localStorage.getItem("CART") ? JSON.parse(localStorage.getItem("CART")) : []
  );
  const handleAddCart = (product) => {
    //Them san pham vao gio <hang></hang>
    //Neu trung sp thi tang so luong len
    const newCart = [...cart];
    const checkIndex = cart.findIndex((item) => item.id === product.id);
    if (checkIndex >= 0) {
      newCart[checkIndex].quantity += 1;
    } else {
      product.quantity = 1;
      newCart.push(product);
    }
    toast.success(`Product has been added to the cart!`, {
      position: "top-center",
    });
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));

    //luu vao localStorage
  };
  const handleQuantity = (type, index, value = null) => {
    const newCart = [...cart];
    if (type === "plus") {
      newCart[index].quantity++;
    } else if (type === "minus") {
      if (newCart[index].quantity > 1) {
        newCart[index].quantity--;
      }
    } else if (type === "change"){
      const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity > 0) {
      newCart[index].quantity = newQuantity; 
      }
    }
    
    else if (type === "delete") {
      newCart.splice(index, 1);
    }
    setCart(newCart);
    localStorage.setItem("CART", JSON.stringify(newCart));
  };
  return (
    <CartContext.Provider value={{ cart, handleAddCart, handleQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

const UseCart = () => {
  return useContext(CartContext);
};

export { CartProvider, UseCart };
