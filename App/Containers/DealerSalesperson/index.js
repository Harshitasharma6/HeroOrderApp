import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard, Label, Item,FlatList} from 'react-native';
import Style from './styles'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import BlueButton from 'App/Components/BlueButton';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { connect } from 'react-redux';
import GenericIcon from 'App/Components/GenericIcon'
import { HelperService } from 'App/Services/Utils/HelperService';
import NavigationService from 'App/Services/NavigationService'
import {ApplicationStyles,Colors} from 'App/Theme'
import GenericCheckBox from 'App/Components/GenericCheckBox'
import VisitorActions from 'App/Stores/Visitor/Actions'
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


class DealerSalespersonFormScreen extends Component {
	componentDidMount() {
		
	}

	componentWillUnmount() {
		
    }
    
    getDataNode() {
        const data = [{name: 'Sunil Singla'}, {name: 'Ankur Kumar'}, {name: 'Ankita Sharma'}]
        const dataLength = data.length;
        
        let visibleNode = [];
    
        if (data && data.length) {
          if (data.length) {
            visibleNode = (
              <FlatList
                data={data}
                renderItem={({ item }) => 
                    <GenericDisplayCard dark={false}
                      style={{ width: '88%', elevation: 0 }}
                      heading={item.name}
                      showTextAvatar={false}
                      //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
                      content={[
                        <BlueButton style={{width: wp('11%'),   borderRadius:wp('30%'), alignSelf: 'flex-end', marginTop: hp('-5%') , marginBottom: hp('1%'), marginRight: wp('2%')}} textStyle={{fontSize: wp('2.8%')}} onPress={() => HelperService.callNumber('9779897974')}><GenericIcon name="phone" style={{fontSize: wp('4%'), color: Colors.white}}/></BlueButton>,
                          <GenericDisplayCardStrip key={'Contact Number' + item.name} label={'Contact Number:'} value={'8829592311'}/>
                          
                        
                  ]}
                />}
                keyExtractor={item => item}
                refreshing={false}
                ListEmptyComponent={() => <NoDataFound text={'No Salesperson Found'} />}
              />
            );
          } else {
            visibleNode =<NoDataFound text={'No Salesperson Found'} />
          }
        } else if (false) {
          visibleNode = <Loading />
        } else if (data && !data.length) {
          visibleNode = <NoDataFound text={'No SalesPerson  Found'} />
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
		const { 
			form,
			loader,
			changeForm,
			submitForm,
			validation,
			occupationList,
            sourceEnquiryList,
            productsList
		} = this.props;
		
		return (
			<View style={Style.container}>
				<Text style={Style.heading}>{'DEALER SALESPERSON INFO'}</Text>
                <Underline/>
				<ScrollView 
					showsVerticalScrollIndicator={false}
					style={Style.action}
				>
                     {this.getDataNode()}
               
				</ScrollView>
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	validation      			: state.visitor.registerCustomerValidation,
	form 					 	: state.visitor.registerCustomerForm,
	loader 			            : state.visitor.loaders.registerCustomerLoader,
	occupationList 				: state.common.occupationList,
  	sourceEnquiryList 			: state.common.sourceEnquiryList,
  	productsList 				: state.common.productsList,
  	contact_number              : state.visitor.searchCustomerForm.contact_number
});
  
const mapDispatchToProps = (dispatch) => ({
	changeForm: (params)       => dispatch(VisitorActions.changeRegisterCustomerForm(params)),
	submitForm: (params)       => dispatch(VisitorActions.registerCustomer(params)),
	clearRegistrationForm: ()  => dispatch(VisitorActions.clearRegistrationForm())
});

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(DealerSalespersonFormScreen)