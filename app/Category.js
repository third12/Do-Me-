import React, { Component } from 'react';

import{
	AppRegistry,
	StyleSheet,
	ListView,
	Text,
	Button,
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

export default class Category extends Component{
	constructor(props){
		super(props);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			categories: ds.cloneWithRows([
				'Academics', 'Shopping', 'Organization', 'Personal'
			]),
		}
		this.onPressRow = this.onPressRow.bind(this);
	}

	onPressRow(item){
		this.props.setCategory(item);
		this.props.navigator.pop();
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
				            <View style={addStyle.header1}><Text style={styles.homeText}> CATEGORY</Text></View>
			            </View>				
				</View>
				<View style={styles.bottomContainer} >
						<ListView
							dataSource={this.state.categories}
							renderRow={(rowData) =>
								<View style={addStyle.categoryExpenses}>
									<TouchableOpacity onPress={ ()=>{ this.onPressRow(rowData) }}>
									<Text style={addStyle.categories}>{rowData}</Text>
									</TouchableOpacity>
								</View>
							} />				
				</View>
			</View>
		);
	}
}

module.exports = Category;