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

export default class Documents extends Component {
  constructor (props) {
    super(props)
    this.state = {
      documentData: ''
    }
  }
  componentWillMount () {
    const docData = this.props.navigation.state.params.dataID
    this.setState({ documentData: docData })
  }

  componentWillReceiveProps (nextProps) {
    if (this.props !== nextProps) {
      const docData = nextProps.navigation.state.params.dataID
      this.setState({ documentData: docData })
    }
  }

  render () {
    const { documentData } = this.state
    return (
      <MainContainer>
        {documentData.documentData.map((item, index) => {
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
