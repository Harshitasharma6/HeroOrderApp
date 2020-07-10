import InfoDisplay from 'App/Components/InfoDisplay';
import Loading from 'App/Components/Loading';
import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import { connect } from 'react-redux';
import Style from './InfluencerInfoStyle';
import InfluencerInfoTuple from '../InfluencerInfoTuple';
import { HelperService } from 'App/Services/Utils/HelperService';

// AccountId: "0019D000008A1u7QAC"
// Address__c: "744, Chhota Bazar, Inter State Bus Terminal, Kashmere Gate, Delhi, 110006, India"
// City__c: "Delhi"
// District__c: "Central Delhi"
// Firm_Name__c: null
// Id: "0039D000006c4GxQAI"
// Influencer_Type__c: "Engineer"
// LastName: "Saurabh"
// Latitude__c: "28.667489"
// Longitude__c: "77.228045"
// OwnerId: "0052w000002IY4BAAW"
// Phone: "9779897974"
// Remark__c: "teating"
// State__c: "Delhi"
class InfluencerInfoScreen extends Component {
    render() {
        const {
            selectedInfluencer,
            allCountersSearchList
        } = this.props;

        const {
            id,
            data
        } = selectedInfluencer

        if (!data) {
            return (
                <View style={Style.parentContainer}>
                    <Loading />
                </View>
            );
        }

        let account_name = HelperService.findMatchingKeyValueInList(allCountersSearchList, 'id', data.AccountId, 'name');
        return (
            <View style={Style.parentContainer}>
                <InfluencerInfoTuple data={selectedInfluencer} id={id} data={data} />          
                <ScrollView>
                    <InfoDisplay label={'Address'} value={data.Address__c || ''} />
                    <InfoDisplay label={'Phone'} value={data.Phone || ''} />
                    <InfoDisplay label={'Type'} value={data.Influencer_Type__c || 'None'} />
                    <InfoDisplay label={'Associated Counter'} value={account_name || 'None'} />
                    <InfoDisplay label={'Firm Name'} value={ data.Firm_Name__c || 'None'} />
                    <InfoDisplay label={'City'} value={data.City__c || ''} />
                    <InfoDisplay label={'District'} value={data.District__c || ''} />
                    <InfoDisplay label={'State'} value={data.State__c || ''} />
                    <InfoDisplay label={'Remarks'} value={ data.Remark__c || ''} />
                </ScrollView>
            </View>
        )
    }
}


const mapStateToProps = (state) => ({
    selectedInfluencer:         state.influencers.selectedInfluencer,
    allCountersSearchList:      state.shree.allCountersSearchList,
    agentid:                    state.user.id
});


export default connect(
    mapStateToProps
)(InfluencerInfoScreen)

