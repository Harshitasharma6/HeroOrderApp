import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import Loading from 'App/Components/Loading'
import LeadAlertActions from 'App/Stores/LeadAlerts/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {ApplicationStyles, Colors} from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import Styles from './styles'
import CommonActions from 'App/Stores/Common/Actions';
import LeadLostScreen from '../LeadLostScreen'

class PurchaseDateOverDue extends Component {
  componentDidMount() {
    this.fetchCall()
  }


  fetchCall() {
    const {
      fetchData
    } = this.props

    fetchData({});
  }

  getDataNode() {
    let visibleNode = [];
    const {
      data,
      loading,
      openModal,
      closeModal,
      productsList,
      submitForm
    } = this.props;


    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            initialNumToRender={7}
            renderItem={({ item }) => 
              <GenericDisplayCard dark={false}
                style={Styles.infoSeaGreen}
                heading={`${item.first_name__c} ${item.last_name__c}`}
                showTextAvatar={true}
                //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                content={[
                  <GenericDisplayCardStrip key={'Status' + item.id} label={'Status'} value={item.lead_status__c}/>,
                  <GenericDisplayCardStrip key={'Stage' + item.id} label={'Stage'} value={item.lead_stage__c || ''}/>,
                   <GenericDisplayCardStrip key={'Lead Created on' + item.id} label={'Lead Created on'} value={HelperService.removeFieldsAndDateReadableFormat(item.createddate)}/>,
                 <GenericDisplayCardStrip key={'Product Interested' + item.id} label={'Product Interested'} value={HelperService.findMatchingKeyValueInList(productsList, 'id', item.product__c, 'name')}/>,
                  <GenericDisplayCardStrip key={'Expected Purchase Date' + item.id} label={'Expected Purchase Date'} value={HelperService.removeFieldsAndDateReadableFormat(item.expected_close_date__c)} />,
                 item.lead_status__c != 'Lost' ? <View style={{flexDirection: 'row', justifyContent: 'space-between' }} textStyle={{fontSize: wp('3.8%')}} key={'Action section' + item.id}>
                  <BlueButton 
                    title={'Mark Lost'} 
                    style={{width: wp('36%'), alignSelf: 'flex-start', marginTop: hp('1%') }} 
                    textStyle={{fontSize: wp('3.8%')}} 
                    onPress={() => {
                    return openModal({
                        content: <LeadLostScreen id={item.id} onSubmit={(params) => {closeModal();submitForm(params)}}/>, 
                        heading: 'Mark as Lost', 
                        bodyFlexHeight: .4
                    })}}>
                      <GenericIcon name="window-close-o" style={{fontSize: wp('5%'), color: Colors.white}}/>
                  </BlueButton>
                 
                  </View> : [],
                   <BlueButton title={''} style={{width: wp('10%'), alignSelf: 'flex-end', marginTop: hp('1%'), borderRadius:  wp('100%'), paddingRight: 2, paddingLeft: 2, position: 'absolute', top: -hp('6%'), right: -wp('2%')}} textStyle={{fontSize: wp('3.8%')}} onPress={() => HelperService.callNumber(item.contact_number__c)}><GenericIcon name="phone" style={{fontSize: wp('5%'), color: Colors.white}}/></BlueButton>
              ]}
            />}
            keyExtractor={item => item.id}
            refreshing={loading}
            onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No Leads Found'} />
      }
   } else if (loading) {
      visibleNode = <Loading />
    } else if (data && !data.length && !loading) {
      visibleNode = <NoDataFound text={'No Leads Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    data    : state.leadAlerts.purchaseOverdue,
    loading : state.leadAlerts.loaders.fetchPurchaseOverdueLoader,
    productsList: state.common.productsList
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params)    => dispatch(LeadAlertActions.fetchPurchaseOverdue(params)),
  openModal:(params)     => dispatch(CommonActions.openModal(params)),
  closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
  submitForm: (params)   => dispatch(LeadAlertActions.markLeadLost(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PurchaseDateOverDue)


            // "lead_source__c": "Walk Ins",
            // "lastvieweddate": "2020-08-18T00:40:18.000Z",
            // "name": "ENQ-00191",
            // "lastmodifieddate": "2020-08-19T14:23:48.000Z",
            // "isdeleted": false,
            // "systemmodstamp": "2020-08-19T14:23:49.000Z",
            // "lastmodifiedbyid": "0052v00000g1xfXAAQ",
            // "createddate": "2020-08-15T14:45:12.000Z",
            // "product_type__c": null,
            // "sfid": "a009D000002egaVQAQ",
            // "id": 200,
            // "_hc_lastop": "SYNCED",
            // "_hc_err": null,
            // "age__c": 28,
            // "customer__c": null,
            // "exchange_required__c": "No",
            // "expected_revenue__c": null,
            // "existing_two_wheelers__c": "Yes",
            // "competitor__c": null,
            // "contact_number__c": "1234567889",
            // "finance_required__c": null,
            // "pincode__c": null,
            // "charger_no__c": null,
            // "cgst_in_rs__c": null,
            // "igst__c": null,
            // "source_of_enquiry__c": "Event",
            // "email_id__c": "testingupdatedt@gmail.com",
            // "total_discount__c": null,
            // "lead_stage__c": null,
            // "igst_in_rs__c": null,
            // "chassis_no__c": null,
            // "test_drive_offered__c": "Yes",
            // "dealer__c": "0019D000009zum3QAA",
            // "total_amount_payable__c": null,
            // "make_of_battery__c": null,
            // "sgst__c": null,
            // "lead_status__c": "Won",
            // "battery_no__c": null,
            // "number_of_employees__c": null,
            // "capacity_of_each_battery__c": null,
            // "genders__c": "Male",
            // "sgst_in_rs__c": null,
            // "state__c": null,
            // "total_subsidy__c": null,
            // "total_tax__c": null,
            // "product__c": "a029D000002ZFPtQAO",
            // "lead_status_reason__c": null,
            // "dealers_sales_person__c": "a0O9D000001hLV9UAM",
            // "motor_no__c": null,
            // "city__c": null,
            // "occupation__c": "Business",
            // "visitor_type__c": null,
            // "type_of_battery__c": null,
            // "basic_amount__c": null,
            // "mode_of_buying__c": "Cash",
            // "discount_percent__c": null,
            // "cgst__c": null,
            // "first_name__c": "ajay updated",
            // "last_name__c": "verma  updated",
            // "purchased_date__c": null,
            // "pg_id__c": "f7bb9458-6414-40b2-afc9-3103967b18b0",
            // "expected_close_date__c": "2020-08-18T18:30:00.000Z",
            // "address_line_1__c": "Noida updated",
            // "customer_birthday__c": null,
            // "customer_anniversary__c": null,
            // "payment_mode__c": null,
            // "customer_gstin_no__c": null,
            // "expected_delivery_date__c": null,
            // "owner_s_handbook_no__c": null,
            // "recieved_advance__c": null,
            // "tally_invoice_no__c": null,
            // "scheme_applied__c": null,
            // "dealer_discount__c": null,
            // "purpose_of_buying__c": "Nothing",
            // "usage__c": "Nothing",
            // "financier_name__c": null,
            // "lead_from__c": null,
            // "recordtypeid": "0122v000002N7EcAAK",
            // "attach_documents__c": null,
            // "voter_id_card__c": null,
            // "acknowledgement__c": null,
            // "aadhar_card__c": null,
            // "insurance__c": null,
            // "rc__c": null,
            // "driving_license__c": null,
            // "booking_date__c": null,
            // "booking_ref_no__c": null,
            // "billing_date__c": null,
            // "billing_ref_no__c": null,
            // "others__c": null,
            // "visit_createddate": "2020-08-19T14:06:11.000Z",
            // "visit_recordtypeid": "0129D000000auFGQAY",
            // "visit_sfid": "a069D000001nuHUQAY",
            // "visit_dealer__c": "0019D00000A0XjIQAV",
            // "visit_sales_person__c": "a0O9D000001hLV9UAM",
            // "visit_enquiry__c": "a009D000002egaVQAQ",
            // "visit_visit_date": "2020-08-19T19:36:03.000Z"
