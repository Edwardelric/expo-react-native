import React from 'react';
import { View, Text, StyleSheet } from 'react-native'

export default class StoreComponent extends React.Component {
	static navigationOptions = {
		title: 'Store',
	};
	render() {
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');
		
		return (
			<View style={{paddingTop: 100}}>
				<Text>this is store page</Text>
				<Text>{itemId}</Text>
				<Text>{otherParam}</Text>
			</View>
		)
	}
}