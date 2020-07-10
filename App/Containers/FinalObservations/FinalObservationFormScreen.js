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
import DashboardActions from 'App/Stores/Dashboard/Actions';
import { Colors} from 'App/Theme'
import FinalObservationForm from './FinalObservationForm';
import _ from 'lodash';


class FinalObservationFormScreen extends Component {
	submit(){
		const { 
			submitForm, 
			form,
			access_token,
			selectedCounterId
		} = this.props;

		Keyboard.dismiss(); 
		submitForm({
			form,
			access_token
		});
	}

	render() {
		const { 
			form, 
			userId,
			validation,
			changeForm,
			addForm,
			removeForm,
			submitFormloading,
			defaultForm,
		} = this.props;

		let brandsNode= [];

		if (form.length) {
			form.map((obj, index) => {
        		brandsNode.push(<FinalObservationForm form={obj} key={obj.id + index} removeForm={(params) => removeForm(params)} changeForm={(params) => changeForm({...params, id: obj.id})}/>)
        	});
		}
       
		return (
			<View style={Style.container}>
				<ScrollView style={Style.action}>
					<InputText
						style={Style.mb10}
						editable={!!form[0]}
						placeholder={'Market*'}
						value={form[0] && form[0]['Market__c']}
						onChange={(value) => {
							form.map((obj, index) => {
				        		changeForm({ edited_field: 'Market__c', edited_value: value, id: obj.id })
				        	});
						}}
						label={'Market*'}
					/>
					{brandsNode}
                    <BlueButton
						style={Style.addButton}
						title={'Add Price'}
						textStyle={Style.addButtonText}
						onPress={() => addForm({...defaultForm, ...{id: _.uniqueId(), OwnerId: userId, User__c: userId, Market__c: form[0] ? form[0]['Market__c']: ''}})}
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
						loading={submitFormloading}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}




const mapStateToProps = (state) => ({
	userId   					: state.user.loginDetails.userId,
	validation      			: state.dashboard.finalObservationFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.dashboard.finalObservationForm,
	submitFormloading 			: state.dashboard.finalObservationSubmitLoader,
	defaultForm                 : state.dashboard.finalObservationFormDefault
});
  


const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) 	   => dispatch(DashboardActions.changeFinalObservationForm(params)),
	submitForm: (params) 	   => dispatch(DashboardActions.submitFinalObservationForm(params)),
	addForm:(params)     	   => dispatch(DashboardActions.addFinalObservationForm(params)),
	removeForm: (params)       => dispatch(DashboardActions.removeFinalObservationForm(params))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FinalObservationFormScreen)