import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import ItemDetail from 'App/Components/ItemDetail';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import BlueButton from 'App/Components/BlueButton';
import NonShreeAction from 'App/Stores/NonShree/Actions';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class NonShreeVisitList extends Component {
  componentDidMount() {
    const {
      dealerId,
      fetchData
    } = this.props

    fetchData({
      dealerId
    });
  }


  getPreviousVisitsInfoNode() {
    let visibleNode = [];
    const {
      data,
      loading
    } = this.props;

    const dataLength = data.length;

    if (data && dataLength && !loading) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              content={[
                obj.Contact_Person_Name__c ? <GenericDisplayCardStrip key={'Contact_Person_Name__c' + obj.Id} label={'Contact Person'} value={obj.Contact_Person_Name__c} /> : [],


                obj.Counter_Phone__c ? <GenericDisplayCardStrip key={'Counter_Phone__c' + obj.Id} label={'Phone'} value={obj.Counter_Phone__c} /> : [],

                obj.Counter_City__c ? <GenericDisplayCardStrip key={'Counter_City__c' + obj.Id} label={'City'} value={obj.Counter_City__c} /> : [],

                obj.Counter_District__c ? <GenericDisplayCardStrip key={'Counter_District__c' + obj.Id} label={'District'} value={obj.Counter_District__c} /> : [],

                obj.Counter_State__c ? <GenericDisplayCardStrip key={'Counter_State__c' + obj.Id} label={'State'} value={obj.Counter_State__c} /> : [],
                 
                <GenericDisplayCardStrip key={'Visit_Date__c' + obj.Id} label={'Visit Date'} value={obj.Visit_Date__c} />,


                <GenericDisplayCardStrip key={'Visit_Time__c' + obj.Id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(obj.Visit_Time__c)} />,


                obj.Order_Taken__c ? <GenericDisplayCardStrip key={'Order_Taken__c' + obj.Id} label={'Order Taken'} value={obj.Order_Taken__c} /> : [],


                obj.Stock__c ? <GenericDisplayCardStrip key={'Stock__c' + obj.Id} label={'Stock'} value={obj.Stock__c} /> : [],


                <BlueButton key={'Preview' + index} title={'View Price Details'} onPress={() => NavigationService.navigate('VisitSummaryCompetitorList', {data: obj['Competitors__r']})} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>

              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loading) {
      visibleNode = <Loading />;
    }else { 
      visibleNode = <NoDataFound text={'No visits'}/>;
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
  dealerId: state.nonShree.selectedNonShree.Id,
  data    : state.nonShree.previousVisits,
  loading : state.nonShree.fetchPreviousVisitsLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params)    => dispatch(NonShreeAction.fetchNonShreePreviousVisits(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonShreeVisitList)
