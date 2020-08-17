import React, { Component } from 'react';
import {View, ScrollView,StyleSheet} from 'react-native'
import { Container, Header, Content, ListItem, Text, Radio, Right, Left } from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {Colors, ApplicationStyles} from 'App/Theme'
import { connect } from 'react-redux'
class ApplyOffers extends Component {
	isSelected(offer) {
		const {
	  		cart
	  	} = this.props;

	  	let selected = false;
	  	cart.offersApplied.map((obj) => {
	  		if (obj.scheme_name__c == offer.scheme_name__c) {
	  			selected = true;
	  		}
	  	});

	  	return selected;
	}	

  	render() {
  		const {
	  		availableOffers,
	  		onPressSelect
	  	} = this.props;
	    return (
	      <View style={{flex: 1, marginBottom: 15, borderRadius: 10, width: wp('100%')}}>
		    <ScrollView>
		    	{
		        	availableOffers.map((obj) => {
		        		return (
					        <ListItem 
					        	selected={this.isSelected(obj)} 
					        	onPress={() => {this.isSelected(obj) ? {} : onPressSelect(obj)}}
					       	>
					            <Left>
					              <Text style={Styles.listText}>{`${obj.scheme_name__c} (${obj.scheme_amount__c})`}</Text>
					            </Left>
					            <Right>
					              <Radio
					                color={Colors.grey}
					                selectedColor={Colors.primary}
					                selected={this.isSelected(obj)}
					                onPress={() => {this.isSelected(obj) ? {} : onPressSelect(obj)}}
					              />
					            </Right>
					        </ListItem>
		        		);
		        	})
			    }
			</ScrollView>
		  </View>
	    );
  }
}

const mapStateToProps = (state) => ({
  cart : state.products.cart
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ApplyOffers)


const Styles = StyleSheet.create({
  listText: {
    fontFamily: ApplicationStyles.textMsgFont,
    color: Colors.grey,
    fontSize: wp('4.4%')
  }
});