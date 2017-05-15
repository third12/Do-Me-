import React, { Component } from 'react';

import{
	AppRegistry,
	StyleSheet,
	ListView,
	Text,
	View,
	Navigator,
	Switch,
	Platform,
	AsyncStorage,
	TouchableOpacity,
	TouchableHighlight,
	TextInput
}	from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/homeStyles.js';
import addStyle from './styles/addStyles.js';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Button, ButtonGroup } from 'react-native-elements';

export default class Add extends Component{
	navigate(routeName){
		this.props.navigator.push({
			name: routeName,
			setCategory: this.setCategory,
		});
	}
	constructor(props){
		super(props);
		this.state = {
			selectedIndex: 0,
			chosenCategory: 'Academics',
			doMe: 'Do Me!',
			text: ' ',
			height: 0,
			dateSelected: ' ',
			date: moment().format("YYYY-MM-DD HH:mm"),
			falseSwitchIsOn: false,	
			dateDisabled: true,
			buttonDisabled: true,
		}
		this.switchChange = this.switchChange.bind(this);
		this.updateIndex = this.updateIndex.bind(this);
		this.setCategory = this.setCategory.bind(this);
		this.setText = this.setText.bind(this);
		this.addTask = this.addTask.bind(this);
		this.setDate = this.setDate.bind(this);
	}

	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
		console.log(selectedIndex);
	}

	switchChange(value){
		this.setState({falseSwitchIsOn:value});
		if(value == true){
			this.setState({dateSelected: this.state.date});			
			this.setState({dateDisabled: false});
		}
		else{
			this.setState({dateSelected: ' '});	
			this.setState({dateDisabled: true});
		}
	}

	setCategory(item){
		this.setState({chosenCategory: item});
	}

	setText(text){
		if(text.length == 0){
			this.setState({buttonDisabled: true});
		}
		else{
			this.setState({doMe: text});
			this.setState({buttonDisabled: false});
		}
	}

	setDate(date){
		this.setState({date: date});
		this.setState({dateSelected: date});
	}

	addTask(){
		task = {
			key: 0,
			task: this.state.doMe,
			category: this.state.chosenCategory,
			dateTime: this.state.dateSelected,
			priority: this.state.selectedIndex,
			notes: this.state.text,
			status: "Incomplete",
		}
		this.props.saveTask(task);
		this.props.navigator.pop();
	}

	render(){
		const buttons = ['!', '!!', '!!!'];
		const { selectedIndex } = this.state;
		return(
			<View style={styles.parent}>
				<View style={styles.topContainer}>
			            <View style={styles.top1}>
						<View style={styles.header2}>
							<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
								<View style={styles.addIcon} >
									<Icon name="chevron-left" size={20} color="white" />
								</View>
							</TouchableOpacity>              
						</View>
				            <View style={addStyle.header1}><Text style={styles.homeText}> DETAILS</Text></View>
			            </View>					
				</View>
				<View style={styles.bottomContainer} >
					<View style={addStyle.TextInputContainer}>
						<TextInput
							underlineColorAndroid="transparent"
							onChangeText={(doMe) => this.setText(doMe)}
							placeholder="Do Me!"
							style={addStyle.TextInput} />	
						<TouchableOpacity onPress={this.navigate.bind(this, "category")}>
							<View style={addStyle.CategoryPicker}>
								<View style={addStyle.header1}>
									 <Text style={addStyle.TextCategory}>{this.state.chosenCategory}</Text> 
								</View>
								<View style={styles.header2}>
										<Text style={addStyle.TextCategory}>
											<Icon style={addStyle.rightArrow} name="chevron-right" size={20} color='black'/>
										</Text>
								</View>
							</View>
						</TouchableOpacity>
						<View style={addStyle.dateTimeContainer}>
							<View style={addStyle.switchContainer}>
							<Text style={addStyle.dateText}>Date and Time</Text>
							<TouchableHighlight onPress={this.switchChange}>
						        	<Switch
						          		onValueChange={(value) => this.switchChange(value)}
						          		value={this.state.falseSwitchIsOn} />
					          	</TouchableHighlight>
					          	</View>
					          	<View style={addStyle.datePicker}>
								<DatePicker
										disabled={this.state.dateDisabled}
										style={{width: 150}}
										date={this.state.date}
										mode="datetime"
										placeholder="select date"
										showIcon= {false}
										format="YYYY-MM-DD HH:mm"
										minDate={moment().format("YYYY-MM-DD")}
										maxDate={moment().endOf('month').format('YYYY-MM-DD')}
										confirmBtnText="Confirm"
										cancelBtnText="Cancel"
										customStyles={{
										dateInput: {
										}
										// ... You can check the source to find the other keys. 
										}}
										onDateChange = {(date) => this.setDate(date)} />
							</View>
						</View>
						<View style={addStyle.priorityContainer}>
							<View style={addStyle.priorityText}>
								<Text>Priority</Text>
							</View>
							<View style={addStyle.buttonGroupContainer}>
							    	<ButtonGroup
								      onPress={this.updateIndex}
								      selectedIndex={selectedIndex}
								      buttons={buttons}
								      selectedBackgroundColor =  '#55b7e5'
								      buttonStyle={{borderLeftWidth: 1, borderColor: 'lightgrey'}}	
								      containerStyle={{height: 20, borderColor: 'lightgrey'}} />																			 			 						 
							</View>
						</View>			
					</View>
					<View style={addStyle.noteContainer}>	
						<TextInput
							multiline={true}
							underlineColorAndroid="transparent"
							placeholder= "Description"
							onChange={(event) => {
								this.setState({
								text: event.nativeEvent.text,
								height: event.nativeEvent.contentSize.height,
								});
							}}							
							style={[addStyle.Description, {height: Math.max(35, this.state.height)}]} />							
					</View>																
					<Button
						disabled={this.state.buttonDisabled}
						onPress = {this.addTask}
						iconRight
						backgroundColor = '#55b7e5'
						borderRadius = {5}
						icon={{name: 'plus', type: 'font-awesome'}}
						buttonStyle = {{marginBottom: 10}}
						fontSize = {25}
						title='DO ME!' />
				</View>
			</View>
		);
	}
}

module.exports = Add;