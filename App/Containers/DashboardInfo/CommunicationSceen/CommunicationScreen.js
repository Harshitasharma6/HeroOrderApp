import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import NavigationService from 'App/Services/NavigationService'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import BlueButton from 'App/Components/BlueButton'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class CommunicationScreen extends Component {
  componentDidMount() {
    const {
      fetchData
    } = this.props

    fetchData({});
  }


  getCommunicationsInfoNode() {
    let visibleNode = [];
    const {
      data,
      loader
    } = this.props;

    const dataLength = data.length;

    if (data && dataLength && !loader) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              heading={obj.Name}
              subheading={obj.Description__c}
              content={[
                 <GenericDisplayCardStrip key={'Status__c' + index} label={'Status'} value={obj.Status__c} />,
                 obj.State__c ? <GenericDisplayCardStrip key={'State__c' + index} label={'State'} value={obj.State__c} /> : [],
                 <BlueButton key={'Preview' + index} title={'View Attachments'} onPress={() => NavigationService.navigate('CommunicationsAttachmentsScreen', {communicationId: obj.Id})} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}} textStyle={{fontSize: wp('3%')}}/>
              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loader){//data is being fetched
      visibleNode = <Loading />;
    }else { // not loading and data is empty
      visibleNode = <NoDataFound title={'No Communications.'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getCommunicationsInfoNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data  : state.dashboard.communicationsList,
  loader : state.dashboard.fetchCommunicationsLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params)    => dispatch(DashboardActions.fetchCommunications(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunicationScreen)