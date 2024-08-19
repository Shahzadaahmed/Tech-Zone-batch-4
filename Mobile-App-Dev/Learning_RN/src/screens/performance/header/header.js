import React, { memo } from 'react';
import { Text, StyleSheet } from 'react-native';

const Header = ({ content }) => {
    console.log('Props of header com: ', content);

    return (
        <Text style={styles.header}>
            {content}
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

export default memo(Header);