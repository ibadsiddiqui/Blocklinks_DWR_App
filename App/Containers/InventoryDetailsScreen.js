import React, { Component } from 'react'
import { 
  View, 
  Text, 
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  TextInput } from 'react-native'


import { Images } from '../Themes'
// Styles
import styles from './Styles/InventoryDetailsScreenStyle'

export default class InventoryDetailsScreen extends Component {
  onBackBtnPress(){
    const {navigate} = this.props.navigation;
    navigate('MainMenuScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <KeyboardAvoidingView behavior='position'>

          <TouchableOpacity onPress={this.onBackBtnPress.bind(this)}>
            <Image source={Images.backButton} style={styles.backLogo}/>
          </TouchableOpacity>
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
              <TextInput style={[styles.field, styles.uniqueIDPadding]}/>
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
                <Text style={styles.timeStyle}>Time here</Text>
              </View>

              <View style={styles.rowView}>
                <Text>Geolocation: </Text>
                <Text style={styles.addressStyle}>Address Here</Text>
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
