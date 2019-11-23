import React, { Component } from 'react'
import { Text, View, Image, TouchableOpacity, Linking } from 'react-native'
import styled from 'styled-components/native'
import { Container, TitleImage, Title } from './style'

export class OtherResources extends Component {
  openPage = () => {
    Linking.openURL(this.props.url)
  }

  render () {
    return (
      <Container onPress={this.openPage}>
        <TitleImage
          style={{ width: 26, height: 26 }}
          source={this.props.image}
        />
        <Title> {this.props.title} </Title>
      </Container>
    )
  }
}

export default OtherResources
