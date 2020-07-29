import React, { Component } from 'react'
import { View, Text, Image, Keyboard, TouchableOpacity, StyleSheet, ScrollView} from 'react-native'
import { Item, Input, Button, Spinner } from 'native-base'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputPassword from 'App/Components/FormInput/InputPassword'
import InputText from 'App/Components/FormInput/InputText'
import { SEND_OTP } from 'App/Constants'
import NavigationService from 'App/Services/NavigationService'
import UserActions from 'App/Stores/User/Actions'
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductCard from 'App/Components/ProductCard'

class AddProductScreen extends Component {
    render() {
        return (
        	<View style={{paddingRight: '4%', paddingTop: '3%'}}>
	            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
	                 <BlueButton title={"Cart"}  style={{width: wp('35%')}} onPress={() => NavigationService.navigate('TestDriveFeedBackScreen')}>
		            	<GenericIcon name={'cart-plus'} style={{color: Colors.white, fontSize: 23}}/>
		            </BlueButton>
	            </View>
	            <ScrollView style={{marginTop: '6%'}}>
	            	<ProductCard 
						data={{}} 
						quantityInCart={1}
						onChangeQuantity={(quantity) => {}}
						onPressInfo={() => {
							
						}}
					/>
					<ProductCard 
						data={{}} 
						quantityInCart={1}
						onChangeQuantity={(quantity) => {}}
						onPressInfo={() => {
							
						}}
					/>
					<ProductCard 
						data={{}} 
						quantityInCart={1}
						onChangeQuantity={(quantity) => {}}
						onPressInfo={() => {
							
						}}
					/><ProductCard 
						data={{}} 
						quantityInCart={1}
						onChangeQuantity={(quantity) => {}}
						onPressInfo={() => {
							
						}}
					/>
					<ProductCard 
						data={{}} 
						quantityInCart={1}
						onChangeQuantity={(quantity) => {}}
						onPressInfo={() => {
							
						}}
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
)(AddProductScreen)



const Styles = StyleSheet.create({
  box: {
    width: wp('88%'),
    backgroundColor: Colors.lightGrey,
    flexDirection: 'column',
    padding: 15,
    paddingLeft: 15,
    position: 'relative',
    borderRadius: 10,
    marginHorizontal: wp('6%'),
    marginBottom: hp('2%')
  },
  btmBox: {
    flexDirection: 'column',
    marginBottom: hp('2%')

  },
  desc: {
    color: Colors.primary,
    fontSize: 12,
    fontFamily: ApplicationStyles.textFont,
  },
  detail: {
    // fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.primary,
    fontWeight: '700',
  },
  strip: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    color: Colors.primary,
    fontSize: wp('4.5%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  ttl: {
    color: Colors.grey,
    fontFamily: ApplicationStyles.textMsgFont,
    fontSize: wp('3%'),
    marginTop: hp('.5%')
  },
  tuple: {
    borderBottomColor: Colors.clrF1F9FF,
    borderRadius: 1,
    flexDirection: 'row',
  },
  userCircle: {
  //   // marginTop: 80,
  //   alignItems: 'center',
  //   backgroundColor: Colors.lightGrey,
  //    borderWidth: 1,
  //    borderColor: Colors.primary,
  //   borderRadius: 50,
  //   flexDirection: 'row',
  //   height: 30,
  //   justifyContent: 'center',
  //   width: 30,
   },
  userDtl: {
    paddingLeft: 15,
    paddingRight: 15,
    paddingTop: 3,
    overflow: 'hidden',
    width: wp('50%')
  },
  userIcon: {
    height: 16,
    width: 16,
  }
});
