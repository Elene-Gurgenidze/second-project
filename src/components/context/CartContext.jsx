import { createContext, useState, useContext } from 'react';

// 1. ვქმნით კონტექსტს
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // აქ შევინახავთ კალათის ნივთებს
  const [cartItems, setCartItems] = useState([]);

  // ფუნქცია კალათაში დასამატებლად / რაოდენობის შესაცვლელად
  const addToCart = (product, quantity) => {
    setCartItems((prev) => {
      // ვამოწმებთ, უკვე არის თუ არა ეს ნივთი კალათაში
      const isExist = prev.find((item) => item.id === product.id);

      if (isExist) {
        // თუ რაოდენობა მცირდება და ხდება 0 ან ნაკლები, ვშლით ნივთს
        if (isExist.quantity + quantity <= 0) {
          return prev.filter((item) => item.id !== product.id);
        }

        // თუ არის, უბრალოდ რაოდენობას ვუცვლით
        return prev.map((item) =>
          item.id === product.id 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        );
      }
      
      // თუ არ არის და რაოდენობა პოზიტიურია, ვამატებთ ახალ ნივთს მასივში
      return quantity > 0 ? [...prev, { ...product, quantity }] : prev;
    });
  };

  // ფუნქცია კალათის მთლიანად გასასუფთავებლად ("Remove all")
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    // ვატანთ მნიშვნელობებს: ნივთებს, დამატებას და გასუფთავებას
    <CartContext.Provider value={{ cartItems, addToCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

// "ჰუკი", რომლითაც სხვა კომპონენტებიდან მივწვდებით კალათას
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};