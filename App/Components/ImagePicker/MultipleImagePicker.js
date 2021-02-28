import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import GenericIcon from 'App/Components/GenericIcon';
import { HelperService } from 'App/Services/Utils/HelperService'
import {Spinner } from 'native-base';
import {Colors, ApplicationStyles} from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import FastImage from 'react-native-fast-image'
import { connect } from 'react-redux'
import CommonActions from 'App/Stores/Common/Actions'
class MultipleImagePicker extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sources: []
		}
	}

	componentDidMount() {
		this.setState({
			sources: this.props.images
		})
	}

	async chooseFile() {
		var options = {
			title: 'Select Image',
			 quality: .9,
             maxWidth: 1080,
             maxHeight: 1080,
             mediaType: 'photo',
			storageOptions: {
				skipBackup: true,
				path: 'images',
			},
		};

		let permission = await HelperService.requestMultipleStoragePermission();
		let cameraPermission = await HelperService.requestCameraPermission();


		if (permission && cameraPermission) {
			ImagePicker.showImagePicker(options, (response) => {
				if (response.didCancel) {
				} else if (response.error) {
					
				} else if (response.customButton) {
					alert(response.customButton);
				} else {
					const source = { uri: response.uri };
					let sources = [].concat(this.state.sources);
					sources.push(response.uri)

					this.setState({
						sources: sources
					});
					const file = {
				        uri: response.uri,
				        name: response.fileName,
				        type: 'image/jpeg',
				     };
					this.props.onImageSuccess({ image: response.uri });
				}
			});
		} else {
			Alert.alert(
				"Storage permission Denied.",
				'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for HeroAVP.'
			);
		}
	};


	onClearImage() {
		this.setState({
			sources: []
		});

		this.props.onClearImage();
	}

	render() {
		const {
			images,
			children,
			loading,
			title,
			openModal
		} = this.props;


		let image_sources = this.state.sources && this.state.sources.length ? this.state.sources : images
		let imageNode = image_sources.map((url) => <TouchableOpacity onPress={() => {
							return openModal({
									content:<View style={{flex: 1}}><FastImage style={styles.previewImage}  source={{uri: url}} resizeMode={FastImage.resizeMode.stretch} /></View>, 
									heading: 'Preview', 
									bodyFlexHeight: .7
							})}}><FastImage source={{uri: url}} style={styles.image} resizeMode={FastImage.resizeMode.stretch} /></TouchableOpacity>);
		let loading_node = [];

		

		

		if(loading){
			loading_node = (
				<View style={styles.spinner}>
					<Spinner color={Colors.primary} />
					<Text style={{color: Colors.primary}}>Uploading Image...</Text>
					
				</View>
			);
		}


		return (
			<View style={styles.uploadContainer}>
				<View style={styles.container}>
					<View style={{flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start'}}>
						<Text style={styles.title}>{`${title}`}</Text>
						{(this.state.sources.length) ? <GenericIcon name={'times-circle-o'} style={styles.removeIcon} onPress={() => this.onClearImage()}/> : []}
					</View>
					<View style={styles.imagePreviewContainer}>
						{imageNode}
					</View>
					{loading_node}
				</View>
				<View>
					<TouchableOpacity 
							//disabled={loading} 
							onPress={!this.props.enable ? () => this.chooseFile() : () => { }} 
							style={styles.uploadButton}
						>
							<GenericIcon name={'plus-circle'} style={styles.addIcon}/>
						</TouchableOpacity>
					</View>
			</View>
		);
	}
}


const mapStateToProps = (state) => ({
  id: state.user.id,
  token: state.user.token
});

const mapDispatchToProps = (dispatch) => ({
 	openModal:(params)		   => dispatch(CommonActions.openModal(params)),
	closeModal:(params)		   => dispatch(CommonActions.closeModal(params))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MultipleImagePicker)

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#fff',
		width: '85%',
		borderRadius: 10,
		borderWidth: .5,
		borderColor: Colors.grey,
		elevation: 3,
		paddingVertical: hp('1%')
	},
	addIcon: {
		color: Colors.primary,
		fontSize: wp('9%')
	},
	removeIcon: {
		color: Colors.primary,
		fontSize: wp('6.5%'),
		paddingTop:  0

	},
	uploadButton: {

	},
	uploadContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		position: 'relative'
	},
	imagePreviewContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
		flexWrap: 'wrap',
		position: 'relative',
		minHeight: hp('8%'),
	},
	title: {
		fontSize: wp('3.5%'),
		fontFamily: ApplicationStyles.textMsgFont,
		color: Colors.primary,
		paddingHorizontal: wp('2%'),
		flexWrap: 'wrap',
		width:'90%'
	},
	image: {
		width: hp('8%'),
		height: hp('8%'),
		resizeMode: 'stretch', 
		borderRadius: 10,
		marginHorizontal: wp('1.5%'),
		marginVertical: wp('1.5%')
	},
	spinner: {
		marginVertical: 0,
		position: 'absolute',
		backgroundColor: 'transparent',
		height: '117%',
		width: '100%',
		zIndex: 2,
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		borderRadius: 10
	}, 
	previewImage: {
		width: wp('90%'),
		height: hp('50%'),
		resizeMode: 'stretch', 
		borderRadius: 10,
		marginHorizontal: wp('1.5%'),
		marginVertical: wp('1.5%')
	}
});