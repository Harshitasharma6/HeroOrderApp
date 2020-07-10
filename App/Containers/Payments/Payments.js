import React, { Component } from 'react'
import { View, ScrollView, Text } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import ShreeAction from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';

class Payments extends Component {
  componentDidMount() {
    const {
      dealerId,
      fetchData
    } = this.props

    fetchData({
      dealerId
    });
  }


  getPaymentsInfoNode() {
    let visibleNode = [];
    const {
      data,
      loading
    } = this.props;

    const dataLength = data.length;

    if (data && dataLength && !loading) { //if data is present and fetch is complete
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              content={[
                <GenericDisplayCardStrip key={'Amount' + index} label={'Amount'} value={obj.Amount__c} />,
                <GenericDisplayCardStrip key={'Payment Date' + index} label={'Payment Date'} value={obj.Payment_Date__c} />
              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loading){//data is being fetched
      visibleNode = <Loading />;
    }else { // not loading and data is empty
    	visibleNode = <NoDataFound />;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getPaymentsInfoNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	dealerId: state.shree.selectedShree.id,
  data    : state.shree.payments,
  loading : state.shree.fetchPaymentsLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) 	 => dispatch(ShreeAction.fetchPayments(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Payments)
