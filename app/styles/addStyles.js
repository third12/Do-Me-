'use strict'

import {
  StyleSheet,
} from 'react-native';

var addStyle = StyleSheet.create({
	TextInputContainer: {
		flex: 5,
		flexDirection: 'column',
		marginTop: 10,
		marginBottom: 10,
	},	
	TextInput: {
		borderWidth: 1,
		borderColor: '#55b7e5',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 10,
		height: 35,
		color: 'grey',
	},
	Description: {
		borderWidth: 1,
		borderColor: '#55b7e5',
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 10,
		height: 35,
		color: 'grey',		
	},
	CategoryPicker: {
		borderWidth: 1,
		borderColor: '#55b7e5',
		flex: 0,
		flexDirection: 'row',    
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10,
		marginBottom: 20,		
		height: 35
	},
	TextCategory: {
		marginTop: 7,
		margin: 4,
		color: 'grey',
	},
	rightArrow: {
		color: '#55b7e5',
	},
	priorityContainer: {
		marginTop: 20,
		flex: 1,
		flexDirection: 'row',
	},
	priorityText: {
		marginLeft: 15,
		marginTop: 7,
		flex: 2,
	},
	buttonGroupContainer: {
		flex: 2,
	},
	noteContainer: {
		flex: 6,
	},
	header1: {
		flex: 1,
		alignItems: 'flex-start',
	},
	dateTimeContainer: {
		flex: 1,
		flexDirection: 'column',
	},
	switchContainer: {
		flex: 2,
		alignItems: 'flex-start',
		marginLeft: 10,
	},
	dateText: {
		marginLeft: 5,
	},
	datePicker: {
		flex: 2,
		alignItems: 'flex-end',
		marginBottom: 25,
		marginRight: 10,
	},
	categories: {
		margin: 5,
		color: 'black',
		fontSize: 15,		
	},
	categoryExpenses: {
		flex: 0,
		flexDirection: 'row',
		borderBottomWidth: 1,
		borderBottomColor: '#55b7e5',
	},	
});

module.exports = addStyle;
