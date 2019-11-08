import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image
} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { ThemeProvider } from 'styled-components'
import { Ionicons } from '@expo/vector-icons';
import theme from './src/style/theme'
import HomeScreen from './src/Epics/Home/Home'
import searchAgency from './src/Epics/SearchAgency/SearchAgency'
import styled from 'styled-components/native'
import SideMenu from './src/CommonComponents/SideMenu/SideMenu';

const MenuIcon = styled(Ionicons)`
margin-left: 10px;    
padding : 10px;
`

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <View style={{ height: 1, backgroundColor: 'white' }}>
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </View>
)


const mainScreenStack = createStackNavigator(
  {
    MainScreen: {
      screen: HomeScreen,
      name: 'awesrdfhg'
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#e8d546'
      },
      headerTintColor: '#000',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <MenuIcon name="ios-menu" size={32} color="black" onPress={() => navigation.toggleDrawer()} />
      )
    })
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
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <Ionicons name="ios-menu" size={32} color="black" onPress={() => navigation.toggleDrawer()} />
      )
    })
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  mainScreenStack: {
    screen: mainScreenStack,
  },
  searchAgencyStack: {
    screen: searchAgencyStack,
  }
},
  {
    drawerWidth: 250,
    contentComponent: SideMenu,
  },


)

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppDrawerNavigator />
      </ThemeProvider>
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