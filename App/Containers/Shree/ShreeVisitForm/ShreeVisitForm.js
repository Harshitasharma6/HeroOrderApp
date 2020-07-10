import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Keyboard } from 'react-native'
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
import ShreeActions from 'App/Stores/Shree/Actions';
import { Colors} from 'App/Theme'
import ShreeBrandVisitForm from './ShreeBrandVisitForm';
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
class ShreeVisitForm extends Component {
	componentWillUnmount() {
		this.props.clearShreeVisitForm();
	}

	submit(){
		const { 
			submitForm, 
			form,
			access_token,
			selectedCounterId
		} = this.props;

		Keyboard.dismiss(); 

		this.props.submitForm({
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
			addShreeBrand,
			editShreeBrand,
			removeShreeBrand,
			selectedCounterId,
			submitFormloading,
			brandFormloading,
			shreeVisitDetailForm
		} = this.props;

		let brandsNode= [];

		if (form.brands && form.brands.length) {
			form.brands.map((obj, index) => {
        		brandsNode.push(<ShreeBrandVisitForm form={obj} key={obj.id} removeForm={(params) => removeShreeBrand(params)} changeForm={(params) => editShreeBrand({...params, id: obj.id})}/>)
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
						error={validation.invalid && validation.invalid_field == 'ContactPersonName'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Phone Number*'}
						value={form.PhoneNumber}
						onChange={(value) => changeForm({ edited_field: 'PhoneNumber', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'PhoneNumber'}
						label={'Phone Number*'}
						error={validation.invalid && validation.invalid_field == 'PhoneNumber'}
					/>

					<InputNumber
						styles={Style.mb10}
						placeholder={'Stock'}
						value={form.Stock}
						onChange={(value) => changeForm({ edited_field: 'Stock', edited_value: value })}
						label={'Stock'}
						error={validation.invalid && validation.invalid_field == 'Stock'}
					/>

					<InputNumber
						styles={Style.mb10}
						placeholder={'Order Taken(In Bags)'}
						value={form.OrderTaken}
						onChange={(value) => changeForm({ edited_field: 'OrderTaken', edited_value: value })}
						label={'Order Taken'}
						error={validation.invalid && validation.invalid_field == 'OrderTaken'}
					/>

					<TextArea
	                    placeholder={'Remarks'}
	                    numberOfLines={5}
						value={form.Remark}
						onChange={(value) => changeForm({ edited_field: 'Remark', edited_value: value })}
						label={'Remarks'}
						error={validation.invalid && validation.invalid_field == 'Remark'}
                    />
					
					{brandsNode}

                    <BlueButton
						style={Style.addButton}
						title={'Add Price'}
						textStyle={Style.addButtonText}
						onPress={() => addShreeBrand({...shreeVisitDetailForm, ...{id: _.uniqueId(), Counter__c: selectedCounterId, OwnerId: userId}})}
					>
					 <GenericIcon
			            name={'add-circle'}
			            style={Style.addButtonIcon}
			          />
			        </BlueButton>

					<BlueButton
						style={Style.button}
						rounded
						large
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
	validation      			: state.shree.shreeVisitFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.shree.shreeVisitForm,
	submitFormloading 			: state.shree.submitShreeVisitFormLoader,
	brandFormloading 			: state.shree.createShreeVisitDetailLoader,
	selectedCounterId         	: state.shree.selectedShree.id,
	shreeVisitDetailForm        : state.shree.shreeVisitDetailForm
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) 	   => dispatch(ShreeActions.changeShreeVisitForm(params)),
	submitForm: (params) 	   => dispatch(ShreeActions.submitShreeVisitForm(params)),
	addShreeBrand:(params)     => dispatch(ShreeActions.addShreeBrand(params)),
	removeShreeBrand: (params) => dispatch(ShreeActions.removeShreeBrand(params)),
	editShreeBrand: (params) => dispatch(ShreeActions.editShreeBrand(params)),
	clearShreeVisitForm: (params) => dispatch(ShreeActions.clearShreeVisitForm(params))

});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(ShreeVisitForm)