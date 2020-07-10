import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import InvoiceCard from 'App/Components/InvoiceCard'
import { connect } from 'react-redux'
import Loading from 'App/Components/Loading'

class InvoiceInfoScreen extends Component {
	componentDidMount() {
		const {
			id,
			data
		} = this.props.navigation.state.params;

		this.props.fetchInvoiceDetail({
			invoice_id: id,
			token: this.props.token,
			agentid: this.props.agentid
		})
	}



	getItemDetailsNode() {
		let visibleNode = <Loading />;
		const {
			id
		} = this.props.navigation.state.params;

		const {
			allInvoiceDetailsMapping
		} = this.props;

		let invoiceLineData = allInvoiceDetailsMapping[id];
		if (invoiceLineData) {
			visibleNode = (
				<ScrollView>
					{
						invoiceLineData.map((obj) =>
							<InvoiceCard
								key={obj.sfid}
								name={obj.name}
								orderredDate={obj.ordered_date__c}
								orderValue={obj.amount__c}
								quantity={obj.quantityinvoiced__c}
								style={{ width: '85%', elevation: 0 }}
							/>
						)
					}
				</ScrollView>
			);
		}

		return visibleNode;
	}


	render() {
		const {
			id,
			data
		} = this.props.navigation.state.params;

		return (
			<View style={{ flex: 1, paddingTop: 10 }}>
				<InvoiceCard
					data={data}
					customerName={'Invoice No. ' + data.name}
					orderDate={data.invoice_date__c}
					orderValue={data.invoice_amount__c}
					orderNumber={data.lr_no__c}
					dark={true}
				/>
				{this.getItemDetailsNode()}
			</View>
		);
	}
}

const mapStateToProps = (state) => ({
	token: state.user.token,
	agentid: state.user.id,

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(InvoiceInfoScreen)
