import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard} from 'react-native';
import Style from './NonShreeSiteStyle'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import BlueButton from 'App/Components/BlueButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import NonShreeSiteAction from 'App/Stores/NonShree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import InputNumber from 'App/Components/FormInput/InputNumber';
import NavigationService from 'App/Services/NavigationService'
import NonShreeBrand from './NonShreeBrand';
import { Colors} from 'App/Theme'
import _ from 'lodash';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class NonShreeSite extends Component {
	submit() {
		const { 
			createNonShree, 
			nonShreeForm,
			access_token
		} = this.props;

		Keyboard.dismiss(); 
		createNonShree({
			form: nonShreeForm, 
			...{
				access_token: access_token
			}
		});
	}



	// "CounterName":"Kamal Kumar",
	// "ContactPerson":"Rajeev",
	// "ContactPersonNo":"9089098989",
	// "CounterType":"Shree",
	// "CustomerType":"Retailer",
	// "CounterPotential":"",
	// "AddComment":"",
	// "Latitude":"28.610001",
	// "Longitude":"77.230003",
	// "LoginUserId":"0059D000001Ggxc"


    render() {
		const { 
			loader,
			validation, 
			BrandsList,
			nonShreeForm,
			changeNonShreeForm 
		} = this.props;



		let brandsNode = [];


		// brandsNode = nonShreeForm.Brands.map((obj, index) => {
		// 	return(
		// 		<View style={Style.brandContainer} key={obj.id}>
		// 			<Select style={Style.selectBrandPickerStyle}
		// 				label={'Brand ' + obj.id + '*'}
		// 				list={BrandsList}
		// 				selected={obj.name}
		// 				onChange={(value) => {
		// 					let updatedBrands = _.cloneDeep(nonShreeForm.Brands);
		// 					updatedBrands.map((brand) => {
		// 						brand.id == obj.id ?  (brand.name = value) :  ''
		// 					})
		// 					changeNonShreeForm({ edited_field: 'Brands', edited_value: updatedBrands })
		// 				}}
		// 			/>
		// 			<View style={{width: wp('30%')}}>
		// 				<InputNumber
		// 					style={Style.potentialInput}
		// 					placeholder={'Potential'}
		// 					value={obj.potential}
		// 					label={'Potential*'}
		// 					onChange={(value) => {
		// 						let updatedBrands =  _.cloneDeep(nonShreeForm.Brands);
		// 						updatedBrands.map((brand) => {
		// 							brand.id == obj.id ?  (brand.potential = value) :  ''
		// 						})
		// 						changeNonShreeForm({ edited_field: 'Brands', edited_value: updatedBrands })
		// 					}}
		// 				/>
		// 			</View>
		// 		</View>
		// 	)
		// });
		
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'Non Shree Counters'}</Text>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>


				 <InputText
						style={Style.mb10}
						placeholder={'Counter Name*'}
						value={nonShreeForm.CounterName}
						onChange={(value) => changeNonShreeForm({ edited_field: 'CounterName', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'CounterName'}
						label={'Counter Name*'}
					/>

					
					
					<InputText
						style={Style.mb10}
						placeholder={'Contact Person*'}
						value={nonShreeForm.ContactPerson}
						onChange={(value) => changeNonShreeForm({ edited_field: 'ContactPerson', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPerson'}
						label={'Contact Person*'}
					/>

					<InputMobile
						styles={Style.mb10}
						placeholder={'Contact Person Number*'}
						value={nonShreeForm.ContactPersonNo}
						onChange={(value) => changeNonShreeForm({ edited_field: 'ContactPersonNo', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'ContactPersonNo'}
						label={'Contact Person Number*'}
					/>
						

					<Select 
						style={Style.selectPickerStyle}
						label={'Customer Type'}
						list={[{label: 'Retailer', value: 'Retailer'}, {label: 'Dealer', value: 'Dealer'}]}
						selected={nonShreeForm.CustomerType}
						onChange={(value) => changeNonShreeForm({ edited_field: 'CustomerType', edited_value: value })}
					/>


					
					<View style={{marginBottom: 25}}>
						<NonShreeBrand 
							brandFieldName={'Brand1'} 
							brandFieldLabel={'Brand 1'} 
							brandFieldValue={nonShreeForm.Brand1}
							potentialFieldName={'Brand1Potential'}
							potentialFieldLabel={'Potential 1'}
							potentialFieldValue={nonShreeForm.Brand1Potential}
							editCallback={(params) => changeNonShreeForm(params)}
						/>

						<NonShreeBrand 
							brandFieldName={'Brand2'} 
							brandFieldLabel={'Brand 2'} 
							brandFieldValue={nonShreeForm.Brand2}
							potentialFieldName={'Brand2Potential'}
							potentialFieldLabel={'Potential 2'}
							potentialFieldValue={nonShreeForm.Brand2Potential}
							editCallback={(params) => changeNonShreeForm(params)}
						/>

						<NonShreeBrand 
							brandFieldName={'Brand3'} 
							brandFieldLabel={'Brand 3'} 
							brandFieldValue={nonShreeForm.Brand3}
							potentialFieldName={'Brand3Potential'}
							potentialFieldLabel={'Potential 3'}
							potentialFieldValue={nonShreeForm.Brand3Potential}
							editCallback={(params) => changeNonShreeForm(params)}
						/>

						<NonShreeBrand 
							brandFieldName={'Brand4'} 
							brandFieldLabel={'Brand 4'} 
							brandFieldValue={nonShreeForm.Brand4}
							potentialFieldName={'Brand4Potential'}
							potentialFieldLabel={'Potential 4'}
							potentialFieldValue={nonShreeForm.Brand4Potential}
							editCallback={(params) => changeNonShreeForm(params)}
						/>

						<NonShreeBrand 
							brandFieldName={'Brand5'}
							brandFieldLabel={'Brand 5'} 
							brandFieldValue={nonShreeForm.Brand5}
							potentialFieldName={'Brand5Potential'}
							potentialFieldLabel={'Potential 5'}
							potentialFieldValue={nonShreeForm.Brand5Potential}
							editCallback={(params) => changeNonShreeForm(params)}
						/>
					</View>

					<TextArea
	                    placeholder={'Add Comments'}
	                    numberOfLines={5}
	                    value={nonShreeForm.AddComment}
						onChange={(value) => changeNonShreeForm({ edited_field: 'AddComment', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'RemAddCommentark'}
                	/>
					 

					<BlueButton
						style={Style.button}
						title={'SUBMIT'}
						loading={loader}
						disabled={loader}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	nonShreeForm: state.nonShree.nonShreeForm,
	loader: state.nonShree.createNonShreeLoader,
	validation: state.nonShree.nonShreeFormValidation,
	access_token: state.startDay.access_token,
	BrandsList : state.startDay.Brand
  });
  
  const mapDispatchToProps = (dispatch) => ({
	changeNonShreeForm: (params) => dispatch(NonShreeSiteAction.changeNonShreeForm(params)),
	createNonShree: (params) => dispatch(NonShreeSiteAction.createNonShree(params)),
	clearnonShreeForm: () => dispatch(NonShreeSiteAction.clearnonShreeForm())
  });

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(NonShreeSite)