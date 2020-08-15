import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import { HelperService } from 'App/Services/Utils/HelperService';
import { Colors, ApplicationStyles } from 'App/Theme';
import ProductCard from 'App/Components/ProductCard'
import ProductsActions from 'App/Stores/Products/Actions';
import BlueButton from 'App/Components/BlueButton';
import GenericIcon from 'App/Components/GenericIcon';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import NavigationService from 'App/Services/NavigationService'

class AvailableSchemes extends Component {
  componentDidMount() {
    this.fetchCall()
  }

  fetchCall() {
    const {
      state_id,
      fetchData
    } = this.props

    const {
      product_id
    } = this.props.navigation.state.params;

    fetchData({
      state_id,
      product_id
    });
  }
  

  getDataCard(item) {
    return (
      <GenericDisplayCard dark={false}
          style={{ width: '95%', elevation: 0 }}
          heading={item.scheme_name__c}
          content={[
            <GenericDisplayCardStrip 
              key={'Scheme Amount' + item.scheme_name__c} 
              label={'Scheme Amount'} 
              value={HelperService.currencyValue(item.scheme_amount__c)}
             />,
             <GenericDisplayCardStrip 
              key={'Valid From' + item.scheme_name__c} 
              label={'Valid From'} 
              value={`${HelperService.removeFieldsAndDateReadableFormat(item.active_from__c)}`}
             />,
             <GenericDisplayCardStrip 
              key={'Valid Till' + item.scheme_name__c} 
              label={'Valid Till'} 
              value={`${HelperService.removeFieldsAndDateReadableFormat(item.active_to__c)}`}
             />
          ]}
        />
    );
  }



  getDataNode() {
    const {
      enquiry,
      loader,
      data
    } = this.props;
    let visibleNode = [];

    if (data && data.length) {
      if (data.length) {
        visibleNode = (
          <FlatList
            data={data}
            renderItem={({ item }) => this.getDataCard(item)}
            keyExtractor={item => item.scheme_name__c}
            onRefresh={() => this.fetchCall()}
            refreshing={loader}
          />
        );
      } else {
        visibleNode =  (
          <NoDataFound text={'No Schemes Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={{color: Colors.button, fontSize: 35, alignSelf: 'center', padding: 10}}
            />
          </NoDataFound>
        );
      }
    } else if (loader) {
      visibleNode = <Loading />
    } else if (data && !data.length && !loader) {
      visibleNode =  (
          <NoDataFound text={'No Schemes Found'}>
            <GenericIcon 
              name={'refresh'}
              onPress={() => this.fetchCall()}
              style={ApplicationStyles.refreshIcon}
            />
          </NoDataFound>
        );
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 15, paddingHorizontal: 10}}>
        <Text style={ApplicationStyles.formHeading}>{'Available Offers'}</Text>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  loader   : state.products.loaders.getProductSchemesLoader,
  enquiry  : state.visitor.currentEnquiryId,
  state_id : state.user.state_c,
  data     : state.products.productSchemes
});

const mapDispatchToProps = (dispatch) => ({
  fetchData:(params) => dispatch(ProductsActions.getProductSchemes(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AvailableSchemes)



