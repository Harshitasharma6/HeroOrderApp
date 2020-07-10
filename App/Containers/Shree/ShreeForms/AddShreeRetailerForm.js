import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard} from 'react-native';
import Style from './Styles'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import BlueButton from 'App/Components/BlueButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import InputNumber from 'App/Components/FormInput/InputNumber';
import NavigationService from 'App/Services/NavigationService'


class AddShreeRetailerForm extends Component {
 // 	async componentDidMount() {
	// 	let location = await HelperService.requestLocation();
	//     if (location == 'DENIED'){
	//       Alert.alert("Location permission is required to proceed.", 
	//         "Go App Permissions and Turn on Location Permission for ShreeCementApp."
	//       );
	//       NavigationService.goback();
	//       return;
	//     }else if (!location) {
	//     	Alert.alert("Cannot fetch locatiion, Location permission is required to proceed.");
	//     	NavigationService.goback();
	//       	return;
	// 	}

	// 	this.props.changeForm({ edited_field: 'Latitude', edited_value: String(location.latitude) });
	// 	this.props.changeForm({ edited_field: 'Longitude', edited_value: String(location.longitude) });
	
	// }
   

	submit() {
		const { 
			submitForm, 
			form,
			access_token
		} = this.props;

		Keyboard.dismiss(); 

		submitForm({
			form, 
			...{
				access_token: access_token
			}
		});
	}

    render() {
		const { 
			validation, 
			form,
			changeForm, 
			loader
		} = this.props;
		
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'Add Shree Retailer'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>


				 	<InputText
						style={Style.mb10}
						placeholder={'Counter Name*'}
						value={form.CounterName}
						onChange={(value) => changeForm({ edited_field: 'CounterName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterName'}
						label={'Counter Name*'}
					/>

					{/* <InputNumber
                        styles={Style.mb10}
                        placeholder={'Counter Code*'}
                        value={form.CounterCode}
                        onChange={(value) => changeForm({ edited_field: 'CounterCode', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterCode'}
						label={'Counter Code*'}
                    /> */}

					{/* <InputText
						style={Style.mb10}
						placeholder={'Shop Name*'}
						value={form.ShopName}
						onChange={(value) => changeForm({ edited_field: 'ShopName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ShopName'}
						label={'Shop Name*'}
					/> */}
					
					<InputText
						style={Style.mb10}
						placeholder={'Contact Person*'}
						value={form.ContactPerson}
						onChange={(value) => changeForm({ edited_field: 'ContactPerson', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPerson'}
						label={'Contact Person*'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Contact Person Number*'}
						value={form.ContactPersonNo}
						onChange={(value) => changeForm({ edited_field: 'ContactPersonNo', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonNo'}
						label={'Contact Person Number*'}
					/>


					<InputNumber
						styles={Style.mb10}
						placeholder={'Counter Potential*'}
						value={form.CounterPotential}
						onChange={(value) => changeForm({ edited_field: 'CounterPotential', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterPotential'}
						label={'Counter Potential*'}
					/>


					<TextArea
	                    placeholder={'Add Comments'}
	                    numberOfLines={5}
	                    value={form.AddComment}
						onChange={(value) => changeForm({ edited_field: 'AddComment', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'RemAddCommentark'}
                	/>
					 

					<BlueButton
						style={Style.button}
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
	validation      			: state.shree.shreeRetailerFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.shree.shreeRetailerForm,
	loader 			            : state.shree.createShreeRetailerLoader
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(ShreeActions.changeShreeRetailerForm(params)),
	submitForm: (params) => dispatch(ShreeActions.createShreeRetailer(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(AddShreeRetailerForm)