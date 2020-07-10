import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Accordion, Content } from "native-base";
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import GenericIcon from 'App/Components/GenericIcon'
import ShreeAction from 'App/Stores/Shree/Actions';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Style from './Styles'

class SalesInfo extends Component {
  	componentDidMount() {
	    const {
	      dealerId,
	      fetchData
	    } = this.props

	    fetchData({
	      dealerId
	    });
  	}


 	_renderHeader(item, expanded, data) {
 		let total = 0;

 		data.map((obj, index) => {
 			total += obj[item.content]
 		});

	    return (
	      <View style={Style.headerContainer}>
	      <Text style={Style.headerContainerText}>
	          {" "}{`${item.title}-(${total} MT)`}
	        </Text>
	        {expanded
	          ? <GenericIcon style={Style.headerContainerIcon} name="remove-circle" />
	          : <GenericIcon style={Style.headerContainerIcon} name="add-circle" />}
	      </View>
	    );
  	}

  	_renderContent(content, data) {
	    return (
	     	<View>
	     		{data.map((obj, index) =>
	            <GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              key={obj.Id + content}
	              content={[
	                <GenericDisplayCardStrip key={'Product__c' + obj.Id + content} label={`${obj['Product__c']}  ${obj['Packing__c']}`} value={obj[content.content]}/>,
	      	        ]}
	            />
	          )}
	     	</View>
	    );
  	}

  	getSalesInfoNode() {
	    let visibleNode = [];
	    const {
	      data,
	      loading
	    } = this.props;


	    const dataArray = [
		  { title: "Yesterday", content: "Yesterday_Sale__c" },
		  { title: "Month Till Date", content: "Month_till_Date__c" },
		  { title: "Previous Month", content: "Last_Three_Month__c" },
		  { title: "Last 3 Month Average", content: "Last_Three_Month_Average__c" },
		  { title: "Last 6 Month Average", content: "Last_Six_Month__c" }
		];


	    if (data && data.length && !loading) { 
	      visibleNode = (
		      	<Content padder style={{borderWidth: 0}}>
			        <Accordion 
			        	animation={true}
			          	dataArray={dataArray} 
			          	contentStyle={{ borderWidth: 0 }}
			          	headerStyle={{ borderWidth: 0 }}
			          	renderHeader={(item, expanded) => this._renderHeader(item, expanded, data)}
			          	renderContent={(content) => this._renderContent(content, data)}
			        />
		        </Content>
	      );
	    } else if (loading){  
	      visibleNode = <Loading />;
	    }else {   
	    	visibleNode = <NoDataFound text={'No SalesInfo data'} />;
	    }

	    return visibleNode;
 	}

  	render() {
	    return (
	      <View style={{ flex: 1, paddingTop: 10, borderWidth: 0 }}>
	        {this.getSalesInfoNode()}
	      </View>
	    );
  	}
}

const mapStateToProps = (state) => ({
	dealerId: state.shree.selectedShree.id,
  	data    : state.shree.salesInfo[state.shree.selectedShree.id],
  	loading : state.shree.fetchSalesInfoLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) 	 => dispatch(ShreeAction.fetchSalesInfo(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SalesInfo)
