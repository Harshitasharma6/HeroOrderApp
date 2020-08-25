import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item,FlatList} from 'react-native';
import Style from './styles'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import BlueButton from 'App/Components/BlueButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import NoDataFound from 'App/Components/NoDataFound'
import GenericIcon from 'App/Components/GenericIcon'
import Loading from 'App/Components/Loading'
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import {ApplicationStyles,Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import SubDealersActions from 'App/Stores/SubDealers/Actions';
import Underline from 'App/Components/Underline';

// "first_name__c": "test 12",	(*mandatory)
// 	"last_name__c": "enquiry visit test",	(*mandatory)
// 	"contact_number__c": "1646464944", 	(*mandatory)
// 	"age__c":  "28",
// 	"genders__c": "Male",
// 	"product__c": "a029D000002ZFPtQAO", 	(*mandatory)
// 	"mode_of_buying__c": "Cash",
// 	"exchange_required__c":"No",
// 	"lead_source__c": "Event",
// 	"existing_two_wheelers__c": "Yes",
// 	"purpose_of_buying__c" : "Nothing",
// "usage__c": "Nothing",
// "expected_close_date__c": "2020-08-19",
//  "dealers_sales_person__c": "a0O9D000001hLV9UAM",
// 	"email_id__c": "abc@gmail.com",
// 	"occupation__c" : "Business",
// 	"test_drive_offered__c": "Yes",		(*mandatory)
// 	"customer__c": "0039D000008BMX2QAO",
// 	"address_line_1__c" : “test address”


class SubDealerInfoScreen extends Component {
	componentDidMount() {
		this.fetchCall()	
	}

	fetchCall() {
		const {
		
		  fetchData
		} = this.props
	
		fetchData({
		 
		});
	  }
	
    
    getDataNode() {
		const {
			loader,
			data
		  } = this.props;
        
        let visibleNode = [];
    
        if (data && data.length) {
          if (data.length) {
            visibleNode = (
              <FlatList
                data={data}
                renderItem={({ item }) => 
                    <GenericDisplayCard dark={false}
                      style={{ width: '98%', elevation: 0 }}
                      heading={item.name}
                      showTextAvatar={true}
                      //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                      content={[
                        <BlueButton title={''} style={{width: wp('10%'), alignSelf: 'flex-end', marginTop: hp('1%'), borderRadius:  wp('100%'), paddingRight: 2, paddingLeft: 2, position: 'absolute', top: -hp('6%'), right: -wp('2%')}} textStyle={{fontSize: wp('3.8%')}} onPress={() => HelperService.callNumber(item.phone)}><GenericIcon name="phone" style={{fontSize: wp('5%'), color: Colors.white}}/></BlueButton>,
                          <GenericDisplayCardStrip key={'Contact Number' + item.name} label={'Contact Number:'} value={item.phone}/>,
                          <GenericDisplayCardStrip key={'Address' + item.name} label={'Address:'}  value={item.address_line_1__c}/>
                          
                        
                  ]}
                />}
                keyExtractor={item => item.sfid}
				refreshing={loader}
				onRefresh={() => this.fetchCall()}
                ListEmptyComponent={() => <NoDataFound text={'No SubDealer Found'} />}
              />
            );
          } else {
            visibleNode =<NoDataFound text={'No SubDealer Found'} />
          }
        } else if (loader) {
          visibleNode = <Loading />
        } else if (data && !data.length) {
          visibleNode = <NoDataFound text={'No SubDealer  Found'} />
        }
    
        return visibleNode;
      }

	submit() {
		const { 
			submitForm, 
			form,
		} = this.props;

		Keyboard.dismiss();
		submitForm({
			...form,
			dealers_sales_person__c: 'a0O9D000001hLV9UAM'
		});
	}

    render() {
		
		
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'SUB DEALERS'}</Text>
                <Underline/>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
                     {this.getDataNode()}
                    
               
				</ScrollView>
                <TouchableOpacity
                    style={Style.plusIcon}
                    onPress={() => {
          NavigationService.navigate('SubDealerFormScreen');
        
        }}
					>
					<GenericIcon
						name='plus-circle'
						style={{ color: Colors.white, fontSize: 40, alignSelf: 'center' }}
					/>
				</TouchableOpacity>   
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	data     : state.subdealers.SubDealersData,
	loader   : state.subdealers.loaders.getAllSubDealersLoader,
});
  
const mapDispatchToProps = (dispatch) => ({
	fetchData:(params)       => dispatch(SubDealersActions.getAllSubDealers(params)),
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(SubDealerInfoScreen)