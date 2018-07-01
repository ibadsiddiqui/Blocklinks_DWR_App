import { StyleSheet } from 'react-native'
import { ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  buttonContainer:{ 
    padding:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button:{
    fontSize: 20,
    color: 'black'
  },
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#006064'
  },
})
