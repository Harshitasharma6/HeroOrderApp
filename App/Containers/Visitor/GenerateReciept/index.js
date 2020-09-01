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

   // "product__c":"a029D000002ZFPtQAO",
   // "first_name__c": "Rohit",
   // "last_name__c": "Shukla",
   // "contact_number__c": "09818508785",
   // "email_id__c":  "xyz@gmails.com",
   // "address_line_1__c": "delhi",
   // "recieved_advance__c": "1222",
   // "payment_mode__c": "Cash",
   // "booking_ref_no__c":"123",
   // "expected_delivery_date__c" :"2020-08-28",
   // "booking_date__c": "2020-08-30",
   // "aadhar_card__c":"https://abc.com/a.png",
   // "acknowledgement__c": "https://abc.com/a.png",
   // "driving_license__c" : "https://abc.com/a.png",
   // "insurance__c" :"https://abc.com/a.png",
   // "rc__c" : "https://abc.com/a.png",
   // "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
   // "voter_id_card__c" :"https://abc.com/a.png",   
   // "total_tax__c": "50",  
   // "total_subsidy__c": "11",
   // "dealer_discount__c" : "",
   // "total_amount_payable__c": "22222" 




class GenerateRecieptformScreen extends Component {
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
               
				 	<InputText
						style={Style.mb10}
						placeholder={'Customer Name'}
						value={form.first_name__c}
						onChange={(value) => changeForm({ edited_field: 'first_name__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'first_name__c'}
						label={'Customer  Name*'}
					/>

					
					<View style={{flexDirection:'row',}}>
                    <InputMobile
						styles={Style.mb10}
						placeholder={'Contact Number'}
						value={form.contact_number__c}
						onChange={(value) => changeForm({ edited_field: 'contact_number__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'contact_number__c'}
						label={'Customer Contact No*'}
					/>
					<View style={{marginLeft:'7%', width:'40%'}}>
					<InputNumber
						styles={Style.mb10}
						placeholder={'Enter OTP'}
						value={form.age__c}
						onChange={(value) => changeForm({ edited_field: 'age__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'age__c'}
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
						label={' Customer Email'}
					/>

					<GoogleAddress
						value={form.address_line_1__c}
						changeForm={(value) => changeForm({ edited_field: 'address_line_1__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'address_line_1__c'}
					/>

					

                	<InputNumber
						styles={Style.mb10}
						placeholder={'Recieved Advance'}
						value={form.recieved_advance__c}
						onChange={(value) => changeForm({ edited_field: 'recieved_advance__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'recieved_advance__c'}
						label={'Recieved Advance'}
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

					<View style={{width: '100%',   flexDirection: 'row', marginBottom:'4%' }}>
						<View>
                        <Text style={{...ApplicationStyles.label, marginBottom: '2%'}}>Payment Mode</Text>
						
						<GenericCheckBox 
							style={{marginRight: '5%', marginBottom:'0%'}}
							style1={{marginLeft:'7%'}}
							label={'Digital'}
							checked={form.payment_mode__c == 'Digital'}
							onPress={(event)=>{
			                	//let value = form.genders__c == 'Digital' ? 'Female' : 'Male';
				                changeForm({ edited_field: 'payment_mode__c', edited_value: 'Digital' });
			                }}
						/>

						<GenericCheckBox
							style={{marginRight: '5%', marginBottom:'0%'}} 
							style1={{marginLeft:'14%'}}
							label={'Cash'}
							checked={form.genders__c == 'Cash'}
							onPress={(event)=>{
			                	//let value = form.genders__c == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'payment_mode__c', edited_value: 'Cash' });
			                }}
						/>
                        <GenericCheckBox
							style={{marginRight: '5%',marginBottom:'0%' }} 
							label={'Cheque'}
							checked={form.genders__c == 'Cheque'}
							onPress={(event)=>{
			                	//let value = form.genders__c == 'Female' ? 'Male' : 'Female';
				                changeForm({ edited_field: 'genders__c', edited_value: 'Cheque' });
			                }}
						/>
						
                        </View>
                        <View style={{marginRight:'10%', marginLeft: '18%', width:'45%'}}>
                        <InputNumber
						styles={Style.mb10}
						placeholder={'Ref. No.'}
						value={form.booking_ref_no__c}
						onChange={(value) => changeForm({ edited_field: 'booking_ref_no__c', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'booking_ref_no__c'}
						label={'Ref. No.'}
					        />


                        </View>
					</View>
                    <InputDate
                        style={Style.mb10}
                        placeholder={'Expected Delievery Date'}
                        value={HelperService.dateReadableFormat(form.expected_close_date__c)}
                        onChange={(value) => {
                            let formattedDate = HelperService.convertMomentDateToTimestamp(value);
                            formattedDate = HelperService.dateReadableFormatWithHyphen(formattedDate);
                            this.props.changeForm({ edited_field: 'expected_delivery_date__c', edited_value: formattedDate })
                        }}
                        error={validation.invalid && validation.invalid_field == 'expected_delivery_date__c'}
						label={'Expected Delievery Date*'}
						mindate={moment.now()}
                    />

{
	// <BlueButton title={"ATTACH DOCUMENTS"} style={{width: '53%', marginHorizontal: '46%',}} textStyle={{fontSize: 12}} >
	//             	<GenericIcon name={'photo'} style={{color: Colors.white, fontSize: 15}}/>
	//             </BlueButton>
	 // "acknowledgement__c": "https://abc.com/a.png",
   // "driving_license__c" : "https://abc.com/a.png",
   // "insurance__c" :"https://abc.com/a.png",
   // "rc__c" : "https://abc.com/a.png",
   // "others__c" : ["https://abc.com/a.png","https://abc.com/a1.png"],
   // "voter_id_card__c" :"https://abc.com/a.png",   
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



                    {
     //                	<View style={{ width: '100%', justifyContent: 'flex-start', alignItems: 'flex-start', marginTop:'4%'}}>
						
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
     //                    <View style={{flexDirection: 'row',  }}>
					// 	<GenericCheckBox 
					// 		style={{marginRight: '5%',marginBottom:'0%'}}
					// 		style1={{marginLeft:'20%'}}
					// 		label={'Voter Id Card'}
					// 		checked={form.test_drive_offered__c == 'Yes'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>

					// 	<GenericCheckBox
					// 		style={{marginHorizontal: '-3.5%', marginBottom:'0%'}} 
					// 		style1={{marginLeft:'38%'}}
					// 		label={'RC'}
					// 		checked={form.test_drive_offered__c == 'No'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>
					// 	</View>
     //                    <View style={{flexDirection: 'row', }}>
					// 	<GenericCheckBox 
					// 		style={{marginRight: '5%',marginBottom:'0%'}}
					// 		label={'Acknowledgement'}
					// 		checked={form.test_drive_offered__c == 'Yes'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>

					// 	<GenericCheckBox
					// 		style={{marginHorizontal: '4%', marginBottom:'0%'}} 
					// 		style1={{marginLeft:'13%'}}
					// 		label={'Insurance '}
					// 		checked={form.test_drive_offered__c == 'No'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'No' ? 'Yes' : 'No';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>
					// 	</View>
     //                    <View style={{flexDirection: 'row', }}>
					// 	<GenericCheckBox 
					// 		style={{marginRight: '5%', }}
					// 		style1={{marginLeft:'42%'}}
					// 		label={'others'}
					// 		checked={form.test_drive_offered__c == 'Yes'}
					// 		onPress={(event)=>{
			  //               	let value = form.test_drive_offered__c == 'Yes' ? 'No' : 'Yes';
				 //                changeForm({ edited_field: 'test_drive_offered__c', edited_value: value });
			  //               }}
					// 	/>

						
					// 	</View>
					// </View>
				}
					<View style={{marginTop: '5%'}}>
					<BlueButton title={"GENERATE BOOKING RECIEPT"} style={{width: '60%', marginHorizontal: '22%', height: 40}} textStyle={{fontSize: 12}} onPress={() => HelperService.showToast({ 
							message: 'Booking Reciept generated.', 
							duration: 2000, 
							buttonText: 'Okay' 
          				})}>
	            	
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
)(GenerateRecieptformScreen)