import { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/Firebase";
import { GoogleSignin, GoogleSigninButton } from "@react-native-google-signin/google-signin";
import { useEffect , useState} from "react";

import React from 'react'


 const SignUp = () => {
  const [userInfo, setUserInfo] = useState();
  useEffect(() => {
    GoogleSignin.configure({
      webClientId: "628708367445-k12rssuiun2r84di6id0p6telbteajun.apps.googleusercontent.com"
    })
    return () => {
      
    };
  }, []);


  
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     const authenticate = () =>{
//       createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//           // Signed up 
//           const user = userCredential.user;
//           console.log(`${user.email} has signed up`)
          
//           // ...
//         })
//         .catch((error) => {
//           const errorCode = error.code;
//           const errorMessage = error.message;
//           // ..
//         });
//       }
  
//         const handleSignUp = () => {
//           authenticate()
          
//         }

        const handlegoogle = async() => {
          await GoogleSignin.hasPlayServices()
          const user = await GoogleSignin.signIn()
          setUserInfo(user)
        }

        const logout = async() => {
          setUserInfo()
          GoogleSignin.revokeAccess()
          GoogleSignin.signOut()
        }

        return (
            <View style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>
                {/* <TextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="email@example.com"
                    keyboardType="email-address"
                    style={styles.input}
                />
                <TextInput
                style={styles.input}
                value={password}
                onChangeText={setPassword}
                placeholder="password..."
                secureTextEntry
                 />

                 <Button 
                    title="Sign Up"
                    onPress={handleSignUp}
                 /> */}
                 <Text>{userInfo && JSON.stringify(userInfo.user)}</Text>
                 
                 {userInfo ? (
                  <Button title="Logout" onPress={logout}/>) : <GoogleSigninButton size={GoogleSigninButton.Size.Standard}
                    color={GoogleSigninButton.Color.Dark} onPress={handlegoogle}
                  />
                  }
                 
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
            fontSize: 24
        },

        input: {
            width: 250,
            height: 10,
            borderBlockColor: "gray",
            borderRadius: 10,
        }
    })


    

    export default SignUp