import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff6d7;
    height: 150px;
    box-shadow: 10px 5px 5px black;
    width:40%;
`

const Title = styled.Text`
    font-size: 24px;
    font-weight: 500;
    color: palevioletred;
`

export class AdoptionProcessCard extends Component {
    render() {
        return (
            <StyledView>
                <Title> {this.props.title} </Title>
            </StyledView>
        )
    }
}

export default AdoptionProcessCard
