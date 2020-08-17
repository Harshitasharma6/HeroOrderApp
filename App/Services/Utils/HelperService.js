import axios from 'axios'
import { Config } from 'App/Config'
import { is, curryN, gte } from 'ramda'
import Geolocation from 'react-native-geolocation-service';
import { PermissionsAndroid, Platform, Alert, BackHandler, DeviceEventEmitter, Linking, ToastAndroid } from 'react-native';
import LocationServicesDialogBox from "react-native-android-location-services-dialog-box";
import { Toast } from 'native-base'
import { Colors, ApplicationStyles } from 'App/Theme'
import uuid from 'react-native-uuid';
import DeviceInfo from 'react-native-device-info';
import moment from 'moment';
import Geocoder from 'react-native-geocoding';
import { getDistance, getPreciseDistance } from 'geolib';
import RNFS from 'react-native-fs'
import FileViewer from 'react-native-file-viewer';
import VIForegroundService from '@voximplant/react-native-foreground-service';
global._watchId = '';

var monthMapping = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'June',
	'July',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec'
];


var dayMapping = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday'
];

function findDayMessage() {
	var data = [
		[0, 4, "Night"],
		[5, 12, "Morning"],
		[13, 17, "Afternoon"],
		[18, 24, "Night"]
	],

		hr = new Date().getHours();

	for (var i = 0; i < data.length; i++) {
		if (hr >= data[i][0] && hr <= data[i][1]) {
			return (data[i][2]);
		}
	}
}

function distance(lat1, lon1, lat2, lon2, unit) {
	if ((lat1 == lat2) && (lon1 == lon2)) {
		return 0;
	}
	else {
		var radlat1 = Math.PI * lat1 / 180;
		var radlat2 = Math.PI * lat2 / 180;
		var theta = lon1 - lon2;
		var radtheta = Math.PI * theta / 180;
		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
		if (dist > 1) {
			dist = 1;
		}
		dist = Math.acos(dist);
		dist = dist * 180 / Math.PI;
		dist = dist * 60 * 1.1515;
		if (unit == "K") { dist = dist * 1.609344 }
		if (unit == "N") { dist = dist * 0.8684 }
		return dist;
	}
}


