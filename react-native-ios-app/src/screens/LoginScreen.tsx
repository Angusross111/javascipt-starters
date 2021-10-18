import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, View, Image } from "react-native";
import { Text } from "react-native-paper";
import { Button as PaperButton, TextInput } from "react-native-paper";
import Background from "../components/Background";
import { theme } from "../core/theme";
import { useAuthState, useAuthDispatch, signIn, Types } from "../context/AuthProvider";
export default function LoginScreen({ navigation }: any) {
    const { failedSignIn } = useAuthState();
    const { authDispatch } = useAuthDispatch();

    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [isLoading, setIsLoading] = useState(false);

    const onLoginPressed = () => {
        signIn({
            authDispatch,
            login: username,
            password: password,
        });
    };

    return (
        <Background>
            <View style={styles.bodyContainer}>
                <Image source={require("../assets/logo.png")} style={styles.logo} />
                <Text style={styles.header}>Operations Centre</Text>

                <View style={styles.LoginContainer}>
                    <TextInput
                        style={styles.input}
                        selectionColor={theme.colors.primary}
                        underlineColor="transparent"
                        mode="outlined"
                        label="Email"
                        returnKeyType="next"
                        value={username}
                        onChangeText={(text: string) => setUsername(text)}
                        autoCapitalize="none"
                        autoCompleteType="email"
                        textContentType="emailAddress"
                        keyboardType="email-address"
                    />
                </View>

                <View style={styles.LoginContainer}>
                    <TextInput
                        style={styles.input}
                        selectionColor={theme.colors.primary}
                        underlineColor="transparent"
                        mode="outlined"
                        label="Password"
                        returnKeyType="done"
                        value={password}
                        onChangeText={(text: string) => setPassword(text)}
                        secureTextEntry
                    />
                </View>
                <PaperButton
                    style={styles.loginButton}
                    labelStyle={styles.loginButtonText}
                    mode="contained"
                    onPress={onLoginPressed}
                >
                    Login
                </PaperButton>
            </View>
        </Background>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 205,
        height: 200,
        marginBottom: 8,
    },
    header: {
        textAlign: "center",
        fontSize: 21,
        color: theme.colors.primary,
        fontWeight: "bold",
        paddingVertical: 12,
    },
    bodyContainer: {
        flex: 1,
        padding: 20,
        width: "100%",
        maxWidth: 340,
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
    },
    backButton: {
        width: 24,
        height: 24,
    },
    loginButton: {
        width: "100%",
        marginVertical: 10,
        paddingVertical: 2,
    },
    loginButtonText: {
        fontWeight: "bold",
        fontSize: 15,
        lineHeight: 26,
    },
    input: {
        backgroundColor: theme.colors.surface,
    },
    error: {
        fontSize: 13,
        color: theme.colors.error,
        paddingTop: 8,
    },
    LoginContainer: {
        width: "100%",
        marginVertical: 12,
    },
});
