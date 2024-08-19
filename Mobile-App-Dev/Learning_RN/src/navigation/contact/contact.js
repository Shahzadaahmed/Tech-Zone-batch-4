import React, { useEffect } from 'react';
import { View, Text, PermissionsAndroid } from 'react-native';
import Contacts from 'react-native-contacts';

const Contact = () => {

    // Note: Finction to fetch device contacts...!
    // const fetchDeviceContacts = () => {
    //     console.log('Hello!');
    //     Contacts
    //         .getAll()
    //         .then(res => {
    //             console.log('Response', res);
    //         })
    //         .catch(err => {
    //             console.log('Something went wrong while fetching device contacts: ', err);
    //         });
    // };

    // Note: Mounted hook...!


    const fetchDeviceContacts = () => {
        PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
            title: 'Contacts',
            message: 'This app would like to view your contacts.',
            buttonPositive: 'Please accept bare mortal',
        })
            .then((res) => {
                console.log('Permission: ', res);
                Contacts.getAll()
                    .then((contacts) => {
                        // work with contacts
                        console.log(contacts);
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            })
            .catch((error) => {
                console.error('Permission error: ', error);
            });
    };

    useEffect(() => {
        fetchDeviceContacts();
    }, []);

    return (
        <View>
            <Text style={{ fontSize: 30, color: "black" }}> Contact Screen! </Text>
        </View>
    );
};

export default Contact;