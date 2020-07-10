import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import Style from './LoginScreenStyle'
import BlueButton from '../../Components/BlueButton'
import { RESEND_OTP, LOGIN, OTP } from '../../Constants'
import NavigationService from 'App/Services/NavigationService'
import InputNumber from '../../Components/FormInput/InputMobile'

export default class LoginOtpScreen extends Component {

    completeDay = () => {
        NavigationService.navigateAndReset('StartDayScreen')
    }
    render() {
        return (
            <View style={Style.container}>
                <View style={Style.buttonBox}>
                    <Image
                        style={{ width: 150, height: 150 }}
                        source={require('App/Assets/Images/logo.png')}
                    />
                </View>
                <View style={Style.action}>
                    <InputNumber placeholder={'OTP'}/>
                    <View style={Style.link}>
                        <Text style={Style.linkText}>
                            {RESEND_OTP}
                        </Text>
                    </View>
                    <BlueButton title={LOGIN} onPress={this.completeDay} />
                </View>
            </View>
        )
    }
}
