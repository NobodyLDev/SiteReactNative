import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image, View, TouchableOpacity } from 'react-native';
import { useCart } from './CartContext'; // Importando o contexto

export default function Produtos(props) {
    const [categoria, setCategoria] = useState('');
    const [estadoCategoria, setEstadoCategoria] = useState(false);
    const { addToCart } = useCart(); // Usando o contexto do carrinho

    // Definindo os produtos
    const produtos = [
        {
            id: 1,
            img: require('../assets/celular.png'),
            category: "CellPhone",
            title: "Celular Samsung S23",
            price: 1200,
        },
        {
            id: 2,
            img: require('../assets/fone.png'),
            category: "fone",
            title: "Soundcore Life Q30",
            price: 800,
        },
        {
            id: 3,
            img: require('../assets/image.png'),
            category: "Computer",
            title: "Notebook Acer Nitro V15",
            price: 400.0,
        },
        {
            id: 4,
            img: require('../assets/nintendo.png'),
            category: "VideoGame",
            title: "Nintendo switch",
            price: 500,
        },
    ];

    // Função para filtrar produtos por categoria
    function filtros(categoria) {
        setCategoria(categoria);
        setEstadoCategoria(true);
    }

    const filtro = estadoCategoria
        ? produtos.filter((p) => p.category === categoria)
        : produtos;

    return (
        <SafeAreaView>
            <View style={styles.subheader}>
                <TouchableOpacity style={styles.button} onPress={() => filtros('CellPhone')}>
                    <Text style={styles.buttonText}>Celulares</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filtros('VideoGame')}>
                    <Text style={styles.buttonText}>Videogames</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filtros('Computer')}>
                    <Text style={styles.buttonText}>Computadores</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => filtros('fone')}>
                    <Text style={styles.buttonText}>Fones de ouvido</Text>
                </TouchableOpacity>
            </View>

            <FlatList
                data={filtro}
                renderItem={({ item }) => (
                    <View style={styles.itemContainer}>
                        <TouchableOpacity style={styles.item}>
                            <Image style={styles.imagem} source={item.img} />
                            <Text style={styles.paragraph}>{item.title}</Text>
                            <Text style={styles.price}>R$ {item.price}</Text>
                            <TouchableOpacity
                                style={styles.button}
                                onPress={() => addToCart({ ...item, quantity: 1 })} // Adicionar ao carrinho
                            >
                                <Text style={styles.buttonText}>Adicionar ao carrinho</Text>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    </View>
                )}
                keyExtractor={item => item.id.toString()}
                numColumns={2} // Para exibir em duas colunas
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
    },
    item: {
        backgroundColor: '#f8f8f8',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        margin: 5,
    },
    imagem: {
        width: 150,
        height: 150,
        borderRadius: 10,
    },
    paragraph: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 14,
        color: 'green',
    },
    button: {
        backgroundColor: '#007bff',
        borderRadius: 5,
        padding: 10,
        marginTop: 5,
        margin: 10
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    subheader: {
        marginTop: 70,
        justifyContent: 'center',
        flexDirection: 'row',
      
    },
});
