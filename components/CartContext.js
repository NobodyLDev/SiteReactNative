import React, { createContext, useState, useContext } from 'react';

// Criar o contexto do carrinho
const CartContext = createContext();

// Provedor do contexto
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Função para adicionar ao carrinho
  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  // Função para remover do carrinho (opcional)
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Hook para usar o carrinho em qualquer componente
export const useCart = () => useContext(CartContext);
