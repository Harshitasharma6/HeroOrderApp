import React, { Component, PureComponent } from 'react';
import { View, ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import NoDataFound from 'App/Components/NoDataFound';
import Loading from 'App/Components/Loading';
import BlueButton from 'App/Components/BlueButton';
import {HelperService} from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class VisitSummaryTuple extends PureComponent {  
  render() {
    const {
      onPress,
      data, 
      id, 
      allCountersSearchList, 
      type
    } = this.props;

    let content = [];
    let name = '';

    if (type  == 'Counter') {
      content = [
          <GenericDisplayCardStrip key={'Counter_Type__c' + id} label={'Counter Type'} value={data.Counter_Type__c} />,

          data.Contact_Person_Name__c ? <GenericDisplayCardStrip key={'Contact_Person_Name__c' + id} label={'Contact Person'} value={data.Contact_Person_Name__c} /> : [],

          data.Counter_Phone__c ? <GenericDisplayCardStrip key={'Counter_Phone__c' + id} label={'Counter Phone'} value={data.Counter_Phone__c} /> : [],

          data.Counter_City__c ? <GenericDisplayCardStrip key={'Counter_City__c' + id} label={'City'} value={data.Counter_City__c} /> : [],

          data.Counter_District__c ? <GenericDisplayCardStrip key={'Counter_District__c' + id} label={'District'} value={data.Counter_District__c} /> : [],

          data.Counter_State__c ? <GenericDisplayCardStrip key={'Counter_State__c' + id} label={'State'} value={data.Counter_State__c} /> : [],
           
          <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,



          <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_Time__c)} />,


          data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order_Taken__c' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],


          data.Stock__c ? <GenericDisplayCardStrip key={'Stock__c' + id} label={'Stock'} value={data.Stock__c} /> : [],


          <BlueButton key={'Preview' + id} title={'View Price Details'} onPress={onPress} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>
        ]

        name = HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.Counter__c, 'name');
    }else if(type  == 'Site') {
      let dealer_name = data.Dealer_Name__c ? HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.Dealer_Name__c, 'name') : '';

      dealer_name  = dealer_name ? dealer_name.replace(' (Dealer)', '') :   '';
        
      content = [

          <GenericDisplayCardStrip key={'Contact_Person__c' + id} label={'Contact Person'} value={data.Contact_Person__c} />,

          <GenericDisplayCardStrip key={'Contact_Person_No__c' + id} label={'Contact Person No.'} value={data.Contact_Person_No__c} />,
          <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,



          <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_Time__c)} />,

          <GenericDisplayCardStrip key={'Repeat_Visit__c' + id} label={'Repeat Visit'} value={data.Repeat_Visit__c  ? 'YES' : 'NO'} />,

          <GenericDisplayCardStrip key={'Influencer_Involved__c' + id} label={'Influencer Involved'} value={data.Influencer_Involved__c ? 'YES' : 'NO'} />,

          data.Influencer_Name__r ? <GenericDisplayCardStrip key={'data.Influencer_Name__r' + id} label={'Influencer Name'} value={data.Influencer_Name__r['Name']} /> : [],

          <GenericDisplayCardStrip key={'Dealer_Involved__c' + id} label={'Dealer Involved'} value={data.Dealer_Involved__c  ? 'YES' : 'NO'} />,

           data.Dealer_Name__c ? <GenericDisplayCardStrip key={'Dealer Name' + id} label={'Dealer Name'} value={dealer_name} /> : [],

          <GenericDisplayCardStrip key={'Can_Convert_Site_to_Shree__c' + id} label={'Can Convert Site To Shree'} value={data.Can_Convert_Site_to_Shree__c ? 'YES' : 'NO'} />,
                  
          data.Converted_Brand__c ? <GenericDisplayCardStrip key={'Converted_Brand__c' + id} label={'Converted Brand'} value={data.Converted_Brand__c} /> : [],
          
          data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order Taken' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],

          data.City__c ? <GenericDisplayCardStrip key={'City__c' + id} label={'City'} value={data.City__c} /> : [],

          data.District__c ? <GenericDisplayCardStrip key={'District__c' + id} label={'District'} value={data.District__c} /> : [],

          data.State__c ? <GenericDisplayCardStrip key={'State__c' + id} label={'State'} value={data.State__c} /> : [],

          <BlueButton key={'Preview' + id} title={'View Price Details'} onPress={onPress} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>
        ]

        name = data.Name;
    }else if (type == 'Influencer') {
      content = [
          data.Contact_Person_Name__c ? <GenericDisplayCardStrip key={'Contact_Person_Name__c' + id} label={'Contact Person'} value={data.Contact_Person_Name__c} /> : [],

          data.Influencer_Contact_No__c ? <GenericDisplayCardStrip key={'Contact No.' + id} label={'Contact No.'} value={data.Influencer_Contact_No__c} /> : [],

          data.Current_Brand_Used__c ? <GenericDisplayCardStrip key={'Current_Brand_Used__c' + id} label={'Current Brand Used'} value={data.Current_Brand_Used__c} /> : [],

          data.Current_Packing__c ? <GenericDisplayCardStrip key={'Current_Packing__c' + id} label={'Current Packing'} value={data.Current_Packing__c} /> : [],


          data.Current_Product_Used__c ? <GenericDisplayCardStrip key={'Current_Product_Used__c' + id} label={'Current Product Used'} value={data.Current_Product_Used__c} /> : [],

          
          data.Current_Price_Bag__c ? <GenericDisplayCardStrip key={'Current_Price_Bag__c' + id} label={'Current Price(Per Bag)'} value={data.Current_Price_Bag__c} /> : [],


          data.Propose_Shree_Brand__c ? <GenericDisplayCardStrip key={'Propose_Shree_Brand__c' + id} label={'Propose Shree Brand'} value={data.Propose_Shree_Brand__c} /> : [],


          data.Propose_Shree_Packing__c ? <GenericDisplayCardStrip key={'Propose_Shree_Packing__c' + id} label={'Propose Shree Packing'} value={data.Propose_Shree_Packing__c} /> : [],

          data.Propose_Shree_Price__c ? <GenericDisplayCardStrip key={'Propose_Shree_Price__c' + id} label={'Propose Shree Price'} value={data.Propose_Shree_Price__c} /> : [],

          data.Propose_Shree_Product__c ? <GenericDisplayCardStrip key={'Propose_Shree_Product__c' + id} label={'Propose Shree Product'} value={data.Propose_Shree_Product__c} /> : [],

          data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order_Taken__c' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],

          data.City__c ? <GenericDisplayCardStrip key={'City__c' + id} label={'City'} value={data.City__c} /> : [],

          data.District__c ? <GenericDisplayCardStrip key={'District__c' + id} label={'District'} value={data.District__c} /> : [],

          data.State__c ? <GenericDisplayCardStrip key={'State__c' + id} label={'State'} value={data.State__c} /> : [],
           
          <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,

          <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_time__c)} />,

          data.Stock__c ? <GenericDisplayCardStrip key={'Stock__c' + id} label={'Stock'} value={data.Stock__c} /> : []
        ]

        name = data.Influencer_Name__r ? data.Influencer_Name__r['Name'] : '';
    }
    return (
      <GenericDisplayCard dark={false}
        style={{ width: '88%', elevation: 0 }}
        key={id}
        heading={name}
        content={content}
      />
    );
  }

}
// const VisitSummaryTuple = ({ onPress,data, id, allCountersSearchList, type }) => {
//   let content = [];
//   let name = '';

