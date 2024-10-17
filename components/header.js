// header.js
import React from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Mini from './topoHeader';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { useCart } from './CartContext'; // Importando o contexto do carrinho

export default function Header(props) {
    const { cartItems } = useCart(); // Acessando os itens do carrinho

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContent}>
                <View style={styles.logoContainer}>
                    <FontAwesome6 name="google" size={24} color="#0A77D5" />
                    <Text style={styles.logoText}>Google Store</Text>
                </View>

                <FlatList
                    data={props.links}
                    renderItem={({ item }) => (
                        <TouchableOpacity>
                            <Link href={item === 'Carrinho' ? '/cart' : item}>
                                <Text style={styles.link}>{item}</Text>
                            </Link>
                        </TouchableOpacity>
                    )}
                    horizontal={true}
                />
                <View style={styles.icons}>
                    <TouchableOpacity style={styles.iconButton} onPress={() => alert('Search pressed!')}>
                        <Feather name="search" size={24} color="black" />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton}>
                        <Foundation name="shopping-cart" size={24} color="black" />
                        <Link href="/cart">
                            <Text style={styles.cartCount}>{cartItems.reduce((total, item) => total + item.quantity, 0)}</Text>
                        </Link>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.iconButton} onPress={() => alert('Profile pressed!')}>
                        <FontAwesome name="user-circle-o" size={24} color="black" />
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: '#fff',
    },
    headerContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 20,
    },
    logoText: {
        marginLeft: 20,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0A77D5'
    },
    link: {
        color: 'black',
        fontSize: 14,
        marginHorizontal: 10,
        textAlign: 'center',
        padding: 14,
    },
    icons: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconButton: {
        marginLeft: 15,
        marginRight: 15,
    },
    cartCount: {
        position: 'absolute',
        right: -10,
        top: -10,
        backgroundColor: 'red',
        borderRadius: 10,
        color: 'white',
        padding: 5,
        fontSize: 12,
        fontWeight: 'bold',
    },
});
