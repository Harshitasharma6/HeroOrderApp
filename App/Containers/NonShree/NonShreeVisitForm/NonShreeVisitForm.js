import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Alert, Keyboard } from 'react-native'
import { Button, Textarea } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Style from './Style'
import InputText from 'App/Components/FormInput/InputText'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputNumber from 'App/Components/FormInput/InputNumber'
import BlueButton from 'App/Components/BlueButton'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import Select from 'App/Components/Select';
import GenericIcon from 'App/Components/GenericIcon';
import TextArea from 'App/Components/FormInput/TextArea';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import NonShreeActions from 'App/Stores/NonShree/Actions';
import { Colors} from 'App/Theme'
import NonShreeBrandForm from './NonShreeBrandForm';
import _ from 'lodash';



// form sample fields
// "CounterName": id of counter ,
// 	"MeetingType":"Counter Visit",
// 	"PhoneNumber":"9917461449",
// 	"Stock":"100",
// 	"OrderTaken":"200",
// 	"ContactPersonName":"Seema",
// 	"Remark":"Ok",
// 	"CounterType":"Shree",
// 	"Latitude":"28.610001",
// 	"Longitude":"77.230003",
// 	"VisitDateAndTime":"1585129150413",
// 	"OwnerId":"0052w000002IY4BAAW"
class NonShreeVisitForm extends Component {
	componentWillUnmount() {
		this.props.clearNonShreeVisitForm();
	}

	submit(){
		const { 
			submitForm, 
			form,
			access_token,
			selectedCounterId
		} = this.props;

		Keyboard.dismiss(); 

		submitForm({
			form: {
				...form,
				CounterName: selectedCounterId,
				OwnerId: this.props.userId,
				VisitDateAndTime: HelperService.getCurrentTimestamp()
			},
			access_token: access_token
		});
	}

	render() {
		const { 
			form, 
			userId,
			validation,
			changeForm,
			addNonShreeBrand,
			editNonShreeBrand,
			removeNonShreeBrand,
			selectedCounterId,
			submitFormloading,
			brandFormloading,
			nonShreeVisitDetailForm,
			clearNonShreeVisitForm
		} = this.props;

		let brandsNode= [];

		if (form.brands && form.brands.length) {
			form.brands.map((obj, index) => {
        		brandsNode.push(<NonShreeBrandForm form={obj} key={obj.id} removeForm={(params) => removeNonShreeBrand(params)} changeForm={(params) => editNonShreeBrand({...params, id: obj.id})}/>)
        	});
		}
       
		return (
			<View style={Style.container}>
				<ScrollView style={Style.action}>
					
					<InputText
						style={Style.mb10}
						value={form.ContactPersonName}
						placeholder={'Contact Person Name*'}
						onChange={(value) => changeForm({ edited_field: 'ContactPersonName', edited_value: value })}
						label={'Contact Person Name*'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Phone Number*'}
						value={form.PhoneNumber}
						onChange={(value) => changeForm({ edited_field: 'PhoneNumber', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'PhoneNumber'}
						label={'Phone Number*'}
					/>

					<InputNumber
						styles={Style.mb10}
						placeholder={'Stock'}
						value={form.Stock}
						onChange={(value) => changeForm({ edited_field: 'Stock', edited_value: value })}
						label={'Stock'}
					/>

					<InputNumber
						styles={Style.mb10}
						placeholder={'Order Taken(In Bags)'}
						value={form.OrderTaken}
						onChange={(value) => changeForm({ edited_field: 'OrderTaken', edited_value: value })}
						label={'Order Taken'}
					/>

					<TextArea
	                    placeholder={'Remarks'}
	                    numberOfLines={5}
						value={form.Remark}
						onChange={(value) => changeForm({ edited_field: 'Remark', edited_value: value })}
						label={'Remarks'}
                    />
					
					{brandsNode}

                    <BlueButton
						style={Style.addButton}
						title={'Add Price'}
						textStyle={Style.addButtonText}
						onPress={() => addNonShreeBrand({...nonShreeVisitDetailForm, ...{id: _.uniqueId(), Counter__c: selectedCounterId, OwnerId: userId}})}
					>
					 <GenericIcon
			            name={'add-circle'}
			            style={Style.addButtonIcon}
			          />
			        </BlueButton>

					<BlueButton
						style={Style.button}
						title={'Save'}
						disabled={submitFormloading || brandFormloading}
						loading={submitFormloading || brandFormloading}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	userId   					: state.user.loginDetails.userId,
	validation      			: state.nonShree.nonShreeVisitFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.nonShree.nonShreeVisitForm,
	submitFormloading 			: state.nonShree.submitNonShreeVisitFormLoader,
	brandFormloading 			: state.nonShree.createNonShreeVisitDetailLoader,
	selectedCounterId         	: state.nonShree.selectedNonShree.Id,
	nonShreeVisitDetailForm     : state.nonShree.nonShreeVisitDetailForm
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) 	      => dispatch(NonShreeActions.changeNonShreeVisitForm(params)),
	submitForm: (params) 	      => dispatch(NonShreeActions.submitNonShreeVisitForm(params)),
	addNonShreeBrand:(params)     => dispatch(NonShreeActions.addNonShreeBrand(params)),
	removeNonShreeBrand: (params) => dispatch(NonShreeActions.removeNonShreeBrand(params)),
	editNonShreeBrand: (params)   => dispatch(NonShreeActions.editNonShreeBrand(params)),
	clearNonShreeVisitForm: ()    => dispatch(NonShreeActions.clearNonShreeVisitForm()),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NonShreeVisitForm)