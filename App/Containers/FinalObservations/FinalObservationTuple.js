import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HelperService} from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';


const FinalObservationTuple = ({ onPress,data, id }) => (
  	<GenericDisplayCard dark={false}
      style={{ width: '88%', elevation: 0}}
      key={id}
      //heading={HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.Counter__c, 'name')}
      content={[
        data.Market__c ? <GenericDisplayCardStrip key={'Market__c' + id} label={'Market'} value={data.Market__c} /> : [],
        <GenericDisplayCardStrip key={'Brand__c' + id} label={'Brand'} value={data.Brand__c} />,
        <GenericDisplayCardStrip key={'Product__c' + id} label={'Product'} value={data.Product__c} />,
        <GenericDisplayCardStrip key={'Packing__c' + id} label={'Packing'} value={data.Packing__c} />,
        <GenericDisplayCardStrip key={'WSP__c' + id} label={'WSP'} value={data.WSP__c} />,
        <GenericDisplayCardStrip key={'RSP__c' + id} label={'RSP'} value={data.RSP__c} />
        
      ]}
    />
)

export default FinalObservationTuple;

