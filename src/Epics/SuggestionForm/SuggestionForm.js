import React, { Component } from 'react'
import axios from 'axios'
import {
  Text,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ActivityIndicator,
  Picker
} from 'react-native'
import styled from 'styled-components/native'
import {
  Container,
  InputContainer,
  PickerContainer,
  Title,
  Description,
  Button,
  ButtonText,
  InputField,
  PickerField
} from './style'

export class AdoptorForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      remark: '',
      showProgress: false
    }
  }

  static navigationOptions = {
    // To set the header image and title for the current Screen
    title: 'Adoptor Form ',
    drawerIcon: ({ tintColor }) => (
      <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
    )
  }

  submitForm = () => {
    const formData = {
      name: this.state.name,
      email: this.state.email,
      remark: this.state.remark
    }


    this.postSuggetionData(formData)
    this.setState({ showProgress: true })
  }

  postSuggetionData = async data => {
    try {
      let response = await axios.post(
        'http://192.168.1.8:5000/suggestionFormData/addData',
        data
      )
      this.success(response)
    } catch (error) {
      this.error(error)
    }
  }

  success = response => {
    this.setState({ showProgress: false })
    ToastAndroid.show(
      'Your Data is successfully submitted!!',
      ToastAndroid.SHORT
    )
    this.setState({
      name: '',
      remark: '',
      email: ''
    })
  }

  error = error => {
    this.setState({ showProgress: false })
    alert('error ' + error)
  }

  render () {
    return (
      <Container>
        <Title> Your Suggestions are valuable! </Title>
        <Description>
          {' '}
          We will make sure to take your suggestions into consideration and do
          the needful.{' '}
        </Description>
        <InputContainer>
          <InputField
            onChangeText={name => this.setState({ name })}
            placeholder='your name'
            autoFocus='true'
            value={this.state.name}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={email => this.setState({ email })}
            placeholder='your email'
            value={this.state.email}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={remark => this.setState({ remark })}
            placeholder='your preference/remarks'
            value={this.state.remark}
          />
        </InputContainer>

        <Button onPress={this.submitForm}>
          {this.state.showProgress ? (
            <ActivityIndicator animating size='small' color='black' />
          ) : (
            <ButtonText>SUBMIT</ButtonText>
          )}
        </Button>
      </Container>
    )
  }
}

export default AdoptorForm
