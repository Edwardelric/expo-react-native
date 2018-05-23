import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, CardItem, Text } from 'native-base';

export default class AnnounceComponent extends React.Component {
	render() {
		return (
			<Card style={styles.card}>
				<CardItem>
					<Text style={styles.fontSize}>Hi, 欢迎光临车享家</Text>
				</CardItem>
				<CardItem>
					<Text style={styles.fontSize}>登录查看更多个性设置， </Text>
					<Text style={styles.color}>立即登录</Text>
				</CardItem>
			</Card>
		)
	}
}

const styles = StyleSheet.create({
	card: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: -10
	},
	fontSize: {
		fontSize: 12,
		fontWeight: "400"
	},
	color: {
		fontSize: 12,
		color: 'red'
	}
})