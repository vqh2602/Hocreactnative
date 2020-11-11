import React from 'react';
import {Platform, SafeAreaView, StatusBar, Text, TouchableOpacity, View, Image,} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {ScaledSheet} from 'react-native-size-matters';


StatusBar.setBarStyle('light-content');
if (Platform.OS === 'android') {
    StatusBar.setBackgroundColor('rgba(0,0,0,0)');
    StatusBar.setTranslucent(true);
}

export default function Openhuy2() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <StatusBar
                    backgroundColor="white"
                    barStyle="dark-content"
                    hidden={true}
                    translucent={true}
                />
            </View>


            <View style={styles.bocuc1}>
                <Image
                    style={styles.picturemin}
                    source={{uri: 'https://i.pinimg.com/564x/04/06/4b/04064bdb071929f50a6dee0d324d342a.jpg'}}
                >
                </Image>


                {/* thanh dieu huong */}
                <View style={styles.dieuhuong}>
                    <View style={styles.dieuhuongmenu1}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'arrow-left'} style={styles.icon1}/>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.dieuhuongmenu2}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'bars'} style={styles.icon1}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.bocuc2}>

                {/*tieu de */}
                <View style={styles.canhan1}>
                    <View style={styles.canhan1text}>
                        <Text style={styles.canhan1texttille}>Eiffel tower</Text>
                        <View style={styles.canhan1textmin}>
                            <View style={styles.canhan1textmin11}>
                                <FontAwesome5 name={'map-marker-alt'} style={styles.canhan1icon1}/>
                            </View>
                            <View style={styles.canhan1textmin22}>
                                <Text style={styles.canhan1icon1text}>Paris, Franch</Text>
                            </View>

                        </View>
                    </View>
                    <View style={styles.canhan1button}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'cloud-download-alt'} style={styles.canhan1icon2}/>
                        </TouchableOpacity>
                    </View>

                </View>

                {/*dong text */}
                <View style={styles.textnoidung}>
                    <Text style={styles.textnoidungmin}>
                        Lorem ipsum dolor sit amrt, consectertur adipipiscing elit. Proin suscipit ullamcorper sapien.
                    </Text>
                </View>


                <View style={styles.textbutton}>
                    <View style={styles.textbutton1}>
                        <TouchableOpacity>
                            <Text style={styles.textbutton1min}>#photograhpy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.textbutton2}>
                        <TouchableOpacity>
                            <Text style={styles.textbutton1min}>#sea</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                {/*nut like va luu */}
                <View style={styles.like}>
                    <View style={styles.like1}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'heart'} style={styles.like1min}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.like2}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'comment-dots'} style={styles.like2min}/>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.like3}>
                        <TouchableOpacity>
                            <FontAwesome5 name={'bookmark'} style={styles.like3min}/>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <View style={styles.bocuc3}>
                    <View style={styles.bottomapp1}>
                        <View style={styles.followitemright}>
                            <TouchableOpacity>
                                <FontAwesome5 name={'squarespace'} style={styles.icon1}/>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.bottomapp2}>
                        <View style={styles.followitemcenter}>
                            <TouchableOpacity>
                                <FontAwesome5 name={'plus-circle'} style={styles.bottomapp2color}/>
                            </TouchableOpacity>
                        </View>

                    </View>


                    <View style={styles.bottomapp3}>
                        <View style={styles.followitemleft}>
                            <TouchableOpacity>
                                <FontAwesome5 name={'user'} style={styles.icon1}/>
                            </TouchableOpacity>
                        </View>

                    </View>
            </View>

        </SafeAreaView>
    );
}

const styles = ScaledSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'white',
            /* paddingLeft: '17@s',
             paddingRight: '17@s', */

        },
        //A. bo cuc 1
        bocuc1: {
            flex: 6,
        },
        bocuc2: {
            flex: 3.5,
            backgroundColor: 'white',
            paddingLeft: '17@s',
            paddingRight: '17@s',
        },
        bocuc3: {
            height: '50@mvs',
            backgroundColor: 'white',
            paddingLeft: '17@s',
            paddingRight: '17@s',
            flexDirection: 'row',
            alignItems:'center',
        },
        //2. anh hien thi
        picture: {
            flex: 1,
        },
        picturemin: {
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            borderBottomLeftRadius: '35@mvs',
            borderBottomRightRadius: '35@mvs',
        },
// 1.dieu huong
        dieuhuong: {
            position: 'relative',
            top: '-370@vs',
            marginTop: '7@mvs',
            height: '20@vs',
            flexDirection: 'row',
            paddingLeft: '17@s',
            paddingRight: '17@s',
        },
        dieuhuongmenu1: {
            flex: 1,
        },
        icon1: {
            fontSize: '23@mvs',
            color: '#20232a',
        },
        dieuhuongmenu2: {
            flex: 1,
            alignItems: 'flex-end',

        },


        //3. ca nhan
        canhan1: {

            flexDirection: 'row',

        },
        //TEXXT TIEU DE
        canhan1text: {
            flex: 5,
            flexDirection: 'column',
        },
        canhan1texttille: {
            fontWeight: 'bold',
            fontSize: '30@vs',
        },
        canhan1textmin: {
            flex:1,
            fontSize: '15@vs',
            color: 'gray',
            marginTop: '-1@vs',
            flexDirection: 'row',
        },
        canhan1icon1: {
            fontSize: '16@mvs',
            color: 'gray',

        },
        canhan1icon1text: {
            fontSize: '16@s',
            color:'gray',
        },
        canhan1textmin11: {
            paddingLeft: '7@ms',
            width: '30@mvs',
            height: '20@mvs',
        },
        canhan1textmin22: {

        },
        canhan1icon2: {
            fontSize: '23@mvs',
            color: 'white',
        },
        canhan1button: {

            width: '70@mvs',
            backgroundColor: '#4c82ff',
            padding: '20@mvs',
            borderBottomLeftRadius: '30@mvs',
            borderBottomRightRadius: '30@mvs',
            borderTopRightRadius: '30@mvs',
            borderTopLeftRadius: '10@mvs',
        },
    // TEXT NOI DUNG
        textnoidung:{
            marginTop: '25@vs',
        },
    textnoidungmin:{
        textAlign: 'left',
        fontSize: '14@mvs',
        color:'#0b1326',
    },
    textbutton:{
           flexDirection:'row',
        marginTop:'27@mvs'
    },
    textbutton1:{
        backgroundColor:'#f1f1f1',

        marginRight: '10@ms',
        height:'30@mvs',
        padding:'5@mvs',
        paddingLeft:'10@ms',
        paddingRight:'10@ms',
        borderRadius: '30@mvs',

    },
    textbutton1min:{
        color:'#4f4f4f',
    },
    textbutton2:{
        backgroundColor:'#f1f1f1',

        marginRight: '10@ms',
        height:'30@mvs',
        padding:'5@mvs',
        paddingLeft:'10@ms',
        paddingRight:'10@ms',
        borderRadius: '30@mvs',
    },

        // like
    like:{
            flexDirection:'row',
        marginTop: '25@mvs',
    },
    like1:{
        flex:1,
    },
    like1min:{
        fontSize:'20@mvs',
        color:'gray',
    },

        like2:{
        flex:1,
        },
        like2min:{
            fontSize:'20@mvs',
            color:'gray',
        },

        like3:{
            flex:6.5,
            alignItems: 'flex-end',
        },
        like3min:{
            fontSize:'20@mvs',
            color:'gray',
        },

    //4.bottom bo cuc 3
        //5. bottomapp
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


