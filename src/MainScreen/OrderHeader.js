import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet,Dimensions,Image,ScrollView} from 'react-native';
import {
    Container,
    TabHeading,
    Tab,
    Tabs,
  } from 'native-base';
  import resp from 'rn-responsive-font';
  import PendingApproval from '../MainScreen/Header/PendingApproval';
import OrderPlaced from '../MainScreen/Header/OrderPlaced';
import OrderAccepted from '../MainScreen/Header/orderAccepted';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { hp, wp } from '../utilities/heightWidthRatio';
let width = Dimensions.get('window').width;
const orderHeader=({navigation})=>{
    return(
        <View style={styles.container}>
           <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(10) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
            <View style={{marginTop:hp(20),width:300,justifyContent:'center',alignItems:'center',marginBottom:hp(25)}}>
                <Text style={{fontSize:18,fontWeight:'bold'}}>Orders</Text>
            </View>
            <TouchableOpacity style={styles.Save} onPress={()=>{navigation.navigate('NewOrdersScreen')}} >
                     <View style={{justifyContent:'center',alignItems:'center',width: width * 0.3, height: hp(30),}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:15}}>NEW ORDER</Text>
                    </View>
                 </TouchableOpacity>
            </View>
            <View style={styles.MainContentBox}>
          <Container >
        
            <Tabs 
              tabBarUnderlineStyle={{backgroundColor: '#fff'}}
              tabBarActiveTextColor={'pink'}
              tabBarInactiveTextColor='pink'>
              <Tab
                heading={
                  <TabHeading style={{backgroundColor: '#c50404'}}>
                    <Text style={{fontSize:resp(14),color:'#fff',marginLeft:3}}>Pending for approval </Text>
                  </TabHeading>
                }>
                <PendingApproval />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{backgroundColor: '#c50404'}}>
                    <Text style={{fontSize:resp(14),color:'#fff'}}>Order Placed</Text>
                  </TabHeading>
                }>
                <OrderPlaced />
              </Tab>
              <Tab
                heading={
                  <TabHeading style={{backgroundColor: '#c50404'}}>
                    <Text style={{fontSize:resp(14),color:'#fff'}}>Order Accepted</Text>
                  </TabHeading>
                }>
                <OrderAccepted />
              </Tab>
            </Tabs>
          </Container>
        </View>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    MainContentBox: {
        flex: 1,
      },
      Save:{
        flexDirection: 'row',
          position:'absolute',
          right:20,
        width: width * 0.3,
        borderRadius:5,
        marginTop: hp(20),
        height: hp(30),
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
export default orderHeader;