import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useCart } from './CartContext'; // Importando o contexto do carrinho

const CartHeader = () => {
    const { cartItems } = useCart(); // Usando o contexto para acessar os itens do carrinho

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.headerText}>
                Cart ({cartItems.reduce((total, item) => total + item.quantity, 0)} item{cartItems.reduce((total, item) => total + item.quantity, 0) !== 1 ? 's' : ''})
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        padding: 10,
        backgroundColor: '#ffffff',
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default CartHeader;
