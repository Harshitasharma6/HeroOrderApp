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
            username: this.props.username, 
            password: this.props.password
        });  
    }

    render() {
        return (
            <View style={Style.container}>
                 <View style={Style.buttonBox}>
                    <Image
                        style={{ width: 100, height: 100 }}
                        source={require('App/Assets/Images/shreelogo.png')}
                    />
                </View>
                <View style={Style.action}>
                    <InputText 
                        placeholder={'Username'} 
                        value={this.props.username} 
                        onChange={(value) => this.props.changeLoginForm({username: value, password: this.props.password})} 
                        error={this.props.validation.username} 
                    />

                    <InputPassword 
                        placeholder={'Password'} 
                        value={this.props.password} 
                        onChange={(value) => this.props.changeLoginForm({password: value, username: this.props.username})} 
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
)(LoginScreen)
