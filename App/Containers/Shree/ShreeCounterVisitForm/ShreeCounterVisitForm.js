import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Button, Textarea } from 'native-base'
import { connect } from 'react-redux'
import Style from './Style'
import InputText from 'App/Components/FormInput/InputText'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputNumber from 'App/Components/FormInput/InputNumber'
import BlueButton from 'App/Components/BlueButton'
import Select from 'App/Components/Select';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import ShreeActions from 'App/Stores/Shree/Actions';

class ShreeCounterVisitForm extends Component {
	submit() {
		const { 
			userId,
			submitForm,
			access_token, 
			form,
			selectedCounterId
		} = this.props;

		submitForm({
			form: {
				...form,
				CounterVisit: 'a0G9D0000008GXFUA2',
				CounterName: selectedCounterId,
				LoginUserId: userId
			},
			access_token: access_token
		});
	}


	render() {
		const { 
			form, 
			validation, 
			loader, 
			Brand, 
			product, 
			packing, 
			changeForm, 
			shreeVisitDetailType 
		} = this.props;
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'New Brand Detail'}</Text>
				<ScrollView style={Style.action}>
					<Select style={Style.selectPickerStyle}
						label={'CounterType'}
						list={shreeVisitDetailType}
						selected={form.CounterType}
						onChange={(value) => changeForm({ edited_field: 'CounterType', edited_value: value })}
					/>

					<Select style={Style.selectPickerStyle}
						label={'Brand'}
						list={Brand}
						selected={form.Brand}
						onChange={(value) => changeForm({ edited_field: 'Brand', edited_value: value })}
					/>

					<Select style={Style.selectPickerStyle}
						label={'Product'}
						list={product}
						selected={form.Product}
						onChange={(value) => changeForm({ edited_field: 'Product', edited_value: value })}
					/>

					<Select style={Style.selectPickerStyle}
						label={'Packing'}
						list={packing}
						selected={form.Packing}
						onChange={(value) => changeForm({ edited_field: 'Packing', edited_value: value })}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'WSP'}
						value={form.WSP}
						onChange={(value) => changeForm({ edited_field: 'WSP', edited_value: value })}
						label={'WSP*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'RSP'}
						value={form.RSP}
						onChange={(value) => changeForm({ edited_field: 'RSP', edited_value: value })}
						label={'RSP*'}
					/>

					<BlueButton
						style={Style.button}
						large
						loading={loader}
						title={'Submit'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	userId   					: state.user.loginDetails.userId,
	access_token				: state.startDay.access_token,
	Brand						: state.startDay.Brand,
	product						: state.startDay.product,
	packing						: state.startDay.packing,
	validation      			: state.shree.shreeVisitDetailFormValidation,
	form 					 	: state.shree.shreeVisitDetailForm,
	loader 						: state.shree.createShreeVisitDetailLoader,
	shreeVisitDetailType		: state.shree.shreeVisitDetailType,
	selectedCounterId         	: state.shree.selectedShree.id
  });

  const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(ShreeActions.changeShreeVisitDetailForm(params)),
	submitForm: (params) => dispatch(ShreeActions.createShreeVisitDetail(params)),
});
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(ShreeCounterVisitForm)