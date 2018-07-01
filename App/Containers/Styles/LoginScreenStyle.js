import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import metrics from '../../Themes/Metrics';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    paddingTop: 20,
    backgroundColor: 'white'
  },
  titleContainer:{
    padding: 10,
    marginTop: Metrics.screenHeight * 0.25  
  },
  title:{
    color: '#263238',
    fontSize: 35
  },
  field:{
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: '#ef5350'
  },
  textInput: {
    height: 36,
    color:"white"
  },
  buttonContainer:{
    marginTop: 10,
    left: Metrics.screenWidth * 0.35,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: 100,
    borderRadius: 5,
    backgroundColor: '#0091ea'

  },
  button:{
    fontSize: 15,
    color: 'white'
  }
})
