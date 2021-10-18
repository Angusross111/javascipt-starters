import * as React from "react";
import { StyleSheet } from "react-native";
import { Appbar, Button, Menu } from "react-native-paper";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useAuthDispatch, signOut } from "../context/AuthProvider";

MaterialCommunityIcons.loadFont();

const AccountHeader = ({ route, navigation }): JSX.Element => {
    const [visible, setVisible] = React.useState(false);
    const { authDispatch } = useAuthDispatch();
    return (
        <Menu
            style={styles.menu}
            visible={visible}
            onDismiss={() => setVisible(false)}
            anchor={<Appbar.Action icon="account" size={30} onPress={() => setVisible(true)} />}
        >
            <Button mode="contained" onPress={() => signOut({ authDispatch })}>
                Logout
            </Button>
        </Menu>
    );
};

const styles = StyleSheet.create({
    appbar: {
        elevation: 0, //remove shadow on Android
        shadowOpacity: 0, //remove shadow on iOS
    },
    menu: {
        minWidth: 200,
    },
});

export default AccountHeader;