//   if (type  == 'Counter') {
//     content = [
//         <GenericDisplayCardStrip key={'Counter_Type__c' + id} label={'Counter Type'} value={data.Counter_Type__c} />,


//         data.Contact_Person_Name__c ? <GenericDisplayCardStrip key={'Contact_Person_Name__c' + id} label={'Contact Person'} value={data.Contact_Person_Name__c} /> : [],


//         data.Counter_Phone__c ? <GenericDisplayCardStrip key={'Counter_Phone__c' + id} label={'Counter Phone'} value={data.Counter_Phone__c} /> : [],

//         data.Counter_City__c ? <GenericDisplayCardStrip key={'Counter_City__c' + id} label={'City'} value={data.Counter_City__c} /> : [],

//         data.Counter_District__c ? <GenericDisplayCardStrip key={'Counter_District__c' + id} label={'District'} value={data.Counter_District__c} /> : [],

//         data.Counter_State__c ? <GenericDisplayCardStrip key={'Counter_State__c' + id} label={'State'} value={data.Counter_State__c} /> : [],
         
//         <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,



//         <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_Time__c)} />,


//         data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order_Taken__c' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],


//         data.Stock__c ? <GenericDisplayCardStrip key={'Stock__c' + id} label={'Stock'} value={data.Stock__c} /> : [],


//         <BlueButton key={'Preview' + id} title={'View Price Details'} onPress={onPress} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>
//       ]

//       name = HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.Counter__c, 'name');
//   }else if(type  == 'Site') {
//     let dealer_name = data.Dealer_Name__c ? HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.Dealer_Name__c, 'name') : '';

//     dealer_name  = dealer_name ? dealer_name.replace(' (Dealer)', '') :   '';
      
