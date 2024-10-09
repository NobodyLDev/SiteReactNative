import react from "react";
import { Text } from "react-native-web";

const CartHeader = ({ cart }) => (
    <Text>Cart ({cart.length} itens)</Text>
)

export default CartHeader