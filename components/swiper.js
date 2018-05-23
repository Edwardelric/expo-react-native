import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Swiper from 'react-native-swiper';

export default class SwiperComponent extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<Swiper
					autoplay={true}
					paginationStyle={{bottom: 20, left: null, right: 10}}
					dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
					activeDot={<View style={{backgroundColor: '#ccc', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
				>
					{
						[1, 2, 3].map((item, index) => {
							let style = styles[`color${index}`];
							return (
								<View key={index} style={style}>
									<Image source={require('../assets/imgs/3.jpeg')}/>
								</View>
							)
						})
					}
				</Swiper>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		height: 160,
		backgroundColor: 'green'
	},
	color0: {
		flex: 1,
		backgroundColor: 'red'
	},
	color1: {
		flex: 1,
		backgroundColor: 'blue'
	}
});