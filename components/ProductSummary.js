import react, { useSate } from 'react';
import { Image, Text, View, TouchableOpacity} from 'react-native-web';


const ProdutSumary = (props) => {
    const [quantity, setQuantity] = useSate(0)

    return (
        <view>
            <image source={props.source} />
            <Text>{props.description}</Text>
            <TouchableOpacity onPress={setQuantity(quantity - 1)}><Text>-</Text></TouchableOpacity>
            <Text>Qty: {quantity}</Text>
            <TouchableOpacity onPress={setQuantity(quantity + 1)}><Text>+</Text></TouchableOpacity>
            <Text>{price + quantity}</Text>
        </view>
    )
}