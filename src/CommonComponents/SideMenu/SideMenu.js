import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { NavigationActions } from 'react-navigation'
import { ScrollView, Text, View, TouchableOpacity } from 'react-native'
import { FontAwesome } from '@expo/vector-icons'
import styled from 'styled-components/native'
import * as Font from 'expo-font'
import LottieView from 'lottie-react-native'
import {
  MenuItemContainer,
  MenuTitle,
  MenuIcon,
  MenuContainer,
  CloseIconContainer,
  MenuButton,
  ButtonText
} from './style'

class SideMenu extends Component {
  // onButtonClick = () => {
  //   this.props.navigation.navigate('adoptionFormStack')
  // }

  navigateToScreen = route => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    })
    this.props.navigation.dispatch(navigateAction)
  }

  async componentDidMount () {
    // await Font.loadAsync({
    //   roboto: require('../../../assets/fonts/Roboto-Regular.ttf'),
    // });
    this.animation.play()
  }

  resetAnimation = () => {
    this.animation.reset()
    this.animation.play()
  }

  render () {
    return (
      <MenuContainer>
        <ScrollView
          centerContent
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            width: '100%'
          }}
        >
          <CloseIconContainer>
            <View>
              <LottieView
                ref={animation => {
                  this.animation = animation
                }}
                style={{
                  width: 180,
                  height: 180,
                  backgroundColor: '#ead912'
                }}
                source={require('../../../assets/menuAnimation.json')}
                // OR find more Lottie files @ https://lottiefiles.com/featured
                // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
              />
            </View>
          </CloseIconContainer>
          <MenuItemContainer
            onPress={() => this.props.navigation.navigate('mainScreenStack')}
          >
            <MenuIcon name='home' size={24} color='black' />
            <MenuTitle>Home</MenuTitle>
          </MenuItemContainer>
          <MenuItemContainer
            onPress={() => this.props.navigation.navigate('AboutUsStack')}
          >
            <MenuIcon name='info-circle' size={22} color='black' />
            <MenuTitle>About Us</MenuTitle>
          </MenuItemContainer>
          <MenuButton
            onPress={() => this.props.navigation.navigate('adoptorFormStack')}
          >
            <ButtonText>Looking for Adoption?</ButtonText>
          </MenuButton>
          <MenuButton
            onPress={() =>
              this.props.navigation.navigate('suggestionFormStack')
            }
          >
            <ButtonText>Any Suggestions?</ButtonText>
          </MenuButton>
        </ScrollView>
      </MenuContainer>
    )
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
}

export default SideMenu
