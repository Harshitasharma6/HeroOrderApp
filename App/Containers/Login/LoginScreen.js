import React, { Component } from 'react'
import { View, Text, Image, Keyboard, TouchableOpacity} from 'react-native'
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
    submit = () => {
        Keyboard.dismiss(); 
        
         this.props.loginUser({
            mobile: this.props.mobile, 
            password: this.props.password
        });  
    }
   

    render() {
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
                        value={this.props.mobile} 
                        onChange={(value) => this.props.changeLoginForm({mobile: value, password: this.props.password})} 
                        error={this.props.validation.mobile} 
                    />

                    <InputPassword 
                        placeholder={'Password'} 
                        value={this.props.password} 
                        onChange={(value) => this.props.changeLoginForm({password: value, mobile: this.props.mobile})} 
                        error={this.props.validation.invalid_password} 
                    />

                    <BlueButton
                        style={Style.button}
                        onPress={this.submit}
                        disabled={this.props.userLoginIsLoading}
                        loading={this.props.userLoginIsLoading}
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
)(LoginScreen)