function latLongToAddresh(lat, long) {

	let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat, long}&key=AIzaSyDLSnFH1fAd3shkozvcxiwxQ6AYF--R7vU`

	fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},

	}).then((response) => response.json())
		.then((responseJson) => {
			return responseJson.result
		})
		.catch((error) => {
			console.log(error)
		});

}


function showToast({ message = '', buttonText = 'Okay', duration = 1000, position = "bottom" }) {
	if (Platform.OS == 'android') {
		ToastAndroid.show(
			message,
			ToastAndroid.LONG,
			ToastAndroid.BOTTOM
		);
	}
	else {
		Toast.show({
			text: message,
			buttonText: buttonText,
			duration: duration,
			position: position
		})
	}
}

function isToday(timestamp) {
	var today = new Date();
	var dateParameter = new Date(timestamp);
	return dateParameter.getDate() === today.getDate() && dateParameter.getMonth() === today.getMonth() && dateParameter.getFullYear() === today.getFullYear();
}

function removeArrFromList(arr, toRemove) {
	let myArray = arr;
	for (let i = myArray.length - 1; i >= 0; i--) {
		for (let j = 0; j < toRemove.length; j++) {
			if (myArray[i] && (myArray[i].id === toRemove[j].id)) {
				myArray.splice(i, 1);
			}
		}
	}
	return JSON.stringify(myArray);
}

async function openLocationDialogBox() {
	let isLocationOn = false;
	try {
		isLocationOn = await LocationServicesDialogBox.checkLocationServicesIsEnabled({
			message: `<h4 color=${Colors.primary}>Turn On Location? </h4`,
			style: { // (optional)
				backgroundColor: Colors.white,// (optional)
			},
			ok: "YES",
			cancel: "NO",
			enableHighAccuracy: true, // true => GPS AND NETWORK PROVIDER, false => GPS OR NETWORK PROVIDER
			showDialog: true, // false => Opens the Location access page directly
			openLocationServices: true, // false => Directly catch method is called if location services are turned off
			preventOutSideTouch: false, // true => To prevent the location services window from closing when it is clicked outside
			preventBackClick: false, // true => To prevent the location services popup from closing when it is clicked back button
			providerListener: false // true ==> Trigger locationProviderStatusChange listener when the location state changes
		});
	} catch (error) {
		console.log("not turned on");
		isLocationOn = false;
	}

	return isLocationOn;
}


async function requestLocation() {
	var geolocation;
	if (Platform.OS === 'android') {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					'title': 'Location Permission',
					'message': 'App needs access to your location.',
					buttonPositive: 'OK',
				}
			)
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				geolocation = await getGeolocation();
			}
			else {
				geolocation = 'DENIED';
			}
		} catch (error) {
			
			if (error.code == 2 || error.code == 5) { //Location Provider not present
				const isLocationOn = await openLocationDialogBox();
				if (!isLocationOn) { //
					Alert.alert('Please turn On GPS and try again.');
					geolocation = null;
				} else {
					geolocation = await getGeolocation();
				}
			}

		}
	} else if (Platform.OS === 'ios') {
		geolocation = await getGeolocation();
	}

	return geolocation;
}

function watchLocation({callback}) {
	try {
		_watchId = Geolocation.watchPosition(
			position => {
				const {latitude, longitude} = position.coords;
				callback({ latitude, longitude });

			},
			error => {
				console.log(error.code, error.message);
				return null
			},
			{ enableHighAccuracy: true, forceRequestLocation: true, distanceFilter: 100, interval: 180000 }
		)
	} catch (err) {
		reject(error)
	}
}

function clearWatchLocation() {
	if (_watchId) {
        Geolocation.clearWatch(_watchId);
   	}
}


// AIzaSyDADemQNBA_O-yxrQl9erXaJUdqZqazY_o

async function requestGeocoding(lat, long) {
	var geocoding;

	let url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat, long}&key=AIzaSyDLSnFH1fAd3shkozvcxiwxQ6AYF--R7vU`
	fetch(url, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},

	}).then((response) => response.json())
		.then((responseJson) => {
			return responseJson.result
		})
		.catch((error) => {
			console.log(error)
		});

}


async function requestMultipleStoragePermission() {
	let storagePermission = false;
	if (Platform.OS === 'android') {
		try {
			const granted = await PermissionsAndroid.requestMultiple(
			      [PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
			      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE]
      		);
      		
			if (granted['android.permission.READ_EXTERNAL_STORAGE'] && granted['android.permission.WRITE_EXTERNAL_STORAGE'] === 'granted') {
				storagePermission = true
			} else {
				storagePermission = false
			}
		} catch (err) {
			storagePermission = false
		}
	} else if (Platform.OS === 'ios') {
		storagePermission = true;
	}

	return storagePermission;
}

async function requestStoragePermission() {
	let storagePermission = false;
	if (Platform.OS === 'android') {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
				{
					title: 'Storage Permission',
					message: 'App needs access to your Storage to access and store photos.',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				storagePermission = true
			} else {
				storagePermission = false
			}
		} catch (err) {
			storagePermission = false
		}
	} else if (Platform.OS === 'ios') {
		storagePermission = true;
	}

	return storagePermission;
}


async function requestLocationPermission() {
	let Permission = false;
	if (Platform.OS === 'android') {
		try {
			const granted = await PermissionsAndroid.request(
				PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
				{
					title: 'Storage Permission',
					message: 'App needs access to your Location.',
					buttonNegative: 'Cancel',
					buttonPositive: 'OK',
				},
			);
			if (granted === PermissionsAndroid.RESULTS.GRANTED) {
				Permission = true
			} else {
				Permission = false
			}
		} catch (err) {
			Permission = false
		}
	} else if (Platform.OS === 'ios') {
		Permission = true;
	}

	return Permission;
}

