'use strict'

import {
  StyleSheet,
} from 'react-native';

var addStyle = StyleSheet.create({
	TextInputContainer: {
		flex: 1,
		flexDirection: 'column',
		marginTop: 10,
		marginBottom: 10,
	},	
	TextInput: {
		borderWidth: 1,
		borderColor: 'black',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 10,
		height: 35,
		lineHeight: 25,
		color: 'grey',
	},
	CategoryPicker: {
		borderWidth: 1,
		borderColor: 'black',
		flex: 0,
		flexDirection: 'row',    
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 10,		
		height: 35
	},
	TextCategory: {
		margin: 4,
		color: 'grey',
	},
	rightArrow: {
		color: '#55b7e5',
	},
});

module.exports = addStyle;
