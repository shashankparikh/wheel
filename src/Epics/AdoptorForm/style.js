import styled from 'styled-components'

export const Container = styled.ScrollView`
  background-color: #fff8ea;
  padding: 20px 20px;
  flex: 1;
`

export const InputContainer = styled.View`
  border: 1px solid black;
  border-radius: 50px;
  padding: 12px 20px;
  margin-bottom: 20px;
  max-width: 350px;
`
export const PickerContainer = styled.View`
  border: 1px solid black;
  border-radius: 50px;
  padding: 0px 20px;
  margin-bottom: 20px;
  max-width: 350px;
`

export const Title = styled.Text`
  font-size: 36;
  color: black;
  margin-bottom: 15px;
  font-weight: 900;
`

export const Description = styled.Text`
  background-color: #fff8ea;
  font-size: 16;
  margin-bottom: 20px;
`

export const Button = styled.TouchableOpacity`
  margin: 0px 10px 50px 5px;
  border-radius: 50px;
  elevation: 5;
  text-align: center;
  max-width: 150px;
  background-color: #ffef00;
  padding: 15px 28px;
`

export const ButtonText = styled.Text`
  font-size: 14;
  text-align: center;
  font-weight: 600;
`

export const InputField = styled.TextInput`
  font-size: 16;
`

export const PickerField = styled.TextInput`
  font-size: 18;
`
