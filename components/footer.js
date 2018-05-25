import React from 'react';
import { Footer, FooterTab, Button, Badge, Icon, IconBadge, Text } from 'native-base';

export default class FooterComponent extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { navigation } = this.props;
		let footerData = [
			{
				badgeNum: 0,
				iconName: 'apps',
				txt: 'Apps',
				isActive: true,
				routeName: 'Home'
			},
			{
				badgeNum: 0,
				iconName: 'camera',
				txt: 'Camer',
				isActive: false,
				routeName: 'Store'
			},
			{
				badgeNum: 0,
				iconName: 'navigate',
				txt: 'Nav',
				isActive: false,
				routeName: 'Discover'
			},
			{
				badgeNum: 3,
				iconName: 'person',
				txt: 'Person',
				isActive: false,
				routeName: 'Person'
			}
		];
		return (
			<Footer>
				<FooterTab>
					{
						footerData.map((item, index) => {
							return (
								<Button
									badge = {!!item.badgeNum}
									active={item.isActive}
									vertical
									key={index}
									onPress={() =>
										navigation.navigate(item.routeName)
									}
								>
									{item.badgeNum ? <Badge><Text>{item.badgeNum}</Text></Badge> : ''}
									<Icon active name={item.iconName} />
									<Text>{item.txt}</Text>
								</Button>
							);
						})
					}
				</FooterTab>
			</Footer>
		);
	}
}
