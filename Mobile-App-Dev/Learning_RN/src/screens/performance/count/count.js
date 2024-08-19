import React , { memo } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const CountComponent = ({ count }) => {
    console.log("Props of count com: ", count);
    return (
        <Text style={styles.header}>
            {`Count: ${count}`}
        </Text>
    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 25,
        textAlign: "center",
        color: "black"
    }
});

export default memo(CountComponent);