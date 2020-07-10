import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import ItemDetail from 'App/Components/ItemDetail';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import BlueButton from 'App/Components/BlueButton';
import SitesActions from 'App/Stores/Sites/Actions';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


class SitesVisitForm extends Component {
  componentDidMount() {
    const {
      fetchData,
      selectedSite
    } = this.props

    fetchData({
      site: selectedSite.Id
    });
  }


  getPreviousVisitsInfoNode() {
    let visibleNode = [];
    const {
      data,
      loading,
      influencersSearchableList,
      allCountersSearchDealerList
    } = this.props;

    const dataLength = data.length;
    let dealer_name  = ''
    let id = '';

    if (data && dataLength && !loading) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>{
            id = obj.Id;
            dealer_name = obj.Dealer_Name__c ? HelperService.findMatchingKeyValueInList(allCountersSearchDealerList, 'id', obj.Dealer_Name__c, 'name') : '';
            return (
              <GenericDisplayCard dark={false}
                style={{ width: '88%', elevation: 0 }}
                key={id}
                content={[
                  <GenericDisplayCardStrip key={'Contact_Person__c' + id} label={'Contact Person'} value={obj.Contact_Person__c} />,

                  <GenericDisplayCardStrip key={'Contact_Person_No__c' + id} label={'Contact Person No.'} value={obj.Contact_Person_No__c} />,

                  <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={obj.Visit_Date__c} />,

                  <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(obj.Visit_Time__c)} />,

                  <GenericDisplayCardStrip key={'Repeat_Visit__c' + id} label={'Repeat Visit'} value={obj.Repeat_Visit__c  ? 'YES' : 'NO'} />,

                  <GenericDisplayCardStrip key={'Influencer_Involved__c' + id} label={'Influencer Involved'} value={obj.Influencer_Involved__c ? 'YES' : 'NO'} />,

                  obj.Influencer_Name__r ? <GenericDisplayCardStrip key={'data.Influencer_Name__r' + id} label={'Influencer Name'} value={obj.Influencer_Name__r['Name']} /> : [],

                  <GenericDisplayCardStrip key={'Dealer_Involved__c' + id} label={'Dealer Involved'} value={obj.Dealer_Involved__c  ? 'YES' : 'NO'} />,

                   obj.Dealer_Name__c ? <GenericDisplayCardStrip key={'Dealer Name' + id} label={'Dealer Name'} value={dealer_name} /> : [],


                  <GenericDisplayCardStrip key={'Can_Convert_Site_to_Shree__c' + id} label={'Can Convert To Shree'} value={obj.Can_Convert_Site_to_Shree__c ? 'YES' : 'NO'} />,

                        
                  obj.Converted_Brand__c ? <GenericDisplayCardStrip key={'Converted_Brand__c' + id} label={'Converted Brand'} value={obj.Converted_Brand__c} /> : [],

                  obj.Order_Taken__c ? <GenericDisplayCardStrip key={'Order Taken' + id} label={'Order Taken'} value={obj.Order_Taken__c} /> : [],

                  obj.City__c ? <GenericDisplayCardStrip key={'City__c' + id} label={'City'} value={obj.City__c} /> : [],

                  obj.District__c ? <GenericDisplayCardStrip key={'District__c' + id} label={'District'} value={obj.District__c} /> : [],

                  obj.State__c ? <GenericDisplayCardStrip key={'State__c' + id} label={'State'} value={obj.State__c} /> : [],

                  <BlueButton key={'Preview' + id} title={'View Price Details'} onPress={() => NavigationService.navigate('VisitSummaryCompetitorList', {data: obj['Competitors__r']})} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>
                    
                ]}
              />
            );
          })}
        </ScrollView>
      )
    } else if (loading) {
      visibleNode = <Loading />;
    }else { 
    	visibleNode = <NoDataFound text={'No Site visits'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getPreviousVisitsInfoNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data                     : state.sites.siteVisitsList,
  loading                  : state.sites.fetchSiteVisitsLoader,
  selectedSite             : state.sites.selectedSite,
  influencersSearchableList: state.influencers.influencersSearchableList,
  allCountersSearchDealerList: state.shree.allCountersSearchDealerList,
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) 	 => dispatch(SitesActions.fetchSiteVisits(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SitesVisitForm)
