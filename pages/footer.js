import React from 'react';
import { Footer, FooterTab, Button, Badge, Icon, IconBadge, Text } from 'native-base';

export default class FooterComponent extends React.Component {
	render() {
		let footerData = [
			{
				badge: true,
				badgeNum: 2,
				iconName: 'apps',
				txt: 'Apps',
				isActive: false
			},
			{
				badge: false,
				badgeNum: 0,
				iconName: 'camera',
				txt: 'Camer',
				isActive: false
			},
			{
				badge: true,
				badgeNum: 51,
				iconName: 'navigate',
				txt: 'Nav',
				isActive: true
			},
			{
				badge: false,
				badgeNum: 0,
				iconName: 'person',
				txt: 'Person',
				isActive: false
			}
		];
		return (
			<Footer>
				<FooterTab>
					{
						footerData.map((item, index) => {
							return (
								<Button badge = {item.badge}  active={item.isActive}  vertical key={index}>
									{item.badge ? <Badge><Text>{item.badgeNum}</Text></Badge> : ''}
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
