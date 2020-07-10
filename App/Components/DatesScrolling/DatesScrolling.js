import React, { Component } from 'react';
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import NavigationService from 'App/Services/NavigationService'
import SearchBar from 'App/Components/SearchBar';
import SearchableDropdown from 'App/Components/SearchableDropdown';
import WhiteButton from 'App/Components/WhiteButton';
import BlueButton from 'App/Components/BlueButton';
import DatePicker from 'App/Components/DatePicker'
import {HelperService} from 'App/Services/Utils/HelperService'
import { 
	ApplicationStyles, 
	Helpers, 
	Images, 
	Metrics, 
	Colors 
} from 'App/Theme'
import { 
	Platform, 
	View, 
	ActivityIndicator, 
	Image, 
	Dimensions, 
	TouchableWithoutFeedback,
	ScrollView,
	FlatList,
	StyleSheet
} from 'react-native'
import { 
	Container, 
	Header, 
	Title, 
	Content, 
	Button, 
	Icon, 
	Left, 
	Body, 
	Text, 
	Input, 
	Item, 
	Right, 
	Segment,
	Badge
} from 'native-base';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class DatesScrolling extends Component {
	constructor(props) {
		super(props);
		this.selectedIndex = 0;
	}

	getItemLayout(data, index){
		let itemWidth = (Dimensions.get('window').width*.20) + 10
		return (
    		{ length: itemWidth, offset: itemWidth * index, index }
 	 	)
	}

	componentDidMount() {
    		this.scrollToIndex();
	}

	componentDidUpdate() {
    		this.scrollToIndex();
	}

	scrollToIndex(){
		if (this.flatListRef){
    		this.flatListRef.scrollToIndex({animated: true, index: this.selectedIndex});
    	}
  	}

  	cardNode(item) {
  		const {
			focusedDate,
			onDateChange
		} = this.props;
  		return (
  			<WhiteButton 
  				key={item.currentDate} 
  				vertical 
  				style={Styles.dateButton} 
  				textStyle={Styles.dateText} 
  				title={HelperService.getDisplayDate(item.currentDate)} 
  				selected={HelperService.datesAreOnSameDay(item.currentDate, focusedDate)} 
  				onPress={() => onDateChange({selectedDate: item.currentDate})}>
  			</WhiteButton>
  		)
  	}

	render() {
		const {
			startDate,
			endDate,
			onDateChange,
			selectedStartDate,
			selectedEndDate,
			focusedDate,
			allowRangeSelection,
			minDate
		} = this.props;

		let currentDate = startDate;
		let datesNode = [];
		let scrollview_ref = '';

		while(currentDate <=endDate) {
			datesNode.push({currentDate: currentDate})
			currentDate = HelperService.getNextDayTimestamp(currentDate);
			if (HelperService.datesAreOnSameDay(currentDate, focusedDate)){
				this.selectedIndex = datesNode.length - 1
			}
		}

		if (HelperService.datesAreOnSameDay(currentDate, endDate)) {
			datesNode.push({currentDate: currentDate})
			if (HelperService.datesAreOnSameDay(currentDate, focusedDate)){
				this.selectedIndex = datesNode.length - 1
			}
		}

		return (
			<View style={Styles.headerContainer}>
			    <FlatList
			    	data={datesNode}
            		renderItem={({ item }) => this.cardNode(item)}
            		getItemLayout={this.getItemLayout}
			    	ref={ref => {this.flatListRef = ref}}
			    	horizontal={true} 
			    	style={Styles.scrollViewContainer}>
			    </FlatList>
	            <View style={Styles.datePickerContainer}>
	            	<DatePicker 
					  	allowRangeSelection={allowRangeSelection}
					  	selectedStartDate={selectedStartDate} 
					  	selectedEndDate={selectedEndDate}
					  	minDate={minDate} 
					  	onDateChange={(params) => onDateChange({selectedDate: params.selectedStartDate})}
					  	iconStyle={Styles.datePickerIcon}
					/>
	            </View>
		    </View>
		)
	}
}


const Styles = StyleSheet.create({
	headerContainer: {
	 	flex: 1, 
	 	position: 'relative'
	},
	dateButton: {
		height: 40, 
		width: wp('20%'), 
		paddingLeft: 0, 
		paddingRight: 0, 
		marginHorizontal: 5
	},
	dateText: {
		fontSize: wp('3%'), 
	},
	scrollViewContainer: {
		marginRight: (Dimensions.get('window').width*.12), 
		flex: 1, 
		width: (Dimensions.get('window').width) -  (Dimensions.get('window').width*.17)
	},
	datePickerContainer: {
		position: 'absolute', 
		width: 60, 
		height: 55, 
		backgroundColor: Colors.button, 
		right: -10, 
		zIndex: 2, 
		borderRadius: 5, 
		top: -7.5, 
		paddingLeft: 0, 
		paddingRight: 0, 
		borderBottomRightRadius: 0, 
		borderTopRightRadius: 0,
		alignItems: 'center', 
		justifyContent: 'center'
	},
	datePickerIcon: {
		color: Colors.white, 
		fontSize: 30, 
		marginLeft: 0, 
		marginRight: 0, 
		zIndex: 8
	}
});
