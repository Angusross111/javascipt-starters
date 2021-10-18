import * as React from "react";
import { useState } from "react";
import Background from "../components/Background";
import { View, StyleSheet, Button } from "react-native";
import { Searchbar, Button as PaperButton } from "react-native-paper";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Search = ({ navigation }): JSX.Element => {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        console.warn("A date has been picked: ", date);
        hideDatePicker();
    };

    return (
        <Background>
            <View style={styles.searchRoot}>
                <Searchbar
                    style={styles.search}
                    placeholder="Search"
                    onChangeText={(query) => setSearchQuery(query)}
                    value={searchQuery}
                />
                <View style={styles.buttonView}>
                    <PaperButton style={styles.buttonS} mode="contained" onPress={showDatePicker}>
                        From: {dayjs().subtract(1, "day").format("D ddd MMM, hh:mm:ss A")}
                    </PaperButton>
                    <PaperButton style={styles.buttonS} mode="contained" onPress={showDatePicker}>
                        To: {dayjs().format("D ddd MMM, hh:mm:ss A")}
                    </PaperButton>
                </View>
                <DateTimePickerModal
                    maximumDate={dayjs().toDate()}
                    isVisible={isDatePickerVisible}
                    mode="datetime"
                    onConfirm={handleConfirm}
                    onCancel={hideDatePicker}
                />
            </View>
        </Background>
    );
};

export default Search;

const styles = StyleSheet.create({
    searchRoot: {
        padding: 5,
        justifyContent: "space-evenly",
        width: "100%",
    },
    search: {
        backgroundColor: "#FFFFFF",
        elevation: 0,
    },
    buttonView: {
        marginTop: 5,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
    },
    buttonS: {
        width: "100%",
        margin: 2,
    },
});
