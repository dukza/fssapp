import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Detail from './../screens/Detail'
import Tabs from './Tabs';

const Stack = createStackNavigator();

export default () => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: "white",
                    borderBottomColor: "white",
                    shadowColor: "white",
                },
                headerTintColor: "black",
                headerBackTitleVisible: false
            }}
        >
            <Stack.Screen name="Tabs" component={Tabs} />
            <Stack.Screen name="Detail" component={Detail} />
        </Stack.Navigator>
    )
}