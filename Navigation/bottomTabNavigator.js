import React from 'react';
import CreateStory from '../Screens/createStory';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feed from '../Screens/feed';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import { RFValue } from 'react-native-responsive-fontsize'
import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    bottomTabStyle: {
        backgroundColor: "#2f345d",
        height: "8%",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
        position: "absolute"
    },
    icons: { width: RFValue(30), height: RFValue(30) }
});


const Tab = createMaterialBottomTabNavigator()

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator labeled={false} barStyle = {styles.bottomTabStyle} tabBarOptions={{ activeTintColor: 'tomato', inactiveTintColor: 'grey' }}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;
                    if (route.name === 'Feed') { iconName = focused ? 'book' : 'book-outline'; }
                    else if (route.name === 'CreateStory') { iconName = focused ? 'create' : 'create-outline'; }
                    return <Ionicons name={iconName} size={RFValue[25]} color={color} />;
                },
            })}>
            <Tab.Screen name='CreateStory' component={CreateStory} />
            <Tab.Screen name='Feed' component={Feed} />
        </Tab.Navigator>
    )
}

export default BottomTabNavigator