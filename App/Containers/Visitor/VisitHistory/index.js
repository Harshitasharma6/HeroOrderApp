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

class VisitHistoryScreen extends Component {
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

// createddate: 1598807102000
// dealer__c: "0019D000009zum3QAA"
// enquiry__c: "a009D000002f26pQAA"
// enquiry_pg_id__c: "64bb66ea-3b02-4ffb-bab2-c94a37f43458"
// id: 784
// name: "VI-00726"
// pg_id__c: null
// recordtypeid: "0129D000000auFBQAY"
// sales_person__c: "a0O9D000001hLV9UAM"
// sales_person_name__c: "Ratan Singh"
// sales_person_sfid: "a0O9D000001hLV9UAM"
// sfid: "a069D000001oAZNQA2"
// visit_date__c: 1598807101000
  // getDayFromTimestamp,
  // getTimeFromTimestamp
  //dateReadableFormat


  getDataNode() {
    const {
      enquiry,
      loader,
      visitsMapping
    } = this.props;

    const data = visitsMapping[enquiry];
    let visibleNode = [];
    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={ApplicationStyles.formHeading}>{`Total Visits: ${data.length}`}</Text>
            <FlatList
              data={data}
              renderItem={({ item }) => 
                <GenericDisplayCard dark={false}
                  style={{ width: '88%', elevation: 0 }}
                  content={[
                    <GenericDisplayCardStrip key={'Visit Date' + item.id} label={'Visit Date'} value={HelperService.dateReadableFormat(item.visit_date__c)}/>,
                    <GenericDisplayCardStrip key={'Visit Day' + item.id} label={'Visit Day'} value={HelperService.getDayFromTimestamp(item.visit_date__c)}/>,
                    <GenericDisplayCardStrip key={'Visit Time' + item.id} label={'Visit Time'} value={HelperService.getTimeFromTimestamp(item.visit_date__c)}/>,
                    <GenericDisplayCardStrip key={'Sales Person Name' + item.id} label={'Sales Person Name'} value={item.sales_person_name__c || ''}
                />
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
          <NoDataFound text={'No History Found'}>
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
          <NoDataFound text={'No History Found'}>
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
  loader : state.visitor.loaders.getAllVisitsLoader,
  enquiry : state.visitor.currentEnquiryId,
  visitsMapping: state.visitor.visitsMapping
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)    => dispatch(VisitorActions.getAllVisits(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisitHistoryScreen)