function getGeolocation() {
	try {
		return new Promise((resolve, reject) => {
			Geolocation.getCurrentPosition(
				position => {
					const location = position;
					resolve({ latitude: location.coords.latitude, longitude: location.coords.longitude });
				},
				error => {
					if (Platform.OS === 'ios') {
						Alert.alert("Cant get Location, Make sure GPS is on.");
						reject(error)
					} else if (Platform.OS === 'android') {
						reject(error);
					}
					console.log(error.code, error.message);
				},
				{ enableHighAccuracy: true, timeout: 15000, maximumAge: 10000, forceRequestLocation: true }
			)
		});
	} catch (err) {
		reject(error)
	}
}


const callNumber = phone => {
	let phoneNumber = phone;
	if (Platform.OS !== 'android') {
		phoneNumber = `telprompt:${phone}`;
	}
	else {
		phoneNumber = `tel:${phone}`;
	}

	Linking.canOpenURL(phoneNumber)
		.then(supported => {
			if (!supported) {
				Alert.alert('Phone number is not available');
			} else {
				return Linking.openURL(phoneNumber);
			}
		})
		.catch(err => console.log(err));
};


const showDirectionInGoogleMaps = (lat, lng, searchLabel) => {

	const scheme = Platform.select({ ios: 'maps:0,0?q=', android: 'geo:0,0?q=' });
	const latLng = `${lat},${lng}`;
	const label = searchLabel || 'Direction';
	const url = Platform.select({
		ios: `${scheme}${label}@${latLng}`,
		android: `${scheme}${latLng}(${label})`
	});

	Linking.openURL(url);
}

function showElapsedTime(timestamp) {
	try {
		if (timestamp && typeof (timestamp != 'number')) {
			const since = timestamp,
				elapsed = (new Date().getTime() - since) / 1000;

			if (elapsed >= 0) {
				let hours = Math.floor(elapsed / 3600 % 24);
				let minutes = Math.floor(elapsed / 60 % 60);
				let seconds = Math.floor(elapsed % 60);

				hours = hours < 10 ? `0${hours}` : hours;
				minutes = minutes < 10 ? `0${minutes}` : minutes;
				seconds = seconds < 10 ? `0${seconds}` : seconds;
				return `${hours} : ${minutes} : ${seconds}`;
			} else {
				return ('00 : 00 : 00')
			}
		}
	} catch (error) {
		return ('00 : 00 : 00')
	}
}

function convertToSearchableListFormat(params) {
	let list = params.list;
	let id_key = params.id_key;
	let label_key = params.label_key;

	list = list.map((obj) => {
		return ({
			id: obj[id_key],
			name: obj[label_key]
		})
	});

	return list;
}


function convertArrayToSearchableListFormat(array) {
	let list = array;
	list = list.map((value) => {
		return ({
			id: value,
			name: value
		})
	});

	return list;
}

function getAreaName(params) {
	let allAreas = params.areas;
	let selectedId = params.id;
	let selectedAreaName = '';
	allAreas.map((area) => {
		if (area.id == selectedId) {
			selectedAreaName = area.name
		}
	});

	return selectedAreaName;
}

function getNameFromSFID(list, sfid, field = '') {
	let name = '';
	if (sfid) {
		if (field !== '')
			list.map((item) => {
				if (item.sfid === sfid) {
					name = item[field]
				}
			});
		else {
			list.map((item) => {
				if (item.id === sfid) {
					name = item.name
				}
			});
		}
	}
	if (name === '') {
		return 'None';
	}
	return name;
}

function getRemovedObjArrList(list, toRemove, field) {

	let index = [];
	function findIndexInData(data, property, value) {
		for (let i = 0, l = data.length; i < l; i++) {
			if (data[i][property] === value) {
				return i;
			}
		}
		return -1;
	}

	for (let i in toRemove) {
		let value = findIndexInData(list, field, toRemove[i][field]);
		if (value !== -1) {
			index.push(value);
		}
	}

	for (let i = 0; i < index.length; i++) {
		if (i === 0) {
			list.splice(index[i], 1);
		} else {
			index[i] = index[i] - 1;
			list.splice(index[i], 1);
		}
	}

	return list;
}

