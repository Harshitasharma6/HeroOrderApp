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



class NewRegistrationFormScreen extends Component {
 
	submit() {
		// const { 
		// 	submitForm, 
		// 	form,
		// 	access_token
		// } = this.props;

		// Keyboard.dismiss(); 

		// submitForm({
		// 	form, 
		// 	...{
		// 		access_token: access_token
		// 	}
		// });

		NavigationService.navigate('VisitorInfoScreen')
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
				<Text style={ApplicationStyles.formHeading}>{'New Registration'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>


				 	<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.CounterName}
						onChange={(value) => changeForm({ edited_field: 'CounterName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterName'}
						label={'First Name*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.ShopName}
						onChange={(value) => changeForm({ edited_field: 'ShopName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ShopName'}
						label={'Last Name*'}
					/>

                    <InputMobile
						styles={Style.mb10}
						placeholder={''}
						value={form.ContactPersonNo}
						onChange={(value) => changeForm({ edited_field: 'ContactPersonNo', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonNo'}
						label={'Contact Number*'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={''}
						value={form.ShopName}
						onChange={(value) => changeForm({ edited_field: 'ShopName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ShopName'}
						label={'Email'}
					/>

					<TextArea
	                    placeholder={''}
	                    label={'Address'}
	                    numberOfLines={2}
	                    style={Style.mb10}
	                    value={form.AddComment}
						onChange={(value) => changeForm({ edited_field: 'AddComment', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'RemAddCommentark'}
                	/>

                	<InputNumber
						styles={Style.mb10}
						placeholder={''}
						value={form.ContactPersonNo}
						onChange={(value) => changeForm({ edited_field: 'ContactPersonNo', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonNo'}
						label={'Age'}
					/>

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Gender</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={true}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'No'}
							checked={false}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>
						</View>
					</View>


					<SearchableDropdown
				        dataSource={[{id: 'Boss', name: 'Boss'}, {id: 'Admin', name: 'Admin'}, {id: 'Dealer', name: 'Dealer'}]}
				        placeHolderText={'Select Occupation'}
				        selectedValue={''}
				        onChange={(value) => changeForm({ edited_field: 'occupation', edited_value: value })}
				        placeholder={'Type or Select Occupation'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Occupation'}
					/>


					<SearchableDropdown
				        dataSource={[{id: 'Boss', name: 'Boss'}, {id: 'Admin', name: 'Admin'}, {id: 'Dealer', name: 'Dealer'}]}
				        placeHolderText={'Select Product'}
				        selectedValue={''}
				        onChange={(value) => changeForm({ edited_field: 'product', edited_value: value })}
				        placeholder={'Type or Select Product'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Product Interested'}
					/>

					<View style={{width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Mode of Purchase</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Cash'}
							checked={true}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'Finance'}
							checked={false}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>
						</View>
					</View>



					<View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Existing Two Wheeler</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={true}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'No'}
							checked={false}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>
						</View>
					</View>


					<View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Exchange Required</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={true}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>

						<GenericCheckBox
						style={{marginRight: '5%'}} 
							label={'No'}
							checked={false}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>
						</View>
					</View>



					<SearchableDropdown
				        dataSource={[{id: 'Boss', name: 'Boss'}, {id: 'Admin', name: 'Admin'}, {id: 'Dealer', name: 'Dealer'}]}
				        placeHolderText={'Select Source'}
				        selectedValue={''}
				        onChange={(value) => changeForm({ edited_field: 'product', edited_value: value })}
				        placeholder={'Type or Select Source'}
				        invalid={false}
				        labelStyles={{ ...Style.pickerLabel }}
				        customPickerStyles={{ ...Style.picker }}
				        label={'Source of Enquiry'}
					/>

					<InputDate
                        style={Style.mb10}
                        placeholder={''}
                        value={''}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            this.props.changeForm({ edited_field: 'PurchaseDate', edited_value: value })
                        }}
                        error={validation.invalid && validation.invalid_field == 'tour_to__c'}
                        label={'Expected Purchase Date'}
                    />


                    <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
						<Text style={{...ApplicationStyles.label, marginBottom: '1%'}}>Was Test Drive Offered?</Text>
						<View style={{flexDirection: 'row', marginBottom: '2%'}}>
						<GenericCheckBox 
							style={{marginRight: '5%'}}
							label={'Yes'}
							checked={true}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>

						<GenericCheckBox
							style={{marginHorizontal: '5%'}} 
							label={'No'}
							checked={false}
							onPress={(event)=>{
			                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
				                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                }}
						/>
						</View>
					</View>


					
				

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
	validation      			: state.shree.shreeDealerFormValidation,
	access_token    			: state.startDay.access_token,
	form 					 	: state.shree.shreeDealerForm,
	loader 			            : state.shree.createShreeDealerLoader
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(ShreeActions.changeShreeDealerForm(params)),
	submitForm: (params) => dispatch(ShreeActions.createShreeDealer(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewRegistrationFormScreen)