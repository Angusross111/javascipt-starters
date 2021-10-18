import * as React from "react";
import { TouchableOpacity, StyleSheet, View, FlatList, Text } from "react-native";
import { useTheme, Appbar, Button, Menu, Divider } from "react-native-paper";
import { useNavigation } from "@react-navigation/native";

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
MaterialCommunityIcons.loadFont();

import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(isSameOrAfter);
dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.extend(customParseFormat);

const states = {
    Running: { icon: "check-circle-outline", colour: "#66c742" },
    "Not Running": { icon: "alert-circle-outline", colour: "#e8241f" },
    Paused: { icon: "pause-circle-outline", colour: "#4282c7" },
    Manual: { icon: "engine", colour: "#4282c7" },
    Idling: { icon: "engine", colour: "#4282c7" },
    Recharging: { icon: "engine", colour: "#d9ab1c" },
    "Low Power Mode": { icon: "engine-off", colour: "#d9ab1c" },
    "Engine Stopped": { icon: "engine-off", colour: "#e8241f" },
    "E-Stopped": { icon: "alert-outline", colour: "#e8241f" },
    Off: { icon: "engine-off", colour: "#969696" },
};

const robots = [
    {
        name: "Kilo",
        state: "Running",
        lastStateChange: dayjs("2021-08-29_12-14-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "RTK",
    },
    {
        name: "Lima",
        state: "Not Running",
        lastStateChange: dayjs("2021-08-29_11-14-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "Obstacle",
    },
    {
        name: "Mike",
        state: "Paused",
        lastStateChange: dayjs("2021-08-29_08-14-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "November",
        state: "Manual",
        lastStateChange: dayjs("2021-08-29_12-25-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Oscar",
        state: "Idling",
        lastStateChange: dayjs("2021-08-29_10-14-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Papa",
        state: "Recharging",
        lastStateChange: dayjs("2021-08-29_12-20-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Quebec",
        state: "Low Power Mode",
        lastStateChange: dayjs("2021-08-29_04-20-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Romeo",
        state: "Engine Stopped",
        lastStateChange: dayjs("2021-08-29_11-20-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Sierra",
        state: "E-Stopped",
        lastStateChange: dayjs("2021-08-29_12-25-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
    {
        name: "Tango",
        state: "Off",
        lastStateChange: dayjs("2021-08-20_12-25-23", "YYYY-MM-DD_HH-mm-ss"),
        event: "User turned off",
    },
];

function Item({ item, navigation }) {
    console.log(navigation.navigate);
    return (
        <TouchableOpacity onPressIn={() => navigation.navigate("Reports", { robot: item.name })}>
            <View style={styles.listItem}>
                <View style={styles.itemLeft}>
                    <MaterialCommunityIcons name={states[item.state].icon} size={25} />
                    <View style={styles.textLeft}>
                        <Text style={{ fontSize: 20 }}>{item.name}</Text>
                        <Text style={{ fontSize: 14, color: states[item.state].colour }}>{item.state}</Text>
                    </View>
                </View>
                <View style={styles.itemRight}>
                    <Text>{dayjs(item.lastStateChange).fromNow(true)}</Text>
                    <MaterialCommunityIcons name="chevron-right" size={35} />
                </View>
            </View>
            <Divider />
        </TouchableOpacity>
    );
}

const Robots = ({ navigation }): JSX.Element => {
    return (
        <View style={styles.container}>
            <FlatList
                style={{ flex: 1 }}
                data={robots}
                renderItem={({ item }) => <Item item={item} navigation={navigation} />}
                keyExtractor={(item) => item.name}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    textLeft: {
        paddingLeft: 10,
    },
    itemLeft: {
        flexDirection: "row",
        alignItems: "center",
    },
    itemRight: {
        flexDirection: "row",
        alignItems: "center",
    },
    container: {
        flex: 1,
        marginTop: 5,
        width: "100%",
        backgroundColor: "#F7F7F7",
    },
    listItem: {
        flex: 1,
        padding: 10,
        backgroundColor: "#fff",
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        // borderWidth: 1,
    },
});

export default Robots;
