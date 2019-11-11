import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { AdoptionProcessData } from '../../AdoptionProcessData';

const Container = styled.View`
flex-direction : row;
padding : 10px 10px 0px 10px
`

const MainContainer = styled.ScrollView`
background-color: #fff8ea;
    flex : 1;
`

const IndexContainer = styled.View`
margin-left : 10px;
margin-bottom : 10px;
`

const DescriptionContainer = styled.View`
margin-left : 10px;
margin-bottom : 10px;
`

const Index = styled.Text`
margin-left : 10px;
margin-bottom : 10px;
`

const Description = styled.Text`
margin-left : 10px;
margin-bottom : 10px;
`

export default class Documents extends Component {
    render() {
        return (
            <MainContainer>
                {AdoptionProcessData.map((item, index) => {
                    return <Container>
                        <IndexContainer>
                            <Index>{item.Index}</Index>
                        </IndexContainer>
                        <DescriptionContainer>
                            <Description>{item.details}</Description>
                        </DescriptionContainer></Container>
                })}
            </MainContainer>
        )
    }
}
