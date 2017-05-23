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
import _ from 'underscore';
import moment from 'moment';
import PushNotification from 'react-native-push-notification'

PushNotification.configure({

    // (required) Called when a remote or local notification is opened or received
    onNotification: function(notification) {
        console.log( 'NOTIFICATION:', notification );
    },

});


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
    this.editTask = this.editTask.bind(this);      
    this.saveTask = this.saveTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  componentDidMount() {
    // AsyncStorage.clear();
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
          'tasks': JSON.stringify([{key:1,task:'lol',dateTime:'2017-05-18 02:51',priority:'1',category:'Academics',notes:'lol',checked:false},{key:2,task:'lole',dateTime:'2017-05-15 02:51',priority:'2',category:'Academics',notes:'lol',checked:true}]),
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
      return <Home navigator={navigator} getTasks={this.getTasks} deleteTask={this.deleteTask} editTask={this.editTask}/>
    }
    if(route.name == 'EditTask') {
      return <EditTask navigator={navigator} data={route.data} editTask={this.editTask}/>
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

  editTask(task){
    let tasks = this.state.tasks;
    tasks = JSON.parse(tasks);
    var match = _.findWhere(tasks, {key:task.key});
    if (match) {
      match.task = task.task;
      match.category = task.category;
      match.dateTime = task.dateTime;
      match.priority = task.priority;
      match.checked = task.checked;

      if(task.dateTime!=undefined){
        PushNotification.localNotificationSchedule({
          id: task.key,
          message: task.task,
          date: moment(task.dateTime,'YYYY-MM-DD HH:mm').toDate(),
        });
      }
    }
    AsyncStorage.setItem('data', JSON.stringify(tasks));
    this.setState({
      tasks:JSON.stringify(tasks),
    });    
  }

  saveTask(task){
    // console.log(task);
    let tasks = this.state.tasks;
    tasks = JSON.parse(tasks);
    latestKey = tasks[tasks.length-1].key;
    task.key = latestKey+1;
    tasks.push(task);

    // date: new Date(Date.now() + (5 * 1000))
    if(task.dateTime!=undefined){
      PushNotification.localNotificationSchedule({
        id: task.key.toString(),
        userInfo: {
          id: task.key.toString(),
        },
        message: task.task,
        date: moment(task.dateTime,'YYYY-MM-DD HH:mm').toDate(),
      });
    }

    AsyncStorage.setItem('data', JSON.stringify(tasks));
    this.setState({
      tasks:JSON.stringify(tasks),
    });
  }

  deleteTask(key){
    console.log(key);
    let tasks = this.state.tasks;
    tasks = JSON.parse(tasks);
    tasks = _.without(tasks, _.findWhere(tasks, {
      key: key
    }));
    // console.log(tasks);

    PushNotification.cancelLocalNotifications({id: key.toString()});

    AsyncStorage.setItem('data', JSON.stringify(tasks));
    this.setState({
      tasks:JSON.stringify(tasks),
    });    
  }

}

module.exports = DoMe;