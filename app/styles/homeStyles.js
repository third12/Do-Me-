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
    backgroundColor: '#55b7e5',
  },

  top1: {
    flex: 1,
justifyContent:'center',
    flexDirection: 'row',
  },

  top2: {
    flex: 1,
    flexDirection:'row',
  },

  header1: {
    flex:1,
    alignItems: 'center', 
  },
  header2:{
    alignItems: 'flex-start', 
  },
  bottomContainer: {
    flex: 12,
    flexDirection: 'column',
    alignItems: 'stretch',
    backgroundColor: '#FFFFFF',
  },

  addIcon: {
    paddingLeft: 10,
    marginTop: 12,
  },

  homeText: {
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 6,
  },
  backTextWhite: {
    color: '#FFF'
  },
  rowFront: {
    backgroundColor: 'white',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    height: 50,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#DDD',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75
  },
  backRightBtnLeft: {
    backgroundColor: 'blue',
    right: 75
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0
  },
  controls: {
    alignItems: 'center',
    marginBottom: 30
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 5
  },
  switch: {
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: 10,
    width: 100,
  }
  
});

module.exports = styles;