function convertArrToRNPickerObj(list, field) {
	let transformList = [];
	list.map((item, id) => {
		return transformList.push({ id: item.sfid || id, name: item[`${field}`] })
	});
	return transformList;
}

function getCompetitorName(params) {
	let data = params.data;
	let selectedId = params.id;
	let selectedName = '';
	data.map((obj) => {
		if (obj.id == selectedId) {
			selectedName = obj.name
		}
	});

	return selectedName;
}

function currencyValue(value) {
	if (!value) return '₹ ';
	return '₹ ' + value;
}

function dateReadableFormat(timestamp) {
	if (!timestamp) return '';
	let dateObj = new Date(timestamp);
	let date = dateObj.getDate();
	let month = dateObj.getMonth() + 1;
	let year = dateObj.getFullYear();
	date = date < 10 ? ('0' + date) : date;
	month = month < 10 ? ('0' + month) : month;
	return `${date}/${month}/${year}`;
}

function dateReadableFormatWithHyphen(timestamp) {
	let dateObj = timestamp ? new Date(timestamp) : new Date();
	let date = dateObj.getDate();
	let month = dateObj.getMonth() + 1;
	let year = dateObj.getFullYear();
	date = date < 10 ? ('0' + date) : date;
	month = month < 10 ? ('0' + month) : month;
	return `${year}-${month}-${date}`;
}

function searchTextListFilter(list, field, searchText, field2) {
	let text = searchText.toLowerCase()
	if (!text || text === '') {
		return list;
	}

	let filteredList = [];

	if (field2) {
		filteredList = list.filter((item) => {
			if (item[field] && item[field][field2]) {
				return item[field][field2].toLowerCase().match(text)
			} else {
				return false
			}
		})
	} else {
		filteredList = list.filter((item) => {
			if (item[field]) {
				return item[field].toLowerCase().match(text)
			} else {
				return false
			}
		});
	}


	if (!Array.isArray(filteredList) && !filteredList.length) {
		return []
	}

	return filteredList;
}

function multiFieldSearchText(list, searchText) {
	searchText = String(searchText).toLowerCase();
	return list.filter(o =>
		Object.entries(o).some(entry =>
			String(entry[1]).toLowerCase().includes(searchText)
		)
	);
}


function searchArrayListFilter(list, searchArray, field) {
	if (!searchArray) return list;

	if (!searchArray.length) return list;


	let filteredList = list.filter((item) => {
		return (item[field] && searchArray.indexOf(item[field]) > -1)
	})

	if (!Array.isArray(filteredList) && !filteredList.length) {
		return []
	}

	return filteredList;
}

function sortAsc(list, field) {
	let filteredList = list;
	filteredList.sort((a, b) => (a[field] > b[field]) ? 1 : ((b[field] > a[field]) ? -1 : 0));
	return filteredList;
}

function sortDesc(list, field) {
	let filteredList = list;
	filteredList.sort((a, b) => (a[field] < b[field]) ? 1 : ((b[field] < a[field]) ? -1 : 0));
	return filteredList;
}

function sortListFilter(list, field, sortType) {
	let filteredList = list;

	if (!filteredList.length) {
		return [];
	}

	if (!field || !sortType) {
		return filteredList;
	}

	filteredList = sortType == 'ASC' ? sortAsc(filteredList, field) : sortDesc(filteredList, field);
	return filteredList;
}

const decorateWithLocalId = payload => ({
	local_id: uuid.v1(),
	...payload,
})


function getCurrentTimestamp() {
	return (new Date()).getTime();
}

function getPreviousNDayTimestamp(days, timestamp) {
	if (!timestamp) {
		timestamp = getCurrentTimestamp();
	}
	return (timestamp - days * 24 * 60 * 60 * 1000);
}

function getNextNDayTimestamp(days, timestamp) {
	if (!timestamp) {
		timestamp = getCurrentTimestamp();
	}
	return (timestamp + days * 24 * 60 * 60 * 1000);
}

function getPrevious7DayTimestamp() {
	return (getCurrentTimestamp() - 7 * 24 * 60 * 60 * 1000);
}

function getNext7DayTimestamp() {
	return (getCurrentTimestamp() + 7 * 24 * 60 * 60 * 1000);
}

