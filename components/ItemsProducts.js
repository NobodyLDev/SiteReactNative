import { useState } from 'react';
import { Text, SafeAreaView, StyleSheet, FlatList, Image, View, TouchableOpacity } from 'react-native';

export default function Produtos(props) {
    const [categoria, setCategoria] = useState('');
    const [estadocategoria, setestadoCategoria] = useState(false);

    const produtos = [
        {
            id: 1,
            img: require('../assets/celular.png'),
            category: "CellPhone",
            title: "Celular top",
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
            img: require('../assets/nintendo.png'), // Certifique-se de que o caminho da imagem está correto
            category: "VideoGame",
            title: "Nintendo switch",
            price: 500,
        },
    ];

    function filtros(categoria) {
        setCategoria(categoria);
        setestadoCategoria(true);
    }

    const filtro = estadocategoria
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
                            <TouchableOpacity style={styles.button}>
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
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    subheader: {
        marginTop: 50,
        justifyContent: 'center',
        flexDirection: 'row',
    },
    subheaderparagraph: {
        marginRight: 10,
        fontSize: 16,

    },
    button: {
        backgroundColor: '#007BFF', // Cor do botão
        borderRadius: 5, // Cantos arredondados
        padding: 10, // Espaçamento interno
        marginHorizontal: 5, // Espaçamento entre os botões
    },
    buttonText: {
        color: 'white', // Cor do texto
        fontSize: 14,
        fontWeight: 'bold',
    },
});
