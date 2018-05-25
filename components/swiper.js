import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';

import styles from '../assets/css/common.css';

export default class SwiperComponent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { imgList: [] };
	}
	componentWillMount() {
		fetch('https://www.easy-mock.com/mock/592e626b91470c0ac1fed9b6/products_1496212075258/member#!method=get').then(res => {
			this.setState({imgList: [1, 2, 3]});
		})
	}
	render() {
		const { navigation } = this.props;
		return (
			<View style={styles.swiperWrapper}>
				<Swiper
					autoplay={true}
					paginationStyle={{bottom: 20, left: null, right: 10}}
					dot={<View style={{backgroundColor: 'rgba(0,0,0,.2)', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
					activeDot={<View style={{backgroundColor: '#ccc', width: 8, height: 8, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3}} />}
				>
					{
						[1, 2, 3].map((item, index) => {
							let style = styles[`color${index}`];
							let url = [
								require('../assets/imgs/1.jpg'),
								require('../assets/imgs/2.jpeg'),
								require('../assets/imgs/3.jpeg')
							][index]
							return (
								<TouchableOpacity
									key={index}
									style={style}
									onPress={() => navigation.navigate("List")}
								>
									<Image source={url}/>
								</TouchableOpacity>
							)
						})
					}
				</Swiper>
			</View>
		)
	}
}