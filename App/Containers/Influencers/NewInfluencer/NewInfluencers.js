import React, { Component } from 'react'
import { View, ScrollView, Text, Image, Alert, Keyboard } from 'react-native'
import { Button, Textarea } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Style from './NewInfluencersStyle'
import InputText from 'App/Components/FormInput/InputText'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputNumber from 'App/Components/FormInput/InputNumber'
import BlueButton from 'App/Components/BlueButton'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import TextArea from 'App/Components/FormInput/TextArea';
import NavigationService from 'App/Services/NavigationService'
import influencerActions from 'App/Stores/Influencers/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import Select from 'App/Components/Select/Select';

class NewInfluencers extends Component {
	submit(){
		const { 
			submitForm, 
			form,
			access_token,
			userId
		} = this.props;

		Keyboard.dismiss(); 

		submitForm({
			form: {
				...form,
				LoginUserId: userId,
			},
			access_token: access_token
		});
	  }


	render() {
		const { 
			changeForm,
			validation, 
			form, 
			loader,
			influencerType,
			allCountersSearchList 
		} = this.props;
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'Add Influencer'}</Text>
				<ScrollView style={Style.action}>

					<InputText
						style={Style.mb10}
						placeholder={'Influencer Name*'}
						value={form.Name}
						onChange={(value) => {
							changeForm({ edited_field: 'Name', edited_value: value })
						}}
						error={validation.invalid && validation.invalid_field == 'Name'}
						label={'Influencer Name*'}
					/>

					<Select style={Style.picker}
						label={'Influencer Type*'}
						selected={form.InfluencerType}
						list={influencerType}
						onChange={(value) => {
							changeForm({ edited_field: 'InfluencerType', edited_value: value })
						}}
						error={validation.invalid && validation.invalid_field == 'InfluencerType'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Firm Name*'}
						value={form.FirmName}
						onChange={(value) => {
							changeForm({ edited_field: 'FirmName', edited_value: value })
						}}
						error={validation.invalid && validation.invalid_field == 'FirmName'}
						label={'Firm Name*'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Phone*'}
						value={form.Phone}
						onChange={(value) => changeForm({ edited_field: 'Phone', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'Phone'}
						label={'Phone*'}
					/>

					<SearchableDropdown
	                    dataSource={allCountersSearchList}
	                    placeHolderText={'Select Counter...'}
	                    selectedValue={form.CounterName}
	                    onChange={(value) => changeForm({ edited_field: 'CounterName', edited_value: value })}
	                    placeholder={'Type or Select Counter'}
	                    invalid={false}
	                    customPickerStyles={{ ...Style.picker }}
	                    labelStyles={{ ...Style.pickerLabel }}
	                    invalid={validation.invalid && validation.invalid_field == 'CounterName'}
	                    label={'Associated Counter'}
	                />


					<TextArea
						placeholder={'Remark'}
						label={'Remarks'}
						numberOfLines={5}
						value={form.Remark}
						error={validation.invalid && validation.invalid_field == 'Remark'}
						onChange={(value) => changeForm({ edited_field: 'Remark', edited_value: value })}
					/>

					<BlueButton
						style={Style.button}
						title={'Submit'}
						loading={loader}
						disabled={loader}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}

const mapStateToProps = (state) => {
	return {
		form                    : state.influencers.influencerForm,
		validation              : state.influencers.influencerFormValidation,
		loader                  : state.influencers.createInfluencerLoader,
		statusType              : state.influencers.statusType,
		access_token            : state.startDay.access_token,
		influencerType 			: state.startDay.influencer_type,
		allCountersSearchList	: state.shree.allCountersSearchList,
		userId   	  			: state.user.loginDetails.userId
	}
}

const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)    => dispatch(influencerActions.changeInfluencerForm(params)),
	submitForm: (params)    => dispatch(influencerActions.createInfluencer(params)),
	clearInfluencerForm: () => dispatch(influencerActions.clearInfluencerForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewInfluencers)