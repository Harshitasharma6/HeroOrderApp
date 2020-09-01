import React from 'react';
import { StyleSheet, Text, View, Button, Image, Alert, TouchableOpacity } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import { HelperService } from 'App/Services/Utils/HelperService'
import {Spinner } from 'native-base';
import {Colors} from 'App/Theme'
export default class App extends React.Component {
	constructor(props) {
		super(props);
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

		if (permission) {
			ImagePicker.showImagePicker(options, (response) => {
				if (response.didCancel) {
				} else if (response.error) {
					
				} else if (response.customButton) {
					alert(response.customButton);
				} else {
					const source = { uri: response.uri };
					this.props.onImageSuccess({ image: ('data:image/jpeg;base64,' + response.data) });
				}
			});
		} else {
			Alert.alert(
				"Storage permission Denied.",
				'If you have denied permanently then Go "App Permissions" and Turn on "Storage" Permission for Vikas.'
			);
		}
	};

	render() {
		const {
			image,
			children,
			loading
		} = this.props;
		let imageNode = (
			<View style={{ borderWidth: 1, borderColor:  '#dddddd', borderRadius: 15}}>
			<Image
				source={{
					uri: image //'data:image/jpeg;base64,' + this.state.filePath.data,
				}}
				style={{ width: 60, height: 60, resizeMode: 'stretch', borderRadius: 15, borderWidth: 1, borderColor:  '#000000'}}
			/>
			</View>
		);
		if (!image) {
			imageNode = [];
		}

		if(loading) {
			imageNode = <Spinner color={Colors.primary} />
		}
		return (
			<View>
				<View style={styles.container}>
					<View>
						<TouchableOpacity disabled={loading} transparent onPress={!this.props.enable ? () => this.chooseFile() : () => { }}>
							{children}
						</TouchableOpacity>
					</View>
					<View>
						{imageNode}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'flex-start',
		width: '100%',
	},
});