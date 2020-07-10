import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Style from './NonShreeVisitStyle'
import InputText from '../../Components/FormInput/InputText';
import InputMobile from '../../Components/FormInput/InputMobile';
import InputNumber from '../../Components/FormInput/InputNumber';
import BlueButton from '../../Components/BlueButton';
import SearchableDropdown from '../../Components/SearchableDropdown';
import Select from '../../Components/Select';
import TextArea from '../../Components/FormInput/TextArea';
// import CompetitorrModel from '../../Components/CompetitorrModel'


// import GenericIcon        from 'App/Components/GenericIcon';


class NonShreeVisit extends Component {
    constructor(props) {
        super(props);
        this.state = {
			Brand_Selling:'',
			Geo_Location:'',
			Name:'',
			Contact_Person:'',
			Contact_Person_Number:'',
			remark:'',
			itemData: {},
			isVisible:false,
			state1: '',

			meetingListType: [{
				'label': 'Nukkad Meet',
				'value': 'nukkad meet'
			},
			{
				'label': 'Electrician Meet',
				'value': 'electrician meet'
			},
			{
				'label': 'Retailer Meet',
				'value': 'retailer meet'
			},
			{
				'label': 'Commando Activity',
				'value': 'commando activity'
			},
			{
				'label': 'Roadshow',
				'value': 'roadshow'
			},
			{
				'label': 'Umbrella Activity',
				'value': 'umbrella activity'
			},],

			product: [{
				'label': 'PPC',
				'value': 'PPC'
			},
			{
				'label': 'PSC',
				'value': 'PSC'
			},
			{
				'label': 'PCC',
				'value': 'PCC'
			},
			{
				'label': 'OPC 43',
				'value': 'OPC 43'
			},
			{
				'label': 'OPC 53',
				'value': 'OPC 53'
			},],

			packing: [{
				'label': 'HDPE',
				'value': 'HDPE'
			},
			{
				'label': 'PAPER',
				'value': 'PAPER'
			}],

			brands: [{
				'label': 'Brand',
				'value': 'Brand'
			},
			{
				'label': 'Product',
				'value': 'Product'
			},
			{
				'label': 'Packing',
				'value': 'Packing'
			},],

			shreeNonShree: [{
				'label': 'Shree',
				'value': 'Shree'
			},
			{
				'label': 'Non-Shree',
				'value': 'Non-Shree'
			},],
		};
    }

    checkIn = () => {
       
        this.props.navigation.navigate('Dashboard')

	}
	
	submit() {
		// this.props.createInfluencer({

		// 	...this.props.influencerForm, ...{
		// 		token: this.props.token,
		// 		agentid: this.props.agentid
		// 	}
		// });
	}


	onLeave = () => {
        // this.props.onLeaveAction();
		// this.props.navigation.navigate('Dashboard')
		this.setState({isVisible: true})
		// this.CompetitorShowHideView()
	}


	toggleModal = async () => {
        // await this.props.clearExpenseForm();
        // this.setState({ isModalVisible: !this.state.isModalVisible });
        // this.props.showHideRemark == !this.props.showHideRemark
        // this.props.inOfficeAction();
    };

    onSubmitClick = () => {
        // this.props.approveRejectLocalExpense({
        //     ...this.props.expenseForm,
        //     ...{
        //         token: this.props.token,
        //         agentid: this.props.agentid,
        //         expense_status__c: this.state.status,
        //         sfid: this.state.itemData.sfid
        //     }
        // });
        // this.fetchExpense();
		// this.toggleModal();
		this.setState({isVisible: false})
    }

    onCancelClick = () => {
        // this.toggleModal();
    }


