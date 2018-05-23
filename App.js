import React from 'react';
import { Button, View, Text } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Home from "./pages/home"

// 设置全局text的样式
let oldRender = Text.prototype.render;
Text.prototype.render = function (...args) {
	let origin = oldRender.call(this, ...args);
	// 判断text是否已经被一些组件设置了颜色样式
	if (origin.props.style && (origin.props.style.color || origin.props.style.fontSize || origin.props.style.textAlign)) {
		return React.cloneElement(origin, {
			style: [origin.props.style]
		});
  } else {
		return React.cloneElement(origin, {
			style: [origin.props.style, {color: '#333'}]
		});
  }
};

const Root = createStackNavigator(
  {
    Home
  },
  {
    initialRouteName: 'Home',
  }
);
export default class App extends React.Component {
  render() {
    return <Root/>;
  }
}