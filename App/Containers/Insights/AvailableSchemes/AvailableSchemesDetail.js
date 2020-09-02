import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductCard from 'App/Components/ProductCard'
import ProductsActions from 'App/Stores/Products/Actions';
import InsightsActions from 'App/Stores/Insights/Actions';
import BlueButton from 'App/Components/BlueButton';
import GenericIcon from 'App/Components/GenericIcon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import NavigationService from 'App/Services/NavigationService'

class AvailableSchemesDetail extends Component {
 
  componentDidMount() {
		this.fetchCall()	
	}

	fetchCall() {
		const {
		
		  fetchData
		} = this.props
	
		fetchData({});
    }

// active_from__c: "2020-09-01T00:00:00.000Z"
// active_to__c: "2020-09-15T00:00:00.000Z"
// createddate: 1598988503000
// id: 26
// name: "Dealer specific scheme 1"
// party__c: "Consumer"
// pg_id__c: null
// scheme_scope__c: "Dealer Specific"
// scheme_type__c: "Cash Discount"
// schemesDetails: Array(1)
// 0:
// active_from__c: "2020-09-01T00:00:00.000Z"
// active_to__c: "2020-09-15T00:00:00.000Z"
// createddate: 1598988544000
// dealer__c: "0019D000009zum3QAA"
// id: 51
// name: "SD-00051"
// pg_id__c: null
// product__c: "a029D000002ZFPtQAO"
// product_name: "Photon LP"
// product_sfid: "a029D000002ZFPtQAO"
// scheme__c: "a0B9D000001xrFCUAY"
// scheme_amount__c: 1000
// scheme_name__c: null
// scheme_scope__c: "Dealer Specific"
// sfid: "a0K9D000000vwnoUAA"
// state__c: null
// state_name: null
// state_sfid: null
// systemmodstamp: 1598988544000
// _hc_err: null
// _hc_lastop: "SYNCED"
// __proto__: Object
// length: 1
// __proto__: Array(0)
// sfid: "a0B9D000001xrFCUAY"
// systemmodstamp: 1598988503000
// _hc_err: null
// _hc_lastop: "SYNCED"
    
    

  getDataCard(item) {
    return (
      <GenericDisplayCard dark={false}
          style={{ width: '95%', elevation: 0 }}
          content={[
            <GenericDisplayCardStrip 
              key={'Scheme Amount' + item.sfid} 
              label={'Scheme Amount'} 
              value={HelperService.currencyValue(item.scheme_amount__c)}
             />,
             <GenericDisplayCardStrip 
             key={'Product' + item.sfid} 
             label={'Poduct'} 
             value={item.product_name}
            />,

          
          ]}
        />
    );
  }



  getDataNode() {
    const {
      enquiry,
      loader,
      
    } = this.props;

    const {
        data
      } = this.props.navigation.state.params;

    let visibleNode = [];

    

    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            renderItem={({ item }) => this.getDataCard(item)}
            keyExtractor={item => item.id}
            onRefresh={() => this.fetchCall()}
            refreshing={loader}
          />
        );
      } else {
        visibleNode =  (
          <NoDataFound text={'No Schemes Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={{color: Colors.button, fontSize: 35, alignSelf: 'center', padding: 10}}
            />
          </NoDataFound>
        );
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (data && !data.length && !loader) {
      visibleNode =  (
          <NoDataFound text={'No Schemes Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={ApplicationStyles.refreshIcon}
            />
          </NoDataFound>
        );
    }else {
      visibleNode =  (
          <NoDataFound text={'No Schemes Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={ApplicationStyles.refreshIcon}
            />
          </NoDataFound>
        );
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 10}}>
       
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader: state.insights.loaders.getAllSchemeLoader,
  enquiry  : state.visitor.currentEnquiryId,
  state_id : state.user.state__c,
  data: state.insights.SchemeData,
});

const mapDispatchToProps = (dispatch) => ({
fetchData:(params) => dispatch(InsightsActions.getAllScheme(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableSchemesDetail)



