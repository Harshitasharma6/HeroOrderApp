import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import { Text } from 'native-base';
import { connect } from 'react-redux'
import Style from '../../DashboardScreenStyle'
import BlueButton from 'App/Components/BlueButton'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import InputText from 'App/Components/FormInput/InputText'
import TextArea from 'App/Components/FormInput/TextArea';
import ImagePicker from 'App/Components/ImagePicker'
import GenericIcon from 'App/Components/GenericIcon'



class FeedbackScreen extends Component {

  submit(){
    const {
      form,
      access_token,
      feedBackAction
    } = this.props;

    feedBackAction({
			...form, 
      access_token: access_token
    });
	}

  render() {
    const {
      form,
      changeForm,
      validation
    } = this.props;

    return (
      <View style={Style.container}>
				<Text style={Style.heading}>{''}</Text>
				<ScrollView style={Style.action}>

					<InputText
  						style={Style.mb10}
  						placeholder={'Subject*'}
  						value={form.Subject}
  						onChange={(value) => changeForm({ edited_field: 'Subject', edited_value: value })}
              error={validation.invalid && validation.invalid_field == 'Subject'}
  						label={'Subject*'}
					/>

					<TextArea
                    
          placeholder={'Body*'}
          numberOfLines={5}
					value={form.Body}
          onChange={(value) => changeForm({ edited_field: 'Body', edited_value: value })}
          error={validation.invalid && validation.invalid_field == 'Body'}
          label={'Body*'}
        />


        <View style={{...Style.bottomMargin}}>
          <ImagePicker 
            image={form.attachment} 
            onImageSuccess={({image}) => changeForm({edited_field: 'attachment', edited_value: image})}>
            <View style={Style.recurringActionButton}>
              <Text style={Style.recurringActionButtonText}>
              <GenericIcon 
                  name="camera" 
                  style={Style.recurringActionButtonIcon}
                />
              {'  Attach Image'}
              </Text>
            </View>
          </ImagePicker>
          </View>


					<BlueButton
						style={Style.button}
						rounded
						large
						title={'Submit'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View> 
    )
  }
}

const mapStateToProps = (state) => ({
  token:            state.user.token,
  agentid:          state.user.id,
  loaders:          state.dashboard.loaders,
  form:             state.dashboard.feedBackForm,
  access_token:     state.startDay.access_token,
  validation:       state.dashboard.feedBackFormValidation,
  changeForm:       state.dashboard.changeFeedBackForm,
  feedBackLoader:   state.dashboard.feedBackLoader,
  
});

const mapDispatchToProps = (dispatch) => ({
  feedBackAction: (params) =>       dispatch(DashboardActions.feedBackAction(params)),
  changeFeedBackForm: (params) =>   dispatch(DashboardActions.changeFeedBackForm(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackScreen)