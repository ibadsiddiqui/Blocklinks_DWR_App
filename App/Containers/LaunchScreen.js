import React, { Component } from 'react'
import { 
  ScrollView,
  TouchableOpacity,
  StatusBar,
  Button , 
  Text, 
  Image,
   View 
} from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  
  onPressLogin(){
      const { navigate } = this.props.navigation;
      navigate('LoginScreen')
  }

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

          <View style={styles.section}>

            <View>
              <TouchableOpacity style={styles.btnLogin} onPress={this.onPressLogin.bind(this)}>
                <Text style={styles.btnLoginText}>Login</Text>
              </TouchableOpacity>
            </View>

            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1}} />

            <View>
              <TouchableOpacity style={styles.btnRegister}>
                <Text style={styles.btnRegisterText}>New? Register here.</Text>  
              </TouchableOpacity>
            </View>

          </View>

          <View style={styles.infoView}>
            <Text style={styles.infoText}>
              For Distributors / Retailers / Sellers. 
            </Text>
          </View>

        </ScrollView>
      </View>
    )
  }
}
