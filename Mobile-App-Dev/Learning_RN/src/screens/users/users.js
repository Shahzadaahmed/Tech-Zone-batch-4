import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, ScrollView } from 'react-native';
import { getAllUsers } from '../../redux/reducers/user-reducer/user-reducer';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from "../../images/user.png";
import Icon from "react-native-vector-icons/Feather";

const Users = () => {

    // States...!
    const [searchUser, setSearchUser] = useState("");

    // Redux...!
    const dispatch = useDispatch();

    const fetchUsers =
        useSelector(({ userStates }) => { return userStates.users })
            // .filter((item) => { console.log('item: ', item.firstName) });

    .filter((item) => { return item.firstName.toLowerCase().includes(searchUser.toLowerCase()) })
    // console.log('Users:', fetchUsers);

    // Note: Function to fetch a;; users from an api...!
    const fetchAllUsers = () => {
        const apiUrl = "https://dummyjson.com/users";

        fetch(apiUrl)
            .then((res) => {
                return res.json();
            })
            .then((userData) => {
                // console.log('Users: ', userData.users);
                let data = userData.users;
                data && dispatch(getAllUsers(data));
            })
            .catch((e) => {
                console.log('Error occured: ', e);
            });
    };

    useEffect(() => { fetchAllUsers() }, []);

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
                        placeholderTextColor={'lightgray'}
                        style={styles.inputSearch}
                        value={searchUser || ""}
                        onChangeText={value => setSearchUser(value)}
                    />
                </View>
            </View>

            <View style={styles.section_2}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {
                        fetchUsers.map((item, index) => {
                            return (
                                <View
                                    style={styles.userSection}
                                    key={item.id}
                                >
                                    <View style={styles.details}>
                                        <Image
                                            source={{ uri: item.image }}
                                            style={styles.userProfile}
                                        />

                                        <Text style={styles.user}>
                                            {`${item.firstName} ${item.lastName}`}
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

export default Users;