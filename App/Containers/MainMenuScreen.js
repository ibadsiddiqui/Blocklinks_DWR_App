import React, { Component } from 'react'
import { ScrollView, Text, View,TouchableOpacity } from 'react-native'

// Styles
import styles from './Styles/MainMenuScreenStyle'

export default class MainMenuScreen extends Component {
  onRecieveProductClick() {    
      const { navigate } = this.props.navigation;
      navigate('RecieveProductScreen')
  }

  onInventoryDetailClick() {    
    const { navigate } = this.props.navigation;
    navigate('InventoryDetailsScreen')
  }
  onRewardScreenClick() {    
    const { navigate } = this.props.navigation;
    navigate('RewardScreen')
  }
  onSaleScreenClick() {    
    const { navigate } = this.props.navigation;
    navigate('SaleScreen')
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
          <TouchableOpacity onPress={this.onRecieveProductClick.bind(this)}>
            <Text style={styles.button}>
              Recieve Product(s)
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onInventoryDetailClick.bind(this)}>
            <Text style={styles.button}>
              Inventory Details
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onSaleScreenClick.bind(this)}>
            <Text style={styles.button}>
              Sale
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity>
            <Text style={styles.button}>
              Retailer Returns
            </Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.onRewardScreenClick.bind(this)}>
            <Text style={styles.button}>
              Reward Balance
            </Text>
          </TouchableOpacity>
        </View>

      </View>  
    )
  }
}
