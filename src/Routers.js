import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Introduction, Jobs, SavedJobs } from './pages';

const Stack = createStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator 
            initialRouteName="Introduction" 
            screenOptions={{headerShown:false}}
            >
                <Stack.Screen name="Introduction" component={Introduction}/>
                <Stack.Screen name="Jobs" component={Jobs} />
                <Stack.Screen name="SavedJobs" component={SavedJobs} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;