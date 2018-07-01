import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    paddingBottom: Metrics.baseMargin,
    backgroundColor: 'white'
  },
  logo: {
    marginTop: Metrics.doubleSection * 1.5 ,
    height: Metrics.images.logo,
    width: Metrics.images.logo,
    resizeMode: 'contain',
  },
  centered: {
    alignItems: 'center',
    padding:10,
    paddingTop: Metrics.screenWidth * 0.25
  },
  btnLogin:{
    marginLeft: Metrics.doubleBaseMargin * 3.8,
    padding: 10,
    paddingLeft: Metrics.doubleBaseMargin,
    width: 250,
  },
  btnLoginText:{
    fontSize: 20,
    marginLeft: Metrics.doubleBaseMargin * 1.2,
    fontFamily: "Verdana",
    color: "#00796b",

  },
  btnRegister:{
    marginLeft: Metrics.doubleBaseMargin * 1.8,
    padding: 10,
    paddingLeft: Metrics.doubleBaseMargin,
    width: 250,
  },
  btnRegisterText:{
    fontSize: 20,
    fontFamily: "Verdana",
    marginLeft: 8,
    color: "#0097A7",

  },
  heading:{
    fontSize: 30,
  },
  infoText:{
    fontSize: 15,
    color: "red"
  },
  infoView:{
    margin: 10,
    marginLeft: Metrics.screenWidth * 0.15,
    marginTop: Metrics.screenWidth * 0.5
  },

  subHeading:{
    fontSize: 15,
    paddingLeft: 90,
    marginBottom: Metrics.screenHeight * 0.15,

  },
  sectionText:{
    fontSize: 15,
    marginLeft: Metrics.doubleBaseMargin * 6.2,
    padding: 10
  },

})
