import React, { Component } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import BlueButton from 'App/Components/BlueButton';
import {HelperService} from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


const OutstandingTuple = ({ onPress, obj, id, allCountersSearchList, type }) => {
  	let content = [];
  	let name =  HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', obj.Customer_Name__c, 'name');
    name = name ? (name.replace(' (Dealer)', '')) : name;

  	content = [
        <GenericDisplayCardStrip key={'Dealer' + id} label={'Dealer'} value={name} />,
        <GenericDisplayCardStrip key={'District' + id} label={'District'} value={obj.Dealer_District__c} />,
        <GenericDisplayCardStrip key={'State' + id} label={'State'} value={obj.PrimaryFunctions__c} />,
        <GenericDisplayCardStrip key={'30-45 Days' + id} label={'31-45'} value={obj.X31_45_Days__c} />,
         <GenericDisplayCardStrip key={'46-60 Days' + id} label={'46-60'} value={obj.X46_60_Days__c} />,
        <GenericDisplayCardStrip key={'60-90 Days' + id} label={'61-90'} value={obj.X61_90_Days__c} />,
        <GenericDisplayCardStrip key={'90-180 Days' + id} label={'91-180'} value={obj.X91_180_Days__c} />,
        <GenericDisplayCardStrip key={'More Then 180 Days' + id} label={'More Then 180'} value={obj.X180_Days__c} />
      ]

                
  return (
  	<GenericDisplayCard dark={false}
      style={{ width: '88%', elevation: 0 }}
      key={obj.id}
      content={content}
    />
  )
}

export default OutstandingTuple;


