/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

import SwipeCard from './src/components/SwipeCard.js'



class ProfiileScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
class Swipe extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SwipeCard style={{flex: 1}} />

      </View>
    );
  }
}
class StatisticScreen extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Statistics Screen</Text>
      </View>
    );
  }
}



const AppNavigator = createBottomTabNavigator(
  {
    Profile: ProfiileScreen,
    S: Swipe,
    Statistics: StatisticScreen

  },
  {
    initialRouteName: "S"

  }
);

export default createAppContainer(AppNavigator);



const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
