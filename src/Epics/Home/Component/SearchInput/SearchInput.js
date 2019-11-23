import React, { Component } from 'react'
import { Text, View, Picker, Linking } from 'react-native'
import styled from 'styled-components/native'
import { state } from './StateData'
import {
  SearchAgencyContainer,
  PickerContainer,
  SearchButtonIcon,
  ButtonText,
  MenuButton
} from './style'

export class SearchInput extends Component {
  state = {
    selectedArea: 'AN',
    stateData: []
  }
  openSearchResult = () => {
    Linking.openURL(
      'https://carings.nic.in/parents/searchagencynew.aspx?state=' +
        this.state.selectedArea
    )
  }

  render () {
    console.log(this.state.selectedArea, 'selectedarea')
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
