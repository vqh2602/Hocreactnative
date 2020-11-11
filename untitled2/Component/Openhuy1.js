import React  from 'react';
import {View, Text, StyleSheet, SafeAreaView, ScrollView, StatusBar, Image, TouchableOpacity, FlatList,Dimensions} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet}  from 'react-native-size-matters';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';


//hamf flatlist get thuoc tinh va in
const Item = ({item} ) => (
    <View style={{flex: 1,  }}>
        <Image source={{uri: item.src}} style={styles1.styleimage} />
    </View>
);

export default function Openhuy1() {
    return (
//SafeAreaView hien thi dung man hinh
        <SafeAreaView style={styles1.container}>
            <View>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    hidden={true}
                    translucent={true}
                />
            </View>
            {/* thanh dieu huong */}
            <View style={styles1.dieuhuong}>
                <View style={styles1.dieuhuongmenu1}>
                    <TouchableOpacity>
                        <FontAwesome5 name={'arrow-left'} style={styles1.icon1}/>
                    </TouchableOpacity>

                </View>

                <View style={styles1.dieuhuongmenu2}>
                    <TouchableOpacity>
                        <FontAwesome5 name={'bars'} style={styles1.icon1}/>
                    </TouchableOpacity>
                </View>
            </View>

            {/* ca nhân */}
            <View style={styles1.canhan}>
                <View style={styles1.anhcanhan}>
                    <Image style={styles1.anhcanhanmin} source={require('../Image/canhan1.jpg')}/>
                </View>
                <View style={styles1.thongtincanhan}>
                    <View>
                        <Text style={styles1.textcanhan1}>Floyd Hayes</Text>
                        <Text style={styles1.textcanhan2}>Photograper</Text>
                    </View>
                    <View style={styles1.buttoncanhan}>
                        <TouchableOpacity style={styles1.buttoncanhan1}>
                                <Text style={styles1.textbutton1}> Follow </Text>
                        </TouchableOpacity>
                        {/* */}
                        <TouchableOpacity style={styles1.buttoncanhan2}>
                                <FontAwesome5 name={'telegram-plane'} style={styles1.textbutton2}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            {/*Follow */}
            <View style={styles1.follow}>
                <View style={styles1.followitemleft}>
                    <View style={styles1.followtext}>
                        <Text style={styles1.followtext1}>210</Text>
                        <Text style={styles1.followtext2}>Photos</Text>
                    </View>
                </View>

                <View style={styles1.followitemcenter}>
                    <View style={styles1.followtext}>
                        <Text style={styles1.followtext1} >15K</Text>
                        <Text style={styles1.followtext2} >Followers</Text>
                    </View>
                </View>

                <View style={styles1.followitemright}>
                    <View style={styles1.followtext}>
                        <Text style={styles1.followtext1}>605</Text>
                        <Text style={styles1.followtext2} >Following</Text>
                    </View>
                </View>

            </View>

            {/*picture */}
            <View style={styles1.picture}>
                <ScrollView>
                    <FlatList data={    [{
                        Key: "picture001",
                        src: "https://i.pinimg.com/564x/eb/18/14/eb1814bb9f914b6d98c0aeda1442ebf2.jpg",


                    },
                    {
                        Key: "picture002",
                        src: "https://i.pinimg.com/564x/89/81/81/898181823361f134e1661a46ca30989f.jpg",

                    },
                    {
                        Key: "picture003",
                        src: "https://i.pinimg.com/564x/b7/1d/09/b71d09b7fc8cded605e42b6227f5996d.jpg",

                    },
                    {
                        Key: "picture004",
                        src: "https://i.pinimg.com/564x/0d/99/26/0d99266ef918844358c76a62fbcf6061.jpg",

                    },]}
                              keyExtractor={item => item.Key}
                              renderItem={({item}) => <Item item={item}/> }
                              numColumns={2}
                    >
                        {/*contentContainerStyle={styles.picture} */}
                    </FlatList>
                </ScrollView>

            </View>



            {/*bottomapp */}
            <View style={styles1.bottomapp}>
                <View style={styles1.bottomapp1}>
                    <View style={styles1.followitemright}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'squarespace'} style={styles1.icon1}/>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles1.bottomapp2}>
                    <View style={styles1.followitemcenter}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'plus-circle'} style={styles1.bottomapp2color}/>
                        </TouchableOpacity>
                    </View>

                </View>


                <View style={styles1.bottomapp3}>
                    <View style={styles1.followitemleft}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'user'} style={styles1.icon1}/>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>
        </SafeAreaView>

    );
}

