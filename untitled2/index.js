/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Splash from './Component/Splash';
import {name as appName} from './app.json';
import Openhuy1 from './Component/Openhuy1';
import Openhuy2 from './Component/Openhuy2';
import React, { useState } from 'react';

function Main(){
    const [count, setCount] = useState({currentScreen:'Splash'});

    setTimeout(()=>{
        setCount({currentScreen:'Openhuy1'})
    },3500)

    const {currentScreen} = count;
    let mainScreen = currentScreen === 'Splash' ? <Splash/> : <Openhuy1/>
    return(
        mainScreen
    );
}

AppRegistry.registerComponent(appName, () => Openhuy2);
