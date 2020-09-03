import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image, RefreshControl } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import HeadingBox from 'App/Components/HeadingBox'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Separator from 'App/Components/Separator';
import InsightsActions from 'App/Stores/Insights/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';


class DashboardSummaryScreen extends React.Component {

	componentDidMount() {
		this.fetchCall()	
	}

	fetchCall() {
		const {
		
		  fetchData
		} = this.props
	
		fetchData({
		 
		});
    }
    
    getIndexLeadSource(lead_source__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.currentMonth.findIndex(obj => obj.lead_source__c === lead_source__c);
    }
    getIndexPrevLeadSource(lead_source__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.prevMonth.findIndex(obj => obj.lead_source__c === lead_source__c);
    }

    getIndexLeadstatus(lead_status__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.currentMonth.findIndex(obj => obj.lead_status__c === lead_status__c);
    }

    getIndexPrevLeadstatus(lead_status__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.prevMonth.findIndex(obj => obj.lead_status__c === lead_status__c);
    }

    getIndexLeadfrom(lead_from__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.currentMonth.findIndex(obj => obj.lead_from__c === lead_from__c);
    }


    getIndexPrevLeadfrom(lead_from__c) {
      const {
        loader,
        data,
        currentScreen
        } = this.props;

      return data.prevMonth.findIndex(obj => obj.lead_from__c === lead_from__c);
    }

    getIndexProduct(product__c) {
      const {
        loader,
        data,
        productsList,
        currentScreen
        } = this.props;

      return data.product.findIndex(obj => obj.product__c === product__c);
    }
    
  
    
  render() {
    const {
			loader,
      data,
      productsList,
      currentScreen
		  } = this.props;

    
  
    return (
        <View style={Styles.container}>
      	<ScrollView 
          style={Styles.container}
          refreshControl={
            <RefreshControl refreshing={loader} onRefresh={() => this.fetchCall()} />
          }
        >
          	<HeadingBox value={'This Month'}/>
          		<GenericDisplayCard dark={false}
                style={{ width: '88%', elevation: 0 }}
            
	              content={[
		                <GenericDisplayCardStrip key={'Total Walk Ins'} label={'Total Walk Ins'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexLeadSource("Walk Ins")] ?  data.currentMonth[this.getIndexLeadSource("Walk Ins")].count : 0}/>,
		                <Separator key={1}/>,
		                <GenericDisplayCardStrip key={'Open Leads'} label={'Open Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexLeadstatus("Open")] ?  data.currentMonth[this.getIndexLeadstatus("Open")].count : 0}/>,
		                <Separator key={2}/>,
		                <GenericDisplayCardStrip key={'Won Leads'} label={'Won Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexLeadstatus("Won")] ?  data.currentMonth[this.getIndexLeadstatus("Won")].count : 0}/>,
		                <Separator key={3}/>,
		                <GenericDisplayCardStrip key={'Lost Leads'} label={'Lost Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexLeadstatus("Lost")] ?  data.currentMonth[this.getIndexLeadstatus("Lost")].count : 0}/>,
		                <Separator key={4}/>,
		                <GenericDisplayCardStrip key={'Ho Assigned Leads'} label={'Ho Assigned Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexLeadfrom("HO")] ?  data.currentMonth[this.getIndexLeadfrom("HO")].count : 0}/>,
              		]}
            	/>
          	<HeadingBox value={'Previous Month'}/>
          		<GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              content={[
                  <GenericDisplayCardStrip key={'Total Walk Insqw'} label={'Total Walk Ins'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexPrevLeadSource("Walk Ins")] ?  data.currentMonth[this.getIndexPrevLeadSource("Walk Ins")].count : 0}/>,
		                <Separator key={1}/>,
		                <GenericDisplayCardStrip key={'Open Leadsqw'} label={'Open Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexPrevLeadstatus("Open")] ?  data.currentMonth[this.getIndexPrevLeadstatus("Open")].count : 0}/>,
		                <Separator key={2}/>,
		                <GenericDisplayCardStrip key={'Won Leadsqw'} label={'Won Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexPrevLeadstatus("Won")] ?  data.currentMonth[this.getIndexPrevLeadstatus("Won")].count : 0}/>,
		                <Separator key={3}/>,
		                <GenericDisplayCardStrip key={'Lost Leadsqw'} label={'Lost Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexPrevLeadstatus("Lost")] ?  data.currentMonth[this.getIndexPrevLeadstatus("Lost")].count : 0}/>,
		                <Separator key={4}/>,
		                <GenericDisplayCardStrip key={'Ho Assigned Leadsqw'} label={'Ho Assigned Leads'} value={data&&data.currentMonth&&data.currentMonth[this.getIndexPrevLeadfrom("HO")] ?  data.currentMonth[this.getIndexPrevLeadfrom("HO")].count : 0}/>,
		                
              		]}
            	/>
          	<HeadingBox value={'Product Performance \n(This Month)'}/>
          		<GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              content={
                  data && data.product ? data.product.map((obj, index) => obj.product__c ? <View key={obj.product__c}><GenericDisplayCardStrip  label={HelperService.findMatchingKeyValueInList(productsList, 'id', obj.product__c, 'name')} value={obj.count}/><Separator /></View> : []) : [] }

            	/>
        </ScrollView>
        </View>
    );
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  data: state.insights.DashboardSummaryData,
  loader: state.insights.loaders.getDashboardSummaryLoader,
  productsList: state.common.productsList,
})

const mapDispatchToProps = (dispatch) => ({
	fetchData:(params)            => dispatch(InsightsActions.getDashboardSummary(params)),
  
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSummaryScreen)


const Styles = StyleSheet.create({
  container: {
  	flex: 1,
  	marginBottom: hp('2%')
  },
  header: {
    alignItems: 'flex-start',
    height: hp('17%'),
    flexDirection: 'column',
    justifyContent: 'center'
  },
  arrowContainer: {
    width: wp('20%'),
    paddingTop: hp('1%')
  },
  backArrow: {
    color: Colors.primary,
    padding: 5
  },
  actionButton: {
    overflow: 'visible',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5%'),
    minWidth: wp('25%'),
  },
  actionButtonText: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5
  },
});





