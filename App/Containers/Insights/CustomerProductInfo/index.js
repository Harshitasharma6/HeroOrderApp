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
import CustomerProductInfoCard from './CustomerProduct'
import Styles from './CustomerProductStyles'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

class CustomerProductInfoScreen extends Component {
    render() {
        const {
          data,
         
        } = this.props.navigation.state.params;
        return (
        	<View style={{flex: 1, paddingVertical: hp('1%'), paddingHorizontal: wp('4%')}}>
	            <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
	                <WhiteButton title={"Offers Applied"}  style={{width: wp('40%'), height: hp('4.5%')}} onPress={() => NavigationService.navigate('CustomerOfferAppliedScreen', {data: data.schemes})} textStyle={{color: Colors.blue, textTransform: 'capitalize', fontSize: wp('3.5%')}} >
                  <Icon name={'brightness-percent'} style={Styles.listItemIcon} />
		            </WhiteButton>
	            </View>
	            <ScrollView style={{marginTop: hp('3%')}}>
	            	<CustomerProductInfoCard
      						data={data} 
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
)(CustomerProductInfoScreen)