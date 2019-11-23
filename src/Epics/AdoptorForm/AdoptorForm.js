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
      gender: '',
      age: '',
      category: '',
      city: '',
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
      gender: this.state.gender,
      category: this.state.category,
      city: this.state.city,
      email: this.state.email,
      remark: this.state.remark,
      age: this.state.age
    }

    this.setState({ showProgress: true })
    this.postData(formData)
  }

  postData = async data => {
    try {
      let response = await axios.post(
        'http://192.168.1.8:5000/adopterFormData/addData',
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
      response.data,
      ToastAndroid.SHORT
    )
    this.setState({
      name: '',
      gender: '',
      age: '',
      category: '',
      city: '',
      remark: '',
      email: ''
    })
  }

  error = error => {
    this.setState({ showProgress: false })
    alert('error ' + error)
  }
  updateUser = gender => {
    this.setState({ gender: gender })
  }

  render () {
    return (
      <Container>
        <Title> Amazing thought! </Title>
        <Description>
          {' '}
          Let’s start by filling up the form. We will share the details with
          Child Care Agencies of India.{' '}
        </Description>
        <InputContainer>
          <InputField
            onChangeText={name => this.setState({ name })}
            placeholder='your name'
            //  autoFocus='true'
            value={this.state.name}
          />
        </InputContainer>
        <PickerContainer>
          <Picker
            selectedValue={this.state.gender}
            onValueChange={this.updateUser}
            style={{ height: 40 }}
            itemStyle={{ height: 40 }}
          >
            <Picker.Item label='Male' value='male' />
            <Picker.Item label='Female' value='female' />
            <Picker.Item label='Others' value='others' />
          </Picker>
        </PickerContainer>
        <InputContainer>
          <InputField
            onChangeText={age => this.setState({ age })}
            placeholder='your age'
            keyboardType='numeric'
            value={this.state.age}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={category => this.setState({ category })}
            placeholder='select category'
            value={this.state.category}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={city => this.setState({ city })}
            //  autoCapitalize='true'
            placeholder='enter city'
            value={this.state.city}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={remark => this.setState({ remark })}
            placeholder='your preference/remarks'
            value={this.state.remark}
          />
        </InputContainer>
        <InputContainer>
          <InputField
            onChangeText={email => this.setState({ email })}
            placeholder='your email'
            value={this.state.email}
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
