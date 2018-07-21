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
              Inventory Detail
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 205}} />      

          </View>

          <View style={styles.centered}>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>UPC# :</Text>
              <TextInput style={[styles.field, styles.UPCIDPadding]}/>
            </View>

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

          </View>


          <View style={styles.rowView}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity>
                <Text style={styles.button}>
                  Search
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

          </View>

          <View style={styles.line} />      

          <View style={[styles.rowView, styles.titleContainer]}>
            <Text style={styles.tableHeading1style}>
              UPC#
            </Text>
            <Text style={styles.tableHeading2style}>
              Unique ID
            </Text>
            <Text style={styles.tableHeading3style}>
              Recieve Date
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    )
  }
}
