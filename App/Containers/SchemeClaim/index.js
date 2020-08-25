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
		this.fetchCall()	
	}

	fetchCall() {
		const {
		
		  fetchData
		} = this.props
	
		fetchData({
		 
		});
	  }

    
    getDataNode() {
      const {
        loader,
        data
        } = this.props;

        let visibleNode = [];
    
        if (data && data.length) {
          if (data.length) {
            visibleNode = (
              <FlatList
                data={data}
                renderItem={({ item }) => 
                    <GenericDisplayCard dark={false}
                      style={{ width: '98%', elevation: 0 }}
                     
                      showTextAvatar={false}
                      //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                      content={[
                            <View style={{flexDirection:'row'}}>
                            <View style={{width:'60%'}}>
                          <GenericDisplayCardStrip key={'Claim Number' + item.name} label={'Claim Number:'} value={item.name} valueStyle={{marginRight:'20%', }}/>
                          </View>
                          <View style={{width:'45%',justifyContent:'flex-start'}}>
                          <GenericDisplayCardStrip key={'status' + item.name} label={'status:'} value={item.status__c} labelStyle={{marginLeft:'7%'}} valueStyle={{marginRight:'15%', }} />
                          </View>
                          </View>,
                            <GenericDisplayCardStrip key={'Claim Submission Date' + item.name} label={'Claim Submission Date:'}   value={ HelperService.dateReadableFormat(item.scheme_claim_submission_date__c)} />,
                            <GenericDisplayCardStrip key={'Expected Claim Amount' + item.name} label={'Expected Claim Amount:'}  value={item.expected_claim_amount_by_dealer__c}  />,
                            <GenericDisplayCardStrip key={'Scheme Applicable' + item.name} label={'Scheme Applicable:'}  value={item.scheme_applicable__c}  />,
                            <GenericDisplayCardStrip key={'Customer Name' + item.name} label={'Customer Name:'}  value={item.customer_name__c}  />,
                            <GenericDisplayCardStrip key={'Warranty Registered' + item.name} label={'Warranty Registered:'}  value={item.registered_for_warranty__c}  />,

                        
                  ]}
                />}
                keyExtractor={item => item.sfid}
                refreshing={loader}
                onRefresh={() => this.fetchCall()}
                ListEmptyComponent={() => <NoDataFound text={'No Schemes Found'} />}
              />
            );
          } else {
            visibleNode =<NoDataFound text={'No Schemes Found'} />
          }
        } else if (loader) {
          visibleNode = <Loading />
        } else if (data && !data.length) {
          visibleNode = <NoDataFound text={'No Schemes Found'} />
        }
    
        return visibleNode;
      }

	

    render() {
		
		
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'SCHEMES CLAIMS'}</Text>
       
        <BlueButton  title={' FILTER BY'}style={{width: wp('26.5%'),    alignSelf: 'flex-end', marginTop: hp('3%') , marginBottom: hp('0%'), marginRight: wp('7%')}} textStyle={{fontSize: wp('3%')}}  
            >
              <GenericIcon name="filter" style={{fontSize: wp('4%'), color: Colors.white}}/></BlueButton>
         
                
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
                     {this.getDataNode()}
               
				</ScrollView>
        <TouchableOpacity
                    style={Style.plusIcon}
                    onPress={() => {
          NavigationService.navigate('SchemeClaimformScreen');
        
        }}
					>
					<GenericIcon
						name='plus-circle'
						style={{ color: Colors.white, fontSize: 40, alignSelf: 'center' }}
					/>
				</TouchableOpacity>   
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
  data     : state.dealers.DealerClaimsData,
	loader   : state.dealers.loaders.getAllDealerClaimsLoader,
});
  
const mapDispatchToProps = (dispatch) => ({
	fetchData:(params)                 => dispatch(DealersActions.getAllDealerClaims(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SchemeClaimInfoScreen)