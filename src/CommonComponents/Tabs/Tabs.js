import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { DrawerActions } from 'react-navigation';
import { View, Text, StyleSheet, Platform, TouchableOpacity, Image, StatusBar } from 'react-native';
import Documents from './Components/Documents/Documents'
import Eligibility from './Components/Eligibility/Eligibility'
import Guidelines from './Components/Guidelines/Guidelines'

const Tabs = createMaterialTopTabNavigator(
    {
        Documents: { screen: Documents },
        Eligibility: { screen: Eligibility },
        Guidelines: { screen: Guidelines }
    },
    {
        tabBarOptions: {
            activeTintColor: '#000',
            inactiveTintColor: 'gray',
            style: {
                backgroundColor: '#fff8ea',
                border: "0px solid #fff8ea"
            },
            indicatorStyle: {
                backgroundColor: '#ead912',
                height: 3,
            },
        }
    }, {
        order: [Documents, Guidelines, Eligibility],
        animatinEnabled: true
    });

export default Tabs