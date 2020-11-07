import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, StatusBar, Image, TouchableOpacity} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default function Openhuy1() {
    return (
//SafeAreaView hien thi dung man hinh
        <SafeAreaView style={styles.container}>
            <View>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    hidden={true}
                    translucent={true}
                />
            </View>

            <View style={styles.dieuhuong}>
                <View style={styles.dieuhuongmenu1}>
                    <FontAwesome5 name={'arrow-left'} style={styles.icon1}/>
                </View>

                <View style={styles.dieuhuongmenu2}>
                    <FontAwesome5 name={'bars'} style={styles.icon1}/>
                </View>
            </View>


            <View style={styles.canhan}>
                <View style={styles.anhcanhan}>
                    <Image style={styles.anhcanhanmin} source={require('../Image/canhan1.jpg')}/>
                </View>
                <View style={styles.thongtincanhan}>
                    <View style={styles.textcanhan}>
                        <Text style={styles.textcanhan1}>Floyd Hayes</Text>
                        <Text style={styles.textcanhan2}>Photograper</Text>
                    </View>
                    <View style={styles.buttoncanhan}>
                        <TouchableOpacity style={styles.buttoncanhan1}>
                                <Text style={styles.textbutton1}> Follow </Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.buttoncanhan2}>
                                <FontAwesome5 name={'telegram-plane'} style={styles.textbutton2}/>
                        </TouchableOpacity>
                    </View>

                </View>

            </View>
        </SafeAreaView>

    );
}

/* thuoc tinh style */
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 40,
        paddingRight: 40,
        paddingTop: 15,
    },
    // dieu huong
    dieuhuong: {
        flex: 1, flexDirection: 'row',
    },
    dieuhuongmenu1: {
        flex: 1,
    },
    icon1: {
        fontSize: 23,
        color: 'gray',
    },
    dieuhuongmenu2: {
        flex: 1,
        alignItems: 'flex-end',

    },
    // trang ca nhan
    canhan: {
        flex: 20,
        flexDirection: 'row',
        marginTop: 20,
    },
    // anh ca nhan
    anhcanhan: {
        flex: 2,
    },
    // kich thuoc anh ca nhan
    anhcanhanmin: {
        width: 110,
        height: 110,
        borderRadius: 100,
    },
    // thong tin ca nhan
    thongtincanhan: {
        flex: 3,
        flexDirection: 'column',
    },
    textcanhan1: {
        fontWeight: 'bold',
        fontSize: 25,
    },
    textcanhan2: {
        color: 'gray',
        fontSize: 14,
    },
    //button
    buttoncanhan: {
        marginTop: 10,
        flexDirection: 'row',
    },
    buttoncanhan1: {
        flex: 2,
        backgroundColor:'#5d86b7',
        borderRadius: 20,
        padding:8,
        marginRight:5,
        alignItems: 'center',
    },
    buttoncanhan2: {
        flex: 1,
        backgroundColor:'#aec2db',
        borderRadius: 20,
        marginLeft:5,
        padding: 8,
        alignItems: 'center',
    },
    //text button



    textbutton1:{
        fontWeight: 'bold',
        color:'#fff',
    },
    textbutton2:{
        fontWeight: 'bold',
        color:'#fff',
        fontSize:20,
    },
});
