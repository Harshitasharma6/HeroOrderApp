import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { connect } from 'react-redux'
import NoDataFound from 'App/Components/NoDataFound'
import Loading from 'App/Components/Loading'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import GenericDisplayCard from 'App/Components/GenericDisplayCard'
import BlueButton from 'App/Components/BlueButton'
import { HelperService } from 'App/Services/Utils/HelperService';
import GenericDisplayCardStrip from 'App/Components/GenericDisplayCard/GenericDisplayCardStrip';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

// let permission = await HelperService.requestMultipleStoragePermission();

//     if (permission) {
//       ImagePicker.launchImageLibrary(options, (response) => {
//         console.log('Response = ', response);
//         if (response.didCancel) {
//         } else if (response.error) {
          
//         } else if (response.customButton) {
//           alert(response.customButton);
//         } else {
//           const source = { uri: response.uri };
//           this.props.onImageSuccess({ image: (response.data) });
//         }
//       });
//     } else {
//       Alert.alert(
//         "Storage permission Denied.",
//         'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Vikas.'
//       );
//     }
class CommunicationsAttachmentsScreen extends Component {
  componentDidMount() {
    const {
      fetchData,
    } = this.props

    const {
    	communicationId
    } = this.props.navigation.state.params;


    fetchData({
    	communicationId: communicationId
    });
  }

  async handlePreviewClick(params) {
    const {
      fetchAttachmentsData
    } = this.props


    let permission = await HelperService.requestMultipleStoragePermission();

    if (permission) {
      fetchAttachmentsData({
        attachmentId: params.ContentDocumentId, 
        extension: params['ContentDocument']['FileExtension']
      });
    }else {
      Alert.alert(
        "Storage permission Denied.",
        'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Vikas.'
      );
    }
  }


  getCommunicationsInfoNode() {
    let visibleNode = [];
    const {
      data,
      loader,
      loaderData,
      fetchAttachmentsData
    } = this.props;

    const dataLength = data.length;

    if (data && dataLength && !loader) { 
      visibleNode = (
        <ScrollView>
          {data.map((obj, index) =>
            <GenericDisplayCard dark={false}
              style={{ width: '88%', elevation: 0 }}
              key={obj.ContentDocumentId + loaderData}
              content={[
              	<GenericDisplayCardStrip  key={'Extension' + index} label={'File Extension'} value={obj['ContentDocument']['FileExtension']} />,
              	<BlueButton key={'Preview' + index} title={'Preview File'} onPress={() => this.handlePreviewClick(obj)} style={{width: '50%', alignSelf: 'center', marginTop: hp('2%'), height: hp('4.5%')}} textStyle={{fontSize: wp('3%')}} loading={loaderData == obj.ContentDocumentId} disabled={loaderData == obj.ContentDocumentId} />
              ]}
            />

          )}
        </ScrollView>
      )
    } else if (loader){
      visibleNode = <Loading />;
    }else { 
      visibleNode = <NoDataFound title={'No Communications.'}/>;
    }

    return visibleNode;
  }

  render() {
    return (
      <View style={{ flex: 1, paddingTop: 10 }}>
        {this.getCommunicationsInfoNode()}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  data:       state.dashboard.communicationsAttachmentsList,
  loader:     state.dashboard.fetchCommunicationsAttachmentsLoader,
  loaderData: state.dashboard.fetchCommunicationsAttachmentsDetailsLoader
});

const mapDispatchToProps = (dispatch) => ({
  fetchData: (params) =>            dispatch(DashboardActions.fetchCommunicationsAttachments(params)),
  fetchAttachmentsData: (params) => dispatch(DashboardActions.fetchCommunicationsAttachmentsDetails(params))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommunicationsAttachmentsScreen)