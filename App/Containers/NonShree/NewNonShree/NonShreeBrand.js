import React, { Component } from 'react';
import { View, Text , ScrollView, StyleSheet, Image, TouchableOpacity, Alert, Keyboard} from 'react-native';
import Style from './NonShreeSiteStyle'
import InputText from 'App/Components/FormInput/InputText';
import InputMobile from 'App/Components/FormInput/InputMobile';
import BlueButton from 'App/Components/BlueButton';
import Select from 'App/Components/Select';
import TextArea from 'App/Components/FormInput/TextArea';
import { connect } from 'react-redux';
import NonShreeSiteAction from 'App/Stores/NonShree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import InputNumber from 'App/Components/FormInput/InputNumber';
import NavigationService from 'App/Services/NavigationService'
import { Colors, ApplicationStyles} from 'App/Theme'
import BrandComponent from 'App/Components/BrandComponent';

import _ from 'lodash';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


class NonShreeBrand extends Component {
    render() {
		const { 
			BrandsList,
			editCallback,
			brandFieldName,
			brandFieldValue,
			potentialFieldName,
			potentialFieldValue,
			potentialFieldLabel,
			brandFieldLabel
		} = this.props;
		
		return(
			<View style={Style.brandContainer} key={brandFieldName}>
				<BrandComponent 
					list={BrandsList} 
					value={brandFieldValue}
					label={brandFieldLabel} 
					changeForm={(value) => {
						editCallback({edited_field: brandFieldName, edited_value: value});
						if (value == 'None') {
							editCallback({edited_field: potentialFieldName, edited_value: ""});
						}
					}}
				/>
				
				<View style={{width: wp('30%')}}>
					<InputNumber
						styles={ApplicationStyles.brandInput}
						placeholder={potentialFieldLabel}
						value={potentialFieldValue}
						label={potentialFieldLabel}
						editable={!!brandFieldValue}
						onChange={(value) => editCallback({edited_field: potentialFieldName, edited_value: value})}
					/>
				</View>
			</View>
		);
	}
}


const mapStateToProps = (state) => ({
	BrandsList : state.startDay.Brand
});
  


export default connect(
	mapStateToProps
)(NonShreeBrand)