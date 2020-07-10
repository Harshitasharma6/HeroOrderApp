import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles, Fonts, Metrics } from 'App/Theme'

export default StyleSheet.create({
  container: {
    flex: 1,
    zIndex: 2,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.3)'
  },
  calenderContainer: {
    flex: .7,
    backgroundColor: '#DEF0FF',
    borderRadius: 5,
    elevation: 10,
    alignItems: 'center'
  },
  action: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  actionText: {
    fontFamily: ApplicationStyles.textMsgFont,
    marginLeft: 60,
     marginRight: 60,
     marginTop: 30,
    fontSize: 18,
    color: Colors.button
  },
  button: {
    ...Metrics.smallBottomMargin,
    width: 120
  },
  icon: {
    color: Colors.button
  },
  iconActive: {
    color: Colors.button
  },
  toggleButton: {
    backgroundColor: Colors.button,
    elevation: 0,
    borderWidth: 0
  }
});