import React, { Component } from 'react'
import { Text, View, ScrollView, Linking } from 'react-native'
import { AdoptionProcessCard } from './Component/AdoptionProcessCard/AdoptionProcessCard'
import {AdoptionProcessData} from '../../CommonComponents//Tabs/AdoptionProcessData'
import styled from 'styled-components/native'
import { OtherResources } from './Component/OtherResources/OtherResources';
import { KnowMore } from './Component/KnowMore/KnowMore';
import { SearchInput } from './Component/SearchInput/SearchInput';

const Container = styled.ScrollView`
    background-color: #fff8ea;
    flex : 1;
`

const TitleTop = styled.Text`
    background-color: #fff8ea;
    font-size: 36px;
    padding : 20px 20px 10px 20px;
    font-weight : 600;
`

const SubTitleTop = styled.Text`
    background-color: #fff8ea;
    font-size: 12px;
    padding : 0px 20px;
    font-weight : 100;
`
const OtherResourcesContainer = styled.View`
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin : 10px 10px 20px 10px   
`

const KnowMoreContainer = styled.View`
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin : 10px 10px 10px 10px   
`

const SearchAgencyContainer = styled.View`
    display : flex;
    flex-direction : row;
    align-items: center;
    justify-content: center;
    margin : 0px 10px 10px 10px   
`

const SecondaryTitle = styled.Text`
    background-color: #fff8ea;
    font-size: 26px;
    padding : 20px 20px 5px 20px;
    font-weight : 600;
`

export class Home extends Component {
    static navigationOptions = {
        // To set the header image and title for the current Screen
        title: 'Home',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
    }
    onCardClick = (data) => {
        console.log(data,"data")
     
        this.props.navigation.navigate('Eligibility', {
            dataID: data,
        })
        this.props.navigation.navigate('Guidelines', {
            dataID: data,
        })
        this.props.navigation.navigate('Documents', {
            dataID: data,
        })
    }
    openPage = () => {
        Linking.openURL('https://google.com')
    }

    render() {
        return (
            <Container>
                <TitleTop>Looking for Adoption Process?</TitleTop>
                <SubTitleTop>Select Category</SubTitleTop>
                <ScrollView horizontal={true} alwaysBounceHorizontal={true}>
                    <AdoptionProcessCard title="NRI/Indian Living Abroad" onClick={()=>this.onCardClick(AdoptionProcessData[0].nriData)} />
                    <AdoptionProcessCard title="Relative Adoption" onClick={()=>this.onCardClick(AdoptionProcessData[1].relativeData)} />
                    <AdoptionProcessCard title="Adoption by Step Parent" onClick={()=>this.onCardClick(AdoptionProcessData[2].adoptionData)} />
                    <AdoptionProcessCard title="Foreigner Living Abroad" onClick={()=>this.onCardClick(AdoptionProcessData[3].abroadData)} />
                    <AdoptionProcessCard title="Foreigner Living in India" onClick={()=>this.onCardClick(AdoptionProcessData[4].indiaData)} />

                </ScrollView>
                <SecondaryTitle>Search Agencies</SecondaryTitle>
                <SearchAgencyContainer>
                    <SearchInput />
                </SearchAgencyContainer>
                <SecondaryTitle>Know More About C.A.R.A.</SecondaryTitle>
                <KnowMoreContainer>
                    <KnowMore url="http://cara.nic.in/" title="Website" width="29" height="28" color="#fed9d9" textColor="#b64129" image={require('../../../assets/website.png')} />
                    <KnowMore url="tel:1800-11-1311" title=" Call" width="25" height="25" color="#dfd9ff" textColor="#5739be" image={require('../../../assets/call.png')} />
                    <KnowMore url="mailto: carahdesk.wcd@nic.in" title=" Email" width="26" height="20" color="#dbfbc3" textColor="#6aa53d" image={require('../../../assets/email.png')} />
                </KnowMoreContainer>
                <SecondaryTitle>Other Resources</SecondaryTitle>
                <OtherResourcesContainer>
                    <OtherResources url="https://carings.nic.in/Counselling2/Counselling.htm" image={require('../../../assets/councelling.png')} title="Adoption Councelling" />
                    <OtherResources url="http://cara.nic.in/resource/adoption_Stattistics.html" image={require('../../../assets/statistics.png')} title="Adoption Statistics" />
                    <OtherResources url="http://cara.nic.in/glimpse/sucess_story.html" image={require('../../../assets/success.png')} title="Success Stories" />
                </OtherResourcesContainer>
            </Container>
        )
    }
}

export default Home