function removeField(obj, fieldName) {
	delete obj[fieldName];
	return obj;
}

function getMonthMappingName(index) {
	return monthMapping[index];
}

function getMonthName(date) {
	let dateObj = new Date();

	if (date) {
		dateObj = new Date(date)
	}

	return monthMapping[dateObj.getMonth()];
}

function getPreviousMonth(month) { //month index, retuuns Previous Month name
	let currentMonth = month;
	if (currentMonth == 0) {
		currentMonth = monthMapping.length - 1
	} else {
		currentMonth = currentMonth - 1
	}

	return currentMonth

}

function getNextMonth(month) { //month index, retuuns Next Month name
	let currentMonth = month;
	if (currentMonth == 11) {
		currentMonth = 0
	} else {
		currentMonth = currentMonth + 1
	}

	return currentMonth
}

function getDeviceId() {
	let uniqueId = DeviceInfo.getUniqueId();
	return uniqueId;
}

function findMatchingKeyValueInList(list, matchingKey, matchingValue, matchingValueKey) {
	let result = [];
	result = list.filter((obj) => obj[matchingKey] == matchingValue);
	if (result && result[0]) {
		return result[0][matchingValueKey]
	}
	return ''
}

function searchKeyValueInList(list, matchingKey, matchingValue) {
	let result = [];
	result = list.filter((obj) => obj[matchingKey] == matchingValue);
	
	return result
}

function getMonthStartAndEndDateTimestamp(month = (new Date()).getMonth(), year = (new Date()).getFullYear()) {
	var firstDay = null;
	var lastDay = null;
	firstDay = new Date(year, month, 1);
	lastDay = new Date(year, month + 1, 0);
	return ([firstDay.getTime(), lastDay.getTime()]);
}

function getFirstName(name) {
	return name.split(' ').slice(0, 1).join(' ');
}

function getLastName(name) {
	return name.split(' ').slice(1).join(' ');
}

function getNearbyList(params) {
	let distanceDiff = 0;
	let filteredList = [];
	const {
		currentLocation, 
		list, 
		maxDistanceInMeters, 
		latitudeField, 
		longitudeField
	} = params;

	if (!list || !list.length) {
		return [];
	}

	for (const obj of list) {
    	if (!isNullOrUndefined(obj[latitudeField]) && !isNullOrUndefined(obj[longitudeField])) {
			distanceDiff =  getDistanceBetweenTwoLocations(currentLocation, {latitude: obj[latitudeField], longitude: obj[longitudeField]});

			distanceDiff <= maxDistanceInMeters ? filteredList.push(obj) :  ''; 
		}
  	}

  	
	return filteredList;
}

function showAlert({ heading, message }) {
	return new Promise((resolve, reject) => {
		Alert.alert(
			heading,
			message,
			[
				{
					text: 'Cancel',
					onPress: () => reject('canceled'),
					style: 'cancel',
				},
				{ text: 'Yes', onPress: () => resolve('confirmed') },
			],
			{ cancelable: false }
		);
	})
}

function isNullOrUndefined(value) {
	return (value == null || value == undefined || value == '');
}

// eg: locObj1  = { latitude: 20.0504188, longitude: 64.4139099 },
// eg: locObj2  = { latitude: 51.528308, longitude: -0.3817765 }
//  return distance in meters
function getDistanceBetweenTwoLocations(locObj1, locObj2) {
	locObj1.latitude = Number(locObj1.latitude)
	locObj1.longitude = Number(locObj1.longitude)
	locObj2.latitude = Number(locObj2.latitude)
	locObj2.longitude = Number(locObj2.longitude)

	let distance = getPreciseDistance(locObj1, locObj2);
	return distance;
}


const datesAreOnSameDay = (first, second) => {
	first = new Date(Number(first));
	second = new Date(Number(second));
	return (
		first.getFullYear() === second.getFullYear() &&
		first.getMonth() === second.getMonth() &&
		first.getDate() === second.getDate()
	);
}

