import React, { Component } from 'react'
import axios from 'axios'
import {
  Text,
  View,
  ScrollView,
  Linking,
  ActivityIndicator
} from 'react-native'
import { AdoptionProcessCard } from './Component/AdoptionProcessCard/AdoptionProcessCard'
import { AdoptionProcessData } from '../../CommonComponents//Tabs/AdoptionProcessData'
import styled from 'styled-components/native'
import { OtherResources } from './Component/OtherResources/OtherResources'
import { KnowMore } from './Component/KnowMore/KnowMore'
import { SearchInput } from './Component/SearchInput/SearchInput'
import { config } from './config'
import {
  Container,
  TitleTop,
  SubTitleTop,
  OtherResourcesContainer,
  KnowMoreContainer,
  SearchAgencyContainer,
  SecondaryTitle
} from './style'

export class Home extends Component {
  static navigationOptions = {
    // To set the header image and title for the current Screen
    title: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
    )
  }

  state = {
    tabsData: '',
    AdoptionProcessData: '',
    showProgress: false
  }

  // populateProcessCard = () => {
  //   config.map((obj, index) => {
  //     return (
  //       <AdoptionProcessCard
  //         title={obj.title}
  //         onClick={() => this.onCardClick(AdoptionProcessData[0].nriData)}
  //       />
  //     )
  //   })
  // }

  componentDidMount () {
    axios
      .get('http://192.168.1.8:5000/processData')
      .then(res => this.success(res))
      .catch(err => this.error(err))
  }

  success = data => {
    console.log(data)
    this.setState({
      AdoptionProcessData: JSON.parse(
        JSON.stringify(data.data.AdoptionProcessData)
      ),
      showProgress: true
    })
  }

  error = err => {
    alert('Error' + err)
  }

  onCardClick = (data, index) => {
    data.map(obj => {
      JSON.parse(JSON.stringify(obj))
      if (obj.key === index) {
        this.setState({ tabsData: JSON.parse(JSON.stringify(obj.data)) }, () =>
          this.tabsNavigationData(this.state.tabsData)
        )
      }
    })
  }
  tabsNavigationData = data => {
    this.props.navigation.navigate('Eligibility', {
      dataID: data
    })
    this.props.navigation.navigate('Guidelines', {
      dataID: data
    })
    this.props.navigation.navigate('Documents', {
      dataID: data
    })
  }
  openPage = () => {
    Linking.openURL('https://google.com')
  }

  render () {
    const { AdoptionProcessData, showProgress } = this.state
    return (
      <Container>
        <TitleTop>Looking for Adoption Process?</TitleTop>
        <SubTitleTop>Select Category</SubTitleTop>
        <ScrollView horizontal alwaysBounceHorizontal>
          {showProgress ? (
            config.map(obj => {
              return (
                <AdoptionProcessCard
                  title={obj.title}
                  onClick={() => this.onCardClick(AdoptionProcessData, obj.key)}
                />
              )
            })
          ) : (
            <ActivityIndicator animating size='small' color='black' />
          )}
        </ScrollView>
        <SecondaryTitle>Search Agencies</SecondaryTitle>
        <SearchAgencyContainer>
          <SearchInput />
        </SearchAgencyContainer>
        <SecondaryTitle>Know More About C.A.R.A.</SecondaryTitle>
        <KnowMoreContainer>
          <KnowMore
            url='http://cara.nic.in/'
            title='Website'
            width='29'
            height='28'
            color='#fed9d9'
            textColor='#b64129'
            image={require('../../../assets/website.png')}
          />
          <KnowMore
            url='tel:1800-11-1311'
            title=' Call'
            width='25'
            height='25'
            color='#dfd9ff'
            textColor='#5739be'
            image={require('../../../assets/call.png')}
          />
          <KnowMore
            url='mailto: carahdesk.wcd@nic.in'
            title=' Email'
            width='26'
            height='20'
            color='#dbfbc3'
            textColor='#6aa53d'
            image={require('../../../assets/email.png')}
          />
        </KnowMoreContainer>
        <SecondaryTitle>Other Resources</SecondaryTitle>
        <OtherResourcesContainer>
          <OtherResources
            url='https://carings.nic.in/Counselling2/Counselling.htm'
            image={require('../../../assets/councelling.png')}
            title='Adoption Councelling'
          />
          <OtherResources
            url='http://cara.nic.in/resource/adoption_Stattistics.html'
            image={require('../../../assets/statistics.png')}
            title='Adoption Statistics'
          />
          <OtherResources
            url='http://cara.nic.in/glimpse/sucess_story.html'
            image={require('../../../assets/success.png')}
            title='Success Stories'
          />
        </OtherResourcesContainer>
      </Container>
    )
  }
}

export default Home
