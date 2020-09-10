import React, { Component } from 'react'
import { View, Text, Image, Keyboard} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import InputMobile from 'App/Components/FormInput/InputMobile'
import NavigationService from 'App/Services/NavigationService'
import VisitorActions from 'App/Stores/Visitor/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Style from './styles';

class Visitor extends Component {
    componentWillUnmount() {
        const {
            hideOpenLeadPrompt,
            clearSearchCustomerForm
        } = this.props;

        hideOpenLeadPrompt();
    }
    
    submitForm(){
        const {
            form, 
            submit,
            hideOpenLeadPrompt
        } = this.props;
        Keyboard.dismiss();
        hideOpenLeadPrompt();
        submit(form);
    }

    render() {
        const {
            form, 
            submit,
            loading,
            validation,
            changeForm,
            visitorData,
            showOpenLeadPrompt,
            hideOpenLeadPrompt
        } = this.props;
        return (
            <View style={Style.container}>
                 <View style={Style.buttonBox}>
                    <Image
                        style={Style.logo}
                        source={require('App/Assets/Images/herologo.png')}
                    />
                </View>
                <View style={Style.action}>
                    <InputMobile
                        label={'Enter Phone Number'} 
                        placeholder={'Phone Number'} 
                        value={form.contact_number} 
                        onChange={(value) => changeForm({edited_field: 'contact_number', edited_value: value})} 
                        error={validation.invalid && validation.invalid_field == 'contact_number'}
                        labelStyles={Style.labelStyles}
                    />

                    <BlueButton
                        style={Style.button}
                        onPress={() => this.submitForm()}
                        disabled={loading}
                        loading={loading}
                        title={'Search'}
                    >
                        <GenericIcon name="search" style={Style.buttonIcon}/>
                    </BlueButton>
                </View>
                {showOpenLeadPrompt && visitorData.data && visitorData.data.length && visitorData.table == 'Enquiry' ?
                    <View style={Style.bottomSection}> 
                        <GenericDisplayCard dark={false}
                            style={{width: 350}}
                            heading={`${visitorData.data[0].first_name__c} ${visitorData.data[0].last_name__c}`}
                            onPress={() => {hideOpenLeadPrompt(); NavigationService.navigate('VisitorInfoScreen')}}
                            content={[
                                <GenericDisplayCardStrip key={'Age'} label={'Age'} value={visitorData.data[0].age__c }/>,
                                <GenericDisplayCardStrip key={'Email'} label={'Email'} value={visitorData.data[0].email_id__c}/>,
                                  <BlueButton title={'Proceed'} style={Style.proceedAction} textStyle={Style.proceedActionText} onPress={() => {hideOpenLeadPrompt(); NavigationService.navigate('VisitorInfoScreen')}}></BlueButton>
                            ]}
                        />
                </View> : []}
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
  loading: state.visitor.loaders.searchCustomerLoader,
  validation: state.visitor.searchCustomerValidation,
  form: state.visitor.searchCustomerForm,
  visitorData: state.visitor.visitorSearchSuccessData,
  showOpenLeadPrompt: state.visitor.showOpenLeadPrompt
})

const mapDispatchToProps = (dispatch) => ({
  submit:(params)           => dispatch(VisitorActions.searchCustomer(params)),
  changeForm:(params)       => dispatch(VisitorActions.changeSearchCustomerForm(params)),
  hideOpenLeadPrompt:()     => dispatch(VisitorActions.hideOpenLeadPrompt()),
  clearSearchCustomerForm:()=> dispatch(VisitorActions.clearSearchCustomerForm())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Visitor)
