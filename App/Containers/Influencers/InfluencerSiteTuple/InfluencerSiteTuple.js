import { AREA } from 'App/Constants';
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Style from './InfluencerSiteTupleStyle';

const InfluencerSiteTuple = ({ onPress, data, areas }) => (
    <TouchableWithoutFeedback onPress={onPress}>
        <View style={Style.box} onPress={onPress}>
            <View style={Style.tuple}>
                <View style={Style.userCircle}>
                    <Icon
                        name={'ios-business'}
                        ios={'ios-business'}
                        android={'md-business'}
                        style={{ color: Colors.button }}
                    />
                </View>
                <View style={Style.userDtl}>
                    <Text style={Style.title}>{data.LastName}</Text>
                    <Text style={Style.desc}>{data.Influencer_Type__c || ''}</Text>
                    <Text style={Style.desc}>{data.Phone || ''}</Text>
                </View>
            </View>

            <View style={Style.btmBox}>
                <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Remark'}</Text>
                    <Text style={Style.detail}>{data.Remark__c || ''}</Text>
                </View>
                <View style={Style.strip}>
                    <Text style={Style.ttl}>{AREA}</Text>
                    <Text style={Style.detail}>{HelperService.getAreaName({ areas: areas, id: data.area__c })}</Text>
                </View>
                <View style={Style.strip}>
                    <Text style={Style.ttl}>{'Order Taken'}</Text>
                    <Text style={Style.detail}>{data.Order_Taken__c}</Text>
                </View>
            </View>
        </View>
    </TouchableWithoutFeedback>
)

export default InfluencerSiteTuple;
