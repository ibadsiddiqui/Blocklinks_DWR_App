import React, { Component } from 'react'
import { 
  ScrollView, 
  Text, 
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  TextInput
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
              Recieve Product
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 250}} />      

          </View>

          <View style={styles.centered}>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Pallet #: </Text>
              <TextInput style={[styles.field, styles.palletPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Box #: </Text>
              <TextInput style={[styles.field, styles.boxInputPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Unique ID:</Text>
              <TextInput style={styles.field}/>
            </View>

            <View style={styles.userInfo}>
              <View style={styles.rowView}>
                <Text>User ID:</Text>
                <Text style={styles.userIDStyle}>Ibad-0110</Text>        
              </View>

              <View style={styles.rowView}>
                <Text>Business: </Text>
                <Text style={styles.businessStyle}>Gul Ahmed Garments.</Text>
              </View>

              <View style={styles.rowView}>
                <Text>Time/Date: </Text>
                <Text>Time here</Text>
              </View>

              <View style={styles.rowView}>
                <Text>Geolocation: </Text>
                <Text>Address Here</Text>
              </View>
            </View>

          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity>
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
