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

export default class Eligibility extends Component {
  constructor (props) {
    super(props)
    this.state = {
      eligibilityData: ''
    }
  }
  componentWillMount () {
    const elgData = this.props.navigation.state.params.dataID
    this.setState({ eligibilityData: elgData })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      const elgData = nextProps.navigation.state.params.dataID
      this.setState({ eligibilityData: elgData })
    }
  }
  render () {
    const { eligibilityData } = this.state
    return (
      <MainContainer>
        {eligibilityData.eligibilityData.map((item, index) => {
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
