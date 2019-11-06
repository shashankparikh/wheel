import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styled from 'styled-components/native'

const StyledView = styled.View`
  background-color: #fff6d7;
  height: 200px;
  box-shadow: 10px 5px 5px black;
  width:40%;
`

export class AdoptionProcessCard extends Component {
    render() {
        return (
            <StyledView>
                <Text> {this.props.title} </Text>
            </StyledView>
        )
    }
}

export default AdoptionProcessCard
