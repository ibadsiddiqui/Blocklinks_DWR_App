import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: 'white'
  },
  buttonContainer:{ 
    padding:10,
    margin: 10,
    left: Metrics.screenWidth * 0.18,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e64a19',
    width: 210,
    borderRadius: 5,

  },
  button:{
    fontSize: 20,
    color: 'white'
  },
  titleContainer:{
    padding: 10,
    paddingLeft: Metrics.screenWidth * 0.27,
    marginTop: Metrics.screenHeight * 0.1,  
    marginBottom: Metrics.baseMargin
  },
  title:{
    color: '#263238',
    fontSize: 35
  },
})
