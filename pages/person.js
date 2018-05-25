import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PersonComponent extends React.Component {
	render() {
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', 'NO-ID');
		const otherParam = navigation.getParam('otherParam', 'some default value');
		
		return (
			<View style={{paddingTop: 100}}>
				<Text>this is person page</Text>
				<Text>{itemId}</Text>
				<Text>{otherParam}</Text>
				<Button
					title="Go to Details... again"
					onPress={() =>
						this.props.navigation.goBack()
					}
				/>
			</View>
		)
	}
}