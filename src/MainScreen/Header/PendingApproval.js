import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import { hp, wp } from '../../utilities/heightWidthRatio';
let width = Dimensions.get('window').width;
const PendingApproval=()=>{
    return(
        <View style={styles.container}>
            <View style={{justifyContent:'center',alignItems:'center'}}>
            <View style={styles.card}>
                <View style={{flexDirection:'row'}}>
                <View style={{width:wp(70),marginTop:hp(20)}}>
                    <Text style={{color:'#c50404',fontSize:40,fontWeight:'bold'}}>5</Text>
                    <Text style={{color:'#c50404'}}>Jan</Text>
                  
                    <Text style={{color:'black',fontSize:12,marginTop:5}}> Order Date</Text>
                 
                </View>
            <View>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Order No.</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Bill To</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Ship To</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Order created by</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Total Quantity</Text>
                     <Text style={{color:'#9A9A9A',marginBottom:5}}>Total Amt. Payable</Text>
                 </View>
                 <View style={{marginLeft:20}}> 
                     <Text style={{color:'#343434',marginBottom:5}}>OR-135622</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>Chennai Eco Motors</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>Chennai Eco Motors</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>ASM</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>20</Text>
                     <Text style={{color:'#343434',marginBottom:5}}>12,00,000</Text>
                 </View>
                 </View>
                 <View style={{flexDirection:'row'}}>
                 <TouchableOpacity style={styles.Save}>
                         <Text style={{color:'#fff'}}>Approve</Text>
                     </TouchableOpacity>
                     <TouchableOpacity style={styles.Reject}>
                         <Text style={{color:'#c50404'}}>Reject</Text>
                     </TouchableOpacity>
        
            </View>
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
    card:{
        width:width*0.9,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:1,
        height:hp(200),
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
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.3,
        borderRadius:5,
        marginTop: hp(10),
        height: hp(25),
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
  
    },
    Reject:{
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.3,
        borderRadius:5,
        marginTop: hp(10),
        marginLeft:20,
        height: hp(25),
        shadowColor: "#fff",
        borderWidth:1,
        borderColor:'#c50404',
        backgroundColor: '#fff',
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
export default PendingApproval;