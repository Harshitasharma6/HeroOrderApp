import { StyleSheet } from 'react-native'
import { Colors, Metrics, Helpers, Fonts } from 'App/Theme'

export default StyleSheet.create({
  action: {
    marginTop: 60,
    width: 250,
  },
  button: {
    ...Metrics.smallBottomMargin,
  },
  buttonBox: {
    ...Metrics.bottomMargin,
    ...Helpers.textCenter,
  },
  clock: {
    ...Helpers.colCenter,
    borderColor: Colors.label,
    borderRadius: 200,
    borderWidth: 2,
    color: Colors.white,
    height: 220,
    marginTop: 30,
    width: 220,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    borderColor: Colors.shadow,
    flex: 1
  },
  card: {
    padding: 40,
    shadowColor: Colors.button,
    shadowOpacity: 1,
    shadowRadius: 25,
    shadowOffset: { width: 5, height: 5 },
    borderRadius: 6,
    elevation: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  time: {
    ...Fonts.h1,
    color: Colors.clr66,
    margin: 'auto',
  },
})
