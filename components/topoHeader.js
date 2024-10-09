import { Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
 
export default function Mini(props) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>
        <FlatList
          data={props.link}
          renderItem={({ item }) => <Text style={styles.paragraph}>{item}</Text>}
          horizontal={true}
        />
       
      </Text>
    </SafeAreaView>
  );
}
 

const styles = StyleSheet.create({
    container: {
      justifyContent: 'flex-start',
      padding: 20,
      backgroundColor: '',
      flexDirection: 'row-reverse',
     
    },
    paragraph: {
      color: 'black',
      marginTop: 0,
      fontSize: 14,
      fontWeight: 'bold',
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'Wrap',
      marginRight: '10%',
    },
  });