const styles1 = ScaledSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            paddingLeft: '17@s',
            paddingRight: '17@s',
            paddingTop: '7@vs',
        },
    // 1.dieu huong
    dieuhuong: {
        height:'20@vs',
        flexDirection: 'row',
        backgroundColor:'white',
    },
    dieuhuongmenu1: {
        flex: 1,
    },
    icon1: {
        fontSize: '23@mvs',
        color: 'gray',
    },
    dieuhuongmenu2: {
        flex: 1,
        alignItems: 'flex-end',

    },


    canhan: {
        height: '105@vs', // = verticalScale(200)
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor:'white',
    },
    anhcanhanmin: {
        width: '110@mvs',
        height: '110@mvs',
        borderRadius: '150@mvs',
    },
    // anh ca nhan
    anhcanhan: {
        width: '110@mvs',
        height: '115@mvs',
    },
    // thong tin ca nhan
    thongtincanhan: {
            marginLeft: '10@s',
        height: '105@vs',
        flexDirection: 'column',
    },
    textcanhan1: {
        fontWeight: 'bold',
        fontSize: '30@vs',
    },
    textcanhan2: {
            marginTop: -1,
        color: 'gray',
        fontSize: '14@mvs',
    },
    //button
    buttoncanhan: {
        marginTop: 10,
        flexDirection: 'row',
    },
    buttoncanhan1: {
        width: '100@s',
        height: '35@vs',
        backgroundColor:'#5d86b7',
        borderRadius: '20@vs',
        padding:'5@vs',
        marginRight:5,
        alignItems: 'center',
    },
    buttoncanhan2: {
        width: '50@s',
        height: '35@vs',
        backgroundColor:'#aec2db',
        borderRadius: '20@vs',
        padding:'5@vs',
        marginLeft:5,
        alignItems: 'center',
    },
    //text button
    textbutton1:{
        fontWeight: 'bold',
        color:'#fff',
        fontSize:'17@ms',
    },
    textbutton2:{
        fontWeight: 'bold',
        color:'#fff',
        fontSize:'22@vs',
    },

        //3. follow
        follow:{
            height: '90@mvs',
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems:'center',
            justifyContent: 'space-between',
        },
        followtext:{
            alignItems:'center',

        },
    followitemleft:{
            flex:1,
        alignItems:'flex-end',
    },
    followitemcenter:{
        flex:1,
        alignItems:'center',
    },
    followitemright:{
        flex:1,
        alignItems:'flex-start',
    },
        followtext1:{
            fontWeight:'bold',
            fontSize:'25@mvs',
            marginLeft: '25@ms',
            marginRight: '25@ms',
        },
        followtext2:{
            fontSize:'14@mvs',
            color:'gray',
            marginLeft: '5@ms',
            marginRight: '5@ms',
        },


    //4. picture
    picture:{
        flex: 10,
        backgroundColor: 'white',
    },

    image: {
        resizeMode: 'cover',
    },
    styleimage:{
            margin:10,
        height: '215@mvs1',
        flex: 1,
        borderRadius:'15@vs',
    },

    //5. bottomapp
    bottomapp:{
        height:'40@vs',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
    },
    bottomapp1:{
        flex:3,
        alignItems:'center',
        paddingLeft:'30@s',
        paddingTop: '9.5@vs',
    },
    bottomapp2:{
        flex:1,
        alignItems:'center',
        paddingTop: '9.5@vs',
    },
    bottomapp2color:{
        color: '#5d86b7',
        fontSize: '23@mvs',
    },
    bottomapp3:{
        flex:3,
        alignItems:'center',
        paddingRight:'30@s',
        paddingTop: '9.5@vs',
    },
    },
);



/* thuoc tinh style
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingLeft: 17.5,
        paddingRight: 17.5,
        paddingTop: 15,
    },

    // 1.dieu huong
    dieuhuong: {
        flex: 0.75, flexDirection: 'row',
        backgroundColor:'white',
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

    // 2.trang ca nhan
    canhan: {
        flex: 3,
        flexDirection: 'row',
        marginTop: 20,
        backgroundColor:'white',
    },
    // anh ca nhan
    anhcanhan: {
        flex: 2,
    },
    // kich thuoc anh ca nhan
    anhcanhanmin: {
        width: 130,
        height: 130,
        borderRadius: 100,
    },
    // thong tin ca nhan
    thongtincanhan: {
        flex: 3,
        flexDirection: 'column',
    },
    textcanhan1: {
        fontWeight: 'bold',
        fontSize: 34,
    },
    textcanhan2: {
        color: 'gray',
        fontSize: 17,
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
        fontSize:17,
    },
    textbutton2:{
        fontWeight: 'bold',
        color:'#fff',
        fontSize:20,
    },

//3. follow
    follow:{
        flex: 2.5,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems:'center',
        justifyContent: 'space-between',
        paddingLeft: 10,
        paddingRight: 10,
    },
    followtext:{
        alignItems:'center',
    },
    followtext1:{
        fontWeight:'bold',
        fontSize:25,
        paddingLeft: 20,
        paddingRight: 20,
    },
    followtext2:{
        fontSize:14,
        color:'gray',
        paddingLeft: 5,
        paddingRight: 5,
    },

    //4. picture
    picture:{
        flex: 10,
        backgroundColor: 'white',
    },

    image: {
        resizeMode: 'cover',
    },

    //5. bottomapp
    bottomapp:{
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
    },
    bottomapp1:{
        flex:3,
        alignItems:'center',
        paddingLeft:30,
    },
    bottomapp2:{
        flex:1,
        alignItems:'center',
    },
    bottomapp2color:{
        color: '#5d86b7',
        fontSize: 23,
    },
    bottomapp3:{
        flex:3,
        alignItems:'center',
        paddingRight:30,
    },
});*/
