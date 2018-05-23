import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TabNavigator, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Badge, Icon, IconBadge, Text as NBText} from 'native-base'

import Home from './pages/home';
import Store from './pages/store';
import Discover from './pages/discover';
import Person from './pages/person';
import List from './pages/list';

import footerData from './store/index';

// 设置全局text的样式
let oldRender = Text.prototype.render;
Text.prototype.render = function (...args) {
	let origin = oldRender.call(this, ...args);
	// 判断text是否已经被一些组件设置了颜色样式
	if (origin.props.style && (origin.props.style.color || origin.props.style.fontSize || origin.props.style.textAlign)) {
		return React.cloneElement(origin, {
			style: [origin.props.style]
		});
  } else {
		return React.cloneElement(origin, {
			style: [origin.props.style, {color: '#333'}]
		});
  }
};

//
// export default createStackNavigator(
// 	{
// 		Home,
// 		Store,
// 		Discover,
// 		Person
// 	},
// 	{
// 		initialRouteName: 'Home',
// 	}
// )


const TabNavigatorCom = TabNavigator({
	Home: {
		screen: Home
	},
	Store: {
		screen: Store
	},
	Discover: {
		screen: Discover
	},
	Person: {
		screen: Person
	},
	list: {
		screen: List,
		navigationOptions: {
			tabBarVisible: false
		}
	}
},{
	mode: 'modal',
	tabBarPosition: 'bottom',
	swipeEnabled: false,
	tabBarComponent: props => {
		return (
			<Footer>
				<FooterTab>
					{
						footerData.map((item, index) => {
							return (
								<Button
									vertical
									key={index}
									badge = {!!item.badgeNum}
									active={!!(props.navigationState.index === index)}
									onPress = {() => props.navigation.navigate(item.navigateName, {
										itemId: 86,
										otherParam: item.iconName
									})}
								>
									{item.badgeNum ? <Badge><NBText>{item.badgeNum}</NBText></Badge> : ''}
									<Icon active name={item.iconName} />
									<NBText>{item.txt}</NBText>
								</Button>
							);
						})
					}
				</FooterTab>
			</Footer>
		)
	}
})

export default class App extends React.Component {
	render() {
		return (
				<TabNavigatorCom/>

		)
	}
}