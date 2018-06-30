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
    alignItems: 'center'
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
    color: "#7c4dff",

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
    color: "#e64a19",

  },
  heading:{
    fontSize: 30,
  },
  subHeading:{
    fontSize: 15,
    paddingLeft: 90,
    marginBottom: Metrics.baseMargin * 2.5,

  },
  sectionText:{
    fontSize: 15,
    marginLeft: Metrics.doubleBaseMargin * 6.2,
    padding: 10
  }

})
