import React, { Component } from 'react'
import { 
  ScrollView,
  Image, 
  Text, 
  KeyboardAvoidingView,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/SaleScreenStyle'

export default class SaleScreen extends Component {
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
          <View style={[styles.titleContainer, styles.centered]}>
            <Text style={styles.title}>
              Sale
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 100}} />      

          </View>

          <View style={styles.centered}>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Unique ID* : </Text>
              <TextInput style={[styles.field, styles.UniqueIDPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Customer Id: </Text>
              <TextInput style={[styles.field, styles.boxInputPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Retailer ID:</Text>
              <TextInput style={[styles.field, styles.retailerIDPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Time & Date:</Text>
              <TextInput style={[styles.field, styles.TimePadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Geolocation:</Text>
              <TextInput style={[styles.field, styles.GeolocationPadding]}/>
            </View>

              <View style={styles.buttonContainer}>
                <TouchableOpacity>
                  <Text style={styles.button}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>

          </View>
  
        </KeyboardAvoidingView>
      </View>
    )
  }
}
