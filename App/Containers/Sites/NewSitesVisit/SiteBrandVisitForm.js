import React, { Component } from 'react'
import { View, ScrollView, Text, Image } from 'react-native'
import { Button, Textarea } from 'native-base'
import { connect } from 'react-redux'
import Style from './NewSitesVisitStyle'
import InputText from 'App/Components/FormInput/InputText'
import InputMobile from 'App/Components/FormInput/InputMobile'
import InputNumber from 'App/Components/FormInput/InputNumber'
import BlueButton from 'App/Components/BlueButton'
import Select from 'App/Components/Select';
import NavigationService from 'App/Services/NavigationService'
import { HelperService } from 'App/Services/Utils/HelperService';
import ShreeActions from 'App/Stores/Shree/Actions';
import GenericIcon from 'App/Components/GenericIcon';
import BrandComponent from 'App/Components/BrandComponent';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

class SiteBrandVisitForm extends Component {
	render() {
		const { 
			form, 
			changeForm, 
			removeForm,
			Brand, 
			product, 
			packing, 
			shreeVisitDetailType 
		} = this.props;
		return (
			<View style={{borderWidth: 1, borderColor: Colors.primary, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', marginTop: 20,paddingVertical: 20, paddingHorizontal: 5, borderRadius: 10,backgroundColor: Colors.lightGrey, position: 'relative'}}>
				<BrandComponent 
					list={Brand} 
					value={form.Brand__c} 
					changeForm={(value) => changeForm({ edited_field: 'Brand__c', edited_value: value })} 
				/>

				<Select style={Style.selectPickerStyle}
					label={'Product*'}
					list={product}
					selected={form.Product__c}
					onChange={(value) => changeForm({ edited_field: 'Product__c', edited_value: value })}
				/>

				<Select style={Style.selectPickerStyle}
					label={'Packing*'}
					list={packing}
					selected={form.Packing__c}
					onChange={(value) => changeForm({ edited_field: 'Packing__c', edited_value: value })}
				/>

				<View style={{width: wp('20%')}}>
					<InputNumber
						styles={ApplicationStyles.brandInput}
						placeholder={'WSP'}
						value={form.WSP__c}
						onChange={(value) => changeForm({ edited_field: 'WSP__c', edited_value: value })}
						label={'WSP*'}
					/>
				</View>

				<View style={{width: wp('20%')}}>
					<InputNumber
						styles={ApplicationStyles.brandInput}
						placeholder={'RSP'}
						value={form.RSP__c}
						onChange={(value) => changeForm({ edited_field: 'RSP__c', edited_value: value })}
						label={'RSP*'}
					/>
				</View>
				

				<GenericIcon
		            name={'trash'}
		            style={Style.trashButtonIcon}
		            onPress={() => removeForm({id: form.id})}
		        />
			</View>
		)
	}
}


const mapStateToProps = (state) => ({
	Brand						: state.startDay.Brand,
	product						: state.startDay.product,
	packing						: state.startDay.packing,
	shreeVisitDetailType		: state.shree.shreeVisitDetailType
  });

  const mapDispatchToProps = (dispatch) => ({

});
  
  export default connect(
	mapStateToProps,
	mapDispatchToProps
  )(SiteBrandVisitForm)