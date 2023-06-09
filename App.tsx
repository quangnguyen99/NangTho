import React from 'react';
import { Dimensions, Platform, StyleSheet } from 'react-native';
import RecipeDetailScreen from "./src/main/RecipeDetailScreen";
import WelcomeScreen from "./src/main/WelcomeScreen";
import HomeScreen from "./src/main/HomeScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
const { width: screenWidth } = Dimensions.get('window')
export type Props = {
  name: string;
  baseEnthusiasmLevel?: number;
};

const App = (): React.ReactElement => {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                    headerShown: false
                    }}>
                    {/* <Stack.Screen name="Welcome" component={WelcomeScreen} /> */}
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="Item" component={RecipeDetailScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
};

const styles = StyleSheet.create({
});

export default App;