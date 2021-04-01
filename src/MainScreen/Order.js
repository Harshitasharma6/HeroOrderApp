import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView ,FlatList,Image} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../utilities/heightWidthRatio';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Picker } from '@react-native-picker/picker';
let width = Dimensions.get('window').width;
const Order=({navigation})=>{
    const [Color, setColor] = useState();
    const [count,setcount] =useState(0);
    const [OrderData,setOrderData]=useState([{name:'Optima',NDP:'41,770'},{name:'Optima',NDP:'41,770'},{name:'Photon',NDP:'85,770'}]);

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
            <View style={{flexDirection:'row'}}>
            <View style={{width:150,height:100,justifyContent:'center',alignItems:'center'}} >
                    <Image source={require('../Assests/checklist.png')} style={{width:70,height:70,}}      />
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Order</Text>
                </View>
            </View>
            <ScrollView>
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
                         <View style={styles.CardView}>
                             <View style={{marginTop:30,marginLeft:30,flexDirection:'row'}}>
                        <Text style={{fontSize:17,fontWeight:'600'}}>{item.name}</Text>
                        <View style={{flexDirection:'row',marginLeft:30}}> 
                        <TouchableOpacity style={{backgroundColor:'#C50404',borderRadius:25,height:20,width:20,marginTop:5,justifyContent:'center',alignItems:'center'}}
                        onPress={()=>{decreaseCount()}}>
                        <Ionicons name="ios-remove" size={17} color="#fff" />
                        </TouchableOpacity>
                        <View style={styles.TextInput}>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:5}}>
                        <Text style={{fontSize:15}}>{count}</Text>
                        </View>
                        </View>
                        <TouchableOpacity style={{backgroundColor:'#C50404',borderRadius:25,height:20,marginTop:5,width:20,justifyContent:'center',alignItems:'center'}}
                          onPress={()=>{increaseCount()}}>
                            <Ionicons name="add" size={17} color="#fff"    />
                            </TouchableOpacity>
                            </View>
                            
                        </View>
                        <View style={{flexDirection:'row',marginTop:hp(10)}}>
                            <View style={{marginLeft:10,position:'absolute',left:wp(25)}}>
                            <Text style={{textAlign:'left',color:'#666666C4'}}>NDP:</Text>
                            </View>
                            <View style={{marginLeft:10,position:'absolute',right:wp(35)}}>
                            <Text >{item.NDP}</Text>
                            </View>
                        </View>
                        <View style={{flexDirection:'row',marginTop:hp(30)}}>
                            <View style={{marginLeft:10,position:'absolute',left:wp(25),top:10}}>
                            <Text style={{textAlign:'left',color:'#666666C4'}}>Colour:</Text>
                            </View>
                            <View style={{marginLeft:10,position:'absolute',right:wp(35)}}>
                            <View style={styles.Colour}>
                                <Picker
                        selectedValue={Color}
                        style={{width:130,height:10,marginBottom:10}}
                        onValueChange={(itemValue, itemIndex) =>
                            setColor(itemValue)
                        }>
                        <Picker.Item label="Blue" value="Blue" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Green" value="Green" />
                    </Picker>
                                    </View>
                            </View>
                        </View>
                        <TouchableOpacity style={{alignSelf:'flex-end',position:'absolute',right:10,top:10}} >
                            <Ionicons name="trash-sharp" size={17}  color="#C50404"  />
                            </TouchableOpacity>
                        </View>
                        
                        </View>
                )
            }}
            />
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={styles.Save} onPress={()=>{navigation.navigate('OrderPlacedSuccess')}}>
                     <View style={{justifyContent:'center',alignItems:'center',width: width * 0.6, height: hp(40),}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Place Order</Text>
                    </View>
                 </TouchableOpacity>
            </View>
            </ScrollView>
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
        height: hp(170),
         margin:10,
        shadowColor: "#00000029",
        backgroundColor: '#f4f4f4e8',
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
export default Order;