import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import styled from 'styled-components/native'
import { TitleImage } from './style'

export class KnowMore extends Component {
  openPage = () => {
    Linking.openURL(this.props.url)
  }

  render () {
    const Container = styled.TouchableOpacity`
            height : 90px;
            background: ${props => this.props.color};
            elevation : 5;
            shadow-offset: {width: 0, height: 8};
            flex : 1;
            justify-content: center;
            margin-left: 10px;
            border-radius: 10px;
            margin-right: 10px;
            shadow-offset: {width: 0, height: 8};
        `

    const Title = styled.Text`
      font-size: 12px;
      padding-left: 10px;
      font-weight: 600;
      color: ${props => this.props.textColor};
      text-transform: uppercase;
      text-align: left;
    `
    let Width = Number(this.props.width)
    let Height = Number(this.props.height)
    return (
      <Container onPress={this.openPage}>
        {/* <TitleImage style={{ width: 30, height: 35 }} source={require('../../../../../assets/councelling.png')} /> */}
        <TitleImage
          style={{ width: Width, height: Height }}
          source={this.props.image}
        />
        <Title> {this.props.title} </Title>
      </Container>
    )
  }
}

export default KnowMore
