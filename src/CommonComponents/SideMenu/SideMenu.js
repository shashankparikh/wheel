import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import * as Font from 'expo-font';
import LottieView from "lottie-react-native";

const MenuItemContainer = styled.TouchableOpacity`
 padding : 15px 10px;
 display : flex;
 align-items : center;
 border-bottom-width : 1;
 border-bottom-color : #C4B812;
 border-style : dotted;
 border-radius: 5;
 flex-direction : row;
`

const MenuTitle = styled.Text`
 font-size : 18px;
 font-weight : 600;
 font-family : roboto;
`

const MenuIcon = styled(FontAwesome)`
 color: black;
 margin-right : 10px;
`

const MenuContainer = styled.View`
  background-color : #ead912;
  flex : 1;
  align-items : center;
  justify-content: center;
`

const CloseIconContainer = styled.View`
  margin-bottom : 30px;
  padding : 20px;
`

const MenuButton = styled.TouchableOpacity`
  margin : 20px 10px;
  border-radius: 50px;
  elevation : 5;
  background-color : #ffef00;
  padding : 15px 28px;
`

const ButtonText = styled.Text`
  font-size : 14;
  font-weight : 600;
  font-family : roboto;
`


class SideMenu extends Component {

  onButtonClick = () => {
    this.props.navigation.navigate('adoptionFormStack')
  }

  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  async componentDidMount() {
    await Font.loadAsync({
      roboto: require('../../../assets/fonts/Roboto-Regular.ttf'),
    });
    this.animation.play();
  }

  resetAnimation = () => {
    this.animation.reset();
    this.animation.play();
  };

  render() {
    return (
      <MenuContainer >
        <ScrollView centerContent contentContainerStyle={{ alignItems: "center", justifyContent: "center", flex: 1, width: "100%" }} >
          <CloseIconContainer >
            <View >
              <LottieView
                ref={animation => {
                  this.animation = animation;
                }}
                style={{
                  width: 180,
                  height: 180,
                  backgroundColor: '#ead912',
                }}
                source={require('../../../assets/menuAnimation.json')}
              // OR find more Lottie files @ https://lottiefiles.com/featured
              // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
              />
            </View>
          </CloseIconContainer>
          <MenuItemContainer onPress={() => this.props.navigation.navigate('mainScreenStack')}>
            <MenuIcon name="home" size={24} color="black" />
            <MenuTitle >
              Home
              </MenuTitle>
          </MenuItemContainer>
          <MenuItemContainer onPress={() => this.props.navigation.navigate('AboutUsStack')} >
            <MenuIcon name="info-circle" size={22} color="black" />
            <MenuTitle>
              About Us
              </MenuTitle>
          </MenuItemContainer>
          <MenuButton onPress={this.onButtonClick}>
            <ButtonText>
              Looking for Adoption?
              </ButtonText>
          </MenuButton>
        </ScrollView>

      </MenuContainer>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;