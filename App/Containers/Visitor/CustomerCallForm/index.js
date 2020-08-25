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
import VisitorActions from 'App/Stores/Visitor/Actions'

// "first_name__c": "Sukhbir",
// 	"last_name__c": "lastname",
// 	"contact_number__c": "9191919193", 
// 	"product__c": "a029D000002ZFPtQAO"



class CustomerCallFormScreen extends Component {
	componentDidMount() {
		const { 
			changeForm
		} = this.props;
	}

	componentWillUnmount() {
		const {
			clearRegistrationForm
		} = this.props;

		clearRegistrationForm();
	}

	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();

		submitForm(form);
	}

    render() {
		const { 
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList
		} = this.props;
		
		return (
			<View style={ApplicationStyles.formContainer}>
				<Text style={ApplicationStyles.formHeading}>{'Register Call Info'}</Text>
				<ScrollView 
					style={ApplicationStyles.action}
				>

				 	<InputText
						style={ApplicationStyles.mb10}
						placeholder={'First Name'}
						value={form.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'First Name*'}
					/>

					<InputText
						style={ApplicationStyles.mb10}
						placeholder={'Last Name'}
						value={form.last_name__c}
						onChange={(value) => changeForm({ edited_field: 'last_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'last_name__c'}
						label={'Last Name*'}
					/>
					
                    <InputMobile
						styles={ApplicationStyles.mb10}
						placeholder={'Contact Number'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Contact Number*'}
					/>


					<SearchableDropdown
				        dataSource={productsList}
				        placeHolderText={'Select Product'}
				        selectedValue={form.product__c}
				        onChange={(value) => changeForm({ edited_field: 'product__c', edited_value: value })}
				        placeholder={'Type or Select Product'}
				        invalid={false}
				        labelStyles={ApplicationStyles.pickerLabel}
				        customPickerStyles={ApplicationStyles.picker }
				        label={'Product Interested'}
					/>


					<BlueButton
						style={ApplicationStyles.formButton}
						loading={loader}
						disabled={loader}
						title={'SUBMIT'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.registerCustomerCallValidation,
	form 					 	: state.visitor.registerCustomerCallForm,
	loader 			            : state.visitor.loaders.registerCustomerCallLoader,
  	productsList 				: state.common.productsList
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerCallForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.registerCustomerCall(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(CustomerCallFormScreen)