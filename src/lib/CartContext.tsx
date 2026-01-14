'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem, Product } from '@/types';

interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, selectedColor?: string) => void;
  removeFromCart: (productId: string, selectedColor?: string) => void;
  updateQuantity: (productId: string, selectedColor: string | undefined, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, selectedColor?: string) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.id === product.id && item.selectedColor === selectedColor
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id && item.selectedColor === selectedColor
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prevCart, { ...product, quantity: 1, selectedColor }];
    });
  };

  const removeFromCart = (productId: string, selectedColor?: string) => {
    setCart((prevCart) => 
      prevCart.filter((item) => 
        !(item.id === productId && item.selectedColor === selectedColor)
      )
    );
  };

  const updateQuantity = (productId: string, selectedColor: string | undefined, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId, selectedColor);
      return;
    }

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId && item.selectedColor === selectedColor 
          ? { ...item, quantity } 
          : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getTotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, getTotal }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
