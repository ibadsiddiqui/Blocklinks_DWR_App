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
  },
  buttonContainer:{ 
    padding:10,
    marginTop: Metrics.screenHeight * 0.12,
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

  centered: {
    alignItems: 'center',
    padding:10,
  },

  rowView:{
    flexDirection: 'row',
  },
    
  titleContainer:{
    padding: 10,
    left: Metrics.screenWidth * 0.12,
    marginBottom: Metrics.baseMargin
  },
  
  title:{
    color: '#263238',
    fontSize: 35
  },

  accountHeading:{
    fontSize: 20,
    fontWeight: "700",
    marginTop: Metrics.screenHeight * 0.1
  },

  balanceHeading:{
    fontSize: 20,
    fontWeight: "700",
    marginTop: Metrics.screenHeight * 0.1

  },
  text:{
    fontSize: 15
  }
})
