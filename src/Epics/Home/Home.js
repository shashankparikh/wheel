import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { AdoptionProcessCard } from './Component/AdoptionProcessCard/AdoptionProcessCard';

export class Home extends Component {
    render() {
        return (
            <View>
                <AdoptionProcessCard title="NRI/Indian Living Abroad"/>
                <AdoptionProcessCard title="NRI/Indian Living Abroad"/>
            </View>
        )
    }
}

export default Home
