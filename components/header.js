import { Text, SafeAreaView, StyleSheet, FlatList, View } from 'react-native';
import Feather from '@expo/vector-icons/Feather';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Foundation from '@expo/vector-icons/Foundation';
import Mini from './topoHeader';
import { TouchableOpacity } from 'react-native';
export default function Header(props) {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.headerContent}>
          <View style={styles.logoContainer}>
            <FontAwesome6 name="google" size={24} color="#0A77D5" />
            <Text style={styles.logoText}>Google Store</Text> {/* Centralizar texto com ícone */}
          </View>
          <FlatList
            data={props.links}
            renderItem={({ item }) => <Text style={styles.link}>{item}</Text>}
            horizontal={true}
          />
          <View style={styles.icons}>
            <TouchableOpacity style={styles.iconButton} onPress={() => alert('Search pressed!')}>
              <Feather name="search" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton} onPress={() => alert('Cart pressed!')}>
              <Foundation name="shopping-cart" size={24} color="black" />
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
      marginRight: 20, // Aumente este valor para mais espaço entre o ícone e o texto
    },
    logoText: {
      marginLeft: 20, // Espaço entre o ícone e o texto
      fontSize: 18,
      fontWeight: 'bold',
      color: '#0A77D5'
    },
    link: {
      color: 'black',
      fontSize: 14,
      marginHorizontal: 10,
      textAlign: 'center', // Centralizar texto dos links
      padding: 14 
    },
    icons: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    iconButton: {
      marginLeft: 15, // Aumente o valor para mais espaçamento
      marginRight: 15, // Aumente o valor para mais espaçamento
    },
  });