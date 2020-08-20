import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  input: {
    borderColor: Colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    marginTop: hp('.5%')

  },
  inputError: {
    borderColor: Colors.error,
  },
  item: {
    borderBottomWidth: 0,
    marginBottom: 7,
    marginTop: 7,
    alignSelf: 'center'
  },
  label: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    paddingLeft: 0,
  },
  placeholder: {
    color: Colors.inputPlaceholder,
    fontFamily: ApplicationStyles.textMsgFont,
  },
  textArea: {
    borderColor: Colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 0,
  },
})
