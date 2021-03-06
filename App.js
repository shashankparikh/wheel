import React from 'react'
import {
  StyleSheet,
  View,
  Text,
  Button,
  SafeAreaView,
  ScrollView,
  Image,
  Icon
} from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { createStackNavigator } from 'react-navigation-stack'
import { ThemeProvider } from 'styled-components'
import theme from './src/style/theme'
import HomeScreen from './src/Epics/Home/Home'
import Tabs from './src/CommonComponents/Tabs/Tabs'
import styled from 'styled-components/native'
import SideMenu from './src/CommonComponents/SideMenu/SideMenu'
import AboutUs from './src/Epics/AboutUs/AboutUs'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import AdoptorForm from './src/Epics/AdoptorForm/AdoptorForm'
import SuggestionForm from './src/Epics/SuggestionForm/SuggestionForm'

const MenuIcon = styled(Ionicons)`
  margin-left: 10px;
  padding: 10px;
`

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
        <MenuIcon
          name='ios-menu'
          size={32}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const AboutUsStack = createStackNavigator(
  {
    AboutUs: {
      screen: AboutUs,
      // screen: AdoptorForm,
      name: 'About Us'
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
        <MenuIcon
          name='ios-menu'
          size={32}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const adoptorFormStack = createStackNavigator(
  {
    AdoptorForm: {
      screen: AdoptorForm,
      name: 'Adoption Form'
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
        <MenuIcon
          name='ios-menu'
          size={32}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const suggestionFormStack = createStackNavigator(
  {
    SuggestionForm: {
      screen: SuggestionForm,
      name: 'Adoption Form'
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
        <MenuIcon
          name='ios-menu'
          size={32}
          color='black'
          onPress={() => navigation.toggleDrawer()}
        />
      )
    })
  }
)

const tabScreenStack = createStackNavigator(
  {
    Tabs: {
      screen: Tabs,
      name: 'Process Details'
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      headerStyle: {
        backgroundColor: '#e8d546'
      },
      headerTintColor: '#000',
      title: 'Process Details',
      headerTitleStyle: {
        fontWeight: 'bold'
      },
      headerLeft: (
        <MenuIcon
          name='ios-arrow-round-back'
          size={32}
          onPress={() => navigation.navigate('mainScreenStack')}
        />
      )
    })
  }
)

const AppDrawerNavigator = createDrawerNavigator(
  {
    mainScreenStack: {
      screen: mainScreenStack
    },
    AboutUsStack: {
      screen: AboutUsStack
    },
    adoptorFormStack: {
      screen: adoptorFormStack
    },
    suggestionFormStack: {
      screen: suggestionFormStack
    },
    tabScreenStack: {
      screen: tabScreenStack
    }
  },

  {
    drawerWidth: 250,
    contentComponent: SideMenu
  }
)

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isReady: false
    }
  }

  async componentDidMount () {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_Regular: require('./assets/fonts/Roboto-Regular.ttf'),
      ...Ionicons.font
    })
    this.setState({ isReady: true })
  }

  render () {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <ThemeProvider theme={theme}>
        <AppDrawerNavigator />
      </ThemeProvider>
    )
  }
}

export default createAppContainer(AppDrawerNavigator)
