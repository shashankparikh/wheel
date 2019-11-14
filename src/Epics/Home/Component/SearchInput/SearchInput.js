import React, { Component } from 'react'
import { Text, View, Picker, Linking } from 'react-native'
import styled from 'styled-components/native'
import { FontAwesome } from '@expo/vector-icons'
import { state } from './StateData'

const SearchAgencyContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  justify-content: flex-start;
`

const PickerContainer = styled.View`
  border: 1px solid black;
  padding: 0px 10px;
  width: 200px;
  flex: 2;
  border-radius: 10px;
`
const SearchButtonIcon = styled(FontAwesome)`
  color: black;
  margin-right: 10px;
`

const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 500;

`

const MenuButton = styled.TouchableOpacity`
  margin: 0px 10px;
  border-radius: 10px;
  justify-content: center;
  elevation: 5;
  flex-direction: row;
  flex: 1;
  background-color: #ffef00;
  padding: 15px 28px;
`

export class SearchInput extends Component {
  state = {
    selectedArea: 'AN',
    stateData: []
  }
  openSearchResult = () => {
    Linking.openURL('https://carings.nic.in/parents/searchagencynew.aspx?state=' + this.state.selectedArea)
  }

  render() {
    console.log(this.state.selectedArea, "selectedarea")
    return (
      <SearchAgencyContainer>
        <PickerContainer>
          <Picker
            style={{ height: 40 }}
            itemStyle={{ height: 40 }}
            selectedValue={this.state.selectedArea}
            onValueChange={selectedArea => this.setState({ selectedArea })}
            mode='dialog'
          >
            {state.map((item, index) => {
              return <Picker.Item label={item.name} value={item.code} />
            })}
          </Picker>
        </PickerContainer>
        <MenuButton onPress={this.openSearchResult}>
          <SearchButtonIcon name='search' size={18} color='black' />
          <ButtonText>Search</ButtonText>
        </MenuButton>
      </SearchAgencyContainer>
    )
  }
}

export default SearchInput
