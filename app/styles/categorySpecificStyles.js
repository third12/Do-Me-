'use strict'

import {
  StyleSheet,
} from 'react-native';

var styles = StyleSheet.create({
  parent: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },
  
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#D3D3D3',
  },

  leftArrow: {
    flex: 1,
    marginTop: 5,
    marginLeft :5
  },

  top1: {
    margin: 5,
    flex: 1,
    flexDirection: 'row',
  },

  top2: {
    flex: 1,
    flexDirection:'row',
  },

  header1: {
    flex: 1,
  },

  header2: {
    flex: 1,
    alignItems: 'flex-end',
  },

  bottomContainer: {
    flex: 10,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  todayText: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 20,
    marginTop: 5,
    marginRight: 10,
  },

  newExpense: {
    marginTop: 8,
    marginRight: 5,
  },

  today: {
    flex: 1,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor : 'white',
  },

  category: {
    flex: 1,
    alignItems: 'center',    
  },

  calendar: {
    flex: 1,
    alignItems: 'center',    
  },

  expenseForToday: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
    alignItems: 'center',
  },

  TextInputContainer: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 10,
  },

  date: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: 17,
  },

  amount: {
    flex: 1,
    fontWeight: 'bold',
    color: 'black',
    fontSize: 40,
  },

  expenses: {
    flex: 5,
  },

  header3: {
    flex: 0,
    flexDirection: 'row',
    backgroundColor: '#D3D3D3',
  },



  row: {
    margin: 5,
    fontWeight: 'bold',
    fontSize: 15,
    color: 'black',
    backgroundColor: '#D3D3D3',
  },

  foodRow: {
    margin: 5,
    fontSize: 15,
    color: 'black',
    marginLeft: 10
  },

  categoryExpenses: {
    flex: 0,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'black',
  },

  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
  TextInput: {
    borderWidth: 1,
    borderColor: 'black',
    marginLeft: 20,
    marginBottom: 5,
    marginRight: 20,
    height: 35,
    lineHeight: 25,
    color: 'grey',
  },
  CategoryPicker: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 0,
    flexDirection: 'row',    
    marginLeft: 20,
    marginBottom: 5,
    marginRight: 20,
    height: 35
  },
  TextCategory: {
    margin: 4,
    color: 'grey',
  },
  arrow: {
    alignItems: 'flex-end',
  },
  button: {
    marginTop: 5,
    marginLeft: 130,
    marginRight: 130,    
  },
  categories: {
    margin: 5,
    color: 'black',
    fontSize: 15,
  },
});

module.exports = styles;
