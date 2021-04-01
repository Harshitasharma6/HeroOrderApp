import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView ,FlatList,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../utilities/heightWidthRatio';
let width = Dimensions.get('window').width;
const OrderPlacedSuccess=({navigation})=>{
    return(
        <View style={styles.container}>
 <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(20) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center'}}>
             <View style={styles.card}>
                 <View>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Order No.</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Bill To</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Ship To</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Total Quantity</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Total Amt. Payable</Text>
                     <View>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Tentative Date of Delivery</Text>
                     </View>
                 </View>
                 <View style={{marginLeft:20}}> 
                     <Text style={{color:'#343434',marginBottom:5}}>OR-135622</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>Chennai Eco Motors</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>Chennai Eco Motors</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>20</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>13,00,000</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>{"22/03/2021"}</Text>
                 </View>
             </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:hp(35)}}>
                <Image source={require('../Assests/ImagePlaceholder.png')} style={{width:wp(190),height:hp(160)}}     />
            </View>
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}> 
                <Text style={{fontSize:18,fontWeight:'700'}}>Order placed successfully!</Text>
                <View style={{width:wp(200),justifyContent:'center',alignItems:'center',marginTop:20}}>
                    <Text style={{textAlign:'center',fontSize:16}} > Your Order No. OR-135622 has been placed </Text>
                </View>
            </View>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.Save} onPress={()=>{navigation.navigate('EcoMotors')}}>
                     <View style={{justifyContent:'center',alignItems:'center',width: width * 0.6, height: hp(40),}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Demo</Text>
                    </View>
                 </TouchableOpacity>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    card:{
        width:width*0.9,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:1,
        flexDirection:'row',
        height:hp(150),
        shadowColor: "#00000029",
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
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        borderRadius:5,
        marginTop: hp(20),
        height: hp(35),
        shadowColor: "#000",
        backgroundColor: '#c50404',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
        marginBottom:hp(20)
  
    }
});
export default OrderPlacedSuccess;