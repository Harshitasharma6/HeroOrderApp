import InfoDisplay from 'App/Components/InfoDisplay';
import Loading from 'App/Components/Loading';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import { HelperService } from '../../../Services/Utils/HelperService';
import Style from './NonShreeInfoStyle';
import NonShreeInfoTuple from '../NonShreeInfoTuple/NonShreeInfoTuple';

class NonShreeInfo extends Component {

  render() {
    const {
      selectedNonShree
    } = this.props;


    if (!selectedNonShree) {
      return (
        <View style={Style.parentContainer}>
          <Loading />
        </View>
      );
    }


//     Add_Comment__c: "Test"
// Address__c: "1504A, Sector 75, Noida, Uttar Pradesh 201301, India"
// Brand1_Potential__c: null
// Brand1__c: null
// Brand2_Potential__c: null
// Brand2__c: null
// Brand3_Potential__c: null
// Brand3__c: null
// Brand4_Potential__c: null
// Brand4__c: null
// Brand5_Potential__c: null
// Brand5__c: null
// City__c: "Noida"
// Contact_Person_No__c: "7982028891"
// Contact_Person__c: "CounterTest101"
// District__c: "Gautam Buddh Nagar"
// Id: "0019D000008Tx0RQAS"
// Latitude__c: "28.5768674"
// Longitude__c: "77.3798708"
// Name: "CounterTest101"
// Postal_Code__c: "201301"
// Shop_Type__c: "Dealer"
// State__c: "Delhi"
// Taluka__c: "Noida"
// Type_of_Counter__c: "Non Shree"
// Zone__c: null

    return (
      <View style={Style.parentContainer}>
        <NonShreeInfoTuple data={selectedNonShree} />
        <View style={{ height: 15 }}></View>
        <ScrollView>
          <InfoDisplay label={'Address'} value={selectedNonShree.Address__c || 'None'} />
          <InfoDisplay label={'Contact Person'} value={selectedNonShree.Contact_Person__c || 'None'} />
          <InfoDisplay label={'Contact Person No.'} value={selectedNonShree.Contact_Person_No__c || 'None'} />

          {selectedNonShree.Brand1__c ? (<InfoDisplay label={'Brand 1'} value={selectedNonShree.Brand1__c} />) : []}
          {selectedNonShree.Brand1_Potential__c ? (<InfoDisplay label={'Brand 1 Potential'} value={selectedNonShree.Brand1_Potential__c} /> ): [] }


          {selectedNonShree.Brand2__c ? (<InfoDisplay label={'Brand 2'} value={selectedNonShree.Brand2__c} />) : []}
          {selectedNonShree.Brand2_Potential__c ? (<InfoDisplay label={'Brand 2 Potential'} value={selectedNonShree.Brand2_Potential__c} /> ): [] }


          {selectedNonShree.Brand3__c ? (<InfoDisplay label={'Brand 3'} value={selectedNonShree.Brand3__c} />) : []}
          {selectedNonShree.Brand3_Potential__c ? (<InfoDisplay label={'Brand 3 Potential'} value={selectedNonShree.Brand3_Potential__c} /> ): [] }

          {selectedNonShree.Brand4__c ? (<InfoDisplay label={'Brand 4'} value={selectedNonShree.Brand4__c} />) : []}
          {selectedNonShree.Brand4_Potential__c ? (<InfoDisplay label={'Brand 4 Potential'} value={selectedNonShree.Brand4_Potential__c} /> ): [] }

          {selectedNonShree.Brand5__c ? (<InfoDisplay label={'Brand 5'} value={selectedNonShree.Brand5__c} />) : []}
          {selectedNonShree.Brand5_Potential__c ? (<InfoDisplay label={'Brand 5 Potential'} value={selectedNonShree.Brand5_Potential__c} /> ): [] }


          <InfoDisplay label={'City'} value={selectedNonShree.City__c || 'None'} />
          <InfoDisplay label={'Taluka'} value={selectedNonShree.Taluka__c || 'None'} />
          <InfoDisplay label={'District'} value={selectedNonShree.District__c || 'None'} />
          <InfoDisplay label={'Postal Code'} value={selectedNonShree.Postal_Code__c || 'None'} />
          <InfoDisplay label={'State'} value={selectedNonShree.State__c || 'None'} />


          {selectedNonShree.Add_Comment__c ? <InfoDisplay label={'Comments'} value={selectedNonShree.Add_Comment__c} /> : []}
         


        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  selectedNonShree: state.nonShree.selectedNonShree

});

const mapDispatchToProps = (dispatch) => ({
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NonShreeInfo)