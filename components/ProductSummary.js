import React, { useState } from 'react';
import { Image, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from './CartContext'; // Importando o contexto

const ProductSummary = (props) => {
    const { addToCart } = useCart(); // Usando o contexto do carrinho
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            const product = {
                id: props.id, // Supondo que você tenha um ID
                source: props.source,
                title: props.description,
                price: props.price,
                quantity, // Adicionando a quantidade do produto
            };
            addToCart(product); // Chama a função para adicionar ao carrinho
        }
    };

    return (
        <View>
            <Image source={props.source} />
            <Text>{props.description}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity - 1)} disabled={quantity === 0}><Text>-</Text></TouchableOpacity>
            <Text>Qty: {quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}><Text>+</Text></TouchableOpacity>
            <Text>R$ {(props.price * quantity).toFixed(2)}</Text>
            <TouchableOpacity onPress={handleAddToCart}>
                <Text style={styles.addToCartButton}>Adicionar ao Carrinho</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    addToCartButton: {
        backgroundColor: '#007bff',
        color: '#ffffff',
        padding: 10,
        borderRadius: 5,
        textAlign: 'center',
        marginTop: 10,
    },
});

export default ProductSummary;
