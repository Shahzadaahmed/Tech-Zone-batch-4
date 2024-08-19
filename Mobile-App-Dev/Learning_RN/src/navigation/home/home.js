import React from 'react';
import { View, Text, Button } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
// import { changeUserName } from '../../redux/actions/user-actions/user-actions';
import { updateUserName } from '../../redux/reducers/user-reducer/user-reducer';

const Home = () => {

    const dispatch = useDispatch();

    // Note: Fethcing data from redux...!
    const fetchReduxData = useSelector(({ userStates }) => { return userStates.userName });
    console.log('Redux Name State: ', fetchReduxData);

    // Note: Update name handler...!
    const updateNameHandler = () => {
        let newName = "Muhammad Ali";
        console.log('Working!!!');
        dispatch(updateUserName(newName));
    };

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                Welcome to Redux with React Native!
            </Text>

            <Text style={{ fontSize: 30 }}>
                {`Name: ${fetchReduxData}`}
            </Text>

            <Button
                title='Update Name'
                onPress={updateNameHandler}
            />
        </View>
    );
};

export default Home;