import React, { Component } from 'react'
import { View, Text, FlatList ,StyleSheet} from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import BlueButton from 'App/Components/BlueButton'
import GenericIcon from 'App/Components/GenericIcon'
import Loading from 'App/Components/Loading'
import ShreeAction from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {ApplicationStyles, Colors} from 'App/Theme'
import NavigationService from 'App/Services/NavigationService'
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from 'react-native-responsive-screen';


class BookingConfirmed extends Component {
  componentDidMount() {

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
	              style={{ width: '88%', elevation: 0, borderWidth: 2, borderColor: Colors.primary,backgroundColor: Colors.lightRedPink, }}
	              heading={item.name}
	              showTextAvatar={true}
	              //onPress={() => NavigationService.navigate('CustomerInfoScreen')}
	              content={[
	              	<GenericDisplayCardStrip key={'Status' + item.name} label={'Status'} value={'Open'}/>,
	              	<GenericDisplayCardStrip key={'Stage' + item.name} label={'Stage'} value={'Booking'}/>,
	              	<GenericDisplayCardStrip key={'Product Purchased' + item.name} label={'Product Purchased'} value={'Optima LI'}/>,
	                <GenericDisplayCardStrip key={'Expected Delivery Date' + item.name} label={'Expected Delivery Date'} value={'23/07/2020'}/>,
                  <BlueButton title={''} style={Styles.callButton} textStyle={Styles.callButtonText} ><GenericIcon name="phone" style={Styles.callButtonIcon}/></BlueButton>
              ]}
            />}
            keyExtractor={item => item}
            refreshing={false}
            ListEmptyComponent={() => <NoDataFound text={'No Handovers Found'} />}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No Handovers Found'} />
      }
    } else if (false) {
      visibleNode = <Loading />
    } else if (data && !data.length) {
      visibleNode = <NoDataFound text={'No Handovers Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 0 , paddingBottom: 10, marginBottom: 10}}>
        {this.getDataNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
	dealerId: state.shree.selectedShree.id,
  	data    : state.shree.outstanding,
  	loading : state.shree.fetchOutstandingLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) 	 => dispatch(ShreeAction.fetchOutstanding(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BookingConfirmed)

const Styles = StyleSheet.create({
  callButton: {
    width: wp('10%'), 
    alignSelf: 'flex-end', 
    marginTop: hp('1%'), 
    borderRadius:  wp('100%'),
    paddingRight: 2, 
    paddingLeft: 2, 
    position: 'absolute', 
    top: -hp('6%'), 
    right: -wp('2%'), 
    borderColor: Colors.primary, 
    backgroundColor: 'transparent', 
    borderWidth: 1, 
    zIndex: 3
  },
  callButtonText: {
    fontSize: wp('3.8%')
  },
  callButtonIcon: {
    fontSize: wp('5%'), 
    color: Colors.primary
  },
});

