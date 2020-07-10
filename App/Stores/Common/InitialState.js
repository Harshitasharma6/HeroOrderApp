export const INITIAL_STATE = {
	isNetworkBannerVisible: false,
	currentScreen: 'SplashScreen',
	absentReasons: ['Planned', 'Ad-hoc'],
	categoryRatingMapping: {
		'A': 5,
		'B': 4,
		'C': 3
	},
	recurringMapping: [
		{ id: 'Monday', name: 'Every Monday' },
		{ id: 'Tuesday', name: 'Every Tuesday' },
		{ id: 'Wednesday', name: 'Every Wednesday' },
		{ id: 'Thursday', name: 'Every Thursday' },
		{ id: 'Friday', name: 'Every Friday' },
		{ id: 'Saturday', name: 'Every Saturday' }
	],
	genericActionModal: {
		visible: false,
		content: [],
		heading: '',
		bodyFlexHeight: '',
		disable: false
	}
}
