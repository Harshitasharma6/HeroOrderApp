import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image, RefreshControl } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import HeadingBox from 'App/Components/HeadingBox'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Separator from 'App/Components/Separator';
import LineChart from 'App/Components/LineChart';
import InsightsActions from 'App/Stores/Insights/Actions';
import _ from 'lodash'

class DashboardTrendsScreen extends React.Component {
  componentDidMount() {
    this.fetchCall()
  }

  fetchCall() {
    const {
      fetchTrends,
      fetchSoldProducts
    } = this.props;

    fetchTrends({});
    fetchSoldProducts({});
  }

  render() {
    const {
      trendsDataLoader,
      soldProductsDataLoader,
      trendsRevenueData,
      soldProductsData,
      currentScreen
    } = this.props;

    let revenueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0];
    let productsData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0,0,0];
    let revenueDataMapping = {};
    let productsDataMapping = {};

    if (trendsRevenueData.length) {
      trendsRevenueData.map((obj) => {
        _.forEach(obj, (value, key) => {
          revenueDataMapping[key] = value
        }); 
      });

      revenueData = [
        revenueDataMapping['Jan'] || 0,
        revenueDataMapping['Feb'] || 0,
        revenueDataMapping['Mar'] || 0,
        revenueDataMapping['Apr'] || 0,
        revenueDataMapping['May'] || 0,
        revenueDataMapping['Jun'] || 0,
        revenueDataMapping['Jul'] || 0,
        revenueDataMapping['Aug'] || 0,
        revenueDataMapping['Sep'] || 0,
        revenueDataMapping['Oct'] || 0,
        revenueDataMapping['Nov'] || 0,
        revenueDataMapping['Dec'] || 0
      ]

      revenueData = revenueData.map((x) => Number(x));
    }


    if (soldProductsData.length) {
      soldProductsData.map((obj) => {
        _.forEach(obj, (value, key) => {
          productsDataMapping[key] = value
        }) 
      })

      productsData = [
        productsDataMapping['Jan'] || 0,
        productsDataMapping['Feb'] || 0,
        productsDataMapping['Mar'] || 0,
        productsDataMapping['Apr'] || 0,
        productsDataMapping['May'] || 0,
        productsDataMapping['Jun'] || 0,
        productsDataMapping['Jul'] || 0,
        productsDataMapping['Aug'] || 0,
        productsDataMapping['Sep'] || 0,
        productsDataMapping['Oct'] || 0,
        productsDataMapping['Nov'] || 0,
        productsDataMapping['Dec'] || 0
      ]

      productsData = productsData.map((x) => Number(x));
    }


    return (
      	<ScrollView 
          style={Styles.container}
          refreshControl={
            <RefreshControl refreshing={trendsDataLoader || soldProductsDataLoader} onRefresh={() => this.fetchCall()} />
          }
        >
          	<HeadingBox value={'Revenue Trend'} />
          		<LineChart 
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Nov', 'Dec']}
                data={revenueData}
                legend={'Month Wise Revenue (in INR)'}
                loading={trendsDataLoader}
                yAxisInterval={2}
              />
          	<HeadingBox value={'Vehicle Sold Count'} />
          		<LineChart 
                labels={['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Aug', 'Nov', 'Dec']}
                data={productsData}
                legend={'Month Wise Vehicle Sold Count'}
                loading={soldProductsDataLoader}
                yAxisInterval={2}
              />
        </ScrollView>
    );
  }
}  


const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  trendsRevenueData: state.insights.dashboardTrendsRevenueData,
  soldProductsData: state.insights.dashboardTrendsSoldProductsData,
  trendsDataLoader: state.insights.loaders.getDashboardTrendsRevenueLoader,
  soldProductsDataLoader: state.insights.loaders.getDashboardTrendsSoldProductsLoader,
})

const mapDispatchToProps = (dispatch) => ({
  fetchTrends:(params)       => dispatch(InsightsActions.getDashboardTrendsRevenue(params)),
  fetchSoldProducts:(params) => dispatch(InsightsActions.getDashboardTrendsSoldProducts(params))
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardTrendsScreen)


const Styles = StyleSheet.create({
  container: {
  	flex: 1,
  	marginBottom: hp('2%')
  },
  header: {
    alignItems: 'flex-start',
    height: hp('17%'),
    flexDirection: 'column',
    justifyContent: 'center'
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
  logo: {
    width: 80,
    height: 80,
    borderRadius: 80 / 2,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "red",
    marginLeft: 5,
    marginTop: 5,
    marginBottom: 5
  },
});





