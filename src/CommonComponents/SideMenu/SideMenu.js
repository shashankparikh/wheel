import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { ScrollView, Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import styled from 'styled-components/native';
import LottieView from "lottie-react-native";

const MenuItemContainer = styled.View`
 padding : 15px 0px;
 display : flex;
 align-items : center;
 width : 100%;
 border-style : dotted;
 border-radius: 5;
 flex-direction : row;
`

const MenuTitle = styled.Text`
 font-size : 18px;
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

const MenuButton = styled.View`
  margin : 20px 10px;
  border-radius: 50px;
  elevation : 5;
  background-color : #ffef00;
  padding : 15px 28px;
`

const ButtonText = styled.Text`
  font-size : 12;
  font-weight : 500;
`


class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  componentDidMount() {
    this.animation.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play(30, 120);
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
                  width: 160,
                  height: 160,
                  backgroundColor: '#ead912',
                }}
                source={require('../../../assets/menuAnimation.json')}
              // OR find more Lottie files @ https://lottiefiles.com/featured
              // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
              />
            </View>
            {/* <MenuIcon name="close" size={36} color="black" /> */}
          </CloseIconContainer>
          <MenuItemContainer >
            <MenuIcon name="home" size={18} color="black" />
            <MenuTitle onPress={() => this.props.navigation.navigate('mainScreenStack')}>
              Home
              </MenuTitle>
          </MenuItemContainer>
          <MenuItemContainer >
            <MenuIcon name="search" size={18} color="black" />
            <MenuTitle onPress={() => this.props.navigation.navigate('searchAgencyStack')}>
              Lookup Agencies
              </MenuTitle>
          </MenuItemContainer>
          <MenuItemContainer >
            <MenuIcon name="info-circle" size={18} color="black" />
            <MenuTitle onPress={() => this.props.navigation.navigate('searchAgencyStack')}>
              About Us
              </MenuTitle>
          </MenuItemContainer>
          <MenuButton>
            <ButtonText>
              Looking for Adoption? .
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