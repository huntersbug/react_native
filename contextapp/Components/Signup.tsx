import { Button, Text, View } from 'react-native'
import React, { Component } from 'react'

import {
    GoogleSignin,
    GoogleSigninButton,
    statusCodes,
    } from 'react-native-google-signin'
import firebase from 'firebase/app';
import 'firebase/auth';

export default class Signup extends Component {


    signInWithGoogle=()=>{
        // const signInWithGoogle = async () => {
        //     try {
        //       await GoogleSignin.hasPlayServices();
        //       const { accessToken, idToken, user } = await GoogleSignin.signIn();
        //       // Build Firebase credential with the Google access token and ID token
        //       const credential = firebase.auth.GoogleAuthProvider.credential(idToken, accessToken);
        //       // Sign in with credential
        //       const { user: firebaseUser } = await firebase.auth().signInWithCredential(credential);
        //       console.log(firebaseUser);
        //     } catch (error) {
        //       console.error(error);
        //     }
        
    }
  render() {
    return (
      <View>
   <GoogleSigninButton
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signInWithGoogle}
      />
      <Button title="Sign up with Google" onPress={this.signInWithGoogle} />
      </View>
    )
  }
}