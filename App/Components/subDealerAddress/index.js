import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item} from 'react-native';
import Style from './styles'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import InputNumber from 'App/Components/FormInput/InputNumber';
import BlueButton from 'App/Components/BlueButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';
import {ApplicationStyles} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import GenericIcon from 'App/Components/GenericIcon'
import VisitorActions from 'App/Stores/Visitor/Actions'
import CommonActions from 'App/Stores/Common/Actions'
import moment from 'moment';
import SearchGooglePlaces from 'App/Components/SearchGooglePlaces'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import {Colors} from 'App/Theme'



class SubDealerAddress extends Component {
	render() {
		const {
			changeForm,
			closeModal,
			openModal,
			value,
			error
		} = this.props;
		return (
			<View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop:'4%', marginLeft:'6%', marginRight:'6.5%'}}>
				<TextArea
	                placeholder={'Address'}
	                label={'Address'}
	                numberOfLines={4}
	                style={{...Style.marginBottom10, width: wp('60%')} }
	                value={value}
					onChange={(value) => changeForm(value)}
					error={error}
	        	/>

	        	<BlueButton
	        		style={{marginTop: hp('2.5%'), width: wp('13%')}}
					onPress={() => {
							return openModal({
									content:<SearchGooglePlaces  handler={(value) => changeForm(value)} closeModal={() => closeModal()}/>, 
									heading: 'Search Address', 
									bodyFlexHeight: 1
							})}}
				>
					<GenericIcon 
						name="search"
						style={{color:Colors.white, fontSize: wp('4%')}}
						
						/>
				</BlueButton>
			</View>
		)
	}
}




const mapStateToProps = (state) => ({
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList,
});
  
const mapDispatchToProps = (dispatch) => ({
	openModal:(params)		   => dispatch(CommonActions.openModal(params)),
	closeModal:(params)		   => dispatch(CommonActions.closeModal(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubDealerAddress)