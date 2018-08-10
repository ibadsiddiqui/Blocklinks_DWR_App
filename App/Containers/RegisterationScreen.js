import React, { Component } from 'react'
import { 
  View, 
  Text, 
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity
} from 'react-native'

// Styles
import styles from './Styles/RegisterationScreenStyle'

export default class RegisterationScreen extends Component {
  onSubmit(){
    const { navigate } = this.props.navigation;
    navigate('MainMenuScreen')
  }
  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Welcome User!
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
        </KeyboardAvoidingView>
        </View>

    )
  }
}