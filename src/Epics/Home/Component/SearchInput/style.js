import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

export const SearchAgencyContainer = styled.View`
  flex-direction: row;
  margin-left: 10px;
  justify-content: flex-start;
`

export const PickerContainer = styled.View`
  border: 1px solid black;
  padding: 0px 10px;
  width: 200px;
  flex: 2;
  border-radius: 10px;
`
export const SearchButtonIcon = styled(FontAwesome)`
  color: black;
  margin-right: 10px;
`

export const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 500;
`

export const MenuButton = styled.TouchableOpacity`
  margin: 0px 10px;
  border-radius: 10px;
  justify-content: center;
  elevation: 5;
  flex-direction: row;
  flex: 1;
  background-color: #ffef00;
  padding: 15px 28px;
`
