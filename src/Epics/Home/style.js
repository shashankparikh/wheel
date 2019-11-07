import styled from 'styled-components';
import { View ,Text,ScrollView} from 'react-native'

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
    margin : 0px 10px 10px 10px   
`
const SecondaryTitle = styled.Text`
    background-color: #fff8ea;
    font-size: 26px;
    padding : 10px 20px 5px 20px;
    font-weight : 600;
`