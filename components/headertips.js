import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'native-base';

export default class HeaderTipsComponent extends React.Component {
	render() {
		return (
			<View style={styles.headerTips}>
				<View style={styles.address}>
					<Text>上海市</Text>
					<Icon name="arrow-down" style={styles.fontSize}/>
				</View>
				<View style={styles.tips}>
					<Icon name="film" style={styles.paddingLR}/>
					<Icon name="cart" style={styles.paddingLR}/>
					<Icon name="alarm" style={styles.paddingLR}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	headerTips: {
		position: 'absolute',
		top: 10,
		left: 0,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center'
	},
	address: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		paddingLeft: 10
	},
	tips: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		paddingRight: 10
	},
	paddingLR: {
		paddingLeft: 5,
		paddingRight: 5,
		fontSize: 20
	}
});