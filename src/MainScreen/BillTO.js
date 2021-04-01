import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions } from 'react-native';
import { hp, wp } from '../utilities/heightWidthRatio';
import Icon from 'react-native-vector-icons/EvilIcons';
import DateTimePicker from '@react-native-community/datetimepicker';
import AntDesign from 'react-native-vector-icons/AntDesign';
import CheckBox from 'react-native-check-box';
let width = Dimensions.get('window').width;
const BillTo = ({navigation}) => {
    const [date, setDate] = useState(new Date())
    const [showDate, useShowDate] = useState(false);
    const [SelectedDate, useSelectedDate] = useState('');
    const [isChecked,useisChecked]=useState(false);
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(20) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={styles.Billto}>
                <View>
                    <Text style={{ fontSize: 17, color: 'black' }}>Bill To</Text>
                    <View style={styles.searchConatiner}>
                        <Icon name="search" size={17} color="black" style={{ marginTop: hp(12), marginLeft: hp(12) }} />
                        <TextInput placeholder="Enter Bill To" />
                    </View>
                </View>
                <View style={{ marginTop: hp(30) }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>Ship To</Text>
                    <View style={styles.searchConatiner}>
                        <Icon name="search" size={17} color="black" style={{ marginTop: hp(12), marginLeft: hp(12) }} />
                        <TextInput placeholder="Enter Ship To" />
                    </View>
                </View>
                <View style={{ marginTop: hp(30) }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>Tentative Date of Delivery</Text>
                    <View style={styles.searchConatiner}>
                        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: wp(250), height: hp(40) }} onPress={() => { useShowDate(!showDate) }}>
                            {SelectedDate != '' ? <Text style={{ textAlign: 'center' }}>{SelectedDate}</Text> : <Text style={{ textAlign: 'center' }}>Select Date</Text>}
                        </TouchableOpacity>
                        {/* {showDate?<DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={"date"}
          is24Hour={true}
          display="default"
          onChange={(text)=>{
              useSelectedDate(text.nativeEvent.timeStamp);
          }}
        />:null} */}
                    </View>
                </View>
                <View style={{ marginTop: hp(30), flexDirection: 'row',width:wp(250) }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>Inventory Financing</Text>
                    <View style={{marginLeft:wp(20)}}>
                    <CheckBox
                        uncheckedCheckBoxColor={'#FB3954'}
                        checkedCheckBoxColor={'#FB3954'}
                        value={isChecked}
                        onValueChange={() => {useisChecked(!isChecked)}}
                        onClick={() => {
                            useisChecked(!isChecked)

                        }}
                        isChecked={isChecked}
                    />
                </View>
                </View>
                <View style={{ marginTop: hp(30) }}>
                 <TouchableOpacity style={styles.Save} onPress={()=>{navigation.navigate('NewOrder')}}>
                     <View style={{justifyContent:'center',alignItems:'center',width: width * 0.6, height: hp(40),}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Save</Text>
                    </View>
                 </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Billto: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.9
    },
    searchConatiner: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: width * 0.7,
        marginTop: hp(10),
        height: hp(40),
        shadowColor: "#000",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,

    },
    Save:{
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: width * 0.6,
        borderRadius:5,
        marginTop: hp(10),
        height: hp(40),
        shadowColor: "#000",
        backgroundColor: '#c50404',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
  
    }
})
export default BillTo;