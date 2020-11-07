import React from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';

export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Text style={styles.title}>HI EM</Text>
            </View>

        </SafeAreaView>
    );
}

/*thuoc tinh styles*/

const styles = StyleSheet.create(
    {
        container: {
            backgroundColor: 'green',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        title: {
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
        },
    },
);

