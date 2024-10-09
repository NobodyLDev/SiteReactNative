import react from "react";
import { ScrollView, View } from "react-native-web";
import CartHeader from "./CartHeader";
import OrderSummary from "./OrderSummary";
import ProductSummary from "./ProductSummary";

const Cart = (props) => {
    const [quantity, setQuantity] = {}

    return (
        <View>
            <CartHeader cart={props.cart} />
            <View>
                <ScrollView>
                    {
                        props.cart.map((product) => 
                            <ProductSummary 
                                source={product.source} 
                                description={product.description} 
                                price={product.price} 
                            />
                    )}
                </ScrollView>
            </View>
            <OrderSummary cart={props.cart} />
        </View>
    )
}