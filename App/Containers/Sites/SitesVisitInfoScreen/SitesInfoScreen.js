import InfoDisplay from 'App/Components/InfoDisplay';
import Loading from 'App/Components/Loading';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { HelperService } from 'App/Services/Utils/HelperService';
import SiteInfoTuple from '../SitesVisitInfoTuple/SitesInfoTuple';
import Style from './SitesInfoStyle';

class SiteInfoScreen extends Component {

  render() {
    const {
      selectedSite
    } = this.props;

    if (!selectedSite) {
      return (
        <View style={Style.parentContainer}>
          <Loading />
        </View>
      );
    }


// Address__c: "9310, India Gate, New Delhi, Delhi 110042, India"
// Client_Phone__c: "9917461449"
// Id: "a0S9D0000006AkiUAE"
// Latitude__c: "28.610001"
// Longitude__c: "77.230003"
// Name: "SiteTest1"
// OwnerId: "0052w000002IY4BAAW"
// Site_Area_Sq_Ft__c: 123
// Site_Capacity__c: 123
// Site_District__c: "New Delhi"
// Site_State__c: "Delhi"
// Site_Type__c: "Residential"
//Current_Brand_Used__c,Current_Brand_Price_Per_Bag__c

    return (
      <View style={Style.parentContainer}>
        <SiteInfoTuple data={selectedSite} />
        <ScrollView>
          <InfoDisplay label={'Address'} value={selectedSite.Address__c || 'None'} />
          <InfoDisplay label={'Client Phone No.'} value={selectedSite.Client_Phone__c || 'None'} />
          <InfoDisplay label={'Site Type'} value={selectedSite.Site_Type__c || 'None'} />
          <InfoDisplay label={'Site Area Sqft'} value={selectedSite.Site_Area_Sq_Ft__c || 'None'} />
          <InfoDisplay label={'Size Capacity(MT)'} value={selectedSite.Site_Capacity__c || 'None'} />
          <InfoDisplay label={'Current Brand Used'} value={selectedSite.Current_Brand_Used__c || 'None'} />
         <InfoDisplay  label={'Current Brand Price (Per Bag)'} value={selectedSite.Current_Brand_Price_Per_Bag__c || 'None'} />
          <InfoDisplay label={'District'} value={selectedSite.Site_District__c || 'None'} />
          <InfoDisplay label={'State'} value={selectedSite.Site_State__c || 'None'} />
        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = (state) => ({
  selectedSite: state.sites.selectedSite,

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SiteInfoScreen)