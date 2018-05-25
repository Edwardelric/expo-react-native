import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator, StackNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Badge, Icon, IconBadge, Text as NBText} from 'native-base'

import Home from './pages/home';
import Store from './pages/store';
import Discover from './pages/discover';
import Person from './pages/person';
import List from './pages/list';

import footerData from './store/index';

import { http } from './utils/http';
import { resetText } from './utils/util';

http();
resetText();

export default createStackNavigator(
	{
		Home: {
			screen: Home,
			path: 'home',
			navigationOptions: ({ navigation }) => ({
				title: `Home`,
			})
		},
		Store: {
			screen: Store,
			path: 'store'
		},
		Discover: {
			screen: Discover,
			path: 'discover/:id',
			navigationOptions: ({ navigation }) => ({
				title: `Discover`,
			})
		},
		Person: {
			screen: Person,
			path: 'person',
			navigationOptions: ({ navigation }) => ({
				title: `Person`
			})
		},
		List: {
			screen: List,
			path: 'list'
		}
	},
	{
		initialRouteName: 'Store',
		mode: 'float'
	}
)

// export default createBottomTabNavigator({
// 	Home: {
// 		screen: Home
// 	},
// 	Store: {
// 		screen: Store
// 	},
// 	Discover: {
// 		screen: Discover
// 	},
// 	Person: {
// 		screen: Person
// 	},
// 	List: {
// 		screen: List,
// 		navigationOptions: {
// 			tabBarVisible: false
// 		}
// 	}
// },{
// 	initialRouteName: 'Home',
// 	tabBarComponent: props => {
// 		return (
// 			<Footer>
// 				<FooterTab>
// 					{
// 						footerData.map((item, index) => {
// 							return (
// 								<Button
// 									vertical
// 									key={index}
// 									badge = {!!item.badgeNum}
// 									active={!!(props.navigation.state.index === index)}
// 									onPress = {() => props.navigation.navigate(item.navigateName, {
// 										itemId: 86,
// 										otherParam: item.iconName
// 									})}
// 								>
// 									{item.badgeNum ? <Badge><NBText>{item.badgeNum}</NBText></Badge> : ''}
// 									<Icon active name={item.iconName} />
// 									<NBText>{item.txt}</NBText>
// 								</Button>
// 							);
// 						})
// 					}
// 				</FooterTab>
// 			</Footer>
// 		)
// 	}
// })

