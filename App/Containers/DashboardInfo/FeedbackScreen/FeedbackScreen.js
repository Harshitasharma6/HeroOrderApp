import React, { Component } from 'react'
import { View, Alert, ScrollView, Image } from 'react-native'
import { Text } from 'native-base';
import { connect } from 'react-redux'
import Style from './FeedbackScreenStyle'
import BlueButton from 'App/Components/BlueButton'
import DashboardActions from 'App/Stores/Dashboard/Actions'
import InputText from 'App/Components/FormInput/InputText'
import TextArea from 'App/Components/FormInput/TextArea';
import ImagePicker from 'App/Components/ImagePicker'
import GenericIcon from 'App/Components/GenericIcon'


class FeedbackScreen extends Component {

  componentWillUnmount() {
    this.props.changeForm({ edited_field: 'Subject', edited_value: '' });
    this.props.changeForm({ edited_field: 'Body', edited_value: '' })
    this.props.changeForm({ edited_field: 'attachment', edited_value: '' });
  }

  submit() {
    const {
      form,
      access_token,
      submitForm
    } = this.props;

  	submitForm({
		  ...form,
      access_token: access_token
    });
	}

  render() {
     const {
      form,
      loader,
      changeForm,
      validation,
      sendAttachmentLoader
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
            disabled= {loader || sendAttachmentLoader} 
            loading= {loader || sendAttachmentLoader}
						title={'Submit'}
						onPress={() => this.submit()}
					/>
				</ScrollView>
			</View> 
    )
  }
}

const mapStateToProps = (state) => ({
  form: state.dashboard.feedBackForm,
  access_token: state.startDay.access_token,
  validation: state.dashboard.feedBackFormValidation,
  changeForm: state.dashboard.changeFeedBackForm,
  loader: state.dashboard.feedBackLoader,
  sendAttachmentLoader: state.dashboard.sendAttachmentLoader
  
});

const mapDispatchToProps = (dispatch) => ({
  submitForm: (params) => dispatch(DashboardActions.feedBackAction(params)),
  changeForm: (params) => dispatch(DashboardActions.changeFeedBackForm(params)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedbackScreen)