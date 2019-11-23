import React, { Component } from 'react'
import { StyledView, Title } from './style'

export class AdoptionProcessCard extends Component {
  render () {
    return (
      <StyledView onPress={this.props.onClick}>
        <Title> {this.props.title} </Title>
      </StyledView>
    )
  }
}

export default AdoptionProcessCard
