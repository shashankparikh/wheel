import styled from 'styled-components'
import { FontAwesome } from '@expo/vector-icons'

export const MenuItemContainer = styled.TouchableOpacity`
  padding: 15px 10px;
  display: flex;
  align-items: center;
  border-bottom-width: 1;
  border-bottom-color: #c4b812;
  border-style: dotted;
  border-radius: 5;
  flex-direction: row;
`

export const MenuTitle = styled.Text`
  font-size: 18px;
  font-weight: 600;
`

export const MenuIcon = styled(FontAwesome)`
  color: black;
  margin-right: 10px;
`

export const MenuContainer = styled.View`
  background-color: #ead912;
  flex: 1;
  align-items: center;
  justify-content: center;
`

export const CloseIconContainer = styled.View`
  margin-bottom: 30px;
  padding: 20px;
`

export const MenuButton = styled.TouchableOpacity`
  margin: 20px 10px;
  border-radius: 50px;
  elevation: 5;
  background-color: #ffef00;
  padding: 15px 28px;
`

export const ButtonText = styled.Text`
  font-size: 14;
  font-weight: 600;
`
