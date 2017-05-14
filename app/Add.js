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

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import CheckBox from 'react-native-check-box'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/homeStyles.js';
import addStyle from './styles/addStyles.js';
import DatePicker from 'react-native-datepicker'
import moment from 'moment';
import { Button, ButtonGroup } from 'react-native-elements';

export default class Add extends Component{
	navigate(routeName){
		this.props.navigator.push({
			name: routeName
		});
	}
	constructor(props){
		super(props);
		this.state = {
			selectedIndex: 0,
			chosenCategory: 'Category',
			chosenDate: 'Date',
			note: ' ',
			doMe: 'Do Me!',
			text: 'Description', height: 0,
			date: moment().format("YYYY-MM-DD HH:mm"),
			falseSwitchIsOn: false,	
			dateDisabled: true,
		}
		this.switchChange = this.switchChange.bind(this);
		this.updateIndex = this.updateIndex.bind(this);	
	}
	updateIndex (selectedIndex) {
		this.setState({selectedIndex})
	}
	switchChange(value){
		this.setState({falseSwitchIsOn:value});
		if(value == true){
			this.setState({dateDisabled: false});
		}
		else{
			this.setState({dateDisabled: true});
		}
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
							onChangeText={(doMe) => this.setState({doMe})}
							value={this.state.doMe}
							style={addStyle.TextInput} />	
						<TouchableOpacity onPress={this.navigate.bind(this, "chooseCategory")}>
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
										onDateChange={(date) => {this.setState({date: date})}} />
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
							value={this.state.text}
							onChange={(event) => {
								this.setState({
								text: event.nativeEvent.text,
								height: event.nativeEvent.contentSize.height,
								});
							}}							
							style={[addStyle.Description, {height: Math.max(35, this.state.height)}]} />							
					</View>																
					<Button
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