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

class Outstandings extends Component {
  componentDidMount() {
    const {
      dealerId,
      fetchData
    } = this.props

    fetchData({
      dealerId
    });
  }



  getOutstandingInfoNode() {
    let visibleNode = [];
    const {
      data,
      loading
    } = this.props;

    const dataLength = data.length;


     // "Id": "a099D000001Wc3dQAC",
     //        "Dealer_Code__c": "1122",
     //        "Customer_Name__c": "0019D000008MALwQAO",
     //        "State__c": "Delhi",
     //        "X0_3_Days__c": null,
     //        "X4_7_Days__c": null,
     //        "X8_15_Days__c": null,
     //        "X16_30_Days__c": null,
     //        "X31_45_Days__c": 21000.0,
     //        "X46_60_Days__c": 22000.0,
     //        "X61_90_Days__c": 23000.0,
     //        "X91_180_Days__c": 25000.0,
     //        "X180_Days__c": 26000.0




    if (data && dataLength && !loading) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              content={[
                <GenericDisplayCardStrip key={'0-3 Days' + index} label={'0-3'} value={obj.X0_3_Days__c || 'None'}/>,

                <GenericDisplayCardStrip key={'3-7 Days' + index} label={'4-7'} value={obj.X4_7_Days__c || 'None'}/>,

                <GenericDisplayCardStrip key={'7-15 Days' + index} label={'8-15'} value={obj.X8_15_Days__c || 'None'}/>,

                <GenericDisplayCardStrip key={'15-30 Days' + index} label={'16-30'} value={obj.X16_30_Days__c || 'None'}/>,
                <GenericDisplayCardStrip key={'30-45 Days' + index} label={'31-45'} value={obj.X31_45_Days__c || 'None'}/>,
                  
                <GenericDisplayCardStrip key={'45-60 Days' + index} label={'46-60'} value={obj.X46_60_Days__c || 'None'}/>,
                  
                <GenericDisplayCardStrip key={'60-90 Days' + index} label={'61-90'} value={obj.X61_90_Days__c || 'None'}/>,
                
                <GenericDisplayCardStrip key={'90-180 Days' + index} label={'91-180'} value={obj.X91_180_Days__c || 'None'}/>,
                
                <GenericDisplayCardStrip key={'More than 180 Days' + index} label={'More than 180'} value={obj.X180_Days__c || 'None'}/>
                
              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loading){//data is being fetched
      visibleNode = <Loading />;
    }else { // not loading and data is empty
    	visibleNode = <NoDataFound title={'No Outstanding data'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getOutstandingInfoNode()}
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
)(Outstandings)
