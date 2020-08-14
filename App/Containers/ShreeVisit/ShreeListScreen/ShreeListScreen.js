import Loading from 'App/Components/Loading';
import NoDataFound from 'App/Components/NoDataFound';
import NavigationService from 'App/Services/NavigationService';
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors } from 'App/Theme';
import { Icon } from 'native-base';
import React, { Component } from 'react';
import { FlatList, TouchableOpacity, View, Alert, AsyncStorage } from 'react-native';
import SitesTuple from '../../ShreeVisit/SitesTuple';
import Style from './ShreeListScreenStyle';
import { connect } from 'react-redux';

class ShreeListScreens extends Component {


    state = {

      ShreeList:[],
      // access_token:''

    };


  componentDidMount() {

    // this.getToken();

    this.nonShreeData()

  }

  // async getToken() {
  //   let token = await AsyncStorage.getItem('access_token');
  //     if (token) {

  //       this.setState({access_token: token})  
  //     }
  //   }
    

  nonShreeData = () => {


    fetch("https://cs76.salesforce.com/services/data/v45.0/query/?q=select+id,name,Counter_Code__c,Company_Name__c,Type_of_Counter__c,Contact__c,Email__c,Security_Deposit__c,Potential__c,Customer_Category__c,Customer_Sub_Category__c,GST_Registration_Number__c,Latitude__c,Longitude__c,Zone__c,State__c,City__c,Taluka__c,District__c,Address__c,Postal_Code__c+from+Account+Where+Type_of_Counter__c+=+'Shree'", {
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
               "Address__c": items.Address__c,
               "City__c": items.City__c,
               "Contact__c": items.Contact__c,
               "Counter_Code__c": items.Counter_Code__c,
               "Customer_Category__c": items.Customer_Category__c,
               "Customer_Sub_Category__c": items.Customer_Sub_Category__c,
               "Email__c": item.Email__c,
               "Id": item.Id,
               "Latitude__c": item.Latitude__c,
               "Longitude__c": item.Longitude__c,
               "Name": item.Name,
               "Postal_Code__c": item.Postal_Code__c,
               "Potential__c": item.Potential__c,
               "Security_Deposit__c": item.Security_Deposit__c,
               "State__c": item.State__c,
               "Taluka__c": item.Taluka__c,
               "Type_of_Counter__c": item.Type_of_Counter__c,
               "Zone__c": item.Zone__c,

             });
         });
     
      })
        .catch((error) => {
          Alert.alert(error)

      });
      
    }

    onSelect(params) {
      NavigationService.navigate('ShreeInfoScreen', params.data);
      // this.props.selectSite(params.data);
    }


  render() {

    return (
      <View style={Style.container}>
        <FlatList
            data={this.state.ShreeList}
            renderItem={({ item }) => <SitesTuple data={item}  onPress={() => this.onSelect({ data: item })} />}
            keyExtractor={item => item.Id}
          />

      </View>
    )
  }
}

const mapStateToProps = (state) => ({
	access_token: state.startDay.access_token,

});


export default connect(
	mapStateToProps,
)(ShreeListScreens)

