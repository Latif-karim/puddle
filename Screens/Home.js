import { Text, View , StyleSheet} from "react-native"
const Home = () => {
  return (
    <View styles={styles.container}>
        <Text style={styles.text}>Welcome To The Home Page😍</Text>
    </View>
    
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      
      
    },
    text: {
        fontSize: 50,
    }
    
})

export default Home