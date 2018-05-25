import React from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

import styles from '../assets/css/common.css';

export default class SubNavComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.subNavWrapper}>
				{
					[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => {
						let routerName = ['Home', 'Store', 'Discover', 'Person'][Math.ceil(index % 4)];
						return (
							<View style={styles.list} key={index}>
								<TouchableOpacity
									onPress={() => navigation.navigate(routerName)}
								>
									<Icon name="home" style={styles.subfontSize}/>
									<Text style={styles.textAlign}>保养{index + 1}</Text>
								</TouchableOpacity>
							</View>
						)
					})
				}
			</View>
		)
	}
}
