import { StyleSheet, Dimensions } from 'react-native'
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

export default StyleSheet.create({
	container: {
	    ...Helpers.center,
	    backgroundColor: Colors.white,
	    flex: 1
	},
	plus: {
        backgroundColor: Colors.white,
        borderRadius: 50,
        height: 50,
        width: 50,
    },
    plusIcon: {
       ...ApplicationStyles.plusIcon
    }
});