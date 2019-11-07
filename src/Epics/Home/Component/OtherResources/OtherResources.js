import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.View`
    height : 90px;
    background color : #fef4d9;
    elevation : 5;
    shadow-offset: {width: 0, height: 8};
    flex : 1;
    justify-content: center;
    margin-left: 10px;
    border-radius: 10px;
    margin-right: 10px;
    shadow-offset: {width: 0, height: 8};
`
const TitleImage = styled.Image`
text-align: left;
margin-left : 10px;
margin-bottom : 5px;
`

const Title = styled.Text`
font-size : 12px;
padding-left : 10px;
font-weight : 600;
color: #cfaa30;
text-transform: uppercase;
text-align: left;
`


export class OtherResources extends Component {
    render() {
        return (
            <Container>
                <TitleImage style={{ width: 30, height: 35 }} source={require('../../../../../assets/councelling.png')} />
                <Title> {this.props.title} </Title>
            </Container>
        )
    }
}

export default OtherResources
