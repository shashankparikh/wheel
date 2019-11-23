import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { AdoptionProcessData } from '../../AdoptionProcessData'
import {
  Container,
  MainContainer,
  IndexContainer,
  DescriptionContainer,
  Index,
  Description
} from '../../style'

export default class Guidelines extends Component {
  constructor (props) {
    super(props)
    this.state = {
      guidelinesData: ''
    }
  }
  componentWillMount () {
    const guideData = this.props.navigation.state.params.dataID
    this.setState({ guidelinesData: guideData })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      const guideData = nextProps.navigation.state.params.dataID
      this.setState({ guidelinesData: guideData })
    }
  }
  render () {
    const { guidelinesData } = this.state
    return (
      <MainContainer>
        {guidelinesData.guidelinesData.map((item, index) => {
          return (
            <Container>
              <IndexContainer>
                <Index>{item.Index}</Index>
              </IndexContainer>
              <DescriptionContainer>
                <Description>{item.details}</Description>
              </DescriptionContainer>
            </Container>
          )
        })}
      </MainContainer>
    )
  }
}
