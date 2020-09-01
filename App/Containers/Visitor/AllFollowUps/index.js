import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import ShreeAction from 'App/Stores/Shree/Actions';
import VisitorActions from 'App/Stores/Visitor/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import GenericIcon from 'App/Components/GenericIcon'
import {ApplicationStyles} from 'App/Theme'

class AllFollowUpsScreen extends Component {
  componentDidMount() {
    this.fetchCall();
  }


  fetchCall() {
    const {
      enquiry,
      fetchData
    } = this.props

    fetchData({
      enquiry
    });
  }

// "purpose_of_call__c": "For Test Drive",
// "outcome_of_the_call__c": "Customer Not Interested",
// "follow_up_date__c": "2020-08-29T18:30:00.000Z",
// "enquiry__c": "a009D000002f26pQAA",
// "dealer__c": "0019D000009zum3QAA",
// "call_connected__c": true,
// "sales_person_name__c": "Ratan Singh",
// "dealers_sales_person_login_info__c": "a0O9D000001hLV9UAM"



  getDataNode() {
    const {
      enquiry,
      loader,
      followUpsMapping
    } = this.props;

    const data = followUpsMapping[enquiry];
    let visibleNode = [];
    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={ApplicationStyles.formHeading}>{`Total Follow ups: ${data.length}`}</Text>
            <FlatList
              data={data}
              renderItem={({ item }) => 
                <GenericDisplayCard dark={false}
                  style={{ width: '88%', elevation: 0 }}
                  content={[
                    <GenericDisplayCardStrip key={'Follow Up Date' + item.id} label={'Follow Up Date'} value={HelperService.dateReadableFormat(item.follow_up_date__c)}/>,
                    
                    <GenericDisplayCardStrip key={'Sales Person' + item.id} label={'Sales Person Name'} value={item.sales_person_name__c || ''}/>,
                    <GenericDisplayCardStrip key={'Purpose Of Call' + item.id} label={'Purpose Of Call'} value={item.purpose_of_call__c || ''}/>,
                    <GenericDisplayCardStrip key={'Outcome' + item.id} label={'Outcome'} value={item.outcome_of_the_call__c || ''}/>,
                ]}
              />}
              keyExtractor={item => item.id}
              onRefresh={() => this.fetchCall()}
              refreshing={loader}
            />
          </View>
        );
      } else {
        visibleNode =  (
          <NoDataFound text={'No Follow ups Found'}>
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
    } else if ((!data && !loader) || (data && !data.length && !loader)) {
      visibleNode =  (
          <NoDataFound text={'No Follow ups Found'}>
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
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader : state.visitor.loaders.getAllFollowUpsLoader,
  enquiry : state.visitor.currentEnquiryId,
  followUpsMapping: state.visitor.followUpsMapping
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)    => dispatch(VisitorActions.getAllFollowUps(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AllFollowUpsScreen)

