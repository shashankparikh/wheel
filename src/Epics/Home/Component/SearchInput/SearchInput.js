import React, { Component } from 'react'
import { Text, View, Picker } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons';

const SearchAgencyContainer = styled.View`
flex-direction : row;
margin-left : 20px;
justify-content : flex-start;
`

const PickerContainer = styled.View`
border : 1px solid black;
padding : 0px 10px;
width : 200px;
flex : 1.25;
border-radius : 10px;
`
const SearchButtonIcon = styled(FontAwesome)`
 color: black;
 margin-right : 10px;
`

const ButtonText = styled.Text`
  font-size : 14;
  font-weight : 500;
`

const MenuButton = styled.View`
  margin : 0px 10px;
  border-radius: 10px;
  justify-content: center;
  elevation : 5;
  flex-direction : row;
  flex : 1;
  background-color : #ffef00;
  padding : 15px 28px;
`

export class SearchInput extends Component {
    state = {
        selectedArea: 'default',
    }

    render() {
        return (
            <SearchAgencyContainer >
                <PickerContainer >
                    <Picker
                        selectedValue={this.state.selectedArea}
                        onValueChange={selectedArea => this.setState({ selectedArea })}
                        mode="dropdown"
                    >
                        <Picker.Item label="Select State" value="default" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </PickerContainer>
                <MenuButton>
                    <SearchButtonIcon name="search" size={18} color="black" />
                    <ButtonText>
                        Search .
                    </ButtonText>
                </MenuButton>
            </SearchAgencyContainer>
        )
    }
}

export default SearchInput
