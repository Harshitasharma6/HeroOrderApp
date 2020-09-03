import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import GenericIcon from 'App/Components/GenericIcon';
import { HelperService } from 'App/Services/Utils/HelperService'
import {Spinner } from 'native-base';
import {Colors, ApplicationStyles} from 'App/Theme'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {}
	}

	async chooseFile() {
		var options = {
			title: 'Select Image',
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
					this.setState({
						source: 'data:image/jpeg;base64,' + response.data
					});
					this.props.onImageSuccess({ image: response.data });
				}
			});
		} else {
			Alert.alert(
				"Storage permission Denied.",
				'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for HeroAVP.'
			);
		}
	};

	render() {
		const {
			image,
			children,
			loading,
			title
		} = this.props;

		let imageNode = (
			<Image
				source={{
					uri: this.state.source || image,
				}}
				style={styles.image}
			/>
		);

		
		

		if(loading) {
			imageNode = <View style={styles.spinner}><Spinner color={Colors.primary} /></View>
		}
		return (
			<View style={styles.uploadContainer}>
				<View style={styles.container}>
					<View style={{flexDirection: 'row'}}>
						<Text style={styles.title}>{title}</Text>
					</View>
					<View style={styles.imagePreviewContainer}>
						{imageNode}
					</View>
				</View>
				<View>
					<TouchableOpacity 
							disabled={loading} 
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
	uploadButton: {

	},
	uploadContainer: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	imagePreviewContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	title: {
		fontSize: wp('4.4%'),
		fontFamily: ApplicationStyles.textMsgFont,
		color: Colors.primary,
		paddingHorizontal: wp('2%'),
		flexWrap: 'wrap'
	},
	image: {
		width: hp('8%'),
		height: hp('8%'),
		resizeMode: 'stretch', 
		borderRadius: 15,
		marginHorizontal: wp('3%')
	},
	spinner: {
		marginHorizontal: wp('8%'),
		marginVertical: 0
	}
});