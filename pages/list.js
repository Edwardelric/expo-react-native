import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default class PersonComponent extends React.Component {
	static navigationOptions = ({ navigation, screenProps }) => ({
		title: "My Profile!",
		headerRight: <Button title="Menu" onPress={(navigation)=>{ navigation.navigate('DrawerOpen'); }} />,
	})
	render() {
	 	return (
			<View style={{paddingTop: 100}}>
				<Text>this is list page</Text>
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