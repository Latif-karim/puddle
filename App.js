import { StatusBar,  } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, Button, Alert, TouchableOpacity} from 'react-native';
import { useState } from 'react';
import { auth } from './Firebase/Firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import DeviceInfo from 'react-native-device-info';


export default function App() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const packageName = DeviceInfo.getBundleId();
    
  
  
    const authenticate = () =>{
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          
          
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ..
        });
      }
  
        const handleSignUp = () => {
          authenticate()
          
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="email@example.com"
                    keyboardType="email-address"
                    style={styles.input}
                    autoCapitalize="none"
                />
                <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="password..."
                secureTextEntry
                
                 />

                 <TouchableOpacity
                    
                    onPress={handleSignUp}
                    style={[styles.button, styles]}
                  >
                  <Text>Sign Up</Text>
                  </TouchableOpacity >
                  <Text>{packageName}</Text>
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

        title: {
            fontSize: 24,
            marginBottom: 20
        },

        input: {
            width: 300,
            height: 50,
         
            borderRadius: 10,
            marginHorizontal: 2,
            marginBottom: 5,
            borderColor: "gray",
            fontSize: 20,
            borderWidth: 1,
            padding: 10
        },

        button: {
          height: 50,
          width: 300,
          fontSize: 40,
          
          justifyContent:"center",
          alignItems: "center",
          backgroundColor: "#335de7",
          marginTop: 20,
          borderRadius: "10"
          
        },
    })


    

   
  
