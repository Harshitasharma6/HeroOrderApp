import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Dimensions, ScrollView ,FlatList,Image} from 'react-native';
import { hp, wp } from '../utilities/heightWidthRatio';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Picker } from '@react-native-picker/picker';
import Icon from 'react-native-vector-icons/EvilIcons';
import { color } from 'react-native-reanimated';
let width = Dimensions.get('window').width;
const NewOrder = ({ navigation }) => {
    const [selectedLanguage, setSelectedLanguage] = useState();
    const [Color, setColor] = useState();
    const [Data,setData]=useState([{name:'Optima',NDP:'41,770',image:require('../Assests/Scotty.png')},{name:'Photon',NDP:'85,770',image:require('../Assests/Scotty1.png')}])
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <AntDesign name="arrowleft" size={20} color={"black"} style={{ marginLeft: wp(10), marginTop: hp(20) }} onPress={() => { navigation.goBack() }} />
            </TouchableOpacity>
            <View style={{flexDirection:'row'}}>
                <View style={{width:150,height:100,justifyContent:'center',alignItems:'center'}} >
                    <Image source={require('../Assests/checklist.png')} style={{width:70,height:70,}}      />
                </View>
                <View style={styles.title}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>New Order</Text>
                </View>
                <View style={{width:150,height:100,justifyContent:'center',alignItems:'center'}} >
                    <Image source={require('../Assests/carts.png')}  style={{width:30,height:30,alignSelf:'flex-end',marginRight:10}}    />
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: wp(120), marginLeft: wp(20), marginTop: hp(20) }}>
                    <Text style={{ fontWeight: '700' }}>Product Category</Text>
                </View>
                <View style={{ width: wp(220), marginLeft: wp(30), marginTop: hp(20) }}>
                    <Text style={{ fontWeight: '700' }}>Product</Text>
                </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: wp(120), marginLeft: wp(20), marginTop: hp(20) }}>
                    <View style={styles.ProductCategory}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) =>
                            setSelectedLanguage(itemValue)
                        }>
                        <Picker.Item label="All" value="All" />
                        <Picker.Item label="Some" value="Some" />
                        <Picker.Item label="Other" value="Other" />
                    </Picker>
                    </View>
                </View>
                <View style={{ width: wp(220), marginLeft: wp(20), marginTop: hp(20) }}>
                    <View style={styles.Product}>
                        <Icon name="search" size={17} color="black" style={{ marginTop: hp(12), marginLeft: hp(12) }} />
                        <TextInput placeholder="Search Product..." />
                    </View>
                </View>
            </View>
            <ScrollView style={{marginTop:hp(30)}}>
               
               <FlatList 
                data={Data}
                keyExtractor={(item,index)=>{index}}
                renderItem={({item,index})=>{
                    console.log(item.name)
                    return(
                        <View key={index} style={{justifyContent:'center',alignItems:'center'}}>
                            <View style={styles.CardView}>
                                <View style={{flexDirection:'row'}}>
                                <View style={{margin:10}}>
                                    <Image source={item.image} />
                                    </View>
                                    <View style={{marginTop:10}}>
                            <Text style={{fontWeight:'bold',fontSize:18}}>{item.name}</Text>
                            <Text style={{fontSize:14,marginTop:10,color:'#666666c4'}}>NDP: {item.NDP}</Text>
                            <View style={{marginTop:10}}>
                                <Text style={{fontSize:15}}>Colour</Text>
                                <View style={styles.Colour}>
                                <Picker
                        selectedValue={Color}
                        onValueChange={(itemValue, itemIndex) =>
                            setColor(itemValue)
                        }>
                        <Picker.Item label="Select Colour" value="Select Colour" />
                        <Picker.Item label="Red" value="Red" />
                        <Picker.Item label="Blue" value="Blue" />
                    </Picker>
                                    </View>
                                </View>
                                <View style={{marginTop:10}}>
                                <Text style={{fontSize:15}}>Quantity</Text>
                                <View style={styles.Colour}>
                                 <TextInput placeholder="Enter Qty.."     />
                                    </View>
                                </View>
                            </View>
                            </View>
                            <View style={{justifyContent:'center',alignItems:'center',marginTop:10}}>
                            <TouchableOpacity style={styles.Save} onPress={()=>{navigation.navigate('Order')}}>
                     <View style={{justifyContent:'center',alignItems:'center',width: width * 0.6, height: hp(40),}}>
                    <Text style={{color:'#fff',textAlign:'center',fontSize:17}}>Add To Cart</Text>
                    </View>
                 </TouchableOpacity>
                 </View>
                            </View>
                            </View>
                    )
                }}
               />
              
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    title: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    Product: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        width: width * 0.5,
        borderRadius: 10,
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
    ProductCategory:{
        width: wp(120),
        borderRadius: 10,
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
    CardView:{
        width:width*0.9,
        borderRadius: 10,
        height: hp(270),
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
        width: wp(160),
        marginTop:5,
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
        justifyContent: 'center',
        alignItems: 'center',
        width: width * 0.5,
        borderRadius:5,
        marginTop: hp(10),
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
  
    }
});
export default NewOrder;