import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { connect } from 'react-redux'
import ItemDetail from 'App/Components/ItemDetail'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import ShreeAction from 'App/Stores/Shree/Actions';
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';

class TestDriveHistoryScreen extends Component {
  componentDidMount() {
    // const {
    //   dealerId,
    //   fetchData
    // } = this.props

    // fetchData({
    //   dealerId
    // });
  }


  getDataNode() {
    // const {
    //   data,
    //   loading
    // } = this.props;
    const data = ['1', '2']
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
	              content={[
	                <GenericDisplayCardStrip key={'Test Drive Vehicle' + item} label={'Test Drive Vehicle'} value={'Optima LI'}/>,
	                <GenericDisplayCardStrip key={'Test Drive Date' + item} label={'Test Drive Date'} value={'20/06/2020'}/>,
	                <GenericDisplayCardStrip key={'Test Drive Time' + item} label={'Test Drive Time'} value={'01:00 PM'}/>,
	                <GenericDisplayCardStrip key={'Overall Experience' + item} label={'Overall Experience'} value={'5'}/>,
	                <GenericDisplayCardStrip key={'Sales Person Name' + item} label={'Sales Person Name'} value={'Amit Kumar'}
	            />
              ]}
            />}
            keyExtractor={item => item}
            refreshing={false}
            ListEmptyComponent={() => <NoDataFound text={'No History Found'} />}
          />
        );
      } else {
        visibleNode =<NoDataFound text={'No History Found'} />
      }
    } else if (false) {
      visibleNode = <Loading />
    } else if (data && !data.length) {
      visibleNode = <NoDataFound text={'No History Found'} />
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
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
)(TestDriveHistoryScreen)
