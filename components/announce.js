import React from 'react';
import { Card, CardItem, Text, Icon } from 'native-base';


import styles from '../assets/css/common.css';

export default class AnnounceComponent extends React.Component {
	render() {
		return (
			<Card style={styles.card}>
				<CardItem>
					<Text style={styles.anfontSize}>Hi, 欢迎光临车享家</Text>
				</CardItem>
				<CardItem>
					<Text style={styles.anfontSize}>登录查看更多个性设置， </Text>
					<Text style={styles.color}>立即登录</Text>
				</CardItem>
			</Card>
		)
	}
}