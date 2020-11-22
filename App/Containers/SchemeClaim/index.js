import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item,FlatList} from 'react-native';
import Style from './styles'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import NoDataFound from 'App/Components/NoDataFound'
import BlueButton from 'App/Components/BlueButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import GenericIcon from 'App/Components/GenericIcon'
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import {ApplicationStyles,Colors} from 'App/Theme'
import DealersActions from 'App/Stores/Dealers/Actions';
import Filter from './filter';
import Loading from 'App/Components/Loading'
import Select from 'App/Components/Select';

// "first_name__c": "test 12",	(*mandatory)
// 	"last_name__c": "enquiry visit test",	(*mandatory)
// 	"contact_number__c": "1646464944", 	(*mandatory)
// 	"age__c":  "28",
// 	"genders__c": "Male",
// 	"product__c": "a029D000002ZFPtQAO", 	(*mandatory)
// 	"mode_of_buying__c": "Cash",
// 	"exchange_required__c":"No",
// 	"lead_source__c": "Event",
// 	"existing_two_wheelers__c": "Yes",
// 	"purpose_of_buying__c" : "Nothing",
// "usage__c": "Nothing",
// "expected_close_date__c": "2020-08-19",
//  "dealers_sales_person__c": "a0O9D000001hLV9UAM",
// 	"email_id__c": "abc@gmail.com",
// 	"occupation__c" : "Business",
// 	"test_drive_offered__c": "Yes",		(*mandatory)
// 	"customer__c": "0039D000008BMX2QAO",
// 	"address_line_1__c" : “test address”


class SchemeClaimInfoScreen extends Component {
  componentDidMount() {
		this.fetchCall({})	
	}

	fetchCall() {
		const {	
      fetchData,
      searchFilters
		} = this.props
	
		fetchData({date: `${searchFilters['selectedYear']}-${searchFilters['selectedMonth']+1}-${HelperService.getCurrentDate()}`});
  }
    

  

    
    getDataNode() {
      const {
        loader,
        data,
        claimSearchFilters,
        setDealerClaimInfoForm
        } = this.props;

     
        
        let visibleNode = [];
    
        if (data&&data.claims) {

          let filteredClaimList ='';
          if(claimSearchFilters['claim_type'] == 'Submitted')
          {
            filteredClaimList=data.claims&&data.claims.Submitted?data.claims.Submitted:''
            
          }
          if(claimSearchFilters['claim_type'] == 'Approved')
          {
            filteredClaimList=data.claims&&data.claims.Approved?data.claims.Approved:''
          }
          if(claimSearchFilters['claim_type'] == 'Rejected')
          {
            filteredClaimList=data.claims&&data.claims.Rejected?data.claims.Rejected:''
          }
          if (filteredClaimList.length) {
            visibleNode = (
              <FlatList
                data={filteredClaimList}
                renderItem={({ item }) => 
                    <GenericDisplayCard dark={false}
                      style={{ width: '100%', elevation: 0 }}
                     
                    
                      //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                      content={[
                          
                          <GenericDisplayCardStrip key={'Claim Number' + item.name} label={'Claim Number:'} value={item.name} />,
                         
                         
                          <GenericDisplayCardStrip key={'status' + item.name} label={'Status:'} value={item.status__c}  />,
                         
                            <GenericDisplayCardStrip key={'Claim Submission Date' + item.name} label={'Claim Submission Date:'}   value={ HelperService.dateReadableFormat(item.scheme_claim_submission_date__c)} />,
                            <GenericDisplayCardStrip key={'Expected Claim Amount' + item.name} label={'Expected Claim Amount:'}  value={item.expected_claim_amount_by_dealer__c}  />,
                            <GenericDisplayCardStrip key={'Scheme Applicable' + item.name} label={'Scheme Applicable:'}  value={item.scheme_applicable_name}  />,
                            <GenericDisplayCardStrip key={'Customer Name' + item.name} label={'Customer Name:'}  value={item.customer_name__c}  />,
                            <GenericDisplayCardStrip key={'Warranty Registered' + item.name} label={'Warranty Registered:'}  value={item.registered_for_warranty__c  ? 'Yes' : 'No'}  />,
                       (item.field_team_status__c=='Rejected')  ?   <BlueButton title={'ReSubmit'}  style={{alignSelf: 'center', width: '32%' , zIndex: 3}} textStyle={Style.callButtonText} onPress={() => {NavigationService.navigate('SchemeClaimformScreen',{data: item}); setDealerClaimInfoForm(item);} }/> :[]


                        
                  ]}
                />}
                keyExtractor={item => item.sfid}
                refreshing={loader}
                onRefresh={() => this.fetchCall()}
              />
            );
          } else {
            visibleNode =<NoDataFound text={'No Schemes Found'} />
          }
        } else if (loader) {
          visibleNode = <Loading/>
        } else if ((!data || (data && !data.claims) && !loader)) {
          visibleNode = (    <NoDataFound text={'No Schemes Found'}>
          <GenericIcon 
            name={'refresh'}
            onPress={() => this.fetchCall()}
            style={ApplicationStyles.refreshIcon}
          />
        </NoDataFound>)
        }
    
        return visibleNode;
      }

	

    render() {
      const {
        searchFilter,
        updateSearchFilters
        } = this.props;
		
		return (
			<View style={Style.container}>
			  
          <View style={{flex: 1}}>
            {this.getDataNode()}
          </View>    
      
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
  data     : state.dealers.DealerClaimsData,
  loader   : state.dealers.loaders.getAllDealerClaimsLoader,
  searchFilters: state.dealers.schemeClaimSearchFilters,
  claimSearchFilters: state.dealers.schemeClaimSearchFilters.searchFilters,
});
  
const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)   => dispatch(DealersActions.getAllDealerClaims(params)),
  updateSearchFilters : (params) => dispatch(DealersActions.updateDealerClaimsSearchFilters(params)),
  setDealerClaimInfoForm : (params) => dispatch(DealersActions.setDealerClaimInfoForm(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchemeClaimInfoScreen)