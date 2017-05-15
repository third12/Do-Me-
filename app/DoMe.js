import React, { Component } from 'react';

import {
  AppRegistry,
  AsyncStorage,
  BackAndroid,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import Home from './Home.js';
import EditTask from './EditTask.js';
import Add from './Add.js';
import Category from './Category.js';

export default class DoMe extends Component {

  constructor(props){
    super(props);
    this.navigator = null;
    this.state = {
      tasks: null,
      categories: JSON.stringify([]),
    }

    this.handleBack = (() => {
      console.log(this.navigator.getCurrentRoutes());
      if (this.navigator && this.navigator.getCurrentRoutes().length > 1){
        this.navigator.pop();
        return true; //avoid closing the app
      }

      return false; //close the app
    }).bind(this)

    this.getTasks = this.getTasks.bind(this);      
    this.editTasks = this.editTasks.bind(this);      
    this.saveTask = this.saveTask.bind(this);
  }

  componentDidMount() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    console.log('lol');
    AsyncStorage.getItem('data').then((value) => {
      if(value){
        this.setState({
          'tasks': value,
        })
      }else{
      console.log('value');
        this.setState({
          'tasks': JSON.stringify([{key:1,task:'lol',datetime:'14/23/2013',priority:'3',category:'Acads',notes:'lol',status:'completed'},{key:2,task:'lole',datetime:'14/23/2013',priority:'3',category:'Acads',notes:'lol',status:'completed'}]),
        })        
        console.log(this.state.tasks);
      }
    });

    AsyncStorage.getItem('categorydata').then((value) => {
      // console.log(value);
      if(value){
        this.setState({
          'categories': value,
        })
      }else{
        this.setState({
          'categories': JSON.stringify([]),
        })        
      }
    });
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
      return <Home navigator={navigator} getTasks={this.getTasks} />
    }
    if(route.name == 'EditTask') {
      return <EditTask navigator={navigator} data={route.data} editTasks={this.editTasks}/>
    }
    if(route.name == 'add') {
      return <Add navigator={navigator} saveTask={this.saveTask}/>
    }
    if(route.name == 'category') {
      return <Category navigator={navigator} setCategory={route.setCategory} />
    }    
  }

  getTasks(){
    return this.state.tasks;
  }

  editTasks(data){
    console.log(data);
  }

  saveTask(task){
    // console.log(task);
    let tasks = this.state.tasks;
    tasks = JSON.parse(tasks);
    latestKey = tasks[tasks.length-1].key;
    task.key = latestKey++;
    tasks.push(task);
    AsyncStorage.setItem('data', JSON.stringify(tasks));
    this.setState({
      tasks:JSON.stringify(tasks),
    });
  }

}

module.exports = DoMe;