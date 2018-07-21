import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  addressStyle:{
    marginLeft: Metrics.baseMargin * 0.3
  },
  
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    backgroundColor: 'white'
  },
  backLogo:{
    height: Metrics.images.large,
    width: Metrics.images.large,
    marginBottom: 0
  },
  buttonContainer:{ 
    padding:10,
    margin: 10,
    left: Metrics.screenWidth * 0.15,
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

  boxInputPadding:{
    marginLeft: Metrics.baseMargin * 4
  },

  centered: {
    alignItems: 'center',
    padding:10,
    // paddingTop: Metrics.screenWidth * 0.2
  },

  
  field:{
    borderRadius: 5,
    padding: 5,
    paddingLeft: 8,
    margin: 7,
    marginTop: 0,
    backgroundColor: '#ef5350',
    width: 150,
    color: 'white'
  },
  
  palletPadding:{
    marginLeft: Metrics.baseMargin * 3
  },
  
  rowText:{
    fontSize: 15,
    marginTop: 15,
  },
  rowView:{
    flexDirection: 'row',
  },
  
  textInput: {
    height: 36,
    color:"white"
  },
  
  titleContainer:{
    alignItems: 'center',
  },
  
  title:{
    color: '#263238',
    fontSize: 30,

  },

  uniqueIDPadding:{
    marginLeft: Metrics.baseMargin * 2
  },

  UPCIDPadding:{
    marginLeft: Metrics.baseMargin * 4
  },
  
  tableHeading1style:{
    padding: 10,
    fontSize: 15,
    textDecorationLine: 'underline'
  },

  tableHeading2style:{
    padding: 10,
    marginLeft: Metrics.screenWidth * 0.2 ,
    fontSize: 15,
    textDecorationLine: 'underline'
  },

  tableHeading3style:{
    padding: 10,
    marginLeft: Metrics.screenWidth * 0.1,
    fontSize: 15,
    textDecorationLine: 'underline'
  },

  line:{ 
    borderBottomColor: 'black', 
    borderBottomWidth: Metrics.horizontalLineHeight, 
    alignItems: 'center',
    width: Metrics.screenWidth * 0.83,
    marginLeft: Metrics.screenWidth * 0.08
  }

})
