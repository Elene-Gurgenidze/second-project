import { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const totalPrice = cartItems.reduce((acc, item) => {
    return acc + (item.price * item.quantity);
  }, 0);

  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      const isExist = prev.find((item) => item.id === product.id);

      if (isExist) {
        if (isExist.quantity + quantity <= 0) {
          return prev.filter((item) => item.id !== product.id);
        }

        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      
      return quantity > 0 ? [...prev, { ...product, quantity }] : prev;
    });
  };

  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider value={{ cartItems, totalPrice, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};