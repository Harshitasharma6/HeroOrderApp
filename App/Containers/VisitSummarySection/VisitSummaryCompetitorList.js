import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import BlueButton from 'App/Components/BlueButton';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class VisitSummaryCompetitorList extends Component {
  getCompetitorsInfoNode() {
    let visibleNode = [];
    const {
    	data
    } = this.props.navigation.state.params;


    if (data && data.records && data.records.length) { 
      visibleNode = (
        <ScrollView>
          {data.records.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              content={[
                <GenericDisplayCardStrip key={'District__c' + index} label={'District'} value={obj.District__c} />,
                <GenericDisplayCardStrip key={'Brand__c' + index} label={'Brand'} value={obj.Brand__c} />,
                <GenericDisplayCardStrip key={'Product__c' + index} label={'Product'} value={obj.Product__c} />,
                <GenericDisplayCardStrip key={'Packing__c' + index} label={'Packing'} value={obj.Packing__c} />,
                <GenericDisplayCardStrip key={'WSP__c' + index} label={'WSP'} value={obj.WSP__c} />,
                <GenericDisplayCardStrip key={'RSP__c' + index} label={'RSP'} value={obj.RSP__c} />
              ]}
            />
          )}
        </ScrollView>
      )
    }else { 
    	visibleNode = <NoDataFound text={'No Competitors data'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getCompetitorsInfoNode()}
      </View>
    );
  }
}
