import React, { Component } from 'react';

import {
  AppRegistry,
  BackAndroid,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './Home.js';
import EditTask from './EditTask.js';

export default class DoMe extends Component {

  constructor(props){
    super(props);
    this.navigator = null;

    this.handleBack = (() => {
      console.log(this.navigator.getCurrentRoutes());
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
        this.navigator.pop();
        return true; //avoid closing the app
      }

      return false; //close the app
    }).bind(this)
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
  }

  componentWillUnmount() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBack);
  }

  render() {
    return (  
      <Navigator
          initialRoute={{ name: 'Home' }}
          renderScene={this.renderScene.bind(this)}
          ref={navigator => {this.navigator = navigator}}
      />
      );
  }

  renderScene(route, navigator) {
    console.log(route);
    if(route.name == 'Home') {
      return <Home navigator={navigator} />
    }
    if(route.name == 'EditTask') {
      return <EditTask navigator={navigator} />
    }
  }
}

module.exports = DoMe;