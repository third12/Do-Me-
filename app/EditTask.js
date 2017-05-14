import React, { Component } from 'react';
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
import styles from './styles/homeStyles.js';
import addStyle from './styles/addStyles.js';


export default class EditTask extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName
		});
	}
	constructor(props){
		super(props);
		console.log(this.props.data);
		this.state = {
			data: this.props.data,
		};
	}
	render(){
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
				            <View style={styles.header1}><Text style={styles.homeText}>DETAILS</Text></View>
			            </View>					
				</View>
				<View style={styles.bottomContainer} >
					<View style={addStyle.TextInputContainer}>
						<TextInput
							underlineColorAndroid="transparent"
							style={addStyle.TextInput}
							value={this.state.data.task}
						 />	
						<TouchableOpacity onPress={this.navigate.bind(this, "chooseCategory")}>
							<View style={addStyle.CategoryPicker}>
								<View style={styles.header1}>
									 <Text style={addStyle.TextCategory}></Text> 
								</View>
								<View style={styles.header2}>
										<Text style={addStyle.TextCategory}>
											<Icon style={addStyle.rightArrow} name="chevron-right" size={20} color='black'/>
										</Text>
								</View>
							</View>
						</TouchableOpacity>
						<TouchableOpacity onPress={this.navigate.bind(this, "chooseCategory")}>
							<View style={addStyle.CategoryPicker}>
								<View style={styles.header1}>
									 <Text style={addStyle.TextCategory}></Text> 
								</View>
								<View style={styles.header2}>
										<Text style={addStyle.TextCategory}>
											<Icon style={addStyle.rightArrow} name="chevron-right" size={20} color='black'/>
										</Text>
								</View>
							</View>
						</TouchableOpacity>													 			 						 
					</View>
					<View style={styles.button}>
						<Button
						onPress={()=>this.props.editTasks('lol')}
						title="Save"
						color="grey"
						/>
					</View>				
				</View>
			</View>
		);
	}
}

module.exports = EditTask;