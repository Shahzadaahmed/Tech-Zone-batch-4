import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation, useRoute } from "@react-navigation/native";

const About = () => {

    // const { params } = useRoute();
    // console.log('Params: ', params);

    // const navigation = useNavigation();

    // const navigationHandler = () => {
    //     navigation.navigate("home");
    // };

    return (
        <View>
            {/* <Text> {params.screenName} Screen </Text> */}

            <Text style={{ fontSize: 30 }}> About Screen </Text>

            {/* <Button
                title='Go to home'
                onPress={navigationHandler}
            /> */}
        </View>
    );
};

export default About;