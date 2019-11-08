import React, { Component } from 'react'
import { Text, View, ScrollView, Linking } from 'react-native'
import { AdoptionProcessCard } from './Component/AdoptionProcessCard/AdoptionProcessCard'
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
        title: 'Home Activity',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
    }
    onCardClick=()=>{
        console.log("dsfgh")
        this.props.navigation.navigate('tabScreenStack')
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
                    <AdoptionProcessCard title="NRI/Indian Living Abroad" onClick={this.onCardClick}/>
                    <AdoptionProcessCard title="Foreigner Living Abroad" onClick={this.onCardClick}/>
                    <AdoptionProcessCard title="Foreigner Living Abroad" onClick={this.onCardClick}/>
                    <AdoptionProcessCard title="Foreigner Living Abroad" onClick={this.onCardClick}/>
                    <AdoptionProcessCard title="Foreigner Living Abroad" onClick={this.onCardClick}/>

                </ScrollView>
                <SecondaryTitle>Search Agencies</SecondaryTitle>
                <SearchAgencyContainer>
                    <SearchInput />
                </SearchAgencyContainer>
                <SecondaryTitle>Know More About C.A.R.A.</SecondaryTitle>
                <KnowMoreContainer>
                    <KnowMore onPress={this.openPage} title="Website" width="29" height="28" color="#fed9d9" textColor="#b64129" image={require('../../../assets/website.png')} />
                    <KnowMore title="Call" width="25" height="25" color="#dfd9ff" textColor="#5739be" image={require('../../../assets/call.png')} />
                    <KnowMore title="Email" width="26" height="20" color="#dbfbc3" textColor="#6aa53d" image={require('../../../assets/email.png')} />
                </KnowMoreContainer>
                <SecondaryTitle>Other Resources</SecondaryTitle>
                <OtherResourcesContainer>
                    <OtherResources image={require('../../../assets/councelling.png')} title="Adoption Councelling" />
                    <OtherResources image={require('../../../assets/statistics.png')} title="Adoption Statistics" />
                    <OtherResources image={require('../../../assets/success.png')} title="Success Stories" />
                </OtherResourcesContainer>
            </Container>
        )
    }
}

export default Home
