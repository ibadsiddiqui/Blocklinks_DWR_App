import { StackNavigator } from 'react-navigation'
import RetailerReturnScreen from '../Containers/RetailerReturnScreen'
import SaleScreen from '../Containers/SaleScreen'
import RewardScreen from '../Containers/RewardScreen'
import InventoryDetailsScreen from '../Containers/InventoryDetailsScreen'
import RecieveProductScreen from '../Containers/RecieveProductScreen'
import MainMenuScreen from '../Containers/MainMenuScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  LaunchScreen: { screen: LaunchScreen },
  LoginScreen: { screen: LoginScreen },
  MainMenuScreen: { screen: MainMenuScreen },
  RetailerReturnScreen: { screen: RetailerReturnScreen },
  SaleScreen: { screen: SaleScreen },
  RewardScreen: { screen: RewardScreen },
  InventoryDetailsScreen: { screen: InventoryDetailsScreen },
  RecieveProductScreen: { screen: RecieveProductScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
