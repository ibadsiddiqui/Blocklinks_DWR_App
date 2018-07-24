import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,

  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },

  backLogo:{
    height: Metrics.images.large,
    width: Metrics.images.large,
  },
  buttonContainer:{ 
    padding:10,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#e64a19',
    width: 110,
    borderRadius: 5,
  },

  button:{
    fontSize: 15,
    color: 'white'
  },

  businessStyle:{
    marginLeft: Metrics.baseMargin * 2
  },

  boxInputPadding:{
    marginLeft: Metrics.screenWidth * 0.1
  },

  centered: {
    alignItems: 'center',
    padding:10,
  },

  
  field:{
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: '#ef5350',
    width: 110,
    color: 'white'
  },
  
  UniqueIDPadding:{
    marginLeft: Metrics.screenWidth * 0.12
  },
  
  retailerIDPadding:{
    marginLeft: Metrics.screenWidth * 0.15
  },
  
  rowText:{
    fontSize: 15,
    marginTop: 15,
  },
  rowView:{
    flexDirection: 'row',
  },
  
  titleContainer:{
    padding: 10,
    marginBottom: Metrics.baseMargin
  },
  
  title:{
    color: '#263238',
    fontSize: 35
  },
  timeStyle:{
    marginRight: Metrics.screenWidth * 0.1
  },
  

  uniqueIDPadding:{
    marginLeft: Metrics.baseMargin * 2
  },
  TimePadding:{
    marginLeft: Metrics.screenWidth * 0.12
  },
  GeolocationPadding:{
    marginLeft: Metrics.screenWidth * 0.12

  }
})
