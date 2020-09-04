import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import Loading from 'App/Components/Loading'
import InsightsActions from 'App/Stores/Insights/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {ApplicationStyles, Colors} from 'App/Theme'
import Styles from './styles'
import NavigationService from 'App/Services/NavigationService'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


class CustomersScreen extends Component {
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
    

    filterResults(list) {
      const {
       customerSearchFilters
      } = this.props;
  let filteredList = HelperService.searchTextListFilter(list,  customerSearchFilters['searchBy'],  customerSearchFilters['searchValue']);
  filteredList = HelperService.sortListFilter(filteredList, customerSearchFilters['sortBy'], customerSearchFilters['sortType']);    
  return filteredList;
    }  

  getDataNode() {

    const {
     
      loader,
      data
    } = this.props;
    
  
    let visibleNode = [];

    if (data && data.length) {
    let filteredCustomerList = this.filterResults(data.map((obj) => obj));

      if (filteredCustomerList.length) {
        visibleNode = (
          <FlatList
            data={filteredCustomerList}
            renderItem={({ item }) => 
            	<GenericDisplayCard dark={false}
                style={{ width: '88%', elevation: 0 }}
                
	              heading={item.name}
	              showTextAvatar={true}
	              onPress={() => { NavigationService.navigate('CustomerSummaryScreen', {data: item});}}
	              content={[
	               <BlueButton title={''} style={Styles.callButton} textStyle={Styles.callButtonText} onPress={() => HelperService.callNumber(item.mobilephone)}><GenericIcon name="phone" style={Styles.callButtonIcon}/></BlueButton>
              ]}
            />}
            keyExtractor={item => item}
            onRefresh={() => this.fetchCall()}
            refreshing={loader}
            ListEmptyComponent={() => <NoDataFound text={'No Customers Found'} />}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No Customers Found'} />
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (data && !data.length) {
      visibleNode = <NoDataFound text={'No Customers Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 , paddingBottom: 10, marginBottom: 10}}>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
data: state.insights.AllCustomerData,
loader: state.insights.loaders.getAllCustomerLoader,
customerSearchFilters: state.insights.customerSearchFilters,
});

const mapDispatchToProps = (dispatch) => ({
fetchData:(params) => dispatch(InsightsActions.getAllCustomer(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomersScreen)
