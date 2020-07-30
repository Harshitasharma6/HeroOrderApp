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
import Style from '../styles';
import {Colors} from 'App/Theme'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import VisitorInfoCard from './VisitorInfoCard';

class VisitorInfoScreen extends Component {


    render() {
        return (
        	<ScrollView style={{marginTop: '4%'}}>
        		<VisitorInfoCard />
	            <BlueButton title={"Add test drive feedback"} style={{width: '88%', marginHorizontal: '6%'}} textStyle={{fontSize: 15}} onPress={() => NavigationService.navigate('TestDriveFeedBackScreen')}>
	            	<GenericIcon name={'plus-circle'} style={{color: Colors.white, fontSize: 20}}/>
	            </BlueButton>
	            <GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0, marginTop: '4%' }}
	              key={1}
	              content={[
	                <GenericDisplayCardStrip key={'Phone Number'} label={'Phone Number'} value={'9779897974'} />,
	                <GenericDisplayCardStrip key={'Email'} label={'Email'} value={'nirugupta@gmail.com'} />,
	                  <GenericDisplayCardStrip key={'Address'} label={'Address'} value={'Hno. 123 Palam, New Delhi'} />,
	                <GenericDisplayCardStrip key={'Occupation'} label={'Occupation'} value={'Business'} />,
	                <GenericDisplayCardStrip key={'Source of Enquiry'} label={'Source of Enquiry'} value={'Event'} />,
	                <GenericDisplayCardStrip key={'Product Interested'} label={'Product Interested'} value={'Optima LI'} />,
	                  <GenericDisplayCardStrip key={'Existing Two Wheeler'} label={'Existing Two Wheeler'} value={'Yes'} />,
	                <GenericDisplayCardStrip key={'Exchange Required'} label={'Exchange Required'} value={'Yes'} />,
	                <GenericDisplayCardStrip key={'Expected Purchase Date'} label={'Expected Purchase Date'} value={'15/07/2020'} />,
	                <GenericDisplayCardStrip key={'Mode of Purchase'} label={'Mode of Purchase'} value={'Finance'} />,
	                <GenericDisplayCardStrip key={'Test Drice Offered'} label={'Test Drice Offered'} value={'Yes'} />,

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
)(VisitorInfoScreen)
