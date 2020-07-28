import { StyleSheet } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default StyleSheet.create({
  input: {
    borderColor: Colors.grey,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMsgFont,
    padding: 10,
    fontSize: wp('4%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputError: {
    borderColor: Colors.error,
  },
  item: {
    borderBottomWidth: 0,
    marginBottom: 7,
    marginTop: 7
  },
  itemNumber: {
    marginVertical: 10,
  },

  label: {
    color: Colors.primary,
    fontFamily: ApplicationStyles.textMsgFont,
    paddingLeft: 5,
    fontSize: wp('4%')
  },
  placeholder: {
    color: Colors.inputPlaceholder,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('2%')
  },
  textArea: {
    borderColor: Colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 20,
  },
})