    render() {


		let visibleNode=[]; 

        if (this.state.isVisible == true){
            // visibleNode = (
                // <>

                //     <CompetitorrModel
                //         isVisible={this.state.isVisible}
                //         toggleModal={this.toggleModal}
                //         handleSubmit={this.onSubmitClick}
                //         handleCancel={this.onCancelClick}
                //         expenseForm={this.state.state1}
				// 		changeExpenseForm={ this.state.state1}
				// 		CounterVisitData={this.state.product}
				// 		brands={this.state.brands}
				// 		packing={this.state.packing}
                //         item={this.state.itemData} 
				// 		/>
                // </>

            // );
		}
		
		return (
			<View style={Style.container}>

				
				<Text style={Style.heading}>{'Non Shree Counters'}</Text>
				<ScrollView 
				showsVerticalScrollIndicator={false}
				style={Style.action}>


				<InputText
						style={Style.mb10}
						placeholder={'Name of shop'}
						value={this.state.Name}
						onChange={(text) => this.setState({Name: text})}
						// value={influencerForm.lastname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'lastname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'lastname'}
						label={'Name of shop'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Contact Person'}
						value={this.state.Name}
						onChange={(text) => this.setState({Name: text})}
						// value={influencerForm.lastname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'lastname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'lastname'}
						label={'Contact Person'}
					/>


				<InputText
						style={Style.mb10}
						placeholder={'Geo Location'}
						value={this.state.Geo_Location}
						onChange={(text) => this.setState({Geo_Location: text})}
						// value={influencerForm.firstname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'firstname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Geo Location'}
					/>


				<InputMobile
						styles={Style.mb10}
						placeholder={'Contact Person Number'}
						value={this.state.Contact_Person_Number}
						onChange={(text) => this.setState({Contact_Person_Number: text})}
						// value={influencerForm.phone}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'phone', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'phone'}
						label={'Contact Person Number'}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Shree/Non-Shree'}
						list={this.state.shreeNonShree}
						selected={this.state.Product_state}
						onChange = {(value) => this.setState({Product_state:value})}
						// onChange={(value) => {
						// 	this.props.changeInfluencerForm({ edited_field: 'category__c', edited_value: value })
						// }}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Customer Type'}
						list={this.state.product}
						selected={this.state.Product_state}
						onChange = {(value) => this.setState({Product_state:value})}
						// onChange={(value) => {
						// 	this.props.changeInfluencerForm({ edited_field: 'category__c', edited_value: value })
						// }}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Counter Potential'}
						value={this.state.Name}
						onChange={(text) => this.setState({Name: text})}
						// value={influencerForm.lastname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'lastname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'lastname'}
						label={'Counter Potential'}
					/>

				<TextArea
                    
                    placeholder={'Add Comments'}
                    numberOfLines={5}
                    value={this.state.remark}
                    // error={validation.invalid && validation.invalid_field == 'venue_details__c'}
                    // onChange={(txtVelue) => this.chechBoxData(txtVelue)}
                    onChange={(velue) => this.setState({remark: velue})}

                    />

				<TouchableOpacity block rounded style={{ ...Style.Compbutton }} onPress={() => this.onLeave()}>
                     <Text style={Style.Comptext}>{'Competitor Data'}</Text>
                    </TouchableOpacity>

					{visibleNode}

				{/* <Select style={Style.selectPickerStyle}
						label={'Competitor Data'}
						list={this.state.product}
						selected={this.state.Product_state}
						onChange = {(value) => this.setState({Product_state:value})}
						// onChange={(value) => {
						// 	this.props.changeInfluencerForm({ edited_field: 'category__c', edited_value: value })
						// }}
					/> */}





				{/* <InputText
						style={Style.mb10}
						placeholder={'Brand Selling' + '*'}
						value={this.state.Brand_Selling}
						onChange={(text) => this.setState({Brand_Selling: text})}
						// value={influencerForm.firstname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'firstname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={`Brand Selling `}
					/>

					

					<InputText
						style={Style.mb10}
						placeholder={'Contact Person' + '*'}
						value={this.state.Contact_Person}
						onChange={(text) => this.setState({Contact_Person: text})}
						// value={influencerForm.lastname}
						// onChange={(value) => this.props.changeInfluencerForm({ edited_field: 'lastname', edited_value: value })}
						// error={validation.invalid && validation.invalid_field == 'lastname'}
						label={'Contact Person'}
					/> */}

					

					<BlueButton
						style={Style.button}
						rounded
						large
						title={'SUBMIT'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View>
		)
	}
}

export default NonShreeVisit;