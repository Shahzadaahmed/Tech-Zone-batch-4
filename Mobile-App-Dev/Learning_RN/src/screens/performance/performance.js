import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from './header/header';
import CountComponent from './count/count';

const ControlPerformance = () => {

    // States...!
    const [count, setcount] = useState(0);
    const [screenHeader, setScreenHeader] = useState("Control Performance in React Native!");

    const updateScreenHeader = () => setScreenHeader("Header Updated!");

    return (
        <View style={styles.container}>

            <Header content={screenHeader} />

            <CountComponent count={count} />

            <Button
                title='Update Screen Header'
                onPress={updateScreenHeader}
            />

            <Text>
                {'\n'}
            </Text>

            <Button
                title='Increament Count'
                onPress={() => setcount(count + 1)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    header: {
        fontSize: 25,
        textAlign: "center",
        color: "black"
    }
});

export default ControlPerformance;