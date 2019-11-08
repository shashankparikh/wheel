import React, { Component } from 'react'
import { Text, View, Image, ScrollView } from 'react-native'
import styled from 'styled-components/native'



const Container = styled.View`
    align-items : center;
    padding : 0px 30px;
    background-color : #fff8ea;;
    flex : 1;
`

const TitleImage = styled.Image`
margin-left : 10px;
margin-bottom : 40px;
margin-top : 30px;
`
const TitleText = styled.Text`
    font-size : 18px;
    margin-bottom : 10px;
`

export class AboutUs extends Component {

    static navigationOptions = {
        // To set the header image and title for the current Screen
        title: 'About Us',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
    }
    render() {
        return (
            <Container>
                <ScrollView centerContent contentContainerStyle={{ alignItems: "center", flex: 1, width: "100%" }} >
                    <TitleImage style={{ width: 150, height: 150 }} source={require('../../../assets/logo.png')} />
                    <TitleText>International Inner Wheel is the administrative body that acts as the umbrella for the organisation worldwide. We are one of the largest women’s service voluntary organisations in the world and are active in more than 104 countries. We have more than 108,000 members in 3,895 Clubs. It has an Executive Committee of 5 elected members and 16 elected Board Directors. They look after the organisation. There is a small office with one full time employee.</TitleText>
                    <TitleText>Every three years there is an International Triennial Convention organised by a hosting country committee and the IIW Governing Body where changes to the constitution are discussed and voted upon by the membership.</TitleText>
                    <TitleText>Personal service is a top priority and members find many ways to carry out projects in their local communities. They provide help in hospitals, hospices, care homes, schools, entertain the elderly and lonely and offer help to needy children and the disabled.</TitleText>
                </ScrollView>
            </Container>
        )
    }
}

export default AboutUs
