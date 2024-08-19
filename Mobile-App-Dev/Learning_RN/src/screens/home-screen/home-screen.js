import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
                <View style={styles.innerSection_1}>
                    <Text>1</Text>
                </View>

                <View style={styles.innerSection_2}>
                    <Text>2</Text>
                </View>

                <View style={styles.innerSection_3}>
                    <Text>3</Text>
                </View>
            </View>

            <View style={styles.section_2}>
                <Text>b</Text>
            </View>

            <View style={styles.section_3}>
                <Text>c</Text>
            </View>
        </View>
    );
};

const dataInCenter = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        // height: "100%"
        flex: 1
    },

    section_1: {
        backgroundColor: "blue",
        flex: 1,
        display: "flex",
        flexDirection: "row"
    },

    section_2: {
        backgroundColor: "red",
        flex: 1
    },

    section_3: {
        backgroundColor: "green",
        flex: 1
    },

    innerSection_1: {
        ...dataInCenter,
        backgroundColor: "lightgreen",
        flex: 1
    },

    innerSection_2: {
        ...dataInCenter,
        backgroundColor: "whitesmoke",
        flex: 1
    },

    innerSection_3: {
        ...dataInCenter,
        backgroundColor: "pink",
        flex: 1
    },
});

export default HomeScreen;