import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PersonComponent extends React.Component {
	static navigationOptions = {
		title: 'list',
	};
	render() {
	 	return (
			<View style={{paddingTop: 100}}>
				<Text>this is list page</Text>
			</View>
		)
	}
}