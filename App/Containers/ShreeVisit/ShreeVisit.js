import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Style from './ShreeVisitStyle'
import InputText from '../../Components/FormInput/InputText';
import TextArea from '../../Components/FormInput/TextArea';
import InputNumber from '../../Components/FormInput/InputNumber';
import BlueButton from '../../Components/BlueButton';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import Select from 'App/Components/Select';
import BackArrowButton from 'App/Components/BackArrowButton';
import Modal from "react-native-modal";


import GenericIcon                          from 'App/Components/GenericIcon';
import NavigationService                    from 'App/Services/NavigationService';
import { Colors }                           from 'App/Theme';
import { Body, Container, Header, Icon, Left, Right, Title } from 'native-base';



class ShreeVisit extends Component {
    constructor(props) {
        super(props);
        this.state = {

			state1: '',
			Sales_state:'',
			Dealer_code:'',
			Dealer_name:'',
			Address:'',
			Address2:'',
			City:'',
			Region:'',
			Tehsil:'',
			Contact:'',
			Email:'',
			GST_Registration_No:'',
			Security_Deposit:'',
			External_id:'',
			Company_name: '',
			Potential:'',
			Outstanding:'',
			Last_Three_Payments_Received:'',
			isVisible:false,
			itemData: {},



			Competitor_Remarks:'',

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
			outStanding: [{
				'label': '0-3',
				'value': '0-3'
			},
			{
				'label': '3-7',
				'value': '3-7'
			},
			{
				'label': '7-14',
				'value': '7-14'
			},
			{
				'label': '14-30',
				'value': '14-30'
			},
			{
				'label': '30-60',
				'value': '30-60'
			},
			{
				'label': '60 & amp above',
				'value': '60 & amp above'
			},],
			sales: [{
				'label': 'Till date sales',
				'value': 'Till date sales'
			},
			{
				'label': 'Last month',
				'value': 'Last month'
			},
			{
				'label': 'Last 3 month average sale',
				'value': 'Last 3 month average sale'
			},
			{
				'label': 'Last 6 month average sale',
				'value': 'Last 6 month average sale'
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

		// value={this.state.Mobile} onChange={(text) => this.setState({Mobile: text})} ERP_ID
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
	

	// CompetitorShowHideView = () => {
		

	// 	let body = (
	// 		<View style={{ margin: 8, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
	// 			<Text style={{ fontSize: 18, color: Colors.button, marginBottom: 10 }}>Competitor Remarks</Text>
	// 			<TextArea
	// 				placeholder={'Competitor Remarks'}
	// 				numberOfLines={5}
	// 				value={this.state.Competitor_Remarks}
	// 				onChange={(value) => this.setState({Competitor_Remarks:value})}
	// 				// error={validation.invalid && validation.invalid_field == 'remark__c'}
	// 			/>

	// 		</View>
	// 	);
		
	// 	return (
	// 		<Modal
	// 			isVisible={this.state.isVisible}
	// 			// onBackdropPress={toggleModal}
	// 			animationIn={"slideInUp"}
	// 		>
	// 			<View style={Style.container}>
	// 				{body}
	// 			</View>
	// 		</Modal>
	// 	);


	// }











    render() {

		let visibleNode=[]; 

        if (this.state.isVisible == true){
            // visibleNode = (
            //     <>

            //         <CompetitorrModel
            //             isVisible={this.state.isVisible}
            //             toggleModal={this.toggleModal}
            //             handleSubmit={this.onSubmitClick}
            //             handleCancel={this.onCancelClick}
            //             expenseForm={this.state.state1}
			// 			changeExpenseForm={ this.state.state1}
			// 			CounterVisitData={this.state.product}
			// 			brands={this.state.brands}
			// 			packing={this.state.packing}
            //             item={this.state.itemData} 
			// 			/>
            //     </>

            // );
        }






		return (
			<View style={Style.container}>

				{/* <BackArrowButton/> */}

				{/* <View>
                <Header style={Style.header}>
                    <Left>
                        <BackArrowButton />
                    </Left>
                </Header>
            </View> */}
				
				<Text style={Style.heading}>{'Shree Counters'}</Text>
				<ScrollView 
				showsVerticalScrollIndicator={false}
				style={Style.action}>

				<InputText
						style={Style.mb10}
						placeholder={'Dealer code'}
						value={this.state.Dealer_code}
						onChange={(text) => this.setState({Dealer_code: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Dealer code'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Dealer name'}
						value={this.state.Dealer_name}
						onChange={(text) => this.setState({Dealer_name: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Dealer name'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Address'}
						value={this.state.Address}
						onChange={(text) => this.setState({Address: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Address'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Address2'}
						value={this.state.Address2}
						onChange={(text) => this.setState({Address2: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Address2'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'City'}
						value={this.state.City}
						onChange={(text) => this.setState({City: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'City'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'State'}
						value={this.state.state1}
						onChange={(text) => this.setState({state1: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'State'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Region'}
						value={this.state.Region}
						onChange={(text) => this.setState({Region: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Region'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Tehsil'}
						value={this.state.Tehsil}
						onChange={(text) => this.setState({Tehsil: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Tehsil'}
					/>


				<InputText
						style={Style.mb10}
						placeholder={'Contact'}
						value={this.state.Contact}
						onChange={(text) => this.setState({Contact: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Contact'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Email'}
						value={this.state.Email}
						onChange={(text) => this.setState({Email: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Email'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'GST Registration No.'}
						value={this.state.GST_Registration_No}
						onChange={(text) => this.setState({GST_Registration_No: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'GST Registration No.'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Security Deposit'}
						value={this.state.Security_Deposit}
						onChange={(text) => this.setState({Security_Deposit: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Security Deposit'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'External id'}
						value={this.state.External_id}
						onChange={(text) => this.setState({External_id: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'External id'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Company name'}
						value={this.state.Company_name}
						onChange={(text) => this.setState({Company_name: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Company name'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Potential'}
						value={this.state.Potential}
						onChange={(text) => this.setState({Potential: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Potential'}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Outstanding'}
						value={this.state.Outstanding}
						onChange={(text) => this.setState({Outstanding: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Outstanding'}
					/>

				<Select style={Style.selectPickerStyle}
						label={'Sales'}
						list={this.state.sales}
						selected={this.state.Sales_state}
						onChange = {(value) => this.setState({Sales_state:value})}
						// onChange={(value) => {
						// 	this.props.changeInfluencerForm({ edited_field: 'category__c', edited_value: value })
						// }}
					/>

				<InputText
						style={Style.mb10}
						placeholder={'Last Three Payments Received'}
						value={this.state.Last_Three_Payments_Received}
						onChange={(text) => this.setState({Last_Three_Payments_Received: text})}
						// error={validation.invalid && validation.invalid_field == 'firstname'}
						label={'Last Three Payments Received'}
					/>

				{/* <Select style={Style.selectPickerStyle}
						label={'Competitor Data'}
						list={this.state.product}
						selected={this.state.Product_state}
						onChange = {(value) => this.setState({Product_state:value})}
						// onChange={(value) => {
						// 	this.props.changeInfluencerForm({ edited_field: 'category__c', edited_value: value })
						// }}
					/> */}

					<View>

					</View>

				<TouchableOpacity block rounded style={{ ...Style.Compbutton }} onPress={() => this.onLeave()}>
                     <Text style={Style.Comptext}>{'Competitor Data'}</Text>
                    </TouchableOpacity>

					{visibleNode}


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

export default ShreeVisit;