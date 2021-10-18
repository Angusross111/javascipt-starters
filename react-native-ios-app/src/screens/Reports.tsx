import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import AntIcon from "react-native-vector-icons/AntDesign";
AntIcon.loadFont();
import { VictoryChart, VictoryBar, VictoryTheme, VictoryStack, VictoryAxis, VictoryLine } from "victory-native";
import { useState } from "react";

import dayjs, { Dayjs } from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import duration from "dayjs/plugin/duration";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(isSameOrAfter);
dayjs.extend(duration);
dayjs.extend(relativeTime);

const generateData = () => {
    let data = [];
    for (let m = dayjs("2021-07-1"); m.isBefore(dayjs()); m = dayjs(m).add(1, "days")) {
        let hours = [];
        for (var i = 0; i < 24; i++) {
            hours.push({
                x: dayjs(m).add(i, "hours").toDate(),
                running: Math.floor(Math.random() * 30) + 1,
                notRunning: Math.floor(Math.random() * 30) + 1,
            });
        }
        let val = hours.reduce(function (previousValue, currentValue) {
            return {
                running: previousValue.running + currentValue.running,
                notRunning: previousValue.notRunning + currentValue.notRunning,
            };
        });
        val.x = dayjs(m).toDate();
        val.hours = hours;
        val.running = val.running / 60;
        val.notRunning = val.notRunning / 60;
        data.push(val);
    }

    return data;
};
const Reports = ({ navigation, route }): JSX.Element => {
    console.log(route.params);
    const data2 = generateData();
    const [weekAverage, setWeekAverage] = useState(312);
    const [prevWeekPercentage, setPrevWeekPercentage] = useState(13);
    const [selectedWeek, setSelectedWeek] = useState<Dayjs>(dayjs("2021-08-1"));
    const [selectedWeekData, setSelectedWeekData] = useState(
        data2.filter(
            (dateObj) =>
                dayjs(dateObj.x).isSameOrAfter(selectedWeek) && dayjs(dateObj.x).isBefore(selectedWeek.add(7, "days"))
        )
    );
    const [selectedDayData, setSelectedDayData] = useState();

    const handleClick = (dataProps) => {
        setSelectedDayData(selectedWeekData[dataProps.index].hours);
    };
    const handleBackWeek = () => {
        console.log("Handle Back");
        setSelectedDayData(undefined);
        setSelectedWeek(selectedWeek.subtract(1, "week"));
        setSelectedWeekData(
            data2.filter(
                (dateObj) =>
                    dayjs(dateObj.x).isSameOrAfter(selectedWeek) &&
                    dayjs(dateObj.x).isBefore(selectedWeek.add(7, "days"))
            )
        );
    };

    const handleFowardWeek = () => {
        setSelectedDayData(undefined);
        if (selectedWeek.isBefore(dayjs().subtract(1, "week"))) {
            setSelectedWeek(selectedWeek.add(1, "week"));
            setSelectedWeekData(
                data2.filter(
                    (dateObj) =>
                        dayjs(dateObj.x).isSameOrAfter(selectedWeek) &&
                        dayjs(dateObj.x).isBefore(selectedWeek.add(7, "days"))
                )
            );
        }
    };

    return (
        <View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    marginVertical: 5,
                }}
            >
                <View
                    style={{
                        padding: "3%",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <AntIcon name="arrowleft" size={30} onPress={() => handleBackWeek()} />
                    <Text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                        }}
                    >
                        {selectedWeek.format("D")}-{selectedWeek.add(7, "days").format("D")}{" "}
                        {selectedWeek.add(7, "days").format("MMMM")}
                    </Text>
                    <AntIcon name="arrowright" size={30} onPress={() => handleFowardWeek()} />
                </View>
            </View>
            <View
                style={{
                    backgroundColor: "#ffffff",
                    padding: 10,
                }}
            >
                <View
                    style={{
                        justifyContent: "flex-start",
                    }}
                >
                    <Text>Daily Average</Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "flex-end",
                    }}
                >
                    <Text
                        style={{
                            fontSize: 35,
                            fontWeight: "bold",
                        }}
                    >
                        {dayjs.duration(weekAverage, "minutes").format("H[h] m[min.]")}
                    </Text>

                    <Text
                        style={{
                            fontSize: 15,
                            paddingBottom: 5,
                        }}
                    >
                        {prevWeekPercentage > 0 ? (
                            <AntIcon name="arrowup" size={15} />
                        ) : (
                            <AntIcon name="arrowdown" size={15} />
                        )}
                        {prevWeekPercentage}% from last week
                    </Text>
                </View>
                <View>
                    <VictoryChart
                        height={150}
                        padding={{ top: 10, left: 30, bottom: 30, right: 30 }}
                        domainPadding={{ x: 20 }}
                        scale={{ x: "time" }}
                        theme={VictoryTheme.material}
                    >
                        <VictoryAxis tickFormat={(x) => dayjs(x).format("dd")} />
                        <VictoryAxis
                            style={{
                                grid: { stroke: "#818e99", strokeWidth: 0.5 },
                            }}
                            dependentAxis
                            tickCount={3}
                        />
                        <VictoryStack>
                            {[
                                { state: "running", colour: "#008800" },
                                { state: "notRunning", colour: "#ff8800" },
                            ].map((item, index) => {
                                return (
                                    <VictoryBar
                                        key={index}
                                        barRatio={0.8}
                                        style={{
                                            data: { fill: item.colour },
                                        }}
                                        data={selectedWeekData}
                                        y={item.state}
                                        events={[
                                            {
                                                target: "data",
                                                eventHandlers: {
                                                    onPressIn: () => {
                                                        return [
                                                            {
                                                                target: "data",
                                                                mutation: (props) => {
                                                                    handleClick(props);
                                                                },
                                                            },
                                                        ];
                                                    },
                                                },
                                            },
                                        ]}
                                    />
                                );
                            })}
                        </VictoryStack>
                        <VictoryLine
                            style={{
                                data: { strokeDasharray: "5", stroke: "#c43a31" },
                            }}
                            data={selectedWeekData.map((obj) => ({ x: obj.x, y: weekAverage / 60 }))}
                        />
                    </VictoryChart>
                </View>
                <View>
                    {selectedDayData !== undefined ? (
                        <View>
                            <VictoryChart
                                height={150}
                                padding={{ top: 5, left: 30, bottom: 30, right: 30 }}
                                domainPadding={{ x: 8 }}
                                scale={{ x: "time" }}
                                theme={VictoryTheme.material}
                                maxDomain={{ y: 60 }}
                            >
                                <VictoryAxis
                                    tickCount={4}
                                    tickValues={selectedDayData !== undefined ? selectedDayData.map((d) => d.x) : ""}
                                    tickFormat={(t) => t.toLocaleString("en-us", { hour: "numeric" })}
                                />
                                <VictoryAxis
                                    style={{
                                        grid: { stroke: "#818e99", strokeWidth: 1 },
                                    }}
                                    dependentAxis
                                    tickCount={3}
                                />
                                <VictoryStack>
                                    {[
                                        { state: "running", colour: "#008800" },
                                        { state: "notRunning", colour: "#ff8800" },
                                    ].map((item, index) => {
                                        return (
                                            <VictoryBar
                                                key={index}
                                                barRatio={1}
                                                style={{
                                                    data: { fill: item.colour },
                                                }}
                                                data={selectedDayData}
                                                y={item.state}
                                            />
                                        );
                                    })}
                                </VictoryStack>
                            </VictoryChart>
                        </View>
                    ) : undefined}
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
        borderColor: "black",
        borderWidth: 1,
    },
});

export default Reports;
