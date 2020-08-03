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


class CustomerList extends React.Component {
  render() {
    const {
      currentScreen
    } = this.props;

    return (
      <View>
        <Header transparent style={Styles.header}>
        	<SearchBar
	            placeholder={`Search Customer`}
	            onInputChange={(text) => console.log('text')}
	            onInputSubmit={(text) => console.log('text')}
	            onInputClear={(text) => console.log('text')}
	            value={''}
	            ContainerStyles={Styles.searchContainer}
	            inputStyles={{fontSize: wp('4%')}}
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
  currentScreen: state.common.currentScreen
})

export default connect(
  mapStateToProps
)(CustomerList)


const Styles = StyleSheet.create({
  container: {
  	flexDirection: 'row'
  },
  header: {
    height: hp('13%'),
    flexDirection: 'column'
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
    width: wp('95%')
  },
});

