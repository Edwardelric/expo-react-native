import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import { Container, Content, Spinner } from 'native-base';

import Swiper from '../components/swiper';
import HeaderTips from '../components/headertips';
import Announce from '../components/announce';
import SubNav from '../components/subnav';
import Article from '../components/article';
import FooterComponent from '../components/footer';


export default class Home extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { navigation } = this.props;
		const itemId = navigation.getParam('itemId', '');
		return (
			<Container>
				<Content style={{backgroundColor: '#fff'}}>
					<Swiper navigation={this.props.navigation}/>
					<HeaderTips navigation={this.props.navigation}/>
					<Announce navigation={this.props.navigation}/>
					<SubNav navigation={this.props.navigation}/>
					<Article navigation={this.props.navigation}/>
				</Content>
				{/*<FooterComponent navigation={this.props.navigation}/>*/}
			</Container>
		);
	}
}


