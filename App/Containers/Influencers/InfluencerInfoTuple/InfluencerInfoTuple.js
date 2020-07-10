import GenericIcon from 'App/Components/GenericIcon';
import { Colors } from 'App/Theme';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Style from './InfluencerInfoTupleStyle';

const InfluencerInfoTuple = ({ onPress, data, id }) => (
    <TouchableOpacity >
        <View style={Style.box} onPress={onPress}>
            <View style={Style.userCircle}>
                <GenericIcon
                    name={'person'}
                    style={{ color: Colors.primary }}
                />
            </View>
            <View style={Style.userDtl}>
                <Text style={Style.title}>{data.LastName}</Text>
                <Text style={Style.desc}>{`${data.Influencer_Type__c}`}</Text>
            </View>
            {
        }
        </View>
    </TouchableOpacity>
)

export default InfluencerInfoTuple
