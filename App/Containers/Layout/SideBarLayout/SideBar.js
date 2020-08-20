import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors, Helpers } from 'App/Theme';
import { ListItem } from 'native-base';
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BackArrowButton from 'App/Components/BackArrowButton';
import BlueButton from 'App/Components/BlueButton';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

export default class SideBar extends Component {
	navigate(screen) {
		this.props.closeDrawer();
		NavigationService.navigate(screen);
		
	}

	render() {
		return (
			<View style={{flex: 1, backgroundColor: Colors.white, paddingTop: hp('1%'), paddingBottom: hp('5%') }}>
				<TouchableOpacity transparent onPress={NavigationService.goback}>
					<GenericIcon
				  		name={'arrow-circle-left'}
				  		onPress={() => this.props.closeDrawer()}
				    	style={Styles.backArrowButton}
					/>
				</TouchableOpacity>
				<View style={Styles.buttonBox}>
					<Image
						style={{ width: 300, height: 100, resizeMode: 'contain' }}
						source={require('App/Assets/Images/herologo.png')}
					/>
				</View>
				<ScrollView style={{paddingBottom: hp('3%') }}>
					<ListItem style={Styles.listItemDivider} onPress={() => this.navigate('ProfileScreen')}>
						<GenericIcon name={'user-circle-o'} style={Styles.listItemIcon} /><Text style={{ ...Styles.selectedListItemText }}>{'Profile'}</Text>
					</ListItem>

					<ListItem style={Styles.listItemDivider} onPress={() => this.navigate('DealerSalespersonFormScreen')}>
						<GenericIcon name={'user-o'} style={Styles.listItemIcon} /><Text style={{ ...Styles.selectedListItemText }}>{'Dealer Salesperson'}</Text>
					</ListItem>

					<ListItem style={Styles.listItemDivider} onPress={() => this.navigate('SchemeClaimFormScreen')}>
						<Icon name={'brightness-percent'} style={Styles.listItemIcon} /><Text style={{ ...Styles.selectedListItemText }}>{'Scheme Claim'}</Text>
					</ListItem>

					<ListItem style={Styles.listItemDivider} onPress={() => this.navigate('SubDealerInfoScreen')}>
						<GenericIcon name={'users'} style={Styles.listItemIcon} /><Text style={{ ...Styles.selectedListItemText }}>{'Sub Dealers'}</Text>
					</ListItem>
					<ListItem style={Styles.listItemDivider} >
						<GenericIcon name={'user-circle-o'} style={Styles.listItemIcon} /><Text style={{ ...Styles.selectedListItemText }}>{'Log Out'}</Text>
					</ListItem>
				</ScrollView>

			</View>
		);
	}
}

const Styles = StyleSheet.create({
	buttonBox: {
		...Helpers.textCenter,
		alignItems: 'center',
		backgroundColor: Colors.white,
		height: hp('16%')
	},
	logo: {
		width: hp('10%'),
		height: hp('10%')
	},
	selectedListItemText: {
		fontFamily: ApplicationStyles.textMsgFont,
		fontSize: wp('4.1%'),
		color: Colors.grey,
		textTransform: 'uppercase'
	},
	listItemIcon: {
		fontFamily: ApplicationStyles.textFont,
		fontSize: wp('5%'),
		color: Colors.primary,
		marginHorizontal: 15
	},
	selectedListItemIcon: {
		fontFamily: ApplicationStyles.textMsgFont,
		fontSize: 18,
		color: Colors.button
	},
	listItem: {
		marginLeft: 0,
		paddingLeft: 15
	},
	listItemHeader: {
		backgroundColor: Colors.white
	},
	listItemDivider: {
		backgroundColor: Colors.lightGrey,
		paddingHorizontal: 0,
		marginLeft: '5%',
		paddingTop: hp('2%'),
		paddingBottom: hp('2%'),
		width: '90%',
		elevation: 5,
		marginBottom: hp('.5%'),
		marginTop: hp('.5%'),
		borderRadius: 5
	},
	backArrowButton: {
		color: Colors.primary,
	   paddingRight: 10,
	   paddingLeft: 5,
	   fontSize: wp('8%')
	}
});