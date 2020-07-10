import BlueButton from 'App/Components/BlueButton';
import InputNumber from 'App/Components/FormInput/InputNumber';
import InputText from 'App/Components/FormInput/InputText';
import { SUBMIT } from 'App/Constants';
import React, { Component } from 'react';
import { ScrollView, Text, View, Keyboard } from 'react-native';
import { connect } from 'react-redux';
import Style from './NewSitesVisitStyle';
import SiteActions from 'App/Stores/Sites/Actions';
import Select from 'App/Components/Select/Select';
import { HelperService } from 'App/Services/Utils/HelperService';
import TextArea from 'App/Components/FormInput/TextArea'
import GenericCheckBox from 'App/Components/GenericCheckBox';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import SiteBrandVisitForm from './SiteBrandVisitForm';
import GenericIcon from 'App/Components/GenericIcon';
import BrandComponent from 'App/Components/BrandComponent';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import _ from 'lodash';



class NewSitesVisit extends Component {
	submit() {
		const { 
			userId,
			selectedSite,
			createSiteVisit, 
			siteVisitForm,
			access_token
		} = this.props;

		Keyboard.dismiss(); 

		createSiteVisit({
			siteVisitForm: {
				...siteVisitForm,
				OwnerId: userId,
				Site: selectedSite.Id,
				VisitDateAndTime: HelperService.getCurrentTimestamp()
			},
			access_token: access_token
		});
	}



	// "Site":"a0S9D0000006AkiUAE",(Site Id)...done
 // 	"VisitDateAndTime":"1585129150413",....done
 // 	"ConvertedPrice":"301",.....done
 // 	"ContactType":"Engineer",......done
 // 	"ContactPerson":"Ram Singh",......done
 // 	"ContactPersonNo":"9917461449",....done
 // 	"Shreesite":true,....done
 // 	"RepeatVisit":false,....done
 // 	"InfluencerInvolved":true,.....done
 // 	"InfluencerName":"0039D000006c6YJQAY",(Influencer ID).....done
 // 	"DealerInvolved":true,...done
 // 	"Dealer":"0019D000008AAkWQAW",(Dealer Id)...done
 // 	"CanConvertSiteToShree":true,....done
 // 	"ConventedBrand":"Shree",......done
 // 	"OrderTaken":"40",....done
 // 	"Remark":"test",...done
 // 	"Latitude":"28.610001",...done
 // 	"Longitude":"77.230003",....done
 // 	"OwnerId":"0052w000002IY4BAAW" (User ID)....done




 // "attributes" : {"type" : "Competitor__c", "referenceId" : "ref1"},
	// "Site_Visit_Name__c" : "a0F9D000000B7bGUAS",
	// "Packing__c" : "HDPE",
	// "Product__c" : "PPC",
	// "RSP__c" : "101.1",
	// "WSP__c" : "101.1",
	// "Brand__c" : "KCP",
	// "OwnerId" : "0059D000001Ggxc"




