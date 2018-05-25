import React from 'react';
import { View, Text, StyleSheet, Button} from 'react-native';

export default class DiscoverComponent extends React.Component {
	render() {
		return (
			<View style={{paddingTop: 100}}>
				<Text>this is discover page</Text>
				<Text> </Text>
				<Text> </Text>
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