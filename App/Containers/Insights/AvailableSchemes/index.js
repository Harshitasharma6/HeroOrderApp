import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import ShreeAction from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {ApplicationStyles} from 'App/Theme'

class AvailableSchemesScreen extends Component {
  componentDidMount() {
    // const {
    //   dealerId,
    //   fetchData
    // } = this.props

    // fetchData({
    //   dealerId
    // });
  }


  getDataNode() {
    // const {
    //   data,
    //   loading
    // } = this.props;
    const data = [{heading: 'Book your vehicle at just ₹2999/-'}, {heading: 'Exchange Offer'}]
    const dataLength = data.length;
    
  
    let visibleNode = [];

    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            renderItem={({ item }) => 
            	<GenericDisplayCard dark={false}
	              style={{ width: '88%', elevation: 0 }}
	              heading={item.heading}
	              content={[
	                <GenericDisplayCardStrip key={'Scheme Amount' + item.heading} label={'Scheme Amount'} value={HelperService.currencyValue(2000)}/>
              ]}
            />}
            keyExtractor={item => item}
            refreshing={false}
            ListEmptyComponent={() => <NoDataFound text={'No Offers Found'} />}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No Offers Found'} />
      }
    } else if (false) {
      visibleNode = <Loading />
    } else if (data && !data.length) {
      visibleNode = <NoDataFound text={'No Offers Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
      	<Text style={ApplicationStyles.formHeading}>{'Available Offers'}</Text>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	dealerId: state.shree.selectedShree.id,
  	data    : state.shree.outstanding,
  	loading : state.shree.fetchOutstandingLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) 	 => dispatch(ShreeAction.fetchOutstanding(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableSchemesScreen)
