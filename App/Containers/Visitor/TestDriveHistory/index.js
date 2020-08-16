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

class TestDriveHistoryScreen extends Component {
  componentDidMount() {
    this.fetchCall()
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

//             "overall_experience__c": "4",
//             "name": "Id-00019",
//             "dealers_sales_person_login_info__c": "a0O9D000001hLV9UAM",
//             "ease_of_handeling__c": "4",
//             "vehicle_no__c": "DL1CV6565",
//             "isdeleted": false,
//             "systemmodstamp": "2020-08-15T18:07:50.000Z",
//             "test_drive_date__c": "2020-08-16T00:00:00.000Z",
//             "createddate": "2020-08-15T18:07:50.000Z",
//             "responsiveness_of_the_vehicle__c": "3",
//             "ride_comfort__c": "3",
//             "sfid": "a0Q9D000005zjF0UAI",
//             "id": 20,
//             "_hc_lastop": "SYNCED",
//             "_hc_err": null,
//             "pg_id__c": null,
//             "model_name__c": "a029D000002ZFPoQAO",
//             "dealer__c": "0019D00000A0XjIQAV",
//             "enquiry__c": "a009D000002ecHDQAY"




  getDataNode() {
    const {
      enquiry,
      loader,
      productsList,
      feedbacksMapping
    } = this.props;
    const data = feedbacksMapping[enquiry]
    let visibleNode = [];

    console.log('productsList', productsList)

    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <View style={{ flex: 1, paddingTop: 10 }}>
            <Text style={ApplicationStyles.formHeading}>{`Total Test Drives: ${data.length}`}</Text>
            <FlatList
              data={data}
              renderItem={({ item }) => 
                <GenericDisplayCard dark={false}
                  style={{ width: '88%', elevation: 0 }}
                  content={[
                    <GenericDisplayCardStrip key={'Model Name' + item.id} label={'Model Name'} value={HelperService.findMatchingKeyValueInList(productsList, 'id', item.model_name__c, 'name')}/>,
                    item.vehicle_no__c ? <GenericDisplayCardStrip key={'Test Drive Vehicle' + item.id} label={'Test Drive Vehicle'} value={item.vehicle_no__c}/> : [],
                    <GenericDisplayCardStrip key={'Test Drive Date' + item.id} label={'Test Drive Date'} value={HelperService.removeFieldsAndDateReadableFormat(item.test_drive_date__c)}/>,
                    <GenericDisplayCardStrip key={'Test Drive Time' + item.id} label={'Test Drive Time'} value={HelperService.removeFieldsTimeReadableFormat(item.createddate) + ' (UTC)'}/>,
                    <GenericDisplayCardStrip key={'Overall Experience' + item.id} label={'Overall Experience'} value={item.overall_experience__c}/>,
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
    } else if (data && !data.length && !loader) {
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
  loader : state.visitor.loaders.getFeedbacksLoader,
  enquiry : state.visitor.currentEnquiryId,
  feedbacksMapping: state.visitor.feedbacksMapping,
  productsList: state.common.productsList
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params)    => dispatch(VisitorActions.getFeedbacks(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestDriveHistoryScreen)


