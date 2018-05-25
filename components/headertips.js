import React from 'react';
import { View, Text } from 'react-native';
import { Icon } from 'native-base';

import styles from '../assets/css/common.css'

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
