import React from 'react';
import {  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image} from 'react-native';
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator,DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { ThemeProvider } from 'styled-components'
import { Icon } from 'react-native-elements'
import theme from './src/style/theme'
import HomeScreen from './src/Epics/Home/Home'
import searchAgency from './src/Epics/SearchAgency/SearchAgency'
import SideMenu from './src/CommonComponents/SideMenu/SideMenu';

const CustomDrawerComponent = props => (
  <View style={{ flex: 1 }}>
    <View style={{ height: 1, backgroundColor: 'white' }}>
      {/* <Image
        source={require('./assets/icon.png')}
        style={{ height: 120, width: 120, borderRadius: 60 }}
      /> */}
       <Icon  style={{ height: 120, width: 120, borderRadius: 60 }}
          name='menu'
          size={46}
          color='black'
          
        />
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
        backgroundColor: '#f4511e'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <Icon
          name='menu'
          size={46}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
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
        <Icon
          name='menu'
          size={46}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
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
  contentComponent:SideMenu,
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