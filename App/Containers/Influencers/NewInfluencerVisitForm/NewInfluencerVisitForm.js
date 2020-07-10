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
import TextArea from 'App/Components/FormInput/TextArea';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import InfluencersActions from 'App/Stores/Influencers/Actions';
import GenericCheckBox from 'App/Components/GenericCheckBox'
import BrandComponent from 'App/Components/BrandComponent';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class NewInfluencerVisitForm extends Component {
	// async componentDidMount() {
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

	// 	const { 
	// 		changeForm, 
	// 		selectedInfluencer
	// 	} = this.props;

	// 	changeForm({ edited_field: 'latitude', edited_value: String(location.latitude)});
	// 	changeForm({ edited_field: 'longitude', edited_value: String(location.longitude)});
	// 	changeForm({ edited_field: 'CounterName', edited_value: selectedInfluencer.data.AccountId});
	// 	changeForm({ edited_field: 'InfluencerName', edited_value: selectedInfluencer.data.Id});
	// }

	submit() {
		const { 
			userId,
			submitForm, 
			form,
			access_token,
			selectedInfluencer
		} = this.props;

		Keyboard.dismiss(); 

		submitForm({
			form: {
				...form,
				CounterName: selectedInfluencer.data.AccountId,
				InfluencerName: selectedInfluencer.data.Id,
				LoginUserId: userId,
				VisitDateAndTime: HelperService.getCurrentTimestamp()
			},
			access_token: access_token
		});
	}



	// "CounterName":"0019D000008ApulQAC",
	// "InfluencerName":"0039D000005z1r1QAA",
	// "currentBrand":"KCP",
	// "currentProduct":"PPC",
	// "currentPacking":"HDPE",
	// "currentBrandPrice":"4001",
	// "proposeShreeBrand":"YES",
	// "proposeShreeProduct":"PPC",
	// "ProposedShreePacking":"HDPE",
	// "ProposedShreePrice":"399",
	// "WSP":"444",
	// "RSP":"440",
	// "orderTaken":"200",
	// "remark":"test",
	// "VisitDateAndTime":"1585129150413",
	// "latitude":"28.610001",
	// "longitude":"77.230003",
	// "LoginUserId":"0059D000001Ggxc"
	// "ContactPersonName":"Raju"


	render() {
		const { 
			form, 
			validation,
			Brand, 
			product, 
			packing, 
			projects2, 
			loader, 
			changeForm 
		} = this.props;


		return (
			<View style={Style.container}>
				<ScrollView style={Style.action}>
					<InputText
						style={Style.mb10}
						placeholder={'Contact Person Name*'}
						value={form.ContactPersonName}
						onChange={(value) => changeForm({ edited_field: 'ContactPersonName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonName'}
						label={'Contact Person Name*'}
					/>


					<BrandComponent 
						list={Brand} 
						value={form.currentBrand} 
						label={'Current Brand'}
						width={'98%'}
						styles={{height: hp('5.5%'), alignSelf: 'center'}}
						changeForm={(value) => changeForm({ edited_field: 'currentBrand', edited_value: value })} 
						error={validation.invalid && validation.invalid_field == 'currentBrand'}
					/>
					
					{
					// 	<Select style={Style.selectPickerStyle}
					// 	label={'Current Brand'}
					// 	list={Brand}
					// 	selected={form.currentBrand}
					// 	onChange={(value) => changeForm({ edited_field: 'currentBrand', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'currentBrand'}
					// />
				}

					<Select style={Style.selectPickerStyle}
						label={'Current Product'}
						list={product}
						selected={form.currentProduct}
						onChange={(value) => changeForm({ edited_field: 'currentProduct', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'currentProduct'}
					/>

					<Select style={Style.selectPickerStyle}
						label={'Current Packing'}
						list={packing}
						selected={form.currentPacking}
						onChange={(value) => changeForm({ edited_field: 'currentPacking', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'currentPacking'}
					/>


					<InputNumber
						styles={Style.mb10}
						placeholder={'Current Brand Price'}
						value={form.currentBrandPrice}
						onChange={(value) => changeForm({ edited_field: 'currentBrandPrice', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'currentBrandPrice'}
						label={'Current Brand Price'}
					/>

				


					<GenericCheckBox 
						label={'Propose Shree Brand'}
						checked={form.proposeShreeBrand == 'YES'}
						onPress={(event)=>{
		                	let value = form.proposeShreeBrand == 'YES' ? 'NO' : 'YES';
			                changeForm({ edited_field: 'proposeShreeBrand', edited_value: value });
			                if (value == 'NO') {
			                	changeForm({ edited_field: 'proposeShreeProduct', edited_value: 'None' });
			                	changeForm({ edited_field: 'ProposedShreePacking', edited_value: 'None' });
			                	changeForm({ edited_field: 'ProposedShreePrice', edited_value: '' });
			                }
		                }}
					/>

					
					{
						form.proposeShreeBrand == 'YES' ? 
						<Select style={Style.selectPickerStyle}
							label={'Propose Shree Product'}
							list={product}
							selected={form.proposeShreeProduct}
							onChange={(value) => changeForm({ edited_field: 'proposeShreeProduct', edited_value: value })}
							error={validation.invalid && validation.invalid_field == 'proposeShreeProduct'}
						/> : []
					}

					{
						form.proposeShreeBrand == 'YES' ? 
						<Select style={Style.selectPickerStyle}
							label={'Proposed Shree Packing'}
							list={packing}
							selected={form.ProposedShreePacking}
							onChange={(value) => changeForm({ edited_field: 'ProposedShreePacking', edited_value: value })}
							error={validation.invalid && validation.invalid_field == 'ProposedShreePacking'}

						/>  : []
					}

					{
						form.proposeShreeBrand == 'YES' ? 
						<InputNumber
							styles={Style.mb10}
							placeholder={'Proposed Shree Price'}
							value={form.ProposedShreePrice}
							onChange={(value) => changeForm({ edited_field: 'ProposedShreePrice', edited_value: value })}
							error={validation.invalid && validation.invalid_field == 'ProposedShreePrice'}
							label={'Proposed Shree Price'}
						/> : []
					}

					


					<InputNumber
						style={Style.mb10}
						placeholder={'Order Taken(In Bags)'}
						value= {form.orderTaken}
						onChange={(value) => changeForm({ edited_field: 'orderTaken', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'orderTaken'}
						label={'Order Taken(In Bags)'}
					/>

					<TextArea
	                    placeholder={'Remarks'}
	                    label={'Remarks'}
	                    numberOfLines={5}
	                    value={form.remark}
						onChange={(value) => changeForm({ edited_field: 'remark', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'remark'}
                	/>


					<BlueButton
						style={Style.button}
						loading={loader}
						title={'Save'}
						disabled={loader}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	userId   	  : state.user.loginDetails.userId,
	access_token  : state.startDay.access_token,
	Brand: 			state.startDay.Brand,
	product: 		state.startDay.product,
	packing: 		state.startDay.packing,
	projects2: 		state.startDay.projects2,
	form:			state.influencers.influencerVisitForm,
	loader: 		state.influencers.createInfluencerVisitLoader,
	validation: 	state.influencers.influencerVisitFormValidation,
	selectedInfluencer: state.influencers.selectedInfluencer
  });

  const mapDispatchToProps = (dispatch) => ({
	changeForm: (params) => dispatch(InfluencersActions.changeInfluencerVisitForm(params)),
	submitForm: (params) => dispatch(InfluencersActions.createInfluencerVisitForm(params)),
  });
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(NewInfluencerVisitForm)
