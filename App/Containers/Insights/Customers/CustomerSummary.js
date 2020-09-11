import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, StyleSheet, Text, TouchableOpacity , FlatList} from 'react-native';
import {Spinner } from 'native-base';
import NavigationService from 'App/Services/NavigationService'
import CheckInAction from 'App/Stores/CheckIn/Actions';
import SelectionButton from 'App/Components/SelectionButton';
import {ApplicationStyles, Colors} from 'App/Theme';
import ProgressBar from 'App/Components/ProgressBar';
import GenericIcon from 'App/Components/GenericIcon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InsightsActions from 'App/Stores/Insights/Actions';
import LeadAlertsActions from 'App/Stores/LeadAlerts/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import CustomerInfoProductCard from './CustomerInfoProductCard';
import HeadingBox from 'App/Components/HeadingBox';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'

class CustomerSummaryScreen extends Component {

    componentDidMount() {
			
	}

	fetchCall() {
		const {
		  fetchData,
          fetchCompletedData,
		} = this.props
	
		fetchData({});
        fetchCompletedData({});
    }

    getDataCard(item) {
       
        
        return (
          <GenericDisplayCard dark={false}
              style={{ width: '100%', elevation: 0 }}
              onPress={() => NavigationService.navigate('CustomerProductInfoScreen', {data: item}, )}
              content={[
                <GenericDisplayCardStrip 
                key={'Product Name'+ item.id } 
                label={'Product Name'} 
                value={item.name}
               />,
                <GenericDisplayCardStrip 
                  key={'Product Price' + item.id} 
                  label={'Product Price'} 
                  value={HelperService.currencyValue(item.total_amount_payable__c)}
                 />,
                
                <GenericDisplayCardStrip 
                 key={'Purchase Date' + item.id } 
                 label={'Purchase Date'} 
                 value={HelperService.dateReadableFormat(item.Purchased_Date__c)}
                />,
                <GenericDisplayCardStrip 
                 key={'Model Color'  + item.id} 
                 label={'Model Color'} 
                 value={item.Model_Color__c}
                />,
    
              ]}
            />
        );
      }
    
    getDataNode() {
        const {
          enquiry,
          loader,
         } = this.props;

         const {
            data
          } = this.props.navigation.state.params;
        let visibleNode = [];
    
        if (data.enquiry && data.enquiry.length) {
          if (data.enquiry.length) {
            visibleNode = (
              <FlatList
                data={data.enquiry}
                renderItem={({ item }) => this.getDataCard(item)}
                keyExtractor={item => item}
                onRefresh={() => this.fetchCall()}
                refreshing={loader}
              />
            );
          } else {
            visibleNode =  (
              <NoDataFound text={'No Products Found'}>
                
              </NoDataFound>
            );
          }
        } else if (loader) {
          visibleNode = <Loading />
        } else if (data && !data.length && !loader) {
          visibleNode =  (
              <NoDataFound text={'No Products Found'}>
                
              </NoDataFound>
            );
        }
    
        return visibleNode;
      }
    
     
 

    render() {
        const {
           
            loader,
            completedData,
            selectFollowUp,
            completedDataLoader
        } = this.props;
        const {
            data
          } = this.props.navigation.state.params;
    
       
        return (
            <View style={Styles.mainContainer}>
               
                        <Text style={{...ApplicationStyles.screenHeading, fontSize: wp('4%'), color: Colors.black }}>Today, {HelperService.getCurrentDate()} {HelperService.getMonthMappingName(HelperService.getCurrentMonth())} {HelperService.getDayMappingName(HelperService.getCurrentDay())}</Text>
                       
                        <CustomerInfoProductCard
                        data={data}
                        />
                    
                <View style={{marginRight:'60%'}}>
                <HeadingBox value={'Product Purchased'}/>
                </View>
                <View style={{flex: 1, width:'90%'}}>
        {this.getDataNode()}
      </View>
              
            </View>
        );
    }
}

const mapStateToProps = (state) => ({
  name: `${state.user.first_name__c} ${state.user.last_name__c}`,
  data: state.insights.FollowUpData,
  completedData: state.insights.completedFollowUpData,
  loader: state.insights.loaders.getFollowUpLoader,
  completedDataLoader: state.insights.loaders.getCompletedFollowUpLoader,
})

const mapDispatchToProps = (dispatch) => ({
    fetchData:(params)            => dispatch(InsightsActions.getFollowUp(params)),
    fetchCompletedData:(params)   => dispatch(InsightsActions.getCompletedFollowUp(params)),
    selectFollowUp: (params)      => dispatch(LeadAlertsActions.selectFollowUp(params))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(CustomerSummaryScreen )


const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
       
        alignItems: 'center',
        paddingTop: hp('0%') 
    },
    progressContainer: {
        width: wp('90%'), 
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf: 'center',
        height: hp('14%'), 
        backgroundColor: Colors.lightGrey,
        marginBottom: hp('4%'),
        borderRadius: wp('1.5%'),
        position: 'relative'
    },
    name: {
        color: Colors.darkGrey,
        fontSize: wp('4.8%'),
        fontFamily: ApplicationStyles.textMsgFont,
        textTransform: 'capitalize',
        marginBottom: hp('.1%'),
    },

    info: {
        color: Colors.darkGrey,
        fontSize: wp('3.3%'),
        fontFamily: ApplicationStyles.textMsgFont,
        textTransform: 'capitalize',
        marginBottom: hp('.1%'),
    },
    textContainer: {
       // alignSelf: 'flex-start',
       // / paddingLeft: wp('8%')
    },
    countText: {
        color: Colors.grey,
        fontSize: wp('3%'),
        marginBottom: hp('.5%'),
        marginTop: hp('1%'),
        fontFamily: ApplicationStyles.textMsgFont,
    },
    refreshIcon: {
        color: Colors.primary, 
        fontSize: wp('5.5%'),
        alignSelf: 'center', 
        padding: 10,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 2
    },
    loadingIcon: {
        color: Colors.primary, 
        fontSize: wp('4%'),
        alignSelf: 'center', 
        position: 'absolute',
        right: wp('2.3%'),
        top: -hp('2.3%'),
        zIndex: 2
    }
});