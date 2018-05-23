import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

export default class ArticleComponent extends React.Component {
	render() {
		return (
			<View style={styles.wrapper}>
				<View>
					<Text style={styles.title}>
						当前推荐
						<Text style={styles.txt}>春季换新颜</Text>
					</Text>
					<View style={styles.listStyle0}>
						<Image source={require('../assets/imgs/1.jpg')} style={{flex: 1, height: 200}}/>
						<View style={{flex: 1}}>
							<Image source={require('../assets/imgs/2.jpeg')} style={{flex: 1, height: 100}}/>
							<Image source={require('../assets/imgs/1.jpg')} style={{flex: 1, height: 100}}/>
						</View>
					</View>
				</View>
				<View>
					<Text style={styles.title}>
						享*预约
						<Text style={styles.txt}>一键预约，省时省心</Text>
					</Text>
					<ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
						<View>
							<Image source={require('../assets/imgs/1.jpg')} style={{height: 100}}/>
							<Text style={styles.scrollTxt}>更换刹车油</Text>
							<Text style={{fontSize: 12}}>4万公里2年需要更换</Text>
						</View>
						<View>
							<Image source={require('../assets/imgs/1.jpg')} style={{height: 100}}/>
							<Text style={styles.scrollTxt}>更换刹车油</Text>
							<Text style={{fontSize: 12}}>4万公里2年需要更换</Text>
						</View>
					</ScrollView>
				</View>
				<View style={{overflow: 'hidden'}}>
					<Text style={styles.title}>
						2018年体验官
					</Text>
					<View style={{flex: 1}}>
						<Image source={require('../assets/imgs/1.jpg')}/>
					</View>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		paddingLeft: 16,
		paddingRight: 16,
		paddingBottom: 16,
		borderBottomWidth: 1,
		borderBottomColor: '#333',
	},
	title: {
		paddingTop: 10,
		paddingBottom: 10,
		color: '#000',
		fontSize: 14,
	},
	txt: {
		paddingLeft: 10,
		fontSize: 12,
		fontWeight: '300'
	},
	listStyle0: {
		flexDirection: 'row',
		overflow: 'hidden'
	},
	scrollTxt: {
		paddingTop: 10,
		paddingBottom: 4,
		color: '#000',
		fontSize: 16,
		fontWeight: '600'
	}
})