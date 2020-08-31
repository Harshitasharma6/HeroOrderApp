import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';
import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { Colors, ApplicationStyles } from 'App/Theme'
import GenericIcon from 'App/Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const DetailCard = ({ style={}, textStyle, onPress, title, value ,icon,disabled = false, loading=false, selected=false, children=[]}) => {
	return (
	 	<View style={{...Styles.button, ...style}} >
	 		<View style={Styles.iconContainer}>
             <Text style={Styles.text}>{title}</Text>
	 		</View>
	 		<View style={Styles.textContainer}>
	 			<Text style={Styles.text}>{value}</Text>
	 		</View>
	 	</View>
	);
}

export default DetailCard


const Styles = StyleSheet.create({
  button: {
    width: wp('40%'),
    marginHorizontal: wp('2%'),
    marginVertical: hp('1.4%'),
    backgroundColor: Colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    height: hp('7.5%'),
    borderRadius: wp('1.2%'),
    shadowColor: "#000",
    flexDirection: 'column',
	  shadowOffset: {
		width: 0
	},
	  shadowOpacity: 0.3,
	  shadowRadius: 4,
	  elevation: 2
  },
  menuIcon: {
    color: Colors.theme,
    fontSize: wp('18%'),
    marginBottom:  hp('1%')
  },
  text: {
  	color: Colors.white,
  	fontFamily: ApplicationStyles.textMsgFont,
  	fontSize:  wp('3.1%'),
  	textTransform: 'uppercase',
    alignSelf: 'center',
    flexWrap: 'wrap'
  },
  iconContainer: {
    marginBottom: hp('1%')
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    paddingHorizontal: wp('1%')
  }
});
