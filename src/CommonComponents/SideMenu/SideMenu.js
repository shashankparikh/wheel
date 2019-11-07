import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {NavigationActions} from 'react-navigation';
import {ScrollView, Text, View} from 'react-native';

class SideMenu extends Component {
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route
    });
    this.props.navigation.dispatch(navigateAction);
  }

  render () {
    return (
      <View >
        <ScrollView>
          <View>
            <Text >
              Section 1
            </Text>
            <View > 
              <Text onPress={() => this.props.navigation.navigate('mainScreenStack')}>
              Page1
              </Text>
            </View>
          </View>
          <View>
            <Text >
              Section 2
            </Text>
            <View >
              <Text  onPress={() => this.props.navigation.navigate('searchAgencyStack')}>
                Page2
              </Text>
         
            </View>
          </View>
        </ScrollView>
       
      </View>
    );
  }
}

SideMenu.propTypes = {
  navigation: PropTypes.object
};

export default SideMenu;