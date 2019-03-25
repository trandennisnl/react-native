import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { MaterialIcons } from '@expo/vector-icons';

import cat from './screens/cat';
import dog from './screens/dog';
import mouse from './screens/mouse';

const getTabBarIcon = icon => ({ tintColor }) => (
  <MaterialIcons name={icon} size={26} style={{ color: tintColor }} />
);

const CatScreens = createStackNavigator(
  {
    Cat: {
      screen: cat,
    },
  },
  {
    initialRouteName: 'Cat',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('list'),
    },
  },
);

const DogScreens = createStackNavigator(
  {
    Dog: {
      screen: dog,
    },
  },
  {
    initialRouteName: 'Dog',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('star'),
    },
  },
);

const MouseScreens = createStackNavigator(
  {
    Mouse: {
      screen: mouse,
    },
  },
  {
    initialRouteName: 'Mouse',
    navigationOptions: {
      tabBarIcon: getTabBarIcon('person'),
    },
  },
);

export default createAppContainer(createBottomTabNavigator(
  {
    Cat: {
      screen: CatScreens,
    },
    Dog: {
      screen: DogScreens,
    },
    Mouse: {
      screen: MouseScreens,
    },
  },
  {
    initialRouteName: 'Cat',
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
));
