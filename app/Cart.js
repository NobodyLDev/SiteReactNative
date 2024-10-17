import React from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import CartHeader from '../components/CartHeader';
import OrderSummary from '../components/OrderSummary';
import ProductSummary from '../components/ProductSummary';
import { useCart } from '../components/CartContext';

const Cart = () => {
  const { cartItems } = useCart(); // Mudei de `cart` para `cartItems`

  return (
    <View style={styles.container}>
      <CartHeader cart={cartItems} />
      <ScrollView>
        {cartItems.length > 0 ? (
          cartItems.map((product, index) => (
            <ProductSummary
              key={index}
              source={product.img}
              description={product.title}
              price={product.price}
              quantity={product.quantity} // Adicione quantity se estiver usando
            />
          ))
        ) : (
          <Text style={styles.emptyMessage}>O carrinho está vazio.</Text>
        )}
      </ScrollView>
      <OrderSummary cart={cartItems} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  emptyMessage: {
    textAlign: 'center',
    margin: 20,
    fontSize: 18,
    color: 'gray',
  },
});

export default Cart;
