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
import { heightPercentageToDP as hp, widthPercentageToDP as wp, widthPercentageToDP } from 'react-native-responsive-screen';
import Styles from './styles'
import CommonActions from 'App/Stores/Common/Actions';
import VisitorActions from 'App/Stores/Visitor/Actions';
import LeadLostScreen from '../Actionables/LeadLostScreen'


class BookingConfirmed extends Component {
  componentDidMount() {
    this.fetchCall()
  }

  onPressCard(data, enquiry_id) {
    const {
      registerCustomerSuccess,
      setCurrentEnquiry
    } = this.props;
    registerCustomerSuccess(data);
    setCurrentEnquiry(enquiry_id);
    NavigationService.navigate('VisitorInfoScreen')
  }

  onPressCall(data) {
     const {
      changeForm,
      showCallModal
    } = this.props;

    HelperService.callNumber(data.contact_number__c);
    setTimeout(() => {
      showCallModal(); 
      changeForm({edited_field: 'enquiry_id', edited_value: data.sfid});
    }, 2000)
  }


  fetchCall() {
    const {
      fetchData
    } = this.props

    fetchData({});
  }


  filterResults(list) {
    const {
      bookingSearchFilters
    } = this.props;
let filteredList = HelperService.searchTextListFilter(list,  bookingSearchFilters['searchBy'],  bookingSearchFilters['searchValue']);
filteredList = HelperService.sortListFilter(filteredList, bookingSearchFilters['sortBy'], bookingSearchFilters['sortType']);    
return filteredList;
  }  


  getDataNode() {
    let visibleNode = [];
    const {
      data,
      loading,
      productsList,
      openModal,
      closeModal,
      submitForm
    } = this.props;


    if (data && data.length) {
      let filteredBookingList = this.filterResults(data.map((obj) => obj));
      if (filteredBookingList.length) {
        visibleNode = (
          <FlatList
            data={filteredBookingList}
            initialNumToRender={7}
            renderItem={({ item }) => 
              <GenericDisplayCard dark={false}
                style={Styles.infoRedPink}
                heading={`${item.first_name__c} ${item.last_name__c}`}
                showTextAvatar={true}
              
                onPress={() => NavigationService.navigate('InvoiceDetailformScreen',{data: item})}
                content={[
                  <GenericDisplayCardStrip key={'Status' + item.sfid} label={'Status'} value={item.lead_status__c}/>,
                  <GenericDisplayCardStrip key={'Stage' + item.sfid} label={'Stage'} value={item.lead_stage__c}/>,
                  <GenericDisplayCardStrip key={'Product Purchased' + item.sfid} label={'Product Purchased'} value={HelperService.findMatchingKeyValueInList(productsList, 'id', item.product__c, 'name')}/>,
                  <GenericDisplayCardStrip key={'Outstanding Amount' + item.sfid} label={'Outstanding Amount'} value={item.outstanding_amount__c}/>,
                  <BlueButton title={''} style={Styles.callButton} textStyle={Styles.callButtonText}  onPress={() => this.onPressCall(item)}><GenericIcon name="phone" style={Styles.callButtonIcon}/></BlueButton>,
                  item.lead_status__c != 'Won' ? <View style={{flexDirection: 'row', justifyContent: 'space-between' }} textStyle={{fontSize: wp('3.8%')}} key={'Action section' + item.sfid}>
                  <BlueButton 
                    title={'Mark Won'} 
                    style={Styles.markLostButton} 
                    textStyle={Styles.markLostButtonText} 
                    onPress={() => {
                    return openModal({
                        content: <LeadLostScreen id={item.sfid} onSubmit={(params) => {closeModal();}}/>, 
                        heading: 'Mark Won', 
                        bodyFlexHeight: .4
                    })}}>
                      <GenericIcon name="check" style={Styles.markLostButtonIcon} />
                  </BlueButton>
                  </View> : [],
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
    } else if ((!data || (data && !data.length) && !loading)) {
      visibleNode = <NoDataFound text={'No Leads Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 0 , paddingBottom: 10, marginBottom: 10}}>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
    data    : state.leadAlerts.confirmedBooking,
    loading : state.leadAlerts.loaders.fetchConfirmedBookingLoader,
    productsList: state.common.productsList,
    bookingSearchFilters: state.leadAlerts.bookingSearchFilters,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params)    => dispatch(LeadAlertActions.fetchConfirmedBooking(params)),
  openModal:(params)     => dispatch(CommonActions.openModal(params)),
  closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
  submitForm: (params)   => dispatch(LeadAlertActions.markLeadLost(params)),
  showCallModal: (params)    => dispatch(CommonActions.showCallModal(params)),
  hideCallModal: (params)    => dispatch(CommonActions.hideCallModal(params)),
  changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerOutgoingCallForm(params)),
  registerCustomerSuccess: (params) => dispatch(VisitorActions.registerCustomerSuccess(params)),
  setCurrentEnquiry: (params)       => dispatch(VisitorActions.setCurrentEnquiry(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingConfirmed)


