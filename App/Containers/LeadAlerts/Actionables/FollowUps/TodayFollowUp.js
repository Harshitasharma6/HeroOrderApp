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
import VisitorActions from 'App/Stores/Visitor/Actions';
import LeadLostScreen from '../LeadLostScreen'

class TodayFollowUps extends Component {
  componentDidMount() {
    this.fetchCall()
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
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            initialNumToRender={7}
         renderItem={({ item }) => 
              <GenericDisplayCard dark={false}
                style={Styles.infoBoxCorpBlue}
                heading={`${item.first_name__c} ${item.last_name__c}`}
                showTextAvatar={true}
                //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                content={[
                  <GenericDisplayCardStrip key={'Product Interested' + item.sfid} label={'Product Interested'} value={item.product_name}/>,
                  <GenericDisplayCardStrip key={'Sales Representative' + item.sfid} label={'Sales Representative'} value={item.sales_person_name__c}/>,
                  <GenericDisplayCardStrip key={'Stage' + item.sfid} label={'Lead Stage'} value={item.lead_stage__c || ''}/>,
                  <BlueButton title={''} style={Styles.callButton} textStyle={Styles.callButtonText} onPress={() => this.onPressCall(item)}><GenericIcon name="phone" style={Styles.callButtonIcon}/></BlueButton>
              ]}
            />}
            keyExtractor={item => item.sfid}
            refreshing={loading}
            onRefresh={() => this.fetchCall()}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No FollowUp Found'} />
      }
    } else if (loading) {
      visibleNode = <Loading />
    } else if ((!data || (data && !data.length) && !loading)) {
      visibleNode = <NoDataFound text={'No FollowUp Found'} />
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
    data    : state.leadAlerts.todayFollowUp,
    loading : state.leadAlerts.loaders.fetchtodayFollowUpLoader,
    productsList: state.common.productsList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params)    => dispatch(LeadAlertActions.fetchTodayFollowUp(params)),
  openModal:(params)     => dispatch(CommonActions.openModal(params)),
  closeModal:(params)    => dispatch(CommonActions.closeModal(params)),
  submitForm: (params)   => dispatch(LeadAlertActions.markLeadLost(params)),
  showCallModal: (params)    => dispatch(CommonActions.showCallModal(params)),
  hideCallModal: (params)    => dispatch(CommonActions.hideCallModal(params)),
  changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerOutgoingCallForm(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodayFollowUps)
