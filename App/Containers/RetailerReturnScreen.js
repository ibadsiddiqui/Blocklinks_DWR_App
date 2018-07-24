import React, { Component } from 'react'
import { ScrollView, Text, KeyboardAvoidingView } from 'react-native'
import { connect } from 'react-redux'
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/RetailerReturnScreenStyle'

export default class RetailerReturnScreen extends Component {
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
              Retailer Return
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
              <Text style={styles.rowText}>Reason of Return:</Text>
              <TextInput style={[styles.field, styles.retailerIDPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Retailer ID:</Text>
              <TextInput style={[styles.field, styles.TimePadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Time & Date:</Text>
              <TextInput style={[styles.field, styles.GeolocationPadding]}/>
            </View>

            <View style={styles.rowView}>
              <Text style={styles.rowText}>Geo-Location:</Text>
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