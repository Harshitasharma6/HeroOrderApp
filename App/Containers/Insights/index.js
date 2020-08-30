import React, { Component } from 'react';
import { connect } from 'react-redux'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import NavigationService from 'App/Services/NavigationService'
import CheckInAction from 'App/Stores/CheckIn/Actions';
import SelectionButton from 'App/Components/SelectionButton'
import {ApplicationStyles, Colors} from 'App/Theme'
import ProgressBar from 'App/Components/ProgressBar'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import InsightsActions from 'App/Stores/Insights/Actions';
import LeadAlertsActions from 'App/Stores/LeadAlerts/Actions'

class InsightsScreen extends Component {

    componentDidMount() {
		this.fetchCall()	
	}

	fetchCall() {
		const {
		  fetchData,
          fetchCompletedData,
		} = this.props
	
		fetchData({});
        fetchCompletedData({});
	}
 

    render() {
        const {
            data,
            loader,
            completedData,
            selectFollowUp
        } = this.props;
        
        let pending_count = data&&data.count ?  data.count : 0;
        let completed_count = completedData&&completedData.count ?  completedData.count : 0
        let progress =   pending_count ? (completed_count/pending_count) : 0
        return (
            <View style={Styles.mainContainer}>
                <TouchableOpacity
                    onPress={() => {selectFollowUp('8'); NavigationService.navigate('ActionablesScreen')}}
                >
                    <View style={Styles.progressContainer}>
                        <View style={Styles.textContainer}><Text style={Styles.name}>{`Hi, ${this.props.name}`}</Text></View>
                        <View style={Styles.textContainer}><Text style={Styles.info}>{`You have ${pending_count} follow ups today`}</Text></View>
                         <View style={Styles.textContainer}><Text style={Styles.countText}>{`Today: ${pending_count} | Completed: ${completed_count}`}</Text></View>
                        <ProgressBar progress={progress}/>
                    </View>
                </TouchableOpacity>
                <View style={{...ApplicationStyles.container}}>
                    <SelectionButton 
                        title="Dashboard" 
                        onPress={() => NavigationService.navigate('DashboardSummaryScreen')}
                        icon={require('App/Assets/Images/statistics/statistics.png')}
                    />

                    <SelectionButton 
                        icon={require('App/Assets/Images/sale/sale.png')}
                        title="Schemes" 
                       	onPress={() => NavigationService.navigate('AvailableSchemesScreen', {product_id: ''})}
                    />

                    <SelectionButton 
                        icon={require('App/Assets/Images/motorcycle/motorcycle.png')}
                        title="Product Catalog" 
                        onPress={() => NavigationService.navigate('ProductCatalogScreen')}
                    />

                    <SelectionButton 
                        icon={require('App/Assets/Images/team/team.png')}
                        title="Customers"
                        onPress={() => NavigationService.navigate('CustomersScreen')}
                    />
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
})

const mapDispatchToProps = (dispatch) => ({
    fetchData:(params)            => dispatch(InsightsActions.getFollowUp(params)),
    fetchCompletedData:(params)   => dispatch(InsightsActions.getCompletedFollowUp(params)),
    selectFollowUp: (params)      => dispatch(LeadAlertsActions.selectFollowUp(params))
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(InsightsScreen)


const Styles = StyleSheet.create({
    mainContainer: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: hp('10%') 
    },
    progressContainer: {
        width: wp('90%'), 
        alignItems: 'center', 
        justifyContent: 'center',
        alignSelf: 'center',
        height: hp('14%'), 
        backgroundColor: Colors.lightGrey,
        marginBottom: hp('8%'),
        borderRadius: wp('1.5%')
    },
    name: {
        color: Colors.darkGrey,
        fontSize: wp('3.8%'),
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
    }
});


