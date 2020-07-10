import InfoDisplay from 'App/Components/InfoDisplay';
import Loading from 'App/Components/Loading';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { HelperService } from '../../../Services/Utils/HelperService';
import SiteInfoTuple from '../../Sites/SitesVisitInfoTuple/SitesInfoTuple';
import Style from './SitesInfoStyle';

class ShreeInfoScreen extends Component {

  render() {

    const {
      data
    } = this.props;


    return (
      <View style={Style.parentContainer}>
        <SiteInfoTuple data={data} areas={agentAreas} />
        <View style={{ height: 15 }}></View>
        <ScrollView>
          <InfoDisplay label={'Name'} value={data.LastName || 'None'} />
          <InfoDisplay label={'Influencer Type '} value={data.Influencer_Type__c || 'None'} />

          <InfoDisplay label={'Influencer Type'} value={data.Influencer_Type__c || 'None'} />

          <InfoDisplay label={'Current Brand Used'} value={data.Current_Brand_Used__c || 'None'} />

          <InfoDisplay label={'Current_Product Used'} value={data.Current_Product_Used__c || 'None'} />
          <InfoDisplay label={'Current_Packaging'} value={data.Dealer_Name__c || ''} />

          <InfoDisplay label={'Current_Price_Bag__c'} value={data.Area_Sq_ft__c || 'None'} />

          <InfoDisplay label={'Propose_ShreeProduct'} value={ data.Influencer_Involved__c|| 'None'} />

          <InfoDisplay label={'Remark'} value={data.Remark__c || 'None'} />

          <InfoDisplay label={'Converted Brand'} value={data.Converted_Brand__c || 'None'} />

          <InfoDisplay label={'On_Going_Project__c'} value={data.status__c || 'None'} />
          <InfoDisplay label={'State'} value={data.State__c || 'None'} />
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
)(ShreeInfoScreen)