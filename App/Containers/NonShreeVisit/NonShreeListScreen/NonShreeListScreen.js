import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, AsyncStorage } from 'react-native';
import { connect } from 'react-redux';
import NonShreeTuple from '../../NonShreeVisit/NonShreeTuple';
import Style from './NonShreeListScreenStyle';
import StartDayAction from '../../../Stores/StartDay/Actions';
import SitesTuple from '../../ShreeVisit/SitesTuple';

class NonShreeListScreen extends Component {
  
  state = {

      ShreeList:[],

    };



  componentDidMount() {

    this.nonShreeData()


  }

  


  nonShreeData = () => {


    fetch("https://cs76.salesforce.com/services/data/v45.0/query/?q=select+id,name,Counter_Code__c,Name_Of_Shop__c,Contact_Person__c,Contact_Person_No__c,Type_of_Counter__c,Shop_Type__c,Counter_Potential__c,Add_Comment__c,Latitude__c,Longitude__c,Zone__c,State__c,City__c,Taluka__c,District__c,Address__c,Postal_Code__c+from+Account+Where+Type_of_Counter__c+=+'Non Shree'", {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + this.props.access_token,
    },
         
      }).then((response) => response.json())
        .then((responseJson) => {
            // Alert.alert(JSON.stringify(responseJson))

            console.log(responseJson['records'], "hhhhaaa")
            
            let data = responseJson['records']
            this.setState({ShreeList:data});
            // console.log(this.ShreeList.count, "hhhhaaa")

            data.map((items, key) => {
              this.state.ShreeList.push({
               "Name_Of_Shop__c": items.Name_Of_Shop__c,
               "Contact_Person__c": items.Contact_Person__c,
               "Contact_Person_No__c": items.Contact_Person_No__c,
               "Type_of_Counter__c": items.Type_of_Counter__c,
               "Shop_Type__c": items.Shop_Type__c,
               "Shop_Type__c": items.Shop_Type__c,

               "Counter_Potential__c": item.Counter_Potential__c,
               
               "Add_Comment__c": item.Add_Comment__c,

               "Latitude__c": item.Latitude__c,
               "Longitude__c": item.Longitude__c,
               "Name": item.Name,
               "City__c": item.City__c,

               "City__c": item.City__c,

               "State__c": item.State__c,
               "Tehsil__c": item.Tehsil__c,
               "Address__c": item.Address__c,
               "Zone__c": item.Zone__c,


             });
         });
     
      })
        .catch((error) => {
          Alert.alert(error)

      });
      
    }

    onSelectSite(params) {
      NavigationService.navigate('SitesInfoScreen', params.data);
      this.props.selectSite(params.data);
    }


  render() {

    return (
      <View style={Style.container}>
        <FlatList
            data={this.state.ShreeList}
            renderItem={({ item }) => <SitesTuple data={item}  onPress={() => this.onSelectSite({ data: item })} />}
            keyExtractor={item => item.Id}
          />

      <TouchableOpacity
          style={Style.plusIcon}
          onPress={() => NavigationService.navigate('NonShreeVisit')}>
          <Icon
            name={'ios-add'}
            ios={'ios-add'}
            android={'md-add'}
            style={{ color: Colors.white, fontSize: 45, alignSelf: 'center' }}
          />
        </TouchableOpacity>

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
	access_token: state.startDay.access_token,

});


export default connect(
	mapStateToProps,
)(NonShreeListScreen)

