import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/Epics/Home/Home'
import searchAgency from './src/Epics/SearchAgency/SearchAgency'

const mainScreenStack = createStackNavigator(
  {
    MainScreen: {
      screen: HomeScreen,
      name: 'awesrdfhg'
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'MainScreen',
      headerMode: 'screen',
      headerTitle: 'HOME',
      drawerLabel: 'Home',
    }),
  }
);

const searchAgencyStack = createStackNavigator(
  {
    SecondScreen: {
      screen: searchAgency,
      name: 'Seach Agency'
    }
  },
  {
    navigationOptions: ({ navigation }) => ({
      initialRouteName: 'SecondScreen',
      headerMode: 'screen',
      headerTitle: 'Second Screen Header',
      drawerLabel: 'Lookup Agencies',
    }),
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Home: {
    screen: mainScreenStack,
  },
  AboutUs: {
    screen: searchAgencyStack,
  }
}
)

class App extends React.Component {
  render() {
    return (
      <AppDrawerNavigator />
    );
  }

}

export default createAppContainer(AppDrawerNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});