// index.js (ou App.js)
import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import { StatusBar } from 'react-native';
import Header from '../components/header.js';
import Logotipo from '../components/logotipo.js';
import Produtos from '../components/ItemsProducts.js';
import { CartProvider } from '../components/CartContext.js'; // Importando o CartProvider
import Cart from './Cart.js';

export default function App() {
  return (
    <CartProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Header links={['Home', 'Itens', 'Carrinho', 'Profile', 'Support']} />
        </View>
        <Logotipo texto="Minha Loja" />
        <View style={styles.produtosContainer}>
          <Produtos />
        </View>
        <StatusBar />
      </SafeAreaView>
    </CartProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    width: '100%',
    backgroundColor: '#fff',
  },
  produtosContainer: {
    flex: 1,
    padding: 10,
  },
});
