import React, { Component } from 'react'
import { View} from 'react-native'
import { connect } from 'react-redux'

import {HelperService} from 'App/Services/Utils/HelperService';
import SingleInfo from 'App/Components/SingleInfo';
import Separator from 'App/Components/Separator';
import Table from 'App/Components/Table';

import DashboardActions from 'App/Stores/Dashboard/Actions'



class MyDetails extends React.Component {
	filteredData(list) {
	    let filteredList = {};
	    const {
	    	agentid,
	      	searchFilters
	    } = this.props;

	    let selectedPSM = searchFilters['psm__c'];

	   	if (list[agentid]) {
	        filteredList[agentid] = list[agentid];
	    }
	    
	    return filteredList;
  	}

  	getTableHead() {
  		const {
		  isASM,
	    } = this.props;

	    return (['Target', 'Achieved', 'Month'])
  	}

	getSitesVisitedData() {
	    const {
	      isASM,
	      data,
	      psmList,
	      loaders
	    } = this.props

	    const {
	      siteCount
	    } = data;

	    const {
	      siteCountLoader
	    } = loaders;


		let tableHead = this.getTableHead();
		let tableData = [];
		let filteredData = this.filteredData(siteCount);

		if (_.isEmpty(filteredData)) {
			tableData = [];
		}else {
			_.map(filteredData, (value, key) => {
				const rowData = [];
	          	value.map((data) => {
	          		rowData.push(Number(data['target__c'] || 0));
	          		rowData.push(Number(data['count'] || 0));
	          		rowData.push(HelperService.getMonthMappingName(Number(data['month'] || 1) - 1));
	          	});
	          	tableData.push(rowData);
        	});
		}
		return {
			tableHead,
			tableData
		}
	}

	getCountersData() {
		const {
		  isASM,
	      data,
	      psmList,
	      loaders
	    } = this.props

	    const {
	      counters
	    } = data;

	    const {
	      countersLoader
	    } = loaders;


		let tableHead = this.getTableHead();
		let tableData = [];
		let filteredData = this.filteredData(counters);

		if (_.isEmpty(filteredData)) {
			tableData = [];
		}else {
			_.map(filteredData, (value, key) => {
				const rowData = [];
	          	value.map((data) => {
	          		rowData.push(Number(data['target__c'] || 0));
	          		rowData.push(Number(data['count'] || 0));
	          		rowData.push(HelperService.getMonthMappingName(Number(data['month'] || 1) - 1));
	          	});
	          	tableData.push(rowData);
        	});
		}
		return {
			tableHead,
			tableData
		}
	}

	getOrdersData() {
		const {
		  isASM,
	      data,
	      psmList,
	      loaders
	    } = this.props

	    const {
	      orderValue
	    } = data;

	    const {
	      orderValueLoader
	    } = loaders;


		let tableHead = this.getTableHead();
		let tableData = [];
		let filteredData = this.filteredData(orderValue);

		if (_.isEmpty(filteredData)) {
			tableData = [];
		}else {
			_.map(filteredData, (value, key) => {
				const rowData = [];
	          	value.map((data) => {
	          		rowData.push(Number(data['target__c'] || 0));
	          		rowData.push(Number(data['count'] || 0));
	          		rowData.push(HelperService.getMonthMappingName(Number(data['month'] || 1) - 1));
	          	});
	          	tableData.push(rowData);
        	});
		}
		return {
			tableHead,
			tableData
		}
	}

	getVisitsData() {
		const {
	      isASM,
	      data,
	      psmList,
	      loaders
	    } = this.props

	    const {
	      visitCount
	    } = data;

	    const {
	      visitCountLoader
	    } = loaders;


		let tableHead = this.getTableHead();
		let tableData = [];
		let filteredData = this.filteredData(visitCount);

		if (_.isEmpty(filteredData)) {
			tableData = [];
		}else {
			_.map(filteredData, (value, key) => {
				const rowData = [];
	          	value.map((data) => {
	          		rowData.push(Number(data['target__c'] || 0));
	          		rowData.push(Number(data['count'] || 0));
	          		rowData.push(HelperService.getMonthMappingName(Number(data['month'] || 1) - 1));
	          	});
	          	tableData.push(rowData);
        	});
		}
		return {
			tableHead,
			tableData
		}
	}

	getEventsData() {
		const {
		  isASM,
	      data,
	      psmList,
	      loaders
	    } = this.props

	    const {
	      eventsCount
	    } = data;

	    const {
	      eventsCountLoader
	    } = loaders;


		let tableHead = this.getTableHead();
		let tableData = [];
		let filteredData = this.filteredData(eventsCount);

		if (_.isEmpty(filteredData)) {
			tableData = [];
		}else {
			_.map(filteredData, (value, key) => {
				const rowData = [];
	          	value.map((data) => {
	          		rowData.push(Number(data['target__c'] || 0));
	          		rowData.push(Number(data['count'] || 0));
	          		rowData.push(HelperService.getMonthMappingName(Number(data['month'] || 1) - 1));
	          	});
	          	tableData.push(rowData);
        	});
		}
		return {
			tableHead,
			tableData
		}
	}


  	render() {
  		let sitesData 	 = this.getSitesVisitedData();
  		let countersData = this.getCountersData();
  		let ordersData	 = this.getOrdersData();
  		let visitsData	 = this.getVisitsData();
  		let eventsData	 = this.getEventsData();

    	return (
    		<View style={{paddingHorizontal: 15, paddingVertical: 15}}>
		    	<SingleInfo heading={'Order Value'} value={'None'} />
			       <Table tableHead={ordersData.tableHead} tableData={ordersData.tableData} />
			   	<Separator />

			    <SingleInfo heading={'New Counters'} value={'None'} />
			      <Table tableHead={countersData.tableHead} tableData={countersData.tableData} />
			   	<Separator />

			   	<SingleInfo heading={'Sites'} value={'None'} />
			      <Table tableHead={sitesData.tableHead} tableData={sitesData.tableData} />
			   	<Separator />

			   	<SingleInfo heading={'Visits'} value={'None'} />
			       <Table tableHead={visitsData.tableHead} tableData={visitsData.tableData} />
			   	<Separator />

			   	<SingleInfo heading={'Events'} value={'None'} />
			       <Table tableHead={eventsData.tableHead} tableData={eventsData.tableData} />
			   	<Separator />
       		</View>
    	) 
  	}
}


const mapStateToProps = (state) => ({
    token            : state.user.token,
    agentid          : state.user.id,
    isASM            : state.user.isASM,
    psmList          : state.user.psmList.concat([{id: '', name: 'All'}]),
    searchFilters    : state.dashboard.searchFilters,
    data             : state.dashboard.data,
    loaders          : state.dashboard.loaders
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchFilters:(params) => dispatch(DashboardActions.changeSearchFilters(params)),
  getOrderValue:(params)       => dispatch(DashboardActions.getOrderValue(params)),
  getVisitCount:(params)       => dispatch(DashboardActions.getVisitCount(params)),
  getSiteCount:(params)        => dispatch(DashboardActions.getSiteCount(params)),
  getCounters:(params)         => dispatch(DashboardActions.getCounters(params)),
  getEventCount:(params)       => dispatch(DashboardActions.getEventCount(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDetails)
