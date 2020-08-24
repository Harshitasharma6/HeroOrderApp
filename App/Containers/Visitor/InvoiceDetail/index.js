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
import GenericIcon from 'App/Components/GenericIcon'
import ShreeActions from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import SearchableDropdown from 'App/Components/SearchableDropdown';
import InputDate from 'App/Components/FormInput/InputDate';
import WhiteButton from 'App/Components/WhiteButton';
import {ApplicationStyles} from 'App/Theme'
import {Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import VisitorActions from 'App/Stores/Visitor/Actions'
import moment from 'moment';
import GoogleAddress from 'App/Components/GoogleAddress'
import ImagePicker from 'App/Components/ImagePicker'

// "first_name__c": "test 12",	(*mandatory)
// 	"last_name__c": "enquiry visit test",	(*mandatory)
// 	"contact_number__c": "1646464944", 	(*mandatory)
// 	"age__c":  "28",
// 	"genders__c": "Male",
// 	"product__c": "a029D000002ZFPtQAO", 	(*mandatory)
// 	"mode_of_buying__c": "Cash",
// 	"exchange_required__c":"No",
// 	"lead_source__c": "Event",
// 	"existing_two_wheelers__c": "Yes",
// 	"purpose_of_buying__c" : "Nothing",
// "usage__c": "Nothing",
// "expected_close_date__c": "2020-08-19",
//  "dealers_sales_person__c": "a0O9D000001hLV9UAM",
// 	"email_id__c": "abc@gmail.com",
// 	"occupation__c" : "Business",
// 	"test_drive_offered__c": "Yes",		(*mandatory)
// 	"customer__c": "0039D000008BMX2QAO",
// 	"address_line_1__c" : “test address”


class InvoiceDetailformScreen extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		
	}

	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			dealers_sales_person__c: 'a0O9D000001hLV9UAM'
		});
	}

    render() {
		const { 
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList
		} = this.props;
		
		return (
			<View style={Style.container}>
				
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
               
				
			   <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Tally Invoice No.'}
						value={form.tally}
						onChange={(value) => changeForm({ edited_field: 'tally', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'tally'}
						label={'Tally Invoice No.'}
					/>
					<InputNumber
						styles={Style.mb10}
						placeholder={' GSTIN No.'}
						value={form.gst}
						onChange={(value) => changeForm({ edited_field: 'gst', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'gst'}
						label={'Customer GSTIN No.'}
					/>


                    </View>  



			   <InputText
						style={Style.mb10}
						placeholder={'Customer Name'}
						value={form.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'Customer  Name*'}
					/>

			   <View style={{flexDirection:'row', }}>
			   <InputMobile
						styles={Style.mb10}
						placeholder={'Customer Phone No'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Customer Phone No*'}
					/>
					<View style={{marginLeft:'5%', width:'45%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Enter OTP'}
						value={form.otp__c}
						onChange={(value) => changeForm({ edited_field: 'otp__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'otp__c'}
						label={' Enter OTP'}
					/>

					</View>
                    </View>  

			 	  <InputText
						style={Style.mb10}
						placeholder={'Customer Email'}
						value={form.email_id__c}
						onChange={(value) => changeForm({ edited_field: 'email_id__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'email_id__c'}
						label={'Customer  Email'}
					/>
				 	<InputText
						style={Style.mb10}
						placeholder={'Customer Address'}
						value={form.address_line_1__c}
						onChange={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
						label={'Customer  Address'}
					/>

					 <InputText
						style={Style.mb10}
						placeholder={'Customer Chassis No.'}
						value={form.chassis_no__c}
						onChange={(value) => changeForm({ edited_field: 'chassis_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'chassis_no__c'}
						label={'Customer Chassis No.'}
					/>

					
					<View style={{flexDirection:'row', }}>
						<View style={{width:'45%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Motor No.'}
						value={form.motor}
						onChange={(value) => changeForm({ edited_field: 'motor', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'motor'}
						label={'Motor No.'}
					/>
					</View>
					<View style={{width:'45%', marginLeft:'9%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Charger No.'}
						value={form.charger_no__c}
						onChange={(value) => changeForm({ edited_field: 'charger_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'charger_no__c'}
						label={'Charger No. *'}
					/>

					</View>
                    </View>  

					<InputNumber
						styles={Style.mb10}
						placeholder={' Battery No. *'}
						value={form.battery_no__c}
						onChange={(value) => changeForm({ edited_field: 'battery_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'battery_no__c'}
						label={'Battery No. *'}
					/>


					<InputText
						style={Style.mb10}
						placeholder={'Make of Battery'}
						value={form.make_of_battery}
						onChange={(value) => changeForm({ edited_field: 'make_of_battery', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'make_of_battery'}
						label={' Make of Battery'}
					/>

					<InputText
						style={Style.mb10}
						placeholder={'Type of Battery'}
						value={form.type_of_battery}
						onChange={(value) => changeForm({ edited_field: 'type_of_battery', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'type_of_battery'}
						label={'Type of Battery'}
					/>	

					

                	<InputNumber
						styles={Style.mb10}
						placeholder={'Capacity of Each Battery'}
						value={form.capacity_battery}
						onChange={(value) => changeForm({ edited_field: 'capacity_battery', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'capacity_battery'}
						label={'Capacity of Each Battery'}
					/>

					{
					// 	<InputText
					// 	style={Style.mb10}
					// 	placeholder={'Purpose of Buying'}
					// 	value={form.purpose_of_buying__c}
					// 	onChange={(value) => changeForm({ edited_field: 'purpose_of_buying__c', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'purpose_of_buying__c'}
					// 	label={'Purpose of Buying*'}
					// />

					// <InputText
					// 	style={Style.mb10}
					// 	placeholder={'Usage'}
					// 	value={form.usage__c}
					// 	onChange={(value) => changeForm({ edited_field: 'usage__c', edited_value: value })}
					// 	error={validation.invalid && validation.invalid_field == 'usage__c'}
					// 	label={'Usage*'}
					// />
				}
				<InputNumber
						styles={Style.mb10, {marginBottom:'1%'}}
						placeholder={'Owners Handbook No.'}
						value={form.owner_handbook}
						onChange={(value) => changeForm({ edited_field: 'owner_handbook', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'owner_handbook'}
						label={'Owners Handbook No.'}
					/>
					
                   

{
	// <BlueButton title={"ATTACH DOCUMENTS"} style={{width: '53%', marginHorizontal: '46%',}} textStyle={{fontSize: 12}} >
	//             	<GenericIcon name={'photo'} style={{color: Colors.white, fontSize: 15}}/>
	//             </BlueButton>
	        }


				{
					// <View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'2%'}}>
						
					// 	<View style={{flexDirection: 'row',  }}>
					// 	<GenericCheckBox 
					// 		style={{marginRight: '5%', marginBottom:'0%'}}
					// 		style1={{marginLeft:'12%'}}
					// 		label={'Driving License'}
					// 		checked={form.test_drive_offered__c == 'Yes'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>

					// 	<GenericCheckBox
					// 		style={{marginHorizontal: '0%', marginBottom:'0%'}} 
					// 		label={'Aadhar Card'}
					// 		checked={form.test_drive_offered__c == 'No'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>
					// 	</View>
					}
                        {
      //                   	<View style={{flexDirection: 'row',  }}>
						// <GenericCheckBox 
						// 	style={{marginRight: '5%',marginBottom:'0%'}}
						// 	style1={{marginLeft:'20%'}}
						// 	label={'Voter Id Card'}
						// 	checked={form.test_drive_offered__c == 'Yes'}
						// 	onPress={(event)=>{
			   //              	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				  //               changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			   //              }}
						// />

						// <GenericCheckBox
						// 	style={{marginHorizontal: '-3.5%', marginBottom:'0%'}} 
						// 	style1={{marginLeft:'38%'}}
						// 	label={'RC'}
						// 	checked={form.test_drive_offered__c == 'No'}
						// 	onPress={(event)=>{
			   //              	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				  //               changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			   //              }}
						// />
						// </View>
      //                   <View style={{flexDirection: 'row', }}>
						// <GenericCheckBox 
						// 	style={{marginRight: '5%',marginBottom:'0%'}}
						// 	label={'Acknowledgement'}
						// 	checked={form.test_drive_offered__c == 'Yes'}
						// 	onPress={(event)=>{
			   //              	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				  //               changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			   //              }}
						// />

						// <GenericCheckBox
						// 	style={{marginHorizontal: '4%', marginBottom:'0%'}} 
						// 	style1={{marginLeft:'13%'}}
						// 	label={'Insurance '}
						// 	checked={form.test_drive_offered__c == 'No'}
						// 	onPress={(event)=>{
			   //              	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				  //               changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			   //              }}
						// />
						// </View>
      //                   <View style={{flexDirection: 'row', }}>
						// <GenericCheckBox 
						// 	style={{marginRight: '5%', }}
						// 	style1={{marginLeft:'42%'}}
						// 	label={'others'}
						// 	checked={form.test_drive_offered__c == 'Yes'}
						// 	onPress={(event)=>{
			   //              	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				  //               changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			   //              }}
						// />

						
						// </View>
					}
					{
						//</View>
					}

					<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.aadhar_card__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'aadhar_card__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Aadhar Card'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

	        	<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.acknowledgement__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'acknowledgement__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Acknowledgement'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.driving_license__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'driving_license__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Driving License'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.insurance__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'insurance__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Insurance'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

	            


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.rc__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'rc__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' RC'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.voter_id_card__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'voter_id_card__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Voter Card'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>


          		<View style={{...Style.bottomMargin}}>
		            <ImagePicker 
		              image={form.others__c} 
		              onImageSuccess={({image}) => changeForm({edited_field: 'others__c', edited_value: image})}>
		              <View style={Style.recurringActionButton}>
		                <Text style={Style.recurringActionButtonText}>
		                <GenericIcon 
		                    name="camera" 
		                    style={Style.recurringActionButtonIcon}
		                  />
		                {' Others'}
		                </Text>
		              </View>
		            </ImagePicker>
          		</View>

                    
						<View style={{marginTop:'3%'}}>
                    <BlueButton title={"SAVE"} style={{width: '40%', marginHorizontal: '30.5%',}} textStyle={{fontSize: 12}} >
	            	
	            </BlueButton>
			</View>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.payBookingFormValidation,
	form 					 	: state.visitor.payBookingForm,
	loader 			            : state.visitor.loaders.payBookingLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changePayBookingForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.payBooking(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearPayBookingForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceDetailformScreen)