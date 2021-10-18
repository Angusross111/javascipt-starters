import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons.loadFont();

import LoginScreen from "../screens/LoginScreen";
import ScreenNavigation from "./ScreenNavigation";
const Stack = createStackNavigator();

import { useAuthState } from "../context/AuthProvider";

import Reports from "../screens/Reports";
import Search from "../screens/Search";

export default function Navigation(): JSX.Element {
    let { userToken, isSignout } = useAuthState();
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="LoginScreen">
                {!userToken ? (
                    <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen} // LoginScreen
                        options={{
                            headerShown: false,
                            title: "Sign in",
                            animationTypeForReplace: isSignout ? "pop" : "push",
                        }}
                    />
                ) : (
                    <>
                        <Stack.Screen
                            name="Robots"
                            component={ScreenNavigation}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name="Reports"
                            component={Reports}
                            options={({ route, navigation }) => ({
                                title: route.params.robot,
                                headerRight: () => (
                                    <MaterialCommunityIcons
                                        name="magnify"
                                        size={30}
                                        onPress={() => navigation.navigate("Search")}
                                    />
                                ),
                            })}
                        />
                        <Stack.Screen name="Search" component={Search} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}
