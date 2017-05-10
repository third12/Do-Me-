import React, { Component } from 'react';
import styles from './styles/todaystyles.js';
import {
  Text,
  StyleSheet,
  View,
  Navigator,
  Picker,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import moment from 'moment';

export default class EditTask extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName,
		});
	}	
	constructor(props){
		super(props);
		this.state = {
			pricePlaceholder: 'Price',
			descriptionPlaceholder: 'Description',
			chosenCategory: 'Category',
			data: [],			
		}	
		this.setCategory = this.setCategory.bind(this);
		this.onButtonPress = this.onButtonPress.bind(this);

	}

	setCategory(item){
		this.setState({chosenCategory: item});
	}

	componentDidMount(){
		// AsyncStorage.clear();
	}

	onButtonPress(){
		var price = this.state.pricePlaceholder;
		if(isNaN(price) == true){
			alert('Invalid input on price field.');
			return false;
		}
		var description = this.state.descriptionPlaceholder;
		var category = this.state.chosenCategory;
		if(category == 'Category'){
			alert('Please choose a category.');
			return false;
		}
		var date = moment().format('M/D/YYYY');
		var expense ={
			name: description,			
			amount: price,
			category: category,
			date: date,
		};
		this.props.saveData(expense);
		this.props.navigator.pop();
	}

	render(){
		return(
			<View style={styles.parent}>
			<View style={styles.topContainer}>
				<View style={styles.top1}>
					<TouchableOpacity onPress={()=>{this.props.navigator.pop()}}>
					<View style={styles.leftArrow}>
							<Icon name="chevron-left" size={25} color='black' />		
					</View>
					</TouchableOpacity>
					<View style={styles.header2}>
						<Text style={styles.todayText}>Add your expense</Text>
					</View>
				</View>
				<View style={styles.bottomContainer}>
					<View style={styles.TextInputContainer}>				
						<TextInput
							underlineColorAndroid="transparent"
							style={styles.TextInput}
							onChangeText={(pricePlaceholder) => this.setState({pricePlaceholder})}
							placeholder={this.state.pricePlaceholder}
						/>
						<TextInput
							underlineColorAndroid="transparent"
							style={styles.TextInput}
							onChangeText={(descriptionPlaceholder) => this.setState({descriptionPlaceholder})}
							placeholder={this.state.descriptionPlaceholder}
						/>
						<TouchableOpacity onPress={this.navigate.bind(this, "chooseCategory")}>
						<View style={styles.CategoryPicker}>
							<View style={styles.header1}>
								 <Text style={styles.TextCategory}>{this.state.chosenCategory}</Text> 
							</View>
							<View style={styles.header2}>
									<Text style={styles.TextCategory}>
										<Icon name="chevron-right" size={25} color='black'/>
									</Text>
							</View>
						</View>
						</TouchableOpacity>
						<View style={styles.button}>
						<Button
							onPress={this.onButtonPress}
							title="Save"
							color="grey"
						/>
						</View>				
					</View>
				</View>
			</View>	      
		      </View>
		);
	}
}

module.exports = EditTask;