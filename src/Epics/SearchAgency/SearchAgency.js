import React, { Component } from 'react'
import { Text, View } from 'react-native'

export class SearchAgency extends Component {
    static navigationOptions = {
        //To set the header image and title for the current Screen
        title: 'Setting Screen Activity',
        //Title

      };
    render() {
        return (
            <View>
                <Text> Search Agency </Text>
            </View>
        )
    }
}

export default SearchAgency
