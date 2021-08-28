import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet, View } from "react-native";
import { Text as PaperText } from "react-native-paper";

import Background from "../components/Background";

import LoginScreen from "../screens/LoginScreen";
const Stack = createStackNavigator();

import { useAuthState } from "../context/AuthProvider";

function Dashboard({ navigation }: any) {
    return (
        <Background>
            <View style={styles.heading}>
                <PaperText>Dashboard</PaperText>
            </View>
        </Background>
    );
}

export default function Navigation(): JSX.Element {
    let { userToken, isSignout } = useAuthState();
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName="LoginScreen"
                screenOptions={{
                    headerShown: false,
                }}
            >
                {!userToken ? (
                    <Stack.Screen
                        name="LoginScreen"
                        component={Dashboard}
                        options={{
                            title: "Sign in",
                            animationTypeForReplace: isSignout ? "pop" : "push",
                        }}
                    />
                ) : (
                    <Stack.Screen name="Dashboard" component={Dashboard} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    heading: {
        padding: 50,
    },
});
