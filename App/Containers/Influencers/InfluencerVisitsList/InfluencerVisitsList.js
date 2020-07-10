import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import InfluencersActions from 'App/Stores/Influencers/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';



class InfluencerVisitsList extends React.Component {

componentDidMount() {
    const {
	    selectedInfluencer,
	    fetchData
    } = this.props

    const {
      Id
    } = selectedInfluencer;

    fetchData({
		  influencerId: Id
    });
  }

  getInfluencersVisitInfoNode() {
    let visibleNode = [];
    const {
      data,
      loading
    } = this.props;

    const dataLength = data.length;

    if (data && dataLength && !loading) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.Id}
              content={[
                <GenericDisplayCardStrip key={'Visit_Date__c' + index} label={'Visit Date'} value={obj.Visit_Date__c} />,
                
                <GenericDisplayCardStrip key={'Visit_time__c' + index} label={'Visit time'} value={HelperService.removeMillisecondsTime(obj.Visit_time__c)} />,

                <GenericDisplayCardStrip key={'Contact_Person_Name__c' + index} label={'Contact Person Name'} value={obj.Contact_Person_Name__c} />,
                  
                <GenericDisplayCardStrip key={'Current_Brand_Used__c' + index} label={'Current Brand Used'} value={obj.Current_Brand_Used__c} />,

                <GenericDisplayCardStrip key={'Current_Product_Used__c' + index} label={'Current Product Used'} value={obj.Current_Product_Used__c} />,

                <GenericDisplayCardStrip key={'Current_Packing__c' + index} label={'Current Packing'} value={obj.Current_Packing__c} />,

                <GenericDisplayCardStrip key={'Current_Price_Bag__c' + index} label={'Current Price(Per Bag)'} value={obj.Current_Price_Bag__c} />, 
                
     
                <GenericDisplayCardStrip key={'Propose_Shree_Brand__c' + index} label={'Propose Shree Brand'} value={obj.Propose_Shree_Brand__c} />,

                <GenericDisplayCardStrip key={'Propose_Shree_Product__c' + index} label={'Propose Shree Product'} value={obj.Propose_Shree_Product__c} />,

                <GenericDisplayCardStrip key={'Propose_Shree_Packing__c' + index} label={'Propose Shree Packing'} value={obj.Propose_Shree_Packing__c} />,

                <GenericDisplayCardStrip key={'Propose_Shree_Price__c' + index} label={'Propose Shree Price'} value={obj.Propose_Shree_Price__c} />,
                 
                <GenericDisplayCardStrip key={'Remark__c' + index} label={'Remarks'} value={obj.Remark__c} />
              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loading) {
      visibleNode = <Loading />;
    }else { 
    	visibleNode = <NoDataFound text={'No Influencer visits'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getInfluencersVisitInfoNode()}
      </View>
    );
  }
}


const mapStateToProps = (state) => ({
	selectedInfluencer: state.influencers.selectedInfluencer.data,
	data              : state.influencers.influencersVisitList,
	loading           : state.influencers.fetchInfluencersVisitLoader

  });
  
  const mapDispatchToProps = (dispatch) => ({
	  fetchData: (params) => dispatch(InfluencersActions.fetchInfluencersVisits(params)),
  });
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(InfluencerVisitsList)
