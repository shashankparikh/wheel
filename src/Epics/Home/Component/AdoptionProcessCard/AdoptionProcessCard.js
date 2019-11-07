import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
    background-color: #fff6d7;
    height: 120px;
    elevation : 5;
    shadow-offset: {width: 0, height: 8};
    width:120px;
    align-items: center;
    justify-content: center;
    border-top-left-radius:50px;
    margin : 20px 15px 20px 15px
`

const Title = styled.Text`
    text-align : center;
    font-weight : 600;
    padding : 10px;
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
