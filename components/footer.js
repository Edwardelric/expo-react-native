import React from 'react';
import { Footer, FooterTab, Button, Badge, Icon, IconBadge, Text } from 'native-base';

export default class FooterComponent extends React.Component {
	render() {
		let footerData = [
			{
				badgeNum: 0,
				iconName: 'apps',
				txt: 'Apps',
				isActive: true
			},
			{
				badgeNum: 0,
				iconName: 'camera',
				txt: 'Camer',
				isActive: false
			},
			{
				badgeNum: 0,
				iconName: 'navigate',
				txt: 'Nav',
				isActive: false
			},
			{
				badgeNum: 3,
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
								<Button
									badge = {!!item.badgeNum}
									active={item.isActive}
									vertical
									key={index}
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
