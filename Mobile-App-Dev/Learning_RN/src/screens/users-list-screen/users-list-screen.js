import React from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import UserProfile from "../../images/user.png";
import Icon from "react-native-vector-icons/Feather";

const usersData = [
    {
        id: 1,
        userName: "john smith",
        userImage: UserProfile
    },

    {
        id: 2,
        userName: "nick smith",
        userImage: UserProfile
    },

    {
        id: 3,
        userName: "andy smith",
        userImage: UserProfile
    },

    {
        id: 4,
        userName: "trish smith",
        userImage: UserProfile
    },

    {
        id: 5,
        userName: "mike smith",
        userImage: UserProfile
    },

    {
        id: 6,
        userName: "lita smith",
        userImage: UserProfile
    },

    {
        id: 7,
        userName: "george smith",
        userImage: UserProfile
    },

    {
        id: 8,
        userName: "joe smith",
        userImage: UserProfile
    },
];

const UsersList = () => {
    return (
        <View style={styles.container}>
            <View style={styles.section_1}>
                {/* Header section */}
                <View style={styles.header_section}>
                    <Image
                        source={UserProfile}
                        style={styles.userProfile}
                    />

                    <View style={styles.info_Section}>
                        <Text style={styles.userName}> david taylor </Text>
                        <Text style={styles.userId}> @David_Taylor </Text>
                    </View>
                </View>

                {/* screens section */}
                <View style={styles.screens_section}>
                    <View style={styles.innerScreensTab}>
                        <Text style={styles.tabName}> all </Text>
                    </View>

                    <View style={styles.innerScreensTab}>
                        <Text style={styles.tabName}> athletes </Text>
                    </View>

                    <View style={styles.innerScreensTab}>
                        <Text style={styles.tabName}> fans </Text>
                    </View>

                    <View style={styles.innerScreensTab}>
                        <Text style={styles.tabName}> teams </Text>
                    </View>
                </View>

                {/* Search bar section */}
                <View style={styles.searchBar_section}>
                    <TextInput
                        placeholder='Search'
                        style={styles.inputSearch}
                    />
                </View>
            </View>

            <View style={styles.section_2}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        usersData.map((item, index) => {
                            return (
                                <View
                                    style={styles.userSection}
                                    key={index}
                                >
                                    <View style={styles.details}>
                                        <Image
                                            source={item.userImage}
                                            style={styles.userProfile}
                                        />

                                        <Text style={styles.user}>
                                            {item.userName}
                                        </Text>
                                    </View>

                                    <Icon
                                        color="black"
                                        size={30}
                                        name="arrow-right"
                                    />
                                </View>
                            );
                        })
                    }
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    section_1: {
        flex: 1.5,
        // backgroundColor: "yellow"
    },

    section_2: {
        flex: 3.5,
        backgroundColor: "white",
        paddingHorizontal: 5
    },

    header_section: {
        backgroundColor: "#776B5D",
        flex: 1.2,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10
    },

    screens_section: {
        // backgroundColor: "orange",
        flex: 0.8,
        display: "flex",
        flexDirection: "row"
    },

    searchBar_section: {
        backgroundColor: "white",
        flex: 0.8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 10,
        paddingVertical: 5
    },

    userProfile: {
        height: 50,
        width: 50,
        resizeMode: "contain",
        marginRight: 10
    },

    userName: {
        color: "white",
        fontSize: 20,
        textTransform: "capitalize"
    },

    user: {
        color: "black",
        fontSize: 20,
        textTransform: "capitalize"
    },

    userId: {
        color: "white",
        fontSize: 16
    },

    innerScreensTab: {
        backgroundColor: "#FF8877",
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },

    tabName: {
        color: "white",
        fontSize: 18,
        textTransform: "capitalize"
    },

    inputSearch: {
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "silver",
        color: "black",
        fontSize: 18,
        width: "100%",
        borderRadius: 5,
        paddingLeft: 10
    },

    userSection: {
        backgroundColor: "whitesmoke",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginVertical: 7,
        borderColor: "silver",
        borderWidth: 1
    },

    details: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default UsersList;