//     content = [

//         <GenericDisplayCardStrip key={'Contact_Person__c' + id} label={'Contact Person'} value={data.Contact_Person__c} />,

//         <GenericDisplayCardStrip key={'Contact_Person_No__c' + id} label={'Contact Person No.'} value={data.Contact_Person_No__c} />,
//         <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,



//         <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_Time__c)} />,

//         <GenericDisplayCardStrip key={'Repeat_Visit__c' + id} label={'Repeat Visit'} value={data.Repeat_Visit__c  ? 'YES' : 'NO'} />,

//         <GenericDisplayCardStrip key={'Influencer_Involved__c' + id} label={'Influencer Involved'} value={data.Influencer_Involved__c ? 'YES' : 'NO'} />,

//         data.Influencer_Name__r ? <GenericDisplayCardStrip key={'data.Influencer_Name__r' + id} label={'Influencer Name'} value={data.Influencer_Name__r['Name']} /> : [],

//         <GenericDisplayCardStrip key={'Dealer_Involved__c' + id} label={'Dealer Involved'} value={data.Dealer_Involved__c  ? 'YES' : 'NO'} />,

//          data.Dealer_Name__c ? <GenericDisplayCardStrip key={'Dealer Name' + id} label={'Dealer Name'} value={dealer_name} /> : [],


//         <GenericDisplayCardStrip key={'Can_Convert_Site_to_Shree__c' + id} label={'Can Convert Site To Shree'} value={data.Can_Convert_Site_to_Shree__c ? 'YES' : 'NO'} />,


                 

//         data.Converted_Brand__c ? <GenericDisplayCardStrip key={'Converted_Brand__c' + id} label={'Converted Brand'} value={data.Converted_Brand__c} /> : [],

        
//         data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order Taken' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],


//         data.City__c ? <GenericDisplayCardStrip key={'City__c' + id} label={'City'} value={data.City__c} /> : [],

//         data.District__c ? <GenericDisplayCardStrip key={'District__c' + id} label={'District'} value={data.District__c} /> : [],


//         data.State__c ? <GenericDisplayCardStrip key={'State__c' + id} label={'State'} value={data.State__c} /> : [],


//         <BlueButton key={'Preview' + id} title={'View Price Details'} onPress={onPress} textStyle={{fontSize: wp('3%')}} style={{width: '70%', alignSelf: 'center', marginTop: hp('2%')}}/>
//       ]


//       name = data.Name;
//   }else if (type == 'Influencer') {
//     content = [

//         data.Contact_Person_Name__c ? <GenericDisplayCardStrip key={'Contact_Person_Name__c' + id} label={'Contact Person'} value={data.Contact_Person_Name__c} /> : [],

//         data.Influencer_Contact_No__c ? <GenericDisplayCardStrip key={'Contact No.' + id} label={'Contact No.'} value={data.Influencer_Contact_No__c} /> : [],

//         data.Current_Brand_Used__c ? <GenericDisplayCardStrip key={'Current_Brand_Used__c' + id} label={'Current Brand Used'} value={data.Current_Brand_Used__c} /> : [],

//         data.Current_Packing__c ? <GenericDisplayCardStrip key={'Current_Packing__c' + id} label={'Current Packing'} value={data.Current_Packing__c} /> : [],


//         data.Current_Product_Used__c ? <GenericDisplayCardStrip key={'Current_Product_Used__c' + id} label={'Current Product Used'} value={data.Current_Product_Used__c} /> : [],

        
//         data.Current_Price_Bag__c ? <GenericDisplayCardStrip key={'Current_Price_Bag__c' + id} label={'Current Price(Per Bag)'} value={data.Current_Price_Bag__c} /> : [],


//         data.Propose_Shree_Brand__c ? <GenericDisplayCardStrip key={'Propose_Shree_Brand__c' + id} label={'Propose Shree Brand'} value={data.Propose_Shree_Brand__c} /> : [],


//         data.Propose_Shree_Packing__c ? <GenericDisplayCardStrip key={'Propose_Shree_Packing__c' + id} label={'Propose Shree Packing'} value={data.Propose_Shree_Packing__c} /> : [],

//         data.Propose_Shree_Price__c ? <GenericDisplayCardStrip key={'Propose_Shree_Price__c' + id} label={'Propose Shree Price'} value={data.Propose_Shree_Price__c} /> : [],

//         data.Propose_Shree_Product__c ? <GenericDisplayCardStrip key={'Propose_Shree_Product__c' + id} label={'Propose Shree Product'} value={data.Propose_Shree_Product__c} /> : [],

