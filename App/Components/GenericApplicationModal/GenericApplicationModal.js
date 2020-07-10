import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import GenericIcon from 'App/Components/GenericIcon'
import BlueButton from 'App/Components/BlueButton'
import WhiteButton from 'App/Components/WhiteButton'

import { Colors, Metrics, Helpers, Fonts, ApplicationStyles } from 'App/Theme'

//onSubmit
export default class ActionModal extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  toggleModal() {
  	this.setState({
      	modalVisible: !this.state.visible
    });
  }

  hideModal() {
  	this.setState({
      	modalVisible: false
    });
  }

  onSubmit() {
  	this.setState({
      	modalVisible: false
    });

    //this.props.onSubmit()
  }

  onClose() {
  	this.setState({
      	modalVisible: false
    });

    //this.props.onClose();
  }

  onClear() {
  	this.props.onClear();
  }

  render() {
  	const {
      heading,
  		children,
      visible,
      disabled,
      animationType,
      content,
      close,
      bodyFlexHeight
  	} = this.props;

    let parentFlex = 1;
    let topContainerFlexHeight = .4;
    let bottomContainerFlexHeight = .6;

    if (!!bodyFlexHeight) {
      bottomContainerFlexHeight = bodyFlexHeight;
      topContainerFlexHeight = parentFlex  - bottomContainerFlexHeight;
    }


    return (
      	<View>
		        <Modal
		          animationType={animationType || 'slide'}
		          transparent={true}
		          visible={visible}
		          onRequestClose={() => {
		            this.hideModal()
		          }}>
		          <TouchableWithoutFeedback onPress={() => close()} disabled={disabled}>
                <View style={{flex: topContainerFlexHeight, backgroundColor: 'rgba(0, 0, 0, 0.3)', zIndex: 100}}></View>
              </TouchableWithoutFeedback>
		          <View style={{flex: bottomContainerFlexHeight, backgroundColor: Colors.white, zIndex: 4}}>
		          		<View style={{flex: .2, alignItems: 'center', justifyContent: 'center'}}>
		          			<Text style={{color: Colors.primary, alignSelf: 'center', fontFamily: ApplicationStyles.textMsgFont, fontSize: 18, textAlign: 'center', width: '80%'}}>{heading}</Text>
				              <TouchableHighlight
				              	style={{paddingTop: 2, position: 'absolute', left: 0, paddingLeft: 8}}
                        disabled={disabled}
				                onPress={() => {
				                  close();
				                }}>
				                <GenericIcon name={'close-circle'} style={{fontSize: 35, color: Colors.primary}}/>
				              </TouchableHighlight>
			          	</View>
			          	<View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
		          			{content}
		          		</View>
		        </View>
		    </Modal>
      	</View>
    );
  }
}