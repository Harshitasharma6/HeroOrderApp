import { StyleSheet, Dimensions } from 'react-native'
import { Colors, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
  input: {
    borderColor: Colors.primary,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 5,
    width: '100%'
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
    borderColor: Colors.border,
    borderRadius: 10,
    borderWidth: 1,
    color: Colors.inputText,
    fontFamily: ApplicationStyles.textMediumFont,
    paddingLeft: 0,
  },
})
