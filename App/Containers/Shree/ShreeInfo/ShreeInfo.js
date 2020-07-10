import InfoDisplay from 'App/Components/InfoDisplay';
import Loading from 'App/Components/Loading';
import React, { Component } from 'react';
import { ScrollView, View,Text } from 'react-native';
import { connect } from 'react-redux';
import { HelperService } from 'App/Services/Utils/HelperService';
import ShreeAction from 'App/Stores/Shree/Actions';
import GenericIcon from 'App/Components/GenericIcon';
import BlueButton from 'App/Components/BlueButton';
import InputNumber from 'App/Components/FormInput/InputNumber'
import Style from './ShreeInfoStyle';
import ShreeInfoTuple from '../ShreeInfoTuple/ShreeInfoTuple'
import { Colors } from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

class ShreeInfo extends Component {

  render() {
    const {
      userId,
      isRetailer,
      selectShree,
      updatePotential,
      editPotentialField,
      changePotentialField,
      updatePotentialLoader,
      openEditPotentialField,
      closeEditPotentialField
    } = this.props;

    if (!selectShree) {
      return (
        <View style={Style.parentContainer}>
          <Loading />
        </View>
      );
    }

    let potentialFieldNode = [];

    let extraInfoNode = [  
      <InfoDisplay key={'Counter Code'} label={'Counter Code'} value={selectShree.Counter_Code__c || 'None'} />,
      <InfoDisplay key={'GST Registration No.'} label={'GST Registration No.'} value={selectShree.GST_Registration_Number__c || 'None'} />,
      <InfoDisplay key={'Security Deposit'} label={'Security Deposit'} value={selectShree.Security_Deposit__c || 'None'} />
    ];

    if (selectShree.Potential__c && !editPotentialField) {
      potentialFieldNode = <InfoDisplay label={'Potential'} value={selectShree.Potential__c} />
    }else {
      if (editPotentialField) {
        potentialFieldNode = (
          <InfoDisplay 
            label={'Potential'} 
            value={''}>
            <View style={Style.editInputFieldContainer}>
              <View style={Style.editInputFieldChildContainer}>
               <InputNumber
                 styles={Style.editInputField} 
                 value={selectShree.Potential__c} 
                 onChange={(value) => changePotentialField({value: value})}
                 editable={updatePotentialLoader ? false : true}
            />
            </View>
            {updatePotentialLoader ? 
              <Loading /> : 
              (<View style={{flexDirection: 'row'}}>
                <GenericIcon 
                  disabled={updatePotentialLoader}
                  name="checkmark-circle" 
                  onPress={() => updatePotential({OwnerId: userId, Id: selectShree.Id, Potential: selectShree.Potential__c})} 
                  style={Style.editIcons}
                />
                <GenericIcon 
                  name="close-circle" 
                  disabled={updatePotentialLoader}
                  onPress={closeEditPotentialField} 
                  style={Style.editIcons}
                />
              </View>)
             }
            </View>
          </InfoDisplay>
        );
      }else {
        potentialFieldNode = (
          <InfoDisplay 
            label={'Potential'} 
            value={''}>
            <View style={Style.editIconContainer}>
              <GenericIcon 
                name="create" 
                onPress={openEditPotentialField} 
                style={Style.editIcons}
              />
            </View>
         </InfoDisplay>
        );
      }
    }

    if (isRetailer) {//in case of retailer dont show potential edit button
      potentialFieldNode = <InfoDisplay label={'Potential'} value={selectShree.Potential__c || 'None'} />;
      extraInfoNode = [];
    }



// Add_Comment__c: null
// Address__c: "C-111/4  SOLANKI CHOWK SADH NAGAR - II"
// City__c: "DELHI"
// Company_Name__c: null
// Contact_Person_No__c: null
// Contact_Person__c: null
// Contact__c: null
// Counter_Code__c: "1048"
// Counter_Potential__c: null
// Customer_Category__c: "TR"
// Customer_Sub_Category__c: "TR"
// District__c: "DELHI"
// Email__c: null
// GST_Registration_Number__c: "URP"
// Id: "0019D000008XIHIQA4"
// Latitude__c: null
// Longitude__c: null
// Name: "DHEERAJ TRADING CO"
// Party_Type__c: "Dealer"
// Postal_Code__c: "110006"
// Potential__c: null
// Security_Deposit__c: 1000000
// Shop_Type__c: "Dealer"
// State__c: "Delhi"
// Taluka__c: "DELHI"
// Type_of_Counter__c: "Shree"
// Zone__c: null

    return (
      <View style={Style.parentContainer}>
        <ShreeInfoTuple data={selectShree}/>
        <View style={{ height: 15 }}></View>
        <ScrollView>
          <InfoDisplay label={'Address'} value={selectShree.Address__c || 'None'} />
          <InfoDisplay label={'Contact Person'} value={selectShree.Contact_Person__c || 'None'} />
          <InfoDisplay label={'Contact Person No.'} value={selectShree.Contact_Person_No__c || 'None'} />
          {potentialFieldNode}
          {extraInfoNode}
          <InfoDisplay label={'City'} value={selectShree.City__c || 'None'} />
          <InfoDisplay label={'Taluka'} value={selectShree.Taluka__c || 'None'} />
          <InfoDisplay label={'District'} value={selectShree.District__c || 'None'} />
           <InfoDisplay label={'Postal Code'} value={selectShree.Postal_Code__c || 'None'} />
          <InfoDisplay label={'State'} value={selectShree.State__c || 'None'} />
          {selectShree.Add_Comment__c ? <InfoDisplay label={'Remarks'} value={selectShree.Add_Comment__c} /> : []}
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  userId               : state.user.loginDetails.userId,
  selectShree          : state.shree.selectedShree.data,
  isRetailer           : state.shree.selectedShree.data && (state.shree.selectedShree.data['Party_Type__c'] == 'Retailer' ||state.shree.selectedShree.data['Shop_Type__c'] == 'Retailer'),
  editPotentialField   : state.shree.editPotentialField,
  updatePotentialLoader: state.shree.updatePotentialLoader
});

const mapDispatchToProps = (dispatch) => ({
  updatePotential: (params)            =>  dispatch(ShreeAction.updatePotential(params)),
  openEditPotentialField: ()     =>  dispatch(ShreeAction.openEditPotentialField()),
  closeEditPotentialField: ()    => dispatch(ShreeAction.closeEditPotentialField()),
  changePotentialField: (params) => dispatch(ShreeAction.changePotentialField(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShreeInfo)