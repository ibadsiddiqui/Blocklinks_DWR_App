import React, { Component } from 'react'
import { ScrollView, Text, View, StatusBar, Image } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LoginScreenStyle'


export default class LoginScreen extends Component {
  render () {
    return (
      <View style={styles.mainContainer}>
       <StatusBar translucent={true} hidden={true}/>
        <ScrollView style={styles.container}>
          <View style={styles.centered}>
            <Image source={Images.launch} style={styles.logo} />
            <Text style={styles.heading}>BlockLinks</Text>
            <Text style={styles.subHeading}>Technologies</Text>
          </View>

        </ScrollView>
      </View>
     )
  }
}
