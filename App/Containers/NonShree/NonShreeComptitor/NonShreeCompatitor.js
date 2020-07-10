import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Style from './NonShreeCompatitorStyle'
import InputText from '../../../Components/FormInput/InputText';
import InputMobile from '../../../Components/FormInput/InputMobile';
import BlueButton from '../../../Components/BlueButton';
import Select from '../../../Components/Select';
import TextArea from '../../../Components/FormInput/TextArea';
import { connect } from 'react-redux';
import NonShreeSiteAction from '../../../Stores/NonShree/Actions';
import { HelperService } from '../../../Services/Utils/HelperService';
import InputNumber from '../../../Components/FormInput/InputNumber';


class NonShreeCompatitor extends Component {

	state = {

		counterList:[{
			'label': 'Hemant',
			'value': 'Hemant'
		},
		{
			'label': 'Kamal Kumar',
			'value': 'Kamal Kumar'
		},
		{
			'label': 'Kamal Kumar',
			'value': 'Kamal Kumar'
		},
		{
			'label': 'Kamal Kumar',
			'value': 'Kamal Kumar'
		},
		{
			'label': 'Kamal Kumar',
			'value': 'Kamal Kumar'
		}],
		// access_token:''
  
	  };

  componentDidMount() {

	
		this.props.changeNonShreeForm({ edited_field: 'CounterVisit', edited_value: 'a0G9D0000007fpIUAQ' });
	}
   

	submit() {
		this.props.createCompetitor({

			...this.props.nonShreeForm, ...{
				access_token: this.props.access_token,
			}
		});
	}

// 	{
// 		// "CounterName":"Hemant",
// 		// "CounterVisit":"a0G9D0000007fpIUAQ", (id get from response of counter visit creation)
// 		// "CounterType":"Shree",
// 		// "Packing":"HDPE",
// 		// "Product":"PPC",
// 		// "RSP":"200",
// 		// "WSP":"300",
// 		// "Brand":"KCP"
//    }
   


    render() {

		const { validation, nonShreeForm, createNonShreeLoader } = this.props;
		
		return (
			<View style={Style.container}>

				
				<Text style={Style.heading}>{'Add Competitor'}</Text>
				<ScrollView 
				showsVerticalScrollIndicator={false}
				style={Style.action}>


				<Select style={Style.selectPickerStyle}
						label={'Counter Name'}
						list={this.state.counterList}
						selected={nonShreeForm.CounterName}
						onChange={(value) => {
							this.props.changeNonShreeForm({ edited_field: 'CounterName', edited_value: value })
						}}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Brand'}
						list={this.props.Brand}
						selected={nonShreeForm.Brand}
						onChange={(value) => {
							this.props.changeNonShreeForm({ edited_field: 'Brand', edited_value: value })
						}}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Product'}
						list={this.props.productPPC}
						selected={nonShreeForm.product}
						onChange={(value) => {
							this.props.changeNonShreeForm({ edited_field: 'product', edited_value: value })
						}}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Packing'}
						list={this.props.packing}
						selected={nonShreeForm.packing}
						onChange={(value) => {
							this.props.changeNonShreeForm({ edited_field: 'packing', edited_value: value })
						}}
					/>

					<Select style={Style.selectPickerStyle}
						label={'Counter Type'}
						list={this.props.counterType}
						selected={nonShreeForm.CounterType}
						onChange={(value) => {
							this.props.changeNonShreeForm({ edited_field: 'CounterType', edited_value: value })
						}}
					/>

					<InputNumber
                        style={Style.mb10}
                        placeholder={'RSP'}
                        value={nonShreeForm.RSP}
                        onChange={(value) => this.props.changeNonShreeForm({ edited_field: 'RSP', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'RSP'}
						label={'RSP'}
                    />

					<InputNumber
                        style={Style.mb10}
                        placeholder={'WSP'}
                        value={nonShreeForm.WSP}
                        onChange={(value) => this.props.changeNonShreeForm({ edited_field: 'WSP', edited_value: value })}
						error={validation.invalid && validation.invalid_field == 'WSP'}
						label={'WSP'}
                    />

					 

					<BlueButton
						style={Style.button}
						title={'SUBMIT'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	access_token: state.startDay.access_token,
	nonShreeForm: state.nonShree.nonShreeForm,
	createNonShreeLoader: state.nonShree.createNonShreeLoader,
	validation: state.nonShree.nonShreeFormValidation,


	counterType: state.nonShree.counterType,
	customerType: state.nonShree.customerType,
	CounterName: state.startDay.counterName,

	productPPC: state.startDay.productPPC,
	Brand: state.startDay.Brand,
	packing: state.startDay.packing

  });

const mapDispatchToProps = (dispatch) => ({
	changeNonShreeForm: (params) => dispatch(NonShreeSiteAction.changeNonShreeForm(params)),
	createNonShree: (params) => dispatch(NonShreeSiteAction.createNonShree(params)),
	clearnonShreeForm: () => dispatch(NonShreeSiteAction.clearnonShreeForm()),
	createCompetitor: (params) => dispatch(NonShreeSiteAction.createCompetitor(params))

});

export default  connect(
		mapStateToProps,
		mapDispatchToProps
	)(NonShreeCompatitor)
	
