import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { Container, Content } from 'native-base';

import Swiper from '../components/swiper';
import HeaderTips from '../components/headertips';
import Announce from '../components/announce';
import SubNav from '../components/subnav';
import Article from '../components/article';
import FooterComponent from './footer';

export default class Home extends React.Component {
	render() {
		return (
			<Container>
				<Content style={{backgroundColor: '#fff'}}>
					<Swiper/>
					<HeaderTips/>
					<Announce/>
					<SubNav/>
					<Article/>
				</Content>
				<FooterComponent/>
			</Container>
		);
	}
}


