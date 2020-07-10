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

class ShreeRetailerInfo extends Component {

  render() {
    const {
      userId,
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

    return (
      <View style={Style.parentContainer}>
        <ShreeInfoTuple data={selectShree} />
        <View style={{ height: 15 }}></View>
        <ScrollView>
          <InfoDisplay label={'Address'} value={selectShree.Address__c || 'None'} />
          <InfoDisplay label={'Company Name'} value={selectShree.Company_Name__c || 'None'} />
          <InfoDisplay label={'Type of Counter'} value={selectShree.Type_of_Counter__c || 'None'} />
          <InfoDisplay label={'Email'} value={selectShree.Email__c || 'None'} />
          <InfoDisplay label={'Counter Code'} value={selectShree.Counter_Code__c || ''} />
          <InfoDisplay label={'Contact'} value={selectShree.Contact__c || 'None'} />
          <InfoDisplay label={'Security Deposit'} value={ selectShree.Security_Deposit__c|| 'None'} />
          {potentialFieldNode}
          <InfoDisplay label={'Customer Category'} value={selectShree.Customer_Category__c || 'None'} />
          <InfoDisplay label={'Customer Sub Category'} value={selectShree.Customer_Sub_Category__c || 'None'} />
          <InfoDisplay label={'GST Registration Number'} value={selectShree.GST_Registration_Number__c || 'None'} />
          <InfoDisplay label={'State'} value={selectShree.State__c || 'None'} />
          <InfoDisplay label={'City'} value={selectShree.City__c || 'None'} />
          <InfoDisplay label={'Taluka'} value={selectShree.Taluka__c || 'None'} />
          <InfoDisplay label={'District'} value={selectShree.District__c || 'None'} />
          <InfoDisplay label={'Postal Code'} value={selectShree.Postal_Code__c || 'None'} />
          <InfoDisplay label={'Last Payment'} value={selectShree.Last_Payment__c || 'None'} />
          <InfoDisplay label={'Second Last Payment'} value={selectShree.Second_Last_Payment__c || 'None'} />
          <InfoDisplay label={'Third Last Payment'} value={selectShree.Third_Last_Payment__c || 'None'} />
        </ScrollView>
      </View>
    )
  }
}


const mapStateToProps = (state) => ({
  userId               : state.user.loginDetails.userId,
  selectShree          : state.shree.selectedShree.data,
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
)(ShreeRetailerInfo)