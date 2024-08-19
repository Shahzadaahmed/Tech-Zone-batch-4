import React, { useState } from 'react';
import { View, Text, TextInput, Button, Keyboard } from 'react-native';
import { useSelector, useDispatch } from "react-redux";
import { addItem, deleteItem, updateItem, deleteAllItems } from '../../redux/reducers/user-reducer/user-reducer';

const Crud = () => {

    // States...!
    const [inputValue, setInputValue] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [key, setKey] = useState("");

    // Redux hooks...!
    const dispatch = useDispatch();

    // Note: Fetching data from redux...!
    const reduxStates = useSelector(({ userStates }) => { return userStates.todoBucket });
    console.log("Redux states: ", reduxStates);

    // Note: Function to add an item...!
    const addItemHandler = () => {
        dispatch(addItem(inputValue));
        setInputValue("");
    };

    // Note: Function to delete an item...!
    const deleteItemHandler = (key) => {
        dispatch(deleteItem(key));
    };

    // Note: Function to edit an item...!
    const editItemHandler = (data, key) => {
        // console.log('Key: ', key);
        // console.log('Data: ', data);

        setIsEdit(true);
        setInputValue(data);
        setKey(key);
    };

    // Note: Function to update an item...!
    const updateItemHandler = () => {
        const updateData = {
            newValue: inputValue,
            key
        };
        dispatch(updateItem(updateData));
        setIsEdit(false);
        setInputValue("");
        setKey("");
        Keyboard.dismiss();
    };

    return (
        <View>
            <Text style={{ fontSize: 30 }}>
                CRUD App using React Native with Redux!
            </Text>

            <TextInput
                placeholder='Write Anything'
                value={inputValue}
                onChangeText={(value) => setInputValue(value)}
                style={{ fontSize: 25 }}
            />

            {
                isEdit ?
                    <Button
                        title='Update Item'
                        onPress={updateItemHandler}
                        disabled={inputValue.trim().length < 1}
                    /> :
                    <>
                        <Button
                            title='Add Item'
                            onPress={addItemHandler}
                            disabled={inputValue.trim().length < 1}
                        />

                        <Button
                            title='delete all'
                            onPress={() => dispatch(deleteAllItems())}
                        />
                    </>
            }

            {
                reduxStates.map((item, index) => {
                    return (
                        <View key={index}>
                            <Text
                                key={index}
                                style={{
                                    color: "black",
                                    fontSize: 25
                                }}
                            >
                                {item}
                            </Text>

                            <Button
                                title='Delete Item'
                                onPress={() => deleteItemHandler(index)}
                            />

                            <Button
                                title='Edit Item'
                                onPress={() => editItemHandler(item, index)}
                            />
                        </View>
                    );
                })
            }
        </View>
    );
};

export default Crud