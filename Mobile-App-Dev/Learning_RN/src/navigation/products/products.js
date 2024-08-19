import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native';
import UserIcon from "../../images/user.png";

const ProductsList = () => {

    // States...!
    const [products, setProducts] = useState([]);

    const seeFullDescription = (des) => {
        console.log('Des: ', des.description);
        Alert.alert(des.description);
    };

    // Note: Mounted hook...!
    useEffect(() => {
        const apiCall = async () => {
            const apiUrl = "https://fakestoreapi.com/products";

            try {
                let res = await fetch(apiUrl);
                let jsonData = await res.json();
                console.log(jsonData);
                jsonData && setProducts(jsonData);
            }

            catch (error) {
                console.log('Something went wrong while fetching products: ', error);
            };
        };

        apiCall();
    }, []);

    return (
        <View style={styles.container}>
            <ScrollView style={{ flex: 1 }}>
                {
                    (products && products.length > 0)
                        ?
                        (
                            products.map((item) => {
                                return (
                                    <View
                                        key={item.id}
                                        style={styles.productContainer}
                                    >

                                        <View style={styles.imgContainer}>
                                            <Image
                                                // source={UserIcon} // For static url
                                                source={{ uri: item.image }} // For dnmainc url
                                                style={styles.productImg}
                                            />
                                        </View>

                                        <View style={styles.contentContainer}>
                                            <Text style={styles.categoryText}> {item.category} </Text>

                                            {
                                                (item.description.length > 50)
                                                    ?
                                                    (
                                                        <TouchableOpacity
                                                            onPress={() => seeFullDescription(item)}
                                                        >
                                                            <Text style={styles.desText}>
                                                                {item.description.slice(0, 50) + '...'}
                                                            </Text>
                                                        </TouchableOpacity>
                                                    )
                                                    :
                                                    (
                                                        <Text style={styles.desText}>
                                                            {item.description}
                                                        </Text>
                                                    )
                                            }
                                        </View>
                                    </View>
                                );
                            })
                        )
                        :
                        (
                            <ActivityIndicator
                                color={'red'}
                                size="large"
                            />
                        )
                }
            </ScrollView>
        </View>
    );
};

// Styling...!
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingHorizontal: 5
    },

    productContainer: {
        backgroundColor: "orange",
        display: "flex",
        flexDirection: "row",
        borderRadius: 10,
        marginVertical: 10
    },

    imgContainer: {
        // backgroundColor: "lightblue",
        flex: 1.5,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10
    },

    contentContainer: {
        // backgroundColor: "lightgreen",
        flex: 3.5,
        padding: 10
    },

    productImg: {
        height: 80,
        width: 80,
        resizeMode: "contain",
        borderRadius: 5
    },

    categoryText: {
        color: "black",
        fontSize: 20,
        fontWeight: "bold",
        textTransform: "capitalize"
    },

    desText: {
        color: "black",
        fontSize: 18,
    }
});

export default ProductsList;