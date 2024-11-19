import React from 'react';
import SplashScreen from '../screens/SplashScreen/index';
import HomeScreen from '../screens/HomeScreen/index';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calen from '../screens/HomeScreen/Calen'
import Menu from '../screens/HomeScreen/Menu';
import AddScreen from '../screens/AddScreen';
import ShowExpenses from '../screens/ShowExpenses';


const Stack = createNativeStackNavigator();

const NativeStack = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name="AddScreen" component={AddScreen} options={{gestureEnabled: false}}/>
                <Stack.Screen name="ShowExpenses" component={ShowExpenses} options={{gestureEnabled: false}}/>
                {/* <Stack.Screen name="Menu" component={Menu}/> */}
                <Stack.Screen name="SplashScreen" component={SplashScreen} options={{gestureEnabled: false}}/>
                <Stack.Screen name="HomeScreen" component={HomeScreen} options={{gestureEnabled: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NativeStack;