//         data.Order_Taken__c ? <GenericDisplayCardStrip key={'Order_Taken__c' + id} label={'Order Taken'} value={data.Order_Taken__c} /> : [],

//         data.City__c ? <GenericDisplayCardStrip key={'City__c' + id} label={'City'} value={data.City__c} /> : [],

//         data.District__c ? <GenericDisplayCardStrip key={'District__c' + id} label={'District'} value={data.District__c} /> : [],

//         data.State__c ? <GenericDisplayCardStrip key={'State__c' + id} label={'State'} value={data.State__c} /> : [],
         
//         <GenericDisplayCardStrip key={'Visit_Date__c' + id} label={'Visit Date'} value={data.Visit_Date__c} />,

//         <GenericDisplayCardStrip key={'Visit_Time__c' + id} label={'Visit Time'} value={HelperService.removeMillisecondsTime(data.Visit_time__c)} />,

        

//         data.Stock__c ? <GenericDisplayCardStrip key={'Stock__c' + id} label={'Stock'} value={data.Stock__c} /> : []
//       ]


//       name = data.Influencer_Name__r ? data.Influencer_Name__r['Name'] : '';
//   }

                 


//   return (
//   	<GenericDisplayCard dark={false}
//       style={{ width: '88%', elevation: 0 }}
//       key={id}
//       heading={name}
//       content={content}
//     />
//   )
// }

// export default VisitSummaryTuple;



//COUNTER VISIT DATA


// Competitors__r: null
// Contact_Person_Name__c: "Test 123"
// Counter_City__c: "Patiala"
// Counter_District__c: "Patiala"
// Counter_Phone__c: "9779897974"
// Counter_State__c: "Punjab"
// Counter_Type__c: "Shree"
// Counter__c: "0019D000008AAy9QAG"
// Geo_Latitude__c: "30.3353739"
// Geo_Longitude__c: "76.421603"
// Id: "a0G9D0000008HMxUAM"
// Meeting_Type__c: "Counter Visit"
// Order_Taken__c: "124"
// OwnerId: "0052w000002IY4BAAW"
// Remark__c: "testing"
// Stock__c: "125"
// User__c: "0052w000002IY4BAAW"
// Visit_Date__c: "2020-04-27"
// Visit_Number__c: 7
// Visit_Time__c: "17:55:12.442Z"



// SITE visit data



// Address__c: "E-20/15  SECTOR-3  ROHINI NEW DELHI"
// Can_Convert_Site_to_Shree__c: true
// City__c: "Patiala"
// Competitors__r: {totalSize: 1, done: true, records: Array(1)}
// Contact_Person_No__c: "9779897974"
// Contact_Person__c: "saurabh"
// Contact_Type__c: "Architect"
// Converted_Brand__c: "SHREE"
// Dealer_Involved__c: true
// Dealer_Name__c: "0019D000008XIHRQA4"
// District__c: "Patiala"
// Id: "a0F9D000000BjE9UAK"
// Influencer_Involved__c: true
// Influencer_Name__c: "0039D000006cMjUQAU"
// Latitude__c: "30.3353644"
// Longitude__c: "76.4216026"
// Name: "SgHPSchool"
// Order_Taken__c: 23
// OwnerId: "0052w000002IY4BAAW"
// Remark__c: "ryft"
// Repeat_Visit__c: true
// Shree_Site__c: true
// Site__c: "a0S9D0000006CQdUAM"
// State__c: "Punjab"





//Influencer visit data



// City__c: "Delhi"
// Contact_Person_Name__c: null
// Counter_Name__c: "0019D000008A1u7QAC"..
// Current_Brand_Used__c: "BAGALKOT CEMENT"
// Current_Packing__c: "HDPE"
// Current_Product_Used__c: "PPC"
// District__c: "Central Delhi"
// Geo_Latitude__c: "28.667489"
// Geo_Longitude__c: "77.228045"
// Id: "a0I9D000000Zd8UUAS"
// Influencer_Contact_No__c: "9779897974"
// Influencer_Name__c: "0039D000006c4GxQAI"
// Order_Taken__c: 235
// OwnerId: "0052w000002IY4BAAW"
// Propose_Shree_Brand__c: "Yes"
// Propose_Shree_Packing__c: "HDPE"
// Propose_Shree_Price__c: 226
// Propose_Shree_Product__c: "PPC"
// RSP__c: 235
// Remark__c: "etgxyd"
// Site_Visit_Name__c: null
// State__c: "Delhi"
// Visit_Date__c: "2020-04-25"
// Visit_Number__c: null
// Visit_time__c: "04:49:51.216Z"
// WSP__c: 235