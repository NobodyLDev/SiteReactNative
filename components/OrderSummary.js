import React from 'react';
import { Text, View, StyleSheet, Switch } from 'react-native';
import { useCart } from './CartContext'; // Importando o contexto do carrinho

const OrderSummary = () => {
    const { cartItems } = useCart(); // Usando o contexto do carrinho

    // Cálculo do subtotal considerando a quantidade de cada produto
    const subtotal = cartItems.reduce((total, product) => total + product.price * product.quantity, 0);

    const [isInstallment, setInstallment] = React.useState(false);
    const onToggleSwitch = () => setInstallment(!isInstallment);

    return (
        <View>
            <Text>Order Summary</Text>
            <Text>Subtotal: R$ {subtotal.toFixed(2)}</Text>
            <Text>Shipping: R$ 0.00</Text>
            <Text>Tax: Calculated at checkout</Text>
            <Text>Estimated total: R$ {(subtotal).toFixed(2)}</Text>
            <Text>Choose how to pay</Text>
            <Text>Use Installment?</Text>
            <Switch onValueChange={onToggleSwitch} value={isInstallment} />
        </View>
    );
}

export default OrderSummary;
