import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import { AdoptionProcessCard } from './Component/AdoptionProcessCard/AdoptionProcessCard'
import styled from 'styled-components/native'
import { OtherResources } from './Component/OtherResources/OtherResources';

const Container = styled.ScrollView`
    background-color: #fff8ea;
    flex : 1;
`

const TitleTop = styled.Text`
    background-color: #fff8ea;
    font-size: 36px;
    padding : 20px 20px 10px 20px;
    font-weight : 600;
`

const SubTitleTop = styled.Text`
    background-color: #fff8ea;
    font-size: 12px;
    padding : 0px 20px;
    font-weight : 100;
`
const OtherResourcesContainer = styled.View`
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin : 0px 10px 10px 10px   
`
const SecondaryTitle = styled.Text`
    background-color: #fff8ea;
    font-size: 26px;
    padding : 10px 20px 5px 20px;
    font-weight : 600;
`

export class Home extends Component {
    static navigationOptions = {
        // To set the header image and title for the current Screen
        title: 'Home Activity',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
                <TitleTop>Looking for Adoption Process?</TitleTop>
                <SubTitleTop>Select Category</SubTitleTop>
                <ScrollView horizontal={true} alwaysBounceHorizontal={true}>
                    <AdoptionProcessCard title="NRI/Indian Living Abroad" />
                    <AdoptionProcessCard title="Foreigner Living Abroad" />
                    <AdoptionProcessCard title="Foreigner Living Abroad" />
                    <AdoptionProcessCard title="Foreigner Living Abroad" />
                    <AdoptionProcessCard title="Foreigner Living Abroad" />
                    <AdoptionProcessCard title="Foreigner Living Abroad" />
                </ScrollView>
                <SecondaryTitle>Search Agencies</SecondaryTitle>
                <SecondaryTitle>Know More About C.A.R.A.</SecondaryTitle>
                <SecondaryTitle>Other Resources</SecondaryTitle>
                <OtherResourcesContainer>
                    <OtherResources image="../../../../../assets/councelling.png" title="Adoption Councelling" />
                    <OtherResources image="../../../../../assets/councelling.png" title="Adoption Statistics" />
                    <OtherResources image="../../../../../assets/councelling.png" title="Success Stories" />
                </OtherResourcesContainer>
            </Container>
        )
    }
}

export default Home
