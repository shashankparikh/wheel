import React, { Component } from 'react'
import { Text, View, ScrollView, TextInput } from 'react-native'
import styled from 'styled-components/native'

const Container = styled.ScrollView`
    background-color: #fff8ea;
    padding : 20px 20px;
    flex : 1;
`

const InputContainer = styled.View`
    border : 1px solid black;
    border-radius : 50px;
    padding : 12px 20px;
    margin-bottom : 20px;
    max-width : 350px;
`

const Title = styled.Text`
    font-size: 36;
    color : black ;
    margin-bottom : 15px;
    font-weight : 900;
`

const Description = styled.Text`
    background-color: #fff8ea;
    font-size: 16;
    margin-bottom : 20px;
`

const Button = styled.View`
    margin : 0px 10px 10px 5px;
    border-radius: 50px;
    elevation : 5;
    text-align : center;
    max-width : 150px;
    background-color : #ffef00;
    padding : 15px 28px;
`

const ButtonText = styled.Text`
    font-size : 14;
    text-align : center;
    font-weight : 600;
`

const InputField = styled.TextInput`
    font-size : 16;
`

const PickerField = styled.TextInput`
    font-size : 18;
`


export class AdoptorForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: 'your name',
            gender: 'select gender',
            age: 'your age',
            category: 'select category',
            city: 'enter city',
            remark: 'your preference/remarks',
        };
    }

    static navigationOptions = {
        // To set the header image and title for the current Screen
        title: 'Adoptor Form ',
        drawerIcon: ({ tintColor }) => (
            <Icon name='home' style={{ fontSize: 24, color: tintColor }} />
        )
    }

    render() {
        return (
            <Container>
                <Title> Amazing thought! </Title>
                <Description> Let’s start by filling up the form. We will share the details with Child Care Agencies of India. </Description>
                <InputContainer>
                    <InputField
                        onChangeText={name => this.setState({ name })}
                        value={this.state.name} />
                </InputContainer>
                <InputContainer>
                    <InputField
                        onChangeText={gender => this.setState({ gender })}
                        value={this.state.gender} />
                </InputContainer>
                <InputContainer>
                    <InputField
                        onChangeText={age => this.setState({ age })}
                        value={this.state.age} />
                </InputContainer>
                <InputContainer>
                    <InputField
                        onChangeText={category => this.setState({ category })}
                        value={this.state.category} />
                </InputContainer>
                <InputContainer>
                    <InputField
                        onChangeText={remark => this.setState({ remark })}
                        value={this.state.remark} />
                </InputContainer>
                <InputContainer>
                    <InputField
                        onChangeText={city => this.setState({ city })}
                        value={this.state.city} />
                </InputContainer>
                <Button>
                    <ButtonText>SUBMIT</ButtonText>
                </Button>
            </Container>
        )
    }
}

export default AdoptorForm