const getVisitsDisplayDate = (timestamp) => {
	if (!timestamp) return '';
	let dateObj = new Date(timestamp);
	let date = dateObj.getDate();
	let month = dateObj.getMonth();
	date = date < 10 ? ('0' + date) : date;
	return (isToday(timestamp) ? `Today (${date} ${monthMapping[month]})` : `(${date} ${monthMapping[month]})`);
}

const getDashboardDisplayDate = (start, end) => {
	return (getDisplayDate(start) + '-' + getDisplayDate(end))
}

const getDisplayDate = (timestamp) => {
	if (!timestamp) return '';
	let dateObj = new Date(timestamp);
	let date = dateObj.getDate();
	let month = dateObj.getMonth();
	date = date < 10 ? ('0' + date) : date;
	return (`${date} ${monthMapping[month]}`);
}

const getPreviousDayTimestamp = (timestamp) => {
	return (timestamp - 1 * 24 * 60 * 60 * 1000);
}

const getNextDayTimestamp = (timestamp) => {
	return (timestamp + 1 * 24 * 60 * 60 * 1000);
}

const convertMomentObjectToUnix = (momentObj) => {
	return (momentObj.unix() * 1000 + 5.5 * 60 * 60 * 1000);
}

const convertMomentDateToTimestamp = (date) => {
	return moment(date).valueOf();
}

function writeFile(path, data, extension) {
	if (extension == 'jpg' || extension == 'png') {
		RNFS.writeFile(path, data, 'base64')
		  	.then((success) => {
		    	viewFile(path)
		  	})
		  	.catch((err) => {
		});
	}else if(extension == 'docx' || extension == 'doc'){
		RNFS.writeFile(path, data, 'utf8')
            .then((success)=>{
            	viewFile(path)
        });
	}else {
		RNFS.writeFile(path, data, 'utf8')
		  	.then((success) => {
		    	viewFile(path)
		  	})
		  	.catch((err) => {
		});
	}
}

function deleteFile(path) {
	RNFS.unlink(path)
	  .then(() => {
	    console.log('FILE DELETED');
	  })
	  // `unlink` will throw an error, if the item to unlink does not exist
	  .catch((err) => {
	    console.log(err.message);
	});
}


function removeMillisecondsTime(timestring) {
	let arr = [];
	if (!timestring) {
		return '';
	}

	arr = timestring.split('.');
	return arr[0]
}


function viewFile(path) {
	FileViewer.open(path)
}

function generateFilePath(filename, extension) {
	return RNFS.DocumentDirectoryPath + `/${filename}.${extension}`;
}


function numberWithCommas(x) {
	x = Number(x);
	if (x % 1){ //number is a decimal
		return x
	}
	
    x=x.toString();
    var lastThree = x.substring(x.length-3);
    var otherNumbers = x.substring(0,x.length-3);
    if(otherNumbers != '')
        lastThree = ',' + lastThree;
    var res = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + lastThree;
    return res
}


function checkAppVersion(latest_version) {
	if (!latest_version) {
		return
	}

	if (Platform.OS == 'android'){
		let app_version =  DeviceInfo.getVersion() + '';
		if (app_version == latest_version) {
			return
		}else {
			showAppUpdatePromptAndroid();
		}
	}
}


function showAppUpdatePromptAndroid(latest_version) {
	Alert.alert(
      "New Version Available",
      "Please, update app to new version to continue",
      [
        {
          text: "No, thanks",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "Update", onPress: () => Linking.openURL('https://play.google.com/store/apps/details?id=com.heroelectric')}
      ],
      { cancelable: false }
    );
}

function removeFieldsAndDateReadableFormat(dateString) {
	if (!dateString) { 
		return ''
	}

	let updatedDateString = dateString.split('T');
	updatedDateString = updatedDateString[0];
	return updatedDateString;
}

function findDayReadableFormat(dateString) {
	if (!dateString) { 
		return ''
	}

	let updatedDateString = dateString.split('T');
	updatedDateString = updatedDateString[0];

	let dateObj = new Date(updatedDateString);

	let day = dayMapping[dateObj.getDay()];

	return day;
}


