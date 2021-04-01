import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,Dimensions,FlatList} from 'react-native';
import { hp, wp } from '../utilities/heightWidthRatio';
let width = Dimensions.get('window').width;
import AntDesign from 'react-native-vector-icons/AntDesign';
const chasisNumber=({navigation})=>{
    const [chasisdata,setchasisdata]=useState([{number:'OS17EB1206'},{number:'OS17EB1207'},{number:'OS17EB1208'},{number:'OS17EB1209'}]);
    const [color,setColor]= useState(false);
    const [indexId,setindexId]=useState('');
return(
    <View style={styles.container}>
         <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(10) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
        <FlatList 
        data={chasisdata}
        keyExtractor={(item,index)=>{index}}
        renderItem={({item,index})=>{
            return(
                <View key={index} style={{justifyContent:'center',alignItems:'center'}}>
                    <View style={styles.card}>
                        <View style={{flexDirection:'row'}}>
                            <View style={{width:wp(100)}}>
                            <Text style={{color:'#9A9A9A'}}>Chasis No.</Text>
                            </View>
                            <View style={{width:wp(100)}}>
                            <Text style={{fontSize:15,fontWeight:'700'}}>{item.number}</Text>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center'}}>
                            <TouchableOpacity style={{width:wp(20),backgroundColor:color==false?'#2C1D2140':'#3BB54A',borderRadius:10,justifyContent:'center',alignItems:'center'}} onPress={()=>{setColor(!color)}}>
                                <AntDesign name="check" size={18} color={color==false?"#2C1D2140":'#fff'}    />
                                </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
            )
        }}
        />
        <View style={{justifyContent:'center',alignItems:'center',flex:1}}>
        <TouchableOpacity style={styles.Reject}>
                         <Text style={{color:'#FF0808',fontSize:17}}>Recieved</Text>
                     </TouchableOpacity>
        </View>
    </View>
)
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    card:{
        width:width*0.9,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff',
        borderRadius:1,
        height:hp(70),
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5, 
        marginBottom:5
       },
       Reject:{
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        borderRadius:5,
        marginTop: hp(10),
        marginLeft:20,
        height: hp(35),
        shadowColor: "#fff",
        borderWidth:1,
        borderColor:'#FF0808',
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
export default chasisNumber;