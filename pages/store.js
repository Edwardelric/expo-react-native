import {Font} from 'expo';
import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, Image } from 'react-native';
import { Content, List, Body, ListItem, Text as NBText, Left, Right, Icon } from 'native-base';

// import CustomIcon from '../utils/customicon';
import Icons from 'react-native-vector-icons/FontAwesome';

import styles from '../assets/css/store.css';

export default class StoreComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isReady: false
		};
	}
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "选择服务",
		headerRight: (
			<TouchableOpacity
				onPress={(navigation)=>{ navigation.navigate('DrawerOpen')
			}}>
				<Text style={{paddingRight: 10, color: '#2889fc'}}>换车</Text>
			</TouchableOpacity>)
	})
	render() {
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');
		if (!this.state.isReady) {
			return <View></View>
		}
		return (
			<View style={{flex: 1, backgroundColor: '#ccc'}}>
				<View style={styles.storeWrapper}>
					<View style={styles.headerLeft}>
						<Image source={require('../assets/imgs/1.jpg')} style={{flex: 1, height: 200}}/>
					</View>
					<View style={styles.headerRight}>
						<Text style={styles.font}>大众 凌度 2013款</Text>
						<Text style={styles.font}>1.8T 手自一体 精英版</Text>
						<View style={styles.btnWrapper}>
							<Text style={styles.btn}>鲁B38MU1</Text>
						</View>
					</View>
				</View>
				<View style={styles.tabWrapper}>
					<View style={styles.tabList}>
						<Icon name="home" style={{textAlign: 'center'}}/>
						<Text>热门推荐</Text>
						<Text style={styles.bottomLine}>123</Text>
					</View>
					<View style={styles.tabList}>
						<Icon name="home"/>
						<Text>美容洗车</Text>
						<Text></Text>
					</View>
					<View style={styles.tabList}>
						<Icon name="home"/>
						<Text>常规养护</Text>
						<Text></Text>
					</View>
					<View style={styles.tabList}>
						<Icon name="home"/>
						<Text>轮胎服务</Text>
						<Text></Text>
					</View>
				</View>
				<List style={styles.tabContent}>
					<ListItem icon>
						<Left>
							{/*<CustomIcon name="anchor"/>*/}
							<Icons name="rocket"/>
						</Left>
						<Body>
							<Text>小保养套餐</Text>
							<Text>小保养套餐</Text>
						</Body>
						<Right>
							<Icon name="power"/>
						</Right>
					</ListItem>
					<ListItem icon>
						<Left>
							<Icon name="plane"/>
						</Left>
						<Body>
							<Text>小保养套餐</Text>
							<Text>小保养套餐</Text>
						</Body>
						<Right>
							<Icon name="power"/>
						</Right>
					</ListItem>
				</List>
				
			{/*<View style={{paddingTop: 100}}>*/}
				{/*<Text>this is store page</Text>*/}
				{/*<Text>{itemId}</Text>*/}
				{/*<Text>{otherParam}</Text>*/}
				{/*<Button*/}
					{/*title="Go to Details... again"*/}
					{/*onPress={() =>*/}
						{/*this.props.navigation.popToTop()*/}
					{/*}*/}
				{/*/>*/}
			{/*</View>*/}
			</View>
		)
	}
}