function removeFieldsTimeReadableFormat(dateString) {
	if (!dateString) { 
		return
	}
	
	let updatedDateString = dateString.split('T');
	updatedDateString = updatedDateString[1];
	updatedDateString = updatedDateString.split('.');
	updatedDateString = updatedDateString[0]
	return updatedDateString;
}


function hasNotch() {
	return DeviceInfo.hasNotch();
}

async function fileExists(path) {
	let exists = false
	if (await RNFS.exists(path)){
    	exists = true
	}

	return exists
}


const getAvatarTextAndBgColorForVisitType = text => {
  	var res = text.substring(0, 2);
	let mapping = [
	{
		text: res,
		bgColor: Colors.lightBg1
	},
	 {
		text: res,
		bgColor: Colors.lightBg2
	},
	{
		text: res,
		bgColor: Colors.lightBg3
	},
	{
		text: res,
		bgColor: Colors.lightBg4
	}];

	let index =  Math.floor(Math.random() * Math.floor(4));
	return mapping[index];
}


async function startForegroundService() {
	if (Platform.OS !== 'android') {
        console.log('Only Android platform is supported');
        return;
    }

	if (Platform.Version >= 26) {
        const channelConfig = {
            id: 'ForegroundServiceChannel',
            name: 'Notification Channel',
            description: 'Notification Channel for Foreground Service',
            enableVibration: false,
            importance: 2
        };
        await VIForegroundService.createNotificationChannel(channelConfig);
    }


    const notificationConfig = {
        id: 3456,
        title: 'Foreground Service',
        text: 'Foreground service is running',
        icon: 'ic_notification',
        priority: 0
    };
    
    if (Platform.Version >= 26) {
        notificationConfig.channelId = 'ForegroundServiceChannel';
    }

    try {
        await VIForegroundService.startService(notificationConfig);
    } catch (e) {
        console.error(e);
    }
}





export const HelperService = {
	callNumber,
	convertArrayToSearchableListFormat,
	convertArrToRNPickerObj,
	convertMomentDateToTimestamp,
	convertMomentObjectToUnix,
	convertToSearchableListFormat,
	currencyValue,
	dateReadableFormat,
	dateReadableFormatWithHyphen,
	datesAreOnSameDay,
	decorateWithLocalId,
	deleteFile,
	distance,
	fileExists,
	findDayMessage,
	findMatchingKeyValueInList,
	generateFilePath,
	getAreaName,
	getCompetitorName,
	getCurrentTimestamp,
	getDashboardDisplayDate,
	getDeviceId,
	getDisplayDate,
	getDistanceBetweenTwoLocations,
	getFirstName,
	getGeolocation,
	getLastName,
	getMonthMappingName,
	getMonthName,
	getMonthStartAndEndDateTimestamp,
	getNameFromSFID,
	getNearbyList,
	getNext7DayTimestamp,
	getNextDayTimestamp,
	getNextMonth,
	getNextNDayTimestamp,
	getPrevious7DayTimestamp,
	getPreviousDayTimestamp,
	getPreviousMonth,
	getPreviousNDayTimestamp,
	getRemovedObjArrList,
	getVisitsDisplayDate,
	hasNotch,
	isNullOrUndefined,
	isToday,
	latLongToAddresh,
	multiFieldSearchText,
	numberWithCommas,
	openLocationDialogBox,
	removeArrFromList,
	removeField,
	removeMillisecondsTime,
	requestGeocoding,
	requestLocation,
	requestMultipleStoragePermission,
	requestStoragePermission,
	requestLocationPermission,
	searchArrayListFilter,
	searchKeyValueInList,
	searchTextListFilter,
	showAlert,
	showDirectionInGoogleMaps,
	showElapsedTime,
	showToast,
	sortAsc,
	sortDesc,
	sortListFilter,
	viewFile,
	writeFile,
	checkAppVersion,
	showAppUpdatePromptAndroid,
	watchLocation,
	clearWatchLocation,
	getAvatarTextAndBgColorForVisitType,
	startForegroundService,
	removeFieldsAndDateReadableFormat,
	removeFieldsTimeReadableFormat,
	findDayReadableFormat
}