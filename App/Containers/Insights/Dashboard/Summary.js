import WhiteButton from 'App/Components/WhiteButton';
import BackArrowButton from 'App/Components/BackArrowButton'
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors } from 'App/Theme';
import { Badge, Header, Text } from 'native-base';
import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import HeadingBox from 'App/Components/HeadingBox'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import Separator from 'App/Components/Separator';
import InsightsActions from 'App/Stores/Insights/Actions';


class DashboardSummaryScreen extends React.Component {

	componentDidMount() {
		this.fetchCall()	
	}

	fetchCall() {
		const {
		
		  fetchData
		} = this.props
	
		fetchData({
		 
		});
	  }
  
    
  render() {
    const {
			loader,
      data,
      currentScreen
		  } = this.props;

    
   

    return (
      	<ScrollView style={Styles.container}>
          	<HeadingBox value={'This Month'}/>
          		<GenericDisplayCard dark={false}
                style={{ width: '88%', elevation: 0 }}
            
	              content={[
		                <GenericDisplayCardStrip key={'Total Walk Ins'} label={'Total Walk Ins'} value={data&&data.currentMonth&&data.currentMonth[8] ?  data.currentMonth[8].count : 0}/>,
		                <Separator key={1}/>,
		                <GenericDisplayCardStrip key={'Open Leads'} label={'Open Leads'} value={data&&data.currentMonth&&data.currentMonth[4] ?  data.currentMonth[4].count : 0}/>,
		                <Separator key={2}/>,
		                <GenericDisplayCardStrip key={'Won Leads'} label={'Won Leads'} value={data&&data.currentMonth&&data.currentMonth[1] ?  data.currentMonth[1].count : 0}/>,
		                <Separator key={3}/>,
		                <GenericDisplayCardStrip key={'Lost Leads'} label={'Lost Leads'} value={data&&data.currentMonth&&data.currentMonth[2] ?  data.currentMonth[2].count : 0}/>,
		                <Separator key={4}/>,
		                <GenericDisplayCardStrip key={'Ho Assigned Leads'} label={'Ho Assigned Leads'} value={data&&data.currentMonth&&data.currentMonth[5] ?  data.currentMonth[5].count : 0}/>,
              		]}
            	/>
          	<HeadingBox value={'Previous Month'}/>
          		<GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              content={[
		                <GenericDisplayCardStrip key={'Total Walk Insdwq'} label={'Total Walk Ins'} value={data&&data.prevMonth&&data.prevMonth[4] ?  data.prevMonth[4].count : 0}/>,
		                <Separator key={1}/>,
		                <GenericDisplayCardStrip key={'Open Leadswqd'} label={'Open Leads'} value={data&&data.prevMonth&&data.prevMonth[1] ?  data.prevMonth[1].count : 0}/>,
		                <Separator key={2}/>,
		                <GenericDisplayCardStrip key={'Won Leadswqdq'} label={'Won Leads'} value={data&&data.prevMonth&&data.prevMonth[2] ?  data.prevMonth[2].count : 0}/>,
		                <Separator key={3}/>,
		                <GenericDisplayCardStrip key={'Lost Leadsqwd'} label={'Lost Leads'} value={data&&data.prevMonth&&data.prevMonth[0] ?  data.prevMonth[0].count : 0}/>,
		                <Separator key={4}/>,
		                <GenericDisplayCardStrip key={'Ho Assigned Leadswd'} label={'Ho Assigned Leads'} value={data&&data.prevMonth&&data.prevMonth[3] ?  data.prevMonth[3].count : 0}/>
              		]}
            	/>
          	<HeadingBox value={'Product Performance \n(This Month)'}/>
          		<GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              content={[
		                <GenericDisplayCardStrip key={'Optima LI'} label={'Optima LI'} value={data&&data.product&&data.product[0] ?  data.product[0].count : 0}/>,
		                <Separator key={12}/>,
		                <GenericDisplayCardStrip key={'Optima LA'} label={'Optima LA'} value={data&&data.product&&data.product[1] ?  data.product[1].count : 0} />,
		                <Separator key={2123}/>,
		                <GenericDisplayCardStrip key={'Zion'} label={'Zion'} value={data&&data.product&&data.product[2] ?  data.product[2].count : 0}/>,
		                <Separator key={3123}/>,
		                <GenericDisplayCardStrip key={'Flash LA'} label={'Flash LA'} value={data&&data.product&&data.product[3] ?  data.product[3].count : 0}/>
		                
              		]}
            	/>
        </ScrollView>
    );
  }
}  



const mapStateToProps = (state) => ({
  isConnected: state.network.isConnected,
  isVisible: state.common.isNetworkBannerVisible,
  currentScreen: state.common.currentScreen,
  data: state.insights.DashboardSummaryData,
  loader: state.insights.loaders.getDashboardSummaryLoader,
})

const mapDispatchToProps = (dispatch) => ({
	fetchData:(params)            => dispatch(InsightsActions.getDashboardSummary(params)),
  
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DashboardSummaryScreen)


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





