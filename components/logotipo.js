import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Header from './topoHeader';

export default function Logotipo(props) {
  return (
    <SafeAreaView>
      <Text style={styles.textoPrincipal}>{props.texto}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  textoPrincipal: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20, // Espaço entre o logotipo e outros componentes
  },
});
