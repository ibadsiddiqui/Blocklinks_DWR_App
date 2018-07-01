import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  KeyboardAvoidingView,
  View,
  TouchableOpacity
} from 'react-native'


// Styles
import styles from './Styles/RecieveProductScreenStyle'

export default class RecieveProductScreen extends Component {
  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>

          <View style={styles.titleContainer}>
            <Text style={styles.title}>
              Main Menu
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 175}} />      
          </View>

          <View>
            <Text>Pallet #: </Text>
          </View>

          <View>
            <Text>Box #: </Text>
          </View>

          <View>
            <Text>Unique ID:</Text>
          </View>

          <View>
            <Text>User ID:</Text>
        
          </View>

          <View>
            <Text>Business Name</Text>
  
          </View>

          <View>
            <Text>Time/Date</Text>
          </View>

          <View>
            <Text>Geolocation</Text>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity >
              <Text style={styles.button}>
                Submit
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity >
              <Text style={styles.button}>
                Cancel
              </Text>
            </TouchableOpacity>
          </View>

        </KeyboardAvoidingView>
      </View>
    )
  }
}
