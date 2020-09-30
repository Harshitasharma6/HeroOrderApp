import GenericIcon from 'App/Components/GenericIcon';
import NavigationService from 'App/Services/NavigationService';
import { ApplicationStyles, Colors, Helpers } from 'App/Theme';
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail } from 'native-base';
import React, { Component } from "react";
import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import BackArrowButton from 'App/Components/BackArrowButton';
import BlueButton from 'App/Components/BlueButton';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { HelperService } from 'App/Services/Utils/HelperService';



/*
The component is child component for location search 
the selected location can be stored in state variable
*/
export default class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	addressSelected: false
    }
  }

  setAddressSelected(value) {
  	this.setState({
  		addressSelected: value
  	});
  }

  onHandleConfirm(value) {
  	if (value) {
  		this.setAddressSelected(false); 
  		this.props.closeModal();
  	}else {
  		HelperService.showToast({
  			message: 'Please select address to confirm.',
  			duration: 2000
  		})
  	}
  }	

  getDataNode(data, details) {
  	if (data.isCurrentLocation) {
  		return (
  			<View style={{flexDirection: 'row'}}>
	            <Text 
		            style={{	
		            	fontFamily: ApplicationStyles.textMediumFont,
					    color: Colors.grey,
					    fontSize: wp('3.2%'),
					    flexWrap: 'wrap',
					    flexShrink: 1,
					}}>
					{data.description}
				</Text>
	        </View>
	    );
  	}

  	let heading  = data.structured_formatting.main_text;
  	let description  = data.structured_formatting.secondary_text;

  	return (
  		<View >
	  		<View style={{flexDirection: 'row', marginBottom: hp('.5%')}}>
	  			<GenericIcon name="map-marker" style={{color: Colors.primary,  fontSize: wp('4.5%')}}/>
	  			<Text
	  				style={{	
		            	fontFamily: ApplicationStyles.textMsgFont,
					    color: Colors.primary,
					    fontSize: wp('3.3%'),
					    flexWrap: 'wrap',
					    flexShrink: 1,
					    alignSelf: 'center',
					    paddingLeft: wp('1.5%')
					}}>
	  				 {heading}
	  			</Text>
	  		</View>
	  		<View style={{flexDirection: 'row'}}>
	            <Text 
		            style={{	
		            	fontFamily: ApplicationStyles.textMediumFont,
					    color: Colors.grey,
					    fontSize: wp('3.2%'),
					    flexWrap: 'wrap',
					    flexShrink: 1,
					    paddingLeft: wp('4%')
					}}>
					{description}
				</Text>
	        </View>
        </View>
  	)
  }
  render() {
    return (
      <View style={{ paddingTop: 5, flex: 1, backgroundColor: Colors.white, margin: 'auto', position: 'relative' }}>
        <GooglePlacesAutocomplete
          ref={(instance) => { this.GooglePlacesRef = instance }}
          placeholder="Search address"
          minLength={2} // minimum length of text to search
          autoFocus={false}

          returnKeyType={"none"}
          listViewDisplayed="true"
          fetchDetails={false}
          renderDescription={row =>
            row.description || row.formatted_address || row.name
          }
          onPress={(data, details) => {
          	this.props.handler(`${data.description}`);
          	this.setAddressSelected(true)
          }}
        
          getDefaultValue={() => {
            return ""; // text input default value
          }}
          query={{
            key: "AIzaSyDmoWXBFhIIyD5BL3H9GFBOFM0YN5MGNSE",
            language: "en", // language of the results
            components: 'country:in' // added  manually
          }}
          styles={{
          	textInputContainer: {
		      borderRadius: 5,
		      borderRightWidth: 0,
		      borderLeftWidth: 0,
		      borderTopWidth: 0,
		      width: wp('98%'),
		      padding: 0,
		      marginTop: 0,
		      marginBottom: 0,
		      paddingTop: 0,
		      paddingBottom: 0,
		      elevation: 5,
		      height: hp('5.5%'),
		      backgroundColor: Colors.white
		    },
		     textInput: {
		      marginLeft: 0,
		      marginRight: 0,
		      height: hp('5.5%'),
		      color: '#5d5d5d',
		      fontSize: wp('3.8%'),
		      marginTop: 0,
		      marginBottom: 0,
		      fontFamily: ApplicationStyles.textMsgFont,
		      paddingLeft: wp('8%'),
		      textTransform: 'capitalize'
    		},
            predefinedPlacesDescription: {
              color: Colors.grey,
              width: '100%'
            },
            separator: {
            	borderBottomWidth: .5,
		        borderColor:Colors.grey,
		        marginVertical:2,
		        width: '100%',
		        alignSelf: 'center'
            },
            row: {
            	height: 'auto',
            	alignItems: 'center'
            },
            container: {
            	flex: 1,
            	backgroundColor: Colors.white
            }
          }}

          enablePoweredByContainer={false}
          nearbyPlacesAPI="GooglePlacesSearch"
          //GooglePlacesDetailsQuery={{ fields: 'formatted_address' }}
          GooglePlacesSearchQuery={{
            rankby: 'distance'
          }}
          renderLeftButton={()  => <GenericIcon name="search" style={{color: Colors.grey, alignSelf: 'center', fontSize: wp('5%'), marginLeft: wp('2%'), zIndex: 34, position: 'absolute'}}/>}
          debounce={200}
          renderRow={(data, details) => this.getDataNode(data, details)}
          textInputProps={{
			 onFocus: (text) => {this.setAddressSelected(false) },
			 onBlur: () => {this.setAddressSelected(true) }
			 //onChangeText: (text) => {!this.GooglePlacesRef.getAddressText()  ?  this.setAddressSelected(false) : ''}

			}}
        />
        {this.state.addressSelected ? <BlueButton title={'Confirm Address'} style={{position: 'absolute', left: 0, right: 0, bottom:hp('3%'), width: wp('80%'), marginLeft: wp('10%')}} onPress={() => this.onHandleConfirm(this.GooglePlacesRef.getAddressText())}/> : [] }
      </View>
    );
  }
}