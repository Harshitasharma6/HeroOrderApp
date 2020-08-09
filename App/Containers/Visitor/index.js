import React, { Component } from 'react'
import { View, Text, Image, Keyboard} from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import InputMobile from 'App/Components/FormInput/InputMobile'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { HelperService } from 'App/Services/Utils/HelperService';
import Style from './styles';

class Visitor extends Component {
    submit = () => {
        Keyboard.dismiss();
        HelperService.showToast({
            message: 'Register New User!',
            duration: 2000
        })
        NavigationService.navigate('NewRegistrationFormScreen')
        // this.props.loginUser({
        //     username: this.props.username, 
        //     password: this.props.password
        // });  
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
                    <InputMobile
                        label={'Enter Phone Number'} 
                        placeholder={'Phone Number'} 
                        value={this.props.username} 
                        onChange={(value) => this.props.changeLoginForm({username: value, password: this.props.password})} 
                        error={this.props.validation.username} 
                    />

                    <BlueButton
                        style={Style.button}
                        onPress={this.submit}
                        disabled={this.props.userLoginIsLoading}
                        loading={this.props.userLoginIsLoading}
                        title={'Search'}
                    >
                        <GenericIcon name="search" style={Style.buttonIcon}/>
                    </BlueButton>
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
)(Visitor)
