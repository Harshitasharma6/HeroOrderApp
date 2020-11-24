import React, { Component } from 'react'
import { View, Text, Image, Keyboard, TextInput, TouchableOpacity} from 'react-native'
import { Item, Input, Button, Spinner } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Style from './LoginScreenStyle'
import BlueButton from 'App/Components/BlueButton'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputPassword from 'App/Components/FormInput/InputPassword'
import InputText from 'App/Components/FormInput/InputText'
import { SEND_OTP } from 'App/Constants'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { Colors } from 'App/Theme';


class LoginScreen extends Component {
    submit(){
        Keyboard.dismiss(); 
        const {
            loginUser,
            password,
            mobile
        } = this.props;

        loginUser({
            mobile: mobile, 
            password: password
        });  
    }
   

    render() {
        const {
            validation,
            changeForm,
            password,
            loading,
            mobile
        } = this.props;

        console.log('inside login screen');
        return (
            <View style={Style.container}>
                 <View style={Style.buttonBox}>
                    <Image
                        style={{ width: 300, height: 150, resizeMode: 'contain' }}
                        source={require('App/Assets/Images/herologo.png')}
                    />
                </View>
                <View style={Style.action}>
                    <InputText 
                        placeholder={'Username'} 
                        value={mobile} 
                        onChange={(value) => changeForm({mobile: value, password: password})} 
                        error={validation.mobile} 
                    />

                    <InputPassword 
                        placeholder={'Password'} 
                        value={password} 
                        onChange={(value) => changeForm({password: value, mobile: mobile})} 
                        error={validation.invalid_password} 
                    />

                    <BlueButton
                        style={Style.button}
                        onPress={() => this.submit()}
                        disabled={loading}
                        loading={loading}
                        title={'Login'}

                    />
                </View>
            </View>
        )
    }
}

const mapStateToProps = (state) => ({
    mobile: state.user.mobile,
    password: state.user.password,
    loading: state.user.userLoginIsLoading,
    validation: state.user.validation
})

const mapDispatchToProps = (dispatch) => ({
  loginUser: (data) => dispatch(UserActions.loginUser(data)),
  changeForm: (data) => dispatch(UserActions.changeLoginForm(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen)
