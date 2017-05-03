import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  ListView,
  Text,
  View,
  Navigator,
  AsyncStorage,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';

import { SwipeListView, SwipeRow } from 'react-native-swipe-list-view';
import CheckBox from 'react-native-check-box'
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles/homeStyles.js';
class Home extends Component {
	navigate(routeName){
		this.props.navigator.push({
			name: routeName,
		});
	}
	constructor(props){
		super(props);
		this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		this.state = {
			basic: true,
			listViewData: Array(20).fill('').map((_,i)=>`item #${i}`)
		};
		this.renderRow = this.renderRow.bind(this);      
	}

	componentWillMount(){
		// var array = [{task: 'lol'},{task: 'haha'},{task: 'wow'},{task: 'test'},{task: 'huhu'}];
	 //    this.setState({
	 //      dataSource: this.state.dataSource.cloneWithRows(array),  
	 //    });
	}

	componentDidUpdate(prevProps, prevState) {

	}

	render() {
		return (	
        <View style={styles.parent}> 
          <View style={styles.topContainer}>
            <View style={styles.top1}>
				<View style={styles.header2}>
					<TouchableOpacity onPress={this.navigate.bind(this, "addCategory")}>
						<View style={styles.addIcon} >
							<Icon name="plus" size={20} color="white" />
						</View>
					</TouchableOpacity>              
				</View>

	            <View style={styles.header1}><Text style={styles.homeText}>DO ME !</Text></View>
            </View>
          </View>
          
          <View style={styles.bottomContainer}>
			 {
					this.state.basic &&

					<SwipeListView
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={ data => (
							<TouchableHighlight
								onPress={ _ => console.log('You touched me') }
								style={styles.rowFront}
								underlayColor={'#AAA'}
							>
							<View>
								<CheckBox
								    style={{padding: 10}}
								    onClick={()=>this.onClick(data)}
								    isChecked={false}
								    leftText={'I am {data} in a SwipeListView'}
								/>
							</View>				
							</TouchableHighlight>
						)}
						renderHiddenRow={ (data, secId, rowId, rowMap) => (
							<View style={styles.rowBack}>
								<Text>Action</Text>
								<View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
									<Text style={styles.backTextWhite}>Edit</Text>
								</View>
								<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
									<Text style={styles.backTextWhite}>Delete</Text>
								</TouchableOpacity>
							</View>
						)}
						leftOpenValue={75}
						rightOpenValue={-150}
					/>
				}

				{
					!this.state.basic &&

					<SwipeListView
						dataSource={this.ds.cloneWithRows(this.state.listViewData)}
						renderRow={ (data, secId, rowId, rowMap) => (
							<SwipeRow
								disableLeftSwipe={parseInt(rowId) % 2 === 0}
								leftOpenValue={20 + Math.random() * 150}
								rightOpenValue={-150}
							>
								<View style={styles.rowBack}>
									<Text>Left</Text>
									<View style={[styles.backRightBtn, styles.backRightBtnLeft]}>
										<Text style={styles.backTextWhite}>Right</Text>
									</View>
									<TouchableOpacity style={[styles.backRightBtn, styles.backRightBtnRight]} onPress={ _ => this.deleteRow(secId, rowId, rowMap) }>
										<Text style={styles.backTextWhite}>Delete</Text>
									</TouchableOpacity>
								</View>
								<TouchableHighlight
									onPress={ _ => console.log('You touched me') }
									style={styles.rowFront}
									underlayColor={'#AAA'}
								>
									<View>
										<Text>I am {data} in a SwipeListView</Text>
									</View>
								</TouchableHighlight>
							</SwipeRow>
						)}
					/>
				}
          </View>
        </View>
	  	);
	}	

	renderRow(data){
		return (
			<CheckBox
			    style={{padding: 10}}
			    onClick={()=>this.onClick(data.task)}
			    isChecked={false}
			    rightText={data.task}
			/>
		);
	}

    onClick(data) {
        data.checked = !data.checked;
    }

	deleteRow(secId, rowId, rowMap) {
		rowMap[`${secId}${rowId}`].closeRow();
		const newData = [...this.state.listViewData];
		newData.splice(rowId, 1);
		this.setState({listViewData: newData});
	}

}

module.exports = Home;