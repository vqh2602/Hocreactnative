import React from 'react';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {ScaledSheet}  from 'react-native-size-matters';
export default function Splash() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Image style={styles.picture}
                       source={require('../Image/logo.png')}/>
                <Text style={styles.title}>Cây Sen Đá Đó !</Text>
            </View>
        </SafeAreaView>
    );
}

/*thuoc tinh styles*/

const styles = ScaledSheet.create(
    {
        container: {
            backgroundColor: '#b6deb7',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
        },
        picture:{
            position:'relative',
            width: '150@mvs',
            height:'150@mvs',
            borderWidth: 5,
        },
        title: {
            fontWeight: 'bold',
            fontSize: '18@mvs',
            color: 'black',
        },
    },
);

