import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text } from 'react-native';
import { Colors, ApplicationStyles } from 'App/Theme'
import GenericIcon from 'App/Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const SelectionButton = ({ style, textStyle, onPress, title, icon,disabled = false, loading=false, selected=false, children=[]}) => {
	return (
	 	<TouchableOpacity style={Styles.button} onPress={onPress}>
	 		<View>
	 			<GenericIcon name={icon} style={Styles.menuIcon}/>
	 		</View>
	 		<View>
	 			<Text style={Styles.text}>{title}</Text>
	 		</View>
	 	</TouchableOpacity>
	);
}

export default SelectionButton


const Styles = StyleSheet.create({
  button: {
    width: wp('35%'),
    marginHorizontal: wp('2%'),
    marginVertical: hp('2%'),
    backgroundColor: Colors.lightGrey,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp('19%'),
    borderRadius: wp('1%'),
    shadowColor: "#000",
	shadowOffset: {
		width: 0,
		height: 3,
	},
	shadowOpacity: 0.3,
	shadowRadius: 4,

	elevation: 10
  },
  menuIcon: {
    color: Colors.theme,
    fontSize: wp('18%'),
    marginBottom:  hp('1%')
  },
  text: {
  	color: Colors.theme,
  	fontFamily: ApplicationStyles.textMsgFont,
  	fontSize:  wp('2.8%'),
  	textTransform: 'uppercase'
  }
});
