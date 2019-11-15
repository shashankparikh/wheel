import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'
import styled from 'styled-components/native'
import { AdoptionProcessData } from '../../AdoptionProcessData'

const Container = styled.View`
  flex-direction: row;
  width: 90%;
  padding: 10px 10px 0px 10px;
`

const MainContainer = styled.ScrollView`
  background-color: #fff8ea;
  flex: 1;
`

const IndexContainer = styled.View`
  margin-left: 10px;
  margin-bottom: 10px;
`

const DescriptionContainer = styled.View`
  margin-left: 10px;
  margin-bottom: 10px;
`

const Index = styled.Text`
  margin-left: 10px;
  margin-bottom: 10px;
`

const Description = styled.Text`
  margin-left: 10px;
  margin-bottom: 10px;
`

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
