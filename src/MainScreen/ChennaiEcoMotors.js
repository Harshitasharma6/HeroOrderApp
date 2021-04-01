import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../utilities/heightWidthRatio';
let width = Dimensions.get('window').width;
const EcoMotors = ({navigation}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(20) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={styles.header}>
             <Text style={{color:'#F1F8FE',fontSize:18,marginTop:hp(10),marginLeft:wp(10)}}>{('Chennai Eco Motors').toUpperCase()}</Text>
            </View>
            <ScrollView>
            <View style={{flexDirection:'row'}}>
            <View style={styles.cardOne}>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}} onPress={()=>{navigation.navigate('orderHeader')}}>
                  <Image source={require('../Assests/carts.png')} style={{width:wp(120),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>New Order</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.cardSecond}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                  <Image source={require('../Assests/checklist.png')} style={{width:wp(120),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>Order List</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.cardOne}>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                  <Image source={require('../Assests/fast-delivery.png')} style={{width:wp(120),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>Delivery Tracking</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.cardSecond}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                  <Image source={require('../Assests/box.png')} style={{width:wp(120),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>Stock Status</Text>
              </TouchableOpacity>
            </View>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={styles.cardOne}>
              <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                  <Image source={require('../Assests/money.png')} style={{width:wp(140),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>Outstanding</Text>
              </TouchableOpacity>

            </View>
            <View style={styles.cardSecond}>
            <TouchableOpacity style={{justifyContent:'center',alignItems:'center',}}>
                  <Image source={require('../Assests/customer-satisfaction.png')} style={{width:wp(120),height:hp(120),marginTop:10}} />
                  <Text style={{color:'#000000',fontSize:17,marginTop:25}}>Complaints</Text>
              </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header:{
      width:width,
      height:hp(40),
      backgroundColor:'#C50404',
      marginTop:hp(10)
    },
    cardOne:{
       width:width/2-20,
       height:hp(190),
       shadowColor: "#00000029",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        marginTop :hp(20),
        marginLeft:hp(10),
        marginBottom:hp(20)
    },
    cardSecond:{
        width:width/2-20,
        height:hp(190),
        shadowColor: "#00000029",
         backgroundColor: '#fff',
         shadowOffset: {
             width: 0,
             height: 2,
         },
         shadowOpacity: 0.25,
         shadowRadius: 3.84,
         elevation: 5, 
         marginTop :hp(20),
         marginLeft:hp(20),
         marginBottom:hp(20)
    }
})
export default EcoMotors;