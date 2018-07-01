import { StackNavigator } from 'react-navigation'
import RecieveProductScreen from '../Containers/RecieveProductScreen'
import MainMenuScreen from '../Containers/MainMenuScreen'
import LoginScreen from '../Containers/LoginScreen'
import LaunchScreen from '../Containers/LaunchScreen'

import styles from './Styles/NavigationStyles'

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  RecieveProductScreen: { screen: RecieveProductScreen },
  MainMenuScreen: { screen: MainMenuScreen },
  LoginScreen: { screen: LoginScreen },
  LaunchScreen: { screen: LaunchScreen },
}, {
  // Default config for all screens
  headerMode: 'none',
  initialRouteName: 'LaunchScreen',
  navigationOptions: {
    headerStyle: styles.header
  }
})

export default PrimaryNav
