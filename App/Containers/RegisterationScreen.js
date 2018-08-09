import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RegisterationScreenStyle'

class RegisterationScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>
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
          <Text>RegisterationScreen</Text>
          </View>
        </KeyboardAvoidingView>
        </View>

    )
  }
}

const mapStateToProps = (state) => {
  return {
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegisterationScreen)
