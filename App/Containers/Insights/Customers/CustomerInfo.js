import React, { Component } from 'react'
import { View, Text, Image, Keyboard, ScrollView} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import InputMobile from 'App/Components/FormInput/InputMobile'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import Style from './styles';
import {Colors} from 'App/Theme'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import CustomerInfoCard from './CustomerInfoCard';

class CustomerInfoScreen extends Component {
    render() {
        return (
        	<ScrollView style={{marginVertical: '4%'}}>
        		<CustomerInfoCard />
	            <GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0, marginTop: '4%' }}
	              key={1}
	              content={[
	               <GenericDisplayCardStrip key={'Product purchased'} label={'Product purchased'} value={'29/06/2020'} />,
	                <GenericDisplayCardStrip key={'Source of Enquiry'} label={'Source of Enquiry'} value={'Event'} />,
	                <GenericDisplayCardStrip key={'Product Interested'} label={'Product Interested'} value={'Optima LI'} />,
	                  <GenericDisplayCardStrip key={'Existing Two Wheeler'} label={'Existing Two Wheeler'} value={'Yes'} />,
	                <GenericDisplayCardStrip key={'Exchange Required'} label={'Exchange Required'} value={'Yes'} />,
	                <GenericDisplayCardStrip key={'Purchase Date'} label={'Purchase Date'} value={'15/07/2020'} />,
	                <GenericDisplayCardStrip key={'Mode of Purchase'} label={'Mode of Purchase'} value={'Finance'} />,
	                <GenericDisplayCardStrip key={'Test Drive Offered'} label={'Test Drive Offered'} value={'Yes'} />,
	            ]}
            />
            </ScrollView>
        )
    }
}

const mapStateToProps = (state) => ({
  username: state.user.username,
  password: state.user.password,
  userLoginIsLoading: state.user.userLoginIsLoading,
  validation: state.user.validation
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(UserActions.loginUser(data)),
  changeLoginForm: (data) => dispatch(UserActions.changeLoginForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerInfoScreen)
