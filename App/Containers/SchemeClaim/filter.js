import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Popover from 'react-native-popover-view';
import BlueButton from 'App/Components/BlueButton';
import GenericIcon from 'App/Components/GenericIcon';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      popoverVisible: false,
      selectedFilter: props.selectedFilter || null,
    };
  }

  onFilterChange = filterValue => {
    let {disabled} = this.props;
    let stateUpdates = {
      popoverVisible: false,
    };
    if (!disabled) {
      stateUpdates['selectedFilter'] = filterValue;
    }
    this.setState(stateUpdates);
    if (!disabled) {
      this.props.onFilterChange && this.props.onFilterChange(filterValue);
    }
  };

  render() {
    return (
      <Popover
        isVisible={this.state.popoverVisible}
        onRequestClose={() => {
          this.setState({popoverVisible: false});
        }}
        from={
          
            <BlueButton  title={' FILTER BY'}style={{width: wp('26.5%'),    alignSelf: 'flex-end', marginTop: hp('3%') , marginBottom: hp('0%'), marginRight: wp('10%')}} textStyle={{fontSize: wp('3%')}}  
             onPress={() => {
              if (!this.props.disabled) {
                this.setState({popoverVisible: true});
              }
            }}>
              <GenericIcon name="filter" style={{fontSize: wp('4%'), color: Colors.white}}/></BlueButton>
         
        }>
        <FilterPopupContent
          filters={this.props.filters}
          onFilterChange={this.onFilterChange}
          selectedFilter={this.state.selectedFilter}
        />
      </Popover>
    );
  }
}

class FilterPopupContent extends React.Component {
  render() {
    let {filters, selectedFilter, onFilterChange} = this.props;
    return (
      <View style={{paddingVertical: 2}}>
        {Object.keys(filters).map(filterValue => {
          return (
            <TouchableOpacity
              key={filterValue}
              style={{paddingHorizontal: 4, paddingVertical: 2, maxWidth: 50, backgroundColor:Colors.primary}}
              onPress={() => {
                onFilterChange &&
                  onFilterChange(
                    selectedFilter === filterValue ? null : filterValue,
                  );
              }}>
              <Text
                style={{
                  color: selectedFilter === filterValue ? 'red' : 'black',
                }}>
                {filters[filterValue]}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

export default Filter;