	render() {
		const { userId, siteVisitForm, validation, projectType, SiteType, Brand, productPPC, changeSiteForm, loader, allCountersSearchList, influencersSearchableList, MeetingType, sourceType, siteCompetitorForm, selectedSite, addSiteBrand, removeSiteBrand, editSiteBrand, allCountersSearchDealerList } = this.props;
		let brandsNode= [];

		if (siteVisitForm.brands && siteVisitForm.brands.length) {
			siteVisitForm.brands.map((obj, index) => {
        		brandsNode.push(<SiteBrandVisitForm form={obj} key={obj.id} removeForm={(params) => removeSiteBrand(params)} changeForm={(params) => editSiteBrand({...params, id: obj.id})}/>)
        	});
		}
		return (
			<View style={Style.container}>
				<ScrollView style={Style.action}>

				<InputText
						style={Style.mb10}
						placeholder={'Contact Person*'}
						value={siteVisitForm.ContactPerson}
						onChange={(value) => changeSiteForm({ edited_field: 'ContactPerson', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPerson'}
						label={'Contact Person*'}
					/>

				<InputNumber
						styles={Style.mb10}
						placeholder={'Contact Person No*'}
						value={siteVisitForm.ContactPersonNo}
						onChange={(value) => changeSiteForm({ edited_field: 'ContactPersonNo', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonNo'}
						label={'Contact Person No'}
					/>

					<Select style={Style.picker}
						label={'Contact Type*'}
						selected={siteVisitForm.ContactType}
						list={sourceType}
						onChange={(value) => {
							changeSiteForm({ edited_field: 'ContactType', edited_value: value })
						}}
					/>

					

					<GenericCheckBox 
						label={'Can Convert Site To Shree'}
						checked={!!siteVisitForm.CanConvertSiteToShree}
						onPress={(event)=>{
		                	let value = !siteVisitForm.CanConvertSiteToShree
			                changeSiteForm({ edited_field: 'CanConvertSiteToShree', edited_value: value });
			                if (!value) {
			                	changeSiteForm({ edited_field: 'ConvertedPrice', edited_value: '' })
			                	changeSiteForm({ edited_field: 'ConventedBrand', edited_value: '' })
			                }else {
			                	changeSiteForm({ edited_field: 'ConventedBrand', edited_value: 'SHREE' })
			                }
			            }}
					/>
					

				{siteVisitForm.CanConvertSiteToShree ? 
					<InputNumber
						styles={Style.mb10}
						placeholder={'Converted Price'}
						value={siteVisitForm.ConvertedPrice}
						onChange={(value) => changeSiteForm({ edited_field: 'ConvertedPrice', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ConvertedPrice'}
						label={'Converted Price'}
					/>: []
				}
					{
					// <InputNumber
					// 	styles={Style.mb10}
					// 	placeholder={'Site Capacity Sqft*'}
					// 	value={siteVisitForm.SiteCapacitySqft}
					// 	onChange={(value) => changeSiteForm({ edited_field: 'SiteCapacitySqft', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'SiteCapacitySqft'}
					// 	label={'Site Capacity Sqft*'}
					// />
				}

					

					<GenericCheckBox 
						label={'Shree Site'}
						checked={!!siteVisitForm.Shreesite}
						onPress={(event)=>{
		                	let value = !siteVisitForm.Shreesite	
			                changeSiteForm({ edited_field: 'Shreesite', edited_value: value })}
		                }
					/>

					{
					// <InputNumber
					// 	styles={Style.mb10}
					// 	placeholder={'Area Sqft*'}
					// 	value={siteVisitForm.AreaSqft}
					// 	onChange={(value) => changeSiteForm({ edited_field: 'AreaSqft', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'AreaSqft'}
					// 	label={'Area Sqft*'}
					// />
				}



					

					<GenericCheckBox 
						label={'Repeat Visit'}
						checked={!!siteVisitForm.RepeatVisit}
						onPress={(event)=>{
		                	let value = !siteVisitForm.RepeatVisit;
			                changeSiteForm({ edited_field: 'RepeatVisit', edited_value: value })}
		                }
					/>


					<GenericCheckBox 
						label={'Influencer Involved'}
						checked={!!siteVisitForm.InfluencerInvolved}
						onPress={(event)=>{
		                	let value = !siteVisitForm.InfluencerInvolved;
		                	!value ? changeSiteForm({ edited_field: 'InfluencerName', edited_value: '' }) : '';
			                changeSiteForm({ edited_field: 'InfluencerInvolved', edited_value: value })}
		                }
					/>

					{siteVisitForm.InfluencerInvolved  ? 
					<SearchableDropdown
	                    dataSource={influencersSearchableList}
	                    selectedValue={siteVisitForm.InfluencerName}
	                    onChange={(value) => changeSiteForm({ edited_field: 'InfluencerName', edited_value: value })}
	                    invalid={false}
	                    customPickerStyles={{ ...Style.picker }}
	                    labelStyles={{ ...Style.pickerLabel }}
	                    invalid={validation.invalid && validation.invalid_field == 'InfluencerName'}
	                    label={'Select Influencer'}
	                /> : []
	            }


					<GenericCheckBox 
						label={'Dealer Involved'}
						checked={!!siteVisitForm.DealerInvolved}
						onPress={(event)=>{
		                	let value = !siteVisitForm.DealerInvolved;
		                	!value ? changeSiteForm({ edited_field: 'Dealer', edited_value: '' }) : '';
			                changeSiteForm({ edited_field: 'DealerInvolved', edited_value: value })}
		                }
					/>

					{siteVisitForm.DealerInvolved ? 
					<SearchableDropdown
	                    dataSource={allCountersSearchDealerList}
	                    selectedValue={siteVisitForm.Dealer}
	                    onChange={(value) => changeSiteForm({ edited_field: 'Dealer', edited_value: value })}
	                    placeholder={'Type or Select Dealer'}
	                    invalid={false}
	                    customPickerStyles={{ ...Style.picker }}
	                    labelStyles={{ ...Style.pickerLabel }}
	                    invalid={validation.invalid && validation.invalid_field == 'Dealer'}
	                    label={'Select Dealer'}
	                /> : []
	            }

	            {!siteVisitForm.CanConvertSiteToShree ?
	            	<BrandComponent 
						list={Brand} 
						value={siteVisitForm.ConventedBrand} 
						label={'Converted Brand'}
						width={'98%'}
						styles={{height: hp('5.5%'), alignSelf: 'center'}}
						changeForm={(value) => changeSiteForm({ edited_field: 'ConventedBrand', edited_value: value })} 
					/> : []
				}

					<InputNumber
						styles={Style.mb10}
						placeholder={'Order Taken(In Bags)'}
						value={siteVisitForm.OrderTaken}
						onChange={(value) => changeSiteForm({ edited_field: 'OrderTaken', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'OrderTaken'}
						label={'Order Taken(In Bags)'}
					/>

					<TextArea

					placeholder={'Remarks'}
					numberOfLines={5}
					value={siteVisitForm.Remark}
					error={validation.invalid && validation.invalid_field == 'Remark'}
					onChange={(value) => changeSiteForm({ edited_field: 'Remark', edited_value: value })}

					/>

					{brandsNode}

                    <BlueButton
						style={Style.addButton}
						title={'Add Price'}
						textStyle={Style.addButtonText}
						onPress={() => addSiteBrand({...siteCompetitorForm, ...{id: _.uniqueId(), OwnerId: userId}})}
					>

					 <GenericIcon
			            name={'add-circle'}
			            style={Style.addButtonIcon}
			          />
			        </BlueButton>


					<BlueButton
						style={Style.button}
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
	selectedSite:       state.sites.selectedSite,
	siteVisitForm: 		state.sites.siteVisitForm,
	validation: 		state.sites.siteVisitFormValidation,
	projectType: 		state.sites.projectType,
	sourceType: 		state.startDay.influencer_type,
	productPPC: 		state.startDay.productPPC,
	packing: 			state.startDay.packing,
	product: 			state.startDay.product,
	Brand: 				state.startDay.Brand,
	MeetingType:        state.sites.MeetingType,
	SiteType: 			state.sites.SiteType,
	access_token: 		state.startDay.access_token,
	userId: 			state.user.loginDetails.userId,
	loader:				state.sites.createSiteVisitLoader,
	allCountersSearchList: state.shree.allCountersSearchList,
	allCountersSearchDealerList: state.shree.allCountersSearchDealerList,
	influencersSearchableList: state.influencers.influencersSearchableList,
	siteCompetitorForm: state.sites.siteCompetitorForm

});

const mapDispatchToProps = (dispatch) => ({
	changeSiteForm: (params)  => dispatch(SiteActions.changeSiteVisitForm(params)),
	createSiteVisit: (params) => dispatch(SiteActions.createSiteVisit(params)),
	addSiteBrand:(params)     => dispatch(SiteActions.addSiteBrand(params)),
	removeSiteBrand: (params) => dispatch(SiteActions.removeSiteBrand(params)),
	editSiteBrand: (params)   => dispatch(SiteActions.editSiteBrand(params))
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NewSitesVisit)
