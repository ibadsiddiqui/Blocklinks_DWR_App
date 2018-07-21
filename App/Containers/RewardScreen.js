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
import styles from './Styles/RewardScreenStyle'

export default class RewardScreen extends Component {
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
              Reward Balance
            </Text>
            <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 250}} />      

          </View>

          <View style={styles.centered}>

            <View>
              <Text style={styles.accountHeading}>Account#:</Text>
            </View>
            <View >
              <Text style={styles.text}>453643543545egg456egdgdg4353gdsgdgd</Text>
            </View>

            <View>
              <Text style={styles.balanceHeading}>Balance:</Text>
            </View>
            <View>
              <Text style={styles.text}>1000 Truzr Coin</Text>
            </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity >
              <Text style={styles.button}>
                Done
              </Text>
            </TouchableOpacity>
            </View>
          </View>

        </KeyboardAvoidingView>
      </View>
    )
  }
}
