import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: '#006064'
  },
  titleContainer:{
    padding: 10,
    marginTop: Metrics.screenHeight * 0.25  
  },
  title:{
    color: 'white',
    fontSize: 35
  },
  field:{
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: 'white'
  },
  textInput: {
    height: 36
  },
  buttonContainer:{
    padding:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  button:{
    fontSize: 30,
    color: 'white'
  }
})
