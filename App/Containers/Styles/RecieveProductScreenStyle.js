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
  businessStyle:{
    marginLeft: 10
  },
  boxInputPadding:{
    marginLeft: 30
  },

  centered: {
    alignItems: 'center',
    padding:10,
    paddingTop: Metrics.screenWidth * 0.2
  },

  rowView:{
    flexDirection: 'row',
  },

  field:{
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: '#ef5350',
    width: 150
  },

  palletPadding:{
    marginLeft: 20
  },
  
  rowText:{
    fontSize: 15,
    marginTop: 15,
  },
  
  textInput: {
    height: 36,
    color:"white"
  },
  
  titleContainer:{
    padding: 10,
    left: Metrics.screenWidth * 0.12,
    // marginTop: Metrics.screenHeight * 0.1,  
    marginBottom: Metrics.baseMargin
  },

  title:{
    color: '#263238',
    fontSize: 35
  },

  userIDStyle:{
    marginLeft: 25
  },

  userInfo:{
    padding: 10,
    paddingLeft: 20
  }
})
