import React, { Component } from 'react'
import { View, Text, Image, Keyboard, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { Item, Input, Button, Spinner } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import WhiteButton from 'App/Components/WhiteButton'
import GenericIcon from 'App/Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputPassword from 'App/Components/FormInput/InputPassword'
import InputText from 'App/Components/FormInput/InputText'
import { SEND_OTP } from 'App/Constants'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductInfoCard from './ProductInfoCard'

class ProductInfoScreen extends Component {
    render() {
        return (
        	<View style={{flex: 1, paddingVertical: hp('1%'), paddingHorizontal: wp('4%')}}>
	            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
	                <WhiteButton title={"Available Offers"}  style={{width: wp('42%'), height: hp('4.5%')}} onPress={() => NavigationService.navigate('AvailableSchemesScreen')} textStyle={{color: Colors.blue, textTransform: 'capitalize', fontSize: wp('3.5%')}}>
		            	<GenericIcon name={'percent'} style={{color: Colors.blue, fontSize:  wp('4%')}}/>
		            </WhiteButton>
	            </View>
	            <ScrollView style={{marginTop: hp('2%')}}>
	            	<ProductInfoCard 
						data={{}} 
						quantityInCart={1}
						showEditQuantity={false}
					/>
	            </ScrollView>
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
)(ProductInfoScreen)
