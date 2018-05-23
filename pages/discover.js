import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DiscoverComponent extends React.Component {
	static navigationOptions = {
		title: 'Discover',
	};
	render() {
		
		
		return (
			<View style={{paddingTop: 100}}>
				<Text>this is discover page</Text>
				<Text> </Text>
				<Text> </Text>
			</View>
		)
	}
}