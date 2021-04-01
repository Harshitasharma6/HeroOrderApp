import React,{useState} from 'react';
import {Text,View,TouchableOpacity,StyleSheet,Image,TextInput, Dimensions} from 'react-native';
import { hp, wp } from '../utilities/heightWidthRatio';
let width=Dimensions.get('window').width;
const login=({navigation})=>{
    const [username,setusername]=useState('');
    const [Password,setPassword] = useState('');
    function loginFun(){
     if(username!=''&& Password!=''){
         navigation.navigate('BillTo');
     }else{
         alert('Please enter username and password');
     }
    }
    return(
        <View style={styles.container}>
          <View style={styles.logo}>
          <Image source={require('../Assests/herologo.png')}     />
          </View>
          <View style={{marginLeft:wp(30),marginTop:30,width:width*0.8}}>
            <TextInput  placeholder="Username"  style={{borderWidth:1,borderColor:'red',padding:10, }}  onChangeText={(text)=>{setusername(text)}}  />
          </View>
          <View style={{marginLeft:wp(30),marginTop:30,width:width*0.8}}>
            <TextInput  placeholder="Password"  style={{borderWidth:1,borderColor:'red',padding:10, }} onChangeText={(text)=>{setPassword(text)}}   />
          </View>
         <View style={{width:width,}}>
             <TouchableOpacity style={{justifyContent:'center',marginLeft:wp(70),alignItems:'center',marginTop:hp(30),backgroundColor:'#c50404',width:wp(200),height:hp(40)}} onPress={loginFun} >
                 <Text style={{color:'#fff',fontWeight:'bold'}}>LOG IN</Text>
             </TouchableOpacity>
         </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    logo:{
        justifyContent:'center',
        alignItems:'center'
    }
})
export default login;