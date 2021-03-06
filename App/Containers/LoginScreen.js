import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  View, 
  TextInput, 
  StatusBar, 
  Image,
  TouchableOpacity
} from 'react-native'

// Styles
import styles from './Styles/LoginScreenStyle'


export default class LoginScreen extends Component {  
  onSubmit(){
    const { navigate } = this.props.navigation;
    navigate('MainMenuScreen')
  }
  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Welcome Back, User!
          </Text>
        </View>
        
        <View style={styles.field}>
          <TextInput 
            placeholder="Email"
            style={styles.textInput}/>
        </View>

        <View style={styles.field}>
          <TextInput 
            placeholder="Password"
            style={styles.textInput}/>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onSubmit.bind(this)}>
            <Text style={styles.button}>
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
        

      </View>  
    )
  }
}
