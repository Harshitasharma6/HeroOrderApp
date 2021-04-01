import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView ,FlatList,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../utilities/heightWidthRatio';

let width = Dimensions.get('window').width;
const OrderDetailScreen=({navigation})=>{
    const [OrderData,setOrderData]=useState([{name:'Optima',NDP:'41,770',colour:'Blue',Quantity:10},{name:'Optima',NDP:'41,770',colour:'White',Quantity:5},{name:'Photon',NDP:'85,770',colour:'White',Quantity:5}]);

    function increaseCount(){
         let newcount=count+1;
         setcount(newcount);
    }
    function decreaseCount(){
        if(count!=0){
        let newcount=count-1;
         setcount(newcount);
        }
    }
    return(
        <View style={styles.container}>
           <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(20) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={{justifyContent:'center',alignItems:'center'}}>
             <View style={styles.card}>
                 <View>
                     <Text style={{color:'#fff',marginBottom:5}}>Order Date</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>Total Quantity</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>Basic Price</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>Total Tax</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>Total Amount Payable(Incl.Taxes)</Text>
                 </View>
                 <View style={{marginLeft:20}}> 
                     <Text style={{color:'#fff',marginBottom:5}}>24/03/2021</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>20</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>12,00,000</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>1,00,000</Text>
                     <Text style={{color:'#fff',marginBottom:5}}>13,00,000</Text>
                 </View>
             </View>
            </View>
            <FlatList 
            data={OrderData}
            keyExtractor={(item,index)=>{index}}
            renderItem={({item,index})=>{
                return(
                    <View key={index} style={{justifyContent:'center',alignItems:'center'}}>
                         <TouchableOpacity style={styles.CardView} onPress={()=>{navigation.navigate('chasisNumber')}}>
                             <View style={{marginTop:30,marginLeft:30,flexDirection:'row'}}>
                        <Text style={{fontSize:20,fontWeight:'600',color:'#C50404'}}>{item.name}</Text>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',marginTop:hp(20)}}>
                            <View style={{width:wp(90),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'700'}}>{"₹ "}{'41,770'}</Text>
                         </View>
                         <View style={{width:wp(90),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'700'}}>{item.colour}</Text>
                         </View>
                         <View style={{width:wp(70),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{fontWeight:'700'}}>{item.Quantity}</Text>
                         </View>
                        </View>
                        <View style={{flexDirection:'row',justifyContent:'center',alignContent:'center',marginTop:hp(10)}}>
                            <View style={{width:wp(90),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{color:'#9A9A9A'}}>NDP</Text>
                         </View>
                         <View style={{width:wp(90),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{color:'#9A9A9A'}}>Colour</Text>
                         </View>
                         <View style={{width:wp(70),justifyContent:'center',alignItems:'center'}}>
                         <Text style={{color:'#9A9A9A'}}>Quantity</Text>
                         </View>
                        </View>
                        </TouchableOpacity>
                        </View>
                )
            }}
            />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    CardView:{
        width:width*0.9,
        borderRadius: 10,
        height: hp(140),
         margin:10,
        shadowColor: "#00000029",
        backgroundColor: '#FFFFFF',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    Colour:{
        width: wp(130),
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
    card:{
     width:width*0.9,
     marginTop:20,
     justifyContent:'center',
     alignItems:'center',
     backgroundColor:'red',
     borderRadius:8,
     flexDirection:'row',
     height:hp(150)
    },
    TextInput:{
        width:wp(80),
        borderRadius: 5,
        height:30,
        marginLeft:10,
        marginRight:10,
        shadowColor: "#00000029",
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
export default OrderDetailScreen;