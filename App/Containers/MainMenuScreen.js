import React, { Component } from 'react'
import { ScrollView, Text, View,TouchableHighlight } from 'react-native'

// Styles
import styles from './Styles/MainMenuScreenStyle'

export default class MainMenuScreen extends Component {
  onRecieveProductClick() {    
      const { navigate } = this.props.navigation;
      navigate('RecieveProductScreen')
  }

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            Main Menu
          </Text>
        <View style={{ borderBottomColor: 'black', borderBottomWidth: 1, width: 175}} />
        </View>
        


        <View style={styles.buttonContainer}>
          <TouchableHighlight onPress={this.onRecieveProductClick.bind(this)}>
            <Text style={styles.button}>
              Recieve Product(s)
            </Text>
          </TouchableHighlight>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableHighlight>
            <Text style={styles.button}>
              Inventory Details
            </Text>
          </TouchableHighlight>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight>
            <Text style={styles.button}>
              Sale
            </Text>
          </TouchableHighlight>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight>
            <Text style={styles.button}>
              Sale Returns
            </Text>
          </TouchableHighlight>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableHighlight>
            <Text style={styles.button}>
              Reward Balance
            </Text>
          </TouchableHighlight>
        </View>

      </View>  
    )
  }
}
