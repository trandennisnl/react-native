import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer} from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';
import { connect } from 'react-redux';

import animal from './screens/animal';
import counter from './screens/counter';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const AnimalScreens = createStackNavigator(
  {
    Animal: {
      screen: animal,
    },
  },
  {
    initialRouteName: 'Animal',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

const CounterScreens = createStackNavigator(
  {
    Counter: {
      screen: counter,
    },
  },
  {
    initialRouteName: 'Counter',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star'),
    },
  },
);

const RootNav = createBottomTabNavigator(
  {
    Counter: {
      screen: CounterScreens,
    },
    Animal: {
      screen: AnimalScreens,
    },
  },
  {
    initialRouteName: 'Counter',
    tabBarPosition: 'bottom',
    tabBarOptions: {
      style: {
        backgroundColor: '#fa3',
      },
      showLabel: false,
      showIcon: true,
      activeTintColor: '#ff3',
      inactiveTintColor: '#f23',
      renderIndicator: () => null,
    },
  },
)

const Navigation = createAppContainer(RootNav);

export default Navigation;
