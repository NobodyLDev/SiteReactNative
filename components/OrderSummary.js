import rect, { useState } from 'react';
import {Text, View, Switch, TouchableOpacity } from 'react-native-web';

const OrderSummary = ({cart}) => {
    const [isInstallment, setInstallment] = useState(false)
    let subtotal = 0;
    cart.map(product => subtotal += product.price)

    const onToggleSwitch = () => setInstallment(!isInstallment)

    return (
        <View>
            <Text>Order Summary</Text>
            <Text>Subtotal: {subtotal}</Text>
            <Text>Shipping: 0</Text>
            <Text>Tax: Calculated at checkout</Text>
            <Text>Estimated total {subtotal}</Text>
            <Text>Choose how to pay</Text>
            <Text>Use Installment?</Text>
            <switch> onValueChange={onToggleSwitch} value={isInstallment} </switch>
        </View>
    )
}
//cart.length