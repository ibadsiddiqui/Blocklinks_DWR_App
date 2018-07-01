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
  buttonContainer:{ 
    padding:30,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  button:{
    fontSize: 20,
    color: 'white'
  },
  titleContainer:{
    padding: 10,
    paddingLeft: Metrics.screenWidth * 0.25,
    marginTop: Metrics.screenHeight * 0.1  
  },
  title:{
    color: 'white',
    fontSize: 35
  },
})
