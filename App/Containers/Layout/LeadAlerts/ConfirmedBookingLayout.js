import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import SearchBar from 'App/Components/SearchBar'
import Underline from 'App/Components/Underline';
import LeadAlertActions from 'App/Stores/LeadAlerts/Actions';



class ConfirmBookingLayout extends React.Component {
  render() {
    const {
      currentScreen,
      bookingSearchFilters,
      updateSearchFilters
    } = this.props;

    return (
     <Header style={Styles.header}>
       <BackArrowButton />
       <Text style={Styles.heading}>{"BOOKING CONFIRMED"}</Text>
      

       <View style={{alignItems:'center', justifyContent: 'center', width: wp('50%'),  marginHorizontal: wp('23%')}}>
       
       <SearchBar
	            placeholder={`Search Customer By Phone No.`}
              onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
              onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
              onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
              value={bookingSearchFilters['searchValue']}
              ContainerStyles={Styles.searchContainer}
              inputStyles={{fontSize: wp('4%')}}
              key={'SearchCustomersList'}
              />
      </View>  
    </Header>
    )
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  bookingSearchFilters: state.leadAlerts.bookingSearchFilters,
})

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters : (params) => dispatch(LeadAlertActions.updateBookingSearchFilters(params)),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConfirmBookingLayout)


const Styles = StyleSheet.create({
   buttonBox: {
    ...Helpers.textCenter,
  },
  container: {
    ...Metrics.mediumHorizontalPadding,
    ...Metrics.mediumVerticalPadding,
    ...Helpers.center,
    backgroundColor: Colors.white,
    flex: 1,
    marginHorizontal: 30,
    marginVertical: 110,
    paddingBottom: 60,
    shadowColor: Colors.white,
    shadowOffset: { width: 20, height: 30 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
  },

  heading: {
    
    alignSelf: 'center',
    color: Colors.primary,
    fontFamily: Platform.OS === 'ios' ? 'Montserrat-Bold' : 'Roboto_bold',
    fontSize: wp('5.5%'),
    marginTop: hp('0%'),
    marginBottom:hp('3%'),
    textTransform: 'uppercase',
    },
   header: {
    alignItems: 'flex-start',
    height: hp('24%'),
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: Colors.white
  },

  searchContainer: {
    width: wp('95%')
  },
});

