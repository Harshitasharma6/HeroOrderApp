import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import SearchBar from 'App/Components/SearchBar'
import InsightsActions from 'App/Stores/Insights/Actions';
import Select from 'App/Components/Select';


class CustomerList extends React.Component {
  render() {
    const {
      currentScreen,
      customerSearchFilters,
      updateSearchFilters
    } = this.props;

    return (
      <View>
        <Header transparent style={Styles.header}>
        	<SearchBar
	            placeholder={`Search Customer`}
              onInputChange={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
              onInputSubmit={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': text })}
              onInputClear={(text) => updateSearchFilters({ edited_field: 'searchValue', 'edited_value': '' })}
              value={customerSearchFilters['searchValue']}
              ContainerStyles={Styles.searchContainer}
              inputStyles={{fontSize: wp('4%')}}
              key={'SearchCustomersList'}
              
             
              />
            <Select style={Styles.selectPickerStyle}
            placeholder={'Search By'}
            list={customerSearchFilters.searchByOptions}
            selected={customerSearchFilters['searchBy']}
            onChange={(value) => updateSearchFilters({ edited_field: 'searchBy', 'edited_value': value })}
          />   
        </Header>
        {this.props.children}
      </View>
    )
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  customerSearchFilters: state.insights.customerSearchFilters,
  
})

const mapDispatchToProps = (dispatch) => ({
  updateSearchFilters : (params) => dispatch(InsightsActions.updateCustomersSearchFilters(params)),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row'
  },
  header: {
    height: hp('12%'),
    flexDirection: 'row',
    marginTop:hp('3%')

  },
  arrowContainer: {
    width: wp('20%'),
    paddingTop: hp('1%')
  },
  backArrow: {
    color: Colors.primary,
    padding: 5
  },
  actionButton: {
    overflow: 'visible',
    paddingLeft: wp('4%'),
    paddingRight: wp('4%'),
    marginBottom: hp('1%'),
    marginTop: hp('1%'),
    marginRight: wp('2%'),
    marginLeft: wp('1%'),
    height: hp('5%'),
    minWidth: wp('25%'),
    width: wp('45%')
  },
  actionButtonText: {
    fontSize: wp('2.9%'),
    fontFamily: ApplicationStyles.textMsgFont
  },
  countBadge: {
    position: 'absolute',
    backgroundColor: Colors.button,
    right: 0,
    top: -10
  },
  logoContainer: {
  	width: wp('40%'),
    height: hp('12%'),
    marginLeft: 5,
    marginBottom: 5,
    overflow: 'hidden',
    alignSelf: 'center',
    
    position: 'relative'
  },
  logo: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
    top: 0
  },
  searchContainer: {
    width: wp('60%')
  },


  selectPickerStyle: {
    width: wp('30%'),
    height: hp('4.2%'),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.grey,
    marginTop: hp('1%'),
  },  
});

