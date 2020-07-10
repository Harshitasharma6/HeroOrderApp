import BlueButton from 'App/Components/BlueButton';
import InputNumber from 'App/Components/FormInput/InputNumber';
import InputMobile from 'App/Components/FormInput/InputMobile';
import InputText from 'App/Components/FormInput/InputText';
import { SUBMIT } from 'App/Constants';
import React, { Component } from 'react';
import { ScrollView, Text, View, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Style from './Styles';
import SiteActions from 'App/Stores/Sites/Actions';
import Select from 'App/Components/Select/Select';
import { HelperService } from 'App/Services/Utils/HelperService';
import TextArea from 'App/Components/FormInput/TextArea'
import GenericCheckBox from 'App/Components/GenericCheckBox';
import BrandComponent from 'App/Components/BrandComponent';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class NewSites extends Component {

	submit() {
		const { 
			userId,
			createSite, 
			siteForm,
			access_token
		} = this.props;

		Keyboard.dismiss(); 

		createSite({
			siteForm: {
				...siteForm,
				OwnerId: userId
			},
			access_token: access_token
		});
	}

	render() {
		const { siteForm, 
			validation, 
			projectType, 
			SiteType, 
			Brand, 
			productPPC, 
			changeSiteForm, 
			loader 
		} = this.props;
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'NEW SITE'}</Text>
				<ScrollView style={Style.action}>

					<InputText
						style={Style.mb10}
						placeholder={'Site Name*'}
						value={siteForm.SiteName}
						onChange={(value) => changeSiteForm({ edited_field: 'SiteName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'SiteName'}
						label={'Site Name*'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Client Phone*'}
						value={siteForm.ClientPhone}
						onChange={(value) => changeSiteForm({ edited_field: 'ClientPhone', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ClientPhone'}
						label={'Client Phone No.*'}
					/>



					<Select style={Style.picker}
						label={'Site Type*'}
						selected={siteForm.SiteType}
						list={projectType}
						onChange={(value) => changeSiteForm({ edited_field: 'SiteType', edited_value: value })}
					/>

					<InputNumber
						styles={Style.mb10}
						placeholder={'Site Area Sqft'}
						value={siteForm.SiteAreaSqft}
						onChange={(value) => changeSiteForm({ edited_field: 'SiteAreaSqft', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'SiteAreaSqft'}
						label={'Site Area Sqft'}
					/>

				

					<InputNumber
						styles={Style.mb10}
						placeholder={'Site Capacity MT'}
						value={siteForm.SiteCapacityMT}
						onChange={(value) => changeSiteForm({ edited_field: 'SiteCapacityMT', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'SiteCapacityMT'}
						label={'Site Capacity MT'}
					/>

					<BrandComponent 
						list={Brand} 
						value={siteForm.CurrentBrandUsed} 
						label={'Current Brand Used'}
						width={'98%'}
						styles={{height: hp('5.5%'), alignSelf: 'center'}}
						changeForm={(value) => changeSiteForm({ edited_field: 'CurrentBrandUsed', edited_value: value })} 
						error={validation.invalid && validation.invalid_field == 'CurrentBrandUsed'}
					/>
					{
					// <Select style={Style.pickerStyle}
					// 	label={'Current Brand Used'}
					// 	list={Brand}
					// 	selected={siteForm.CurrentBrandUsed}
					// 	onChange={(value) => changeSiteForm({ edited_field: 'CurrentBrandUsed', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'CurrentBrandUsed'}
					// />
				}

					<InputNumber
						styles={Style.mb10}
						placeholder={'Current Brand Price(Per Bag)'}
						value={siteForm.CurrentBrandPrice}
						onChange={(value) => changeSiteForm({ edited_field: 'CurrentBrandPrice', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CurrentBrandPrice'}
						label={'Current Brand Price(Per Bag)'}
					/>


					<BlueButton
						style={Style.button}
						rounded
						large
						loading={loader}
						disabled={loader}
						title={SUBMIT}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	siteForm: 			state.sites.siteForm,
	validation: 		state.sites.siteFormValidation,
	projectType: 		state.sites.projectType,
	productPPC: 		state.startDay.productPPC,
	influencer_type: 	state.startDay.influencer_type,
	packing: 			state.startDay.packing,
	product: 			state.startDay.product,
	Brand: 				state.startDay.Brand,
	SiteType: 			state.sites.SiteType,
	access_token: 		state.startDay.access_token,
	userId: 			state.user.loginDetails.userId,
	loader:				state.sites.createSiteLoader

});

const mapDispatchToProps = (dispatch) => ({
	changeSiteForm: (params) => 	dispatch(SiteActions.changeSiteForm(params)),
	createSite: (params)     => 	dispatch(SiteActions.createSite(params))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewSites)
