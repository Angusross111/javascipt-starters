import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AntDesign from "react-native-vector-icons/AntDesign";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import Background from "../components/Background";
import Robots from "../screens/Robots";
import AccountHeader from "../components/AccountHeader";
AntDesign.loadFont();
MaterialCommunityIcons.loadFont();
const Tab = createBottomTabNavigator();

const Home = (): JSX.Element => {
    return <Background></Background>;
};

const ScreenNavigation = ({ navigation }) => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route, navigation }) => ({
                headerRight: () => <AccountHeader route={route} navigation={navigation} />,
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color }: { color: string }) => <AntDesign name="home" color={color} size={26} />,
                }}
            />
            <Tab.Screen
                name="Monitoring"
                component={Robots}
                options={{
                    tabBarIcon: ({ color }: { color: string }) => (
                        <AntDesign name="dashboard" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
};

export default ScreenNavigation;
