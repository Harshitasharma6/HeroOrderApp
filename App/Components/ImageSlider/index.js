import React, { Component } from 'react'
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native'
import GenericIcon from 'App/Components/GenericIcon'
import {Colors} from 'App/Theme'
import Swiper from 'react-native-swiper'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
  	width: '100%', 
  	height: '100%', 
  	resizeMode: 'contain'
  }
})

export default class SwiperComponent extends Component {
  render() {
  	const {
  		images
  	} =  this.props

  	let visible_node = images.map((url) => <View key={url} style={styles.slide1}><Image source={{uri: url}} style={styles.image}/></View>)
    return (
      <Swiper style={styles.wrapper} 
      	showsButtons={true} 
      	loop={true}
      	showsPagination={true}
      	dot={<View style={{backgroundColor:'rgba(0,0,0,.3)', width: 10, height: 10,borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 10, marginBottom: 1}} />}
      	activeDot={<View style={{backgroundColor: '#007aff', width: 10, height: 10, borderRadius: 5, marginLeft: 3, marginRight: 3, marginTop: 10, marginBottom: 1}} />}
      	nextButton={<GenericIcon name={'chevron-circle-right'} style={{color: Colors.grey, fontSize: wp('6.5%'), padding: wp('.3%')}}/>}
      	prevButton={<GenericIcon name={'chevron-circle-left'} style={{color: Colors.grey, fontSize: wp('6.5%'), padding: wp('.3%')}}/>}
      	>
       {visible_node}
      </Swiper>
    )